const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

// Generate slug từ title
function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-'); // Remove leading/trailing hyphens
}

// Generate frontmatter cho Hugo
function generateFrontmatter(lessonData) {
  const now = new Date();
  return `---
title: "${lessonData.title}"
description: "${lessonData.description || ''}"
date: ${now.toISOString().split('T')[0]}
draft: false
tags: ["bài-học", "admin-created"]
categories: ["bai-hoc"]
weight: 10
type: "page"
tableOfContents: true
lesson:
  sources:
    hinh: "${lessonData.sources.hinh.id}"
    khaiNiem: "${lessonData.sources.khaiNiem.id}"
    tuKhaiNiem: "${lessonData.sources.tuKhaiNiem.id}"
---`;
}

// Generate markdown content
function generateMarkdownContent(lessonData) {
  return `# ${lessonData.title}

## Hình ảnh minh họa

${lessonData.sources.hinh.content}

---

## Khái niệm nguồn

${lessonData.sources.khaiNiem.content}

---

## Từ - Khái niệm

${lessonData.sources.tuKhaiNiem.content}

---

## Tổng kết

Bài học này kết hợp 3 nguồn kiến thức quan trọng:
- **Hình ảnh**: ${lessonData.sources.hinh.title}
- **Khái niệm nguồn**: ${lessonData.sources.khaiNiem.title}
- **Từ khái niệm**: ${lessonData.sources.tuKhaiNiem.title}

Tạo thành một bài học hoàn chỉnh về ${lessonData.title.toLowerCase()}, giúp người học có cái nhìn toàn diện và sâu sắc về chủ đề này.`;
}

// Tạo file markdown cho bài học
async function createLessonFile(slug, lessonData) {
  const frontmatter = generateFrontmatter(lessonData);
  const content = generateMarkdownContent(lessonData);
  
  const filePath = path.join(process.cwd(), 'content', 'BAI-HOC', slug, 'index.md');
  const fileContent = `${frontmatter}\n\n${content}`;
  
  // Tạo thư mục nếu chưa tồn tại
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  
  // Write file to filesystem
  await fs.writeFile(filePath, fileContent, 'utf8');
  
  return { path: filePath, content: fileContent };
}

// Validate lesson data
function validateLessonData(lessonData) {
  const errors = [];
  
  if (!lessonData.title || lessonData.title.trim().length < 5) {
    errors.push('Tên bài học phải có ít nhất 5 ký tự');
  }
  
  if (!lessonData.title || lessonData.title.trim().length > 100) {
    errors.push('Tên bài học không được quá 100 ký tự');
  }
  
  if (!lessonData.sources || !lessonData.sources.hinh || !lessonData.sources.khaiNiem || !lessonData.sources.tuKhaiNiem) {
    errors.push('Phải chọn đầy đủ 3 nguồn nội dung');
  }
  
  if (lessonData.sources) {
    if (!lessonData.sources.hinh.id || !lessonData.sources.hinh.title || !lessonData.sources.hinh.content) {
      errors.push('Thông tin hình ảnh không đầy đủ');
    }
    if (!lessonData.sources.khaiNiem.id || !lessonData.sources.khaiNiem.title || !lessonData.sources.khaiNiem.content) {
      errors.push('Thông tin khái niệm nguồn không đầy đủ');
    }
    if (!lessonData.sources.tuKhaiNiem.id || !lessonData.sources.tuKhaiNiem.title || !lessonData.sources.tuKhaiNiem.content) {
      errors.push('Thông tin từ khái niệm không đầy đủ');
    }
  }
  
  return errors;
}

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  
  // Health check endpoint
  if (parsedUrl.pathname === '/api/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'OK', message: 'API server is running' }));
    return;
  }

  // Create lesson endpoint
  if (parsedUrl.pathname === '/api/create-lesson' && req.method === 'POST') {
    try {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', async () => {
        try {
          const lessonData = JSON.parse(body);
          
          // Validate data
          const validationErrors = validateLessonData(lessonData);
          if (validationErrors.length > 0) {
            res.writeHead(400);
            res.end(JSON.stringify({ 
              error: 'Validation failed',
              details: validationErrors
            }));
            return;
          }

          // Generate slug
          const slug = generateSlug(lessonData.title);
          
          // Check if lesson already exists
          const lessonPath = path.join(process.cwd(), 'content', 'BAI-HOC', slug, 'index.md');
          try {
            await fs.access(lessonPath);
            res.writeHead(409);
            res.end(JSON.stringify({ 
              error: 'Lesson already exists',
              slug: slug
            }));
            return;
          } catch (error) {
            // File doesn't exist, continue
          }
          
          // Create lesson file
          const result = await createLessonFile(slug, lessonData);
          
          res.writeHead(200);
          res.end(JSON.stringify({
            success: true,
            slug: slug,
            url: `/bai-hoc/${slug}/`,
            message: 'Bài học đã được tạo thành công!'
          }));
        } catch (error) {
          console.error('Error creating lesson:', error);
          res.writeHead(500);
          res.end(JSON.stringify({ 
            error: 'Internal server error',
            message: error.message
          }));
        }
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.writeHead(500);
      res.end(JSON.stringify({ 
        error: 'Internal server error',
        message: error.message
      }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
