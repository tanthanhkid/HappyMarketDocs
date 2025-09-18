#!/usr/bin/env node

/**
 * Script test để kiểm tra tính năng cập nhật mục lục BAI-HOC
 */

const { getAllLessons, updateIndexFile, generateTableOfContents } = require('./update-bai-hoc-toc');

async function testTocUpdate() {
    console.log('🧪 Bắt đầu test cập nhật mục lục BAI-HOC...\n');
    
    try {
        // Test 1: Lấy danh sách bài học
        console.log('1️⃣ Test lấy danh sách bài học...');
        const lessons = await getAllLessons();
        console.log(`✅ Tìm thấy ${lessons.length} bài học`);
        
        if (lessons.length > 0) {
            console.log('📋 Danh sách bài học:');
            lessons.forEach((lesson, index) => {
                console.log(`   ${index + 1}. ${lesson.title} (${lesson.slug})`);
            });
        }
        
        // Test 2: Tạo mục lục
        console.log('\n2️⃣ Test tạo mục lục...');
        const toc = generateTableOfContents(lessons);
        console.log('✅ Đã tạo mục lục thành công');
        console.log('📄 Preview mục lục:');
        console.log(toc.substring(0, 500) + '...');
        
        // Test 3: Cập nhật file _index.md
        console.log('\n3️⃣ Test cập nhật file _index.md...');
        await updateIndexFile(lessons);
        console.log('✅ Đã cập nhật file _index.md thành công');
        
        console.log('\n🎉 Tất cả test đều thành công!');
        
    } catch (error) {
        console.error('❌ Test thất bại:', error);
        process.exit(1);
    }
}

// Chạy test
testTocUpdate();
