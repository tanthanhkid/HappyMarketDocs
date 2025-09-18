#!/usr/bin/env node

/**
 * Script tự động cập nhật mục lục cho danh mục BAI-HOC
 * Chạy script này mỗi khi có bài học mới được tạo
 */

const fs = require('fs').promises;
const path = require('path');

// Đường dẫn đến thư mục BAI-HOC
const BAI_HOC_DIR = path.join(process.cwd(), 'content', 'BAI-HOC');
const INDEX_FILE = path.join(BAI_HOC_DIR, '_index.md');

/**
 * Lấy danh sách tất cả bài học từ thư mục BAI-HOC
 */
async function getAllLessons() {
    try {
        const items = await fs.readdir(BAI_HOC_DIR, { withFileTypes: true });
        const lessons = [];
        
        for (const item of items) {
            if (item.isDirectory() && item.name !== '_index.md') {
                const lessonPath = path.join(BAI_HOC_DIR, item.name, 'index.md');
                try {
                    const content = await fs.readFile(lessonPath, 'utf8');
                    const frontmatter = extractFrontmatter(content);
                    
                    if (frontmatter && frontmatter.title) {
                        lessons.push({
                            slug: item.name,
                            title: frontmatter.title,
                            description: frontmatter.description || '',
                            date: frontmatter.date || new Date().toISOString().split('T')[0],
                            weight: frontmatter.weight || 10,
                            tags: frontmatter.tags || [],
                            categories: frontmatter.categories || []
                        });
                    }
                } catch (error) {
                    console.warn(`Không thể đọc file ${lessonPath}:`, error.message);
                }
            }
        }
        
        // Sắp xếp theo date (mới nhất trước)
        return lessons.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
        console.error('Lỗi khi đọc thư mục BAI-HOC:', error);
        return [];
    }
}

/**
 * Trích xuất frontmatter từ nội dung markdown
 */
function extractFrontmatter(content) {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return null;
    
    const frontmatterText = frontmatterMatch[1];
    const frontmatter = {};
    
    frontmatterText.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
            let value = match[2].trim();
            
            // Xử lý các giá trị đặc biệt
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            } else if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
            }
            
            frontmatter[match[1]] = value;
        }
    });
    
    return frontmatter;
}

/**
 * Tạo nội dung mục lục từ danh sách bài học
 */
function generateTableOfContents(lessons) {
    if (lessons.length === 0) {
        return `## 📚 Danh sách bài học

Hiện tại chưa có bài học nào được tạo. Hãy sử dụng [Admin Panel](/admin/tao-bai-hoc.html) để tạo bài học đầu tiên!`;
    }
    
    let toc = `## 📚 Danh sách bài học

Tổng cộng có **${lessons.length}** bài học được tạo từ Admin Panel:

### 🆕 Bài học mới nhất

`;
    
    // Hiển thị 5 bài học mới nhất
    const recentLessons = lessons.slice(0, 5);
    recentLessons.forEach((lesson, index) => {
        const date = new Date(lesson.date).toLocaleDateString('vi-VN');
        toc += `${index + 1}. **[${lesson.title}](/bai-hoc/${lesson.slug}/)** - *${date}*\n`;
        if (lesson.description) {
            toc += `   ${lesson.description}\n`;
        }
        toc += '\n';
    });
    
    if (lessons.length > 5) {
        toc += `### 📖 Tất cả bài học

`;
        
        lessons.forEach((lesson, index) => {
            const date = new Date(lesson.date).toLocaleDateString('vi-VN');
            toc += `${index + 1}. **[${lesson.title}](/bai-hoc/${lesson.slug}/)** - *${date}*\n`;
            if (lesson.description) {
                toc += `   ${lesson.description}\n`;
            }
            toc += '\n';
        });
    }
    
    return toc;
}

/**
 * Tạo sidebar table of contents cho Hugo
 */
function generateSidebarToc(lessons) {
    if (lessons.length === 0) {
        return [];
    }
    
    const sidebarItems = [
        {
            name: "Mục lục",
            url: "#mục-lục",
            weight: 1
        },
        {
            name: "Nguồn kiến thức", 
            url: "#nguồn-kiến-thức",
            weight: 2
        },
        {
            name: "Cách sử dụng",
            url: "#cách-sử-dụng", 
            weight: 3
        },
        {
            name: "Cập nhật",
            url: "#cập-nhật",
            weight: 4
        },
        {
            name: "Danh sách bài học",
            url: "#danh-sách-bài-học",
            weight: 5
        }
    ];
    
    // Thêm danh sách bài học vào sidebar
    lessons.forEach((lesson, index) => {
        sidebarItems.push({
            name: lesson.title,
            url: `/bai-hoc/${lesson.slug}/`,
            weight: 10 + index,
            parent: "Danh sách bài học"
        });
    });
    
    return sidebarItems;
}

/**
 * Cập nhật file _index.md với mục lục mới
 */
async function updateIndexFile(lessons) {
    const toc = generateTableOfContents(lessons);
    const sidebarToc = generateSidebarToc(lessons);
    
    const currentContent = await fs.readFile(INDEX_FILE, 'utf8');
    
    // Tìm và thay thế phần mục lục
    const tocStart = currentContent.indexOf('## 📚 Danh sách bài học');
    const tocEnd = currentContent.indexOf('---', tocStart);
    
    let newContent;
    if (tocStart !== -1 && tocEnd !== -1) {
        // Thay thế phần mục lục hiện tại
        newContent = currentContent.substring(0, tocStart) + toc + '\n\n' + currentContent.substring(tocEnd);
    } else {
        // Thêm mục lục vào cuối file
        newContent = currentContent + '\n\n' + toc;
    }
    
    // Cập nhật frontmatter với sidebar table of contents
    newContent = updateFrontmatterWithSidebar(newContent, sidebarToc);
    
    await fs.writeFile(INDEX_FILE, newContent, 'utf8');
    console.log(`✅ Đã cập nhật mục lục BAI-HOC với ${lessons.length} bài học`);
}

/**
 * Cập nhật frontmatter với sidebar table of contents
 */
function updateFrontmatterWithSidebar(content, sidebarToc) {
    // Tìm frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return content;
    
    const frontmatterText = frontmatterMatch[1];
    const frontmatter = {};
    
    // Parse frontmatter hiện tại
    frontmatterText.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
            let value = match[2].trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            frontmatter[match[1]] = value;
        }
    });
    
    // Thêm sidebar table of contents
    frontmatter.sidebar = {
        tableOfContents: sidebarToc
    };
    
    // Tạo frontmatter mới
    let newFrontmatter = '---\n';
    Object.keys(frontmatter).forEach(key => {
        if (key === 'sidebar') {
            newFrontmatter += `sidebar:\n`;
            newFrontmatter += `  tableOfContents:\n`;
            sidebarToc.forEach(item => {
                newFrontmatter += `    - name: "${item.name}"\n`;
                newFrontmatter += `      url: "${item.url}"\n`;
                newFrontmatter += `      weight: ${item.weight}\n`;
                if (item.parent) {
                    newFrontmatter += `      parent: "${item.parent}"\n`;
                }
            });
        } else {
            newFrontmatter += `${key}: "${frontmatter[key]}"\n`;
        }
    });
    newFrontmatter += '---';
    
    // Thay thế frontmatter cũ
    return content.replace(/^---\n[\s\S]*?\n---/, newFrontmatter);
}

/**
 * Hàm chính
 */
async function main() {
    try {
        console.log('🔄 Đang cập nhật mục lục BAI-HOC...');
        
        const lessons = await getAllLessons();
        await updateIndexFile(lessons);
        
        console.log('✅ Hoàn thành cập nhật mục lục!');
        
        // Hiển thị thống kê
        console.log('\n📊 Thống kê:');
        console.log(`- Tổng số bài học: ${lessons.length}`);
        if (lessons.length > 0) {
            const latestLesson = lessons[0];
            console.log(`- Bài học mới nhất: ${latestLesson.title}`);
            console.log(`- Ngày tạo: ${new Date(latestLesson.date).toLocaleDateString('vi-VN')}`);
        }
        
    } catch (error) {
        console.error('❌ Lỗi khi cập nhật mục lục:', error);
        process.exit(1);
    }
}

// Chạy script nếu được gọi trực tiếp
if (require.main === module) {
    main();
}

module.exports = {
    getAllLessons,
    updateIndexFile,
    generateTableOfContents,
    generateSidebarToc,
    updateFrontmatterWithSidebar
};
