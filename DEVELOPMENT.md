# 🚀 HappyMarketDocs Development Guide

## 📋 Tổng quan

HappyMarketDocs sử dụng Hugo static site generator với Admin Panel để tạo bài học động. Hệ thống bao gồm:

- **Hugo Server** (port 1313): Static site generator
- **API Server** (port 3001): Backend API để tạo bài học
- **Admin Panel**: Giao diện quản lý nội dung

## 🛠️ Cài đặt

### Yêu cầu hệ thống
- Node.js (v16+)
- Hugo Extended (v0.100.0+)
- Git

### Cài đặt dependencies
```bash
npm install
```

## 🚀 Chạy Development Environment

### Cách 1: Sử dụng Scripts (Khuyến nghị)
```bash
# Khởi động tất cả services
./start.sh

# Hoặc sử dụng npm
npm start
```

### Cách 2: Chạy từng service riêng lẻ
```bash
# Terminal 1: API Server
node simple-server.js

# Terminal 2: Hugo Server
hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313
```

## 📊 Quản lý Services

### Kiểm tra trạng thái
```bash
./status.sh
# hoặc
npm run status
```

### Dừng tất cả services
```bash
./stop.sh
# hoặc
npm run stop
```

## 🌐 URLs và Endpoints

### Frontend
- **Website**: http://localhost:1313
- **Admin Panel**: http://localhost:1313/admin/
- **Tạo Bài Học**: http://localhost:1313/admin/tao-bai-hoc.html

### Backend API
- **Health Check**: http://localhost:3001/api/health
- **Create Lesson**: http://localhost:3001/api/create-lesson

## 📁 Cấu trúc Project

```
HappyMarketDocs/
├── start.sh              # Script khởi động tất cả services
├── stop.sh               # Script dừng tất cả services
├── status.sh             # Script kiểm tra trạng thái
├── simple-server.js      # API server cho local development
├── netlify/
│   └── functions/
│       └── create-lesson.js  # Netlify function cho production
├── public/
│   ├── admin/            # Admin Panel
│   └── api/              # API endpoints
├── content/              # Hugo content
│   └── BAI-HOC/          # Bài học được tạo
└── logs/                 # Log files
    ├── hugo-server.log
    └── api-server.log
```

## 🔧 Development Workflow

### 1. Khởi động Development Environment
```bash
./start.sh
```

### 2. Truy cập Admin Panel
Mở browser và truy cập: http://localhost:1313/admin/

### 3. Tạo Bài Học
1. Click "Bắt đầu tạo"
2. Điền tên bài học
3. Chọn 3 nguồn nội dung (Hình ảnh, Khái niệm nguồn, Từ khái niệm)
4. Click "Tạo Bài Học"
5. File markdown sẽ được tạo trong `content/BAI-HOC/`

### 4. Xem Bài Học
Bài học sẽ xuất hiện tại: http://localhost:1313/bai-hoc/[slug]/

## 🐛 Debugging

### Kiểm tra Logs
```bash
# Hugo Server logs
tail -f logs/hugo-server.log

# API Server logs
tail -f logs/api-server.log
```

### Kiểm tra Ports
```bash
# Kiểm tra port 1313 (Hugo)
lsof -i:1313

# Kiểm tra port 3001 (API)
lsof -i:3001
```

### Test API Endpoints
```bash
# Health check
curl http://localhost:3001/api/health

# Test create lesson
curl -X POST http://localhost:3001/api/create-lesson \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Lesson","sources":{"hinh":{"id":"test","title":"Test","content":"Test"},"khaiNiem":{"id":"test","title":"Test","content":"Test"},"tuKhaiNiem":{"id":"test","title":"Test","content":"Test"}}}'
```

## 🚀 Production Deployment

### Deploy lên Netlify
```bash
# Build và deploy
npm run deploy

# Hoặc deploy preview
npm run deploy:preview
```

### Sử dụng Netlify Dev (Local)
```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Chạy với Netlify Functions
netlify dev
```

## 📝 Scripts Available

| Script | Command | Mô tả |
|--------|---------|-------|
| `start` | `./start.sh` | Khởi động tất cả services |
| `stop` | `./stop.sh` | Dừng tất cả services |
| `status` | `./status.sh` | Kiểm tra trạng thái services |
| `dev` | `npm run dev` | Chạy với concurrently |
| `api` | `npm run api` | Chỉ chạy API server |
| `dev:hugo` | `npm run dev:hugo` | Chỉ chạy Hugo server |
| `build` | `npm run build` | Build production |
| `deploy` | `npm run deploy` | Deploy lên Netlify |

## 🔍 Troubleshooting

### Lỗi thường gặp

#### 1. Port đã được sử dụng
```bash
# Dừng tất cả services
./stop.sh

# Hoặc kill process cụ thể
kill -9 $(lsof -ti:1313)
kill -9 $(lsof -ti:3001)
```

#### 2. API Server không khởi động
```bash
# Kiểm tra Node.js
node --version

# Kiểm tra dependencies
npm install

# Chạy API server riêng
node simple-server.js
```

#### 3. Hugo Server không khởi động
```bash
# Kiểm tra Hugo
hugo version

# Chạy Hugo server riêng
hugo server -D
```

#### 4. CORS Error
API server đã được cấu hình CORS, nhưng nếu vẫn gặp lỗi:
```bash
# Kiểm tra API server có chạy không
curl http://localhost:3001/api/health
```

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra logs trong thư mục `logs/`
2. Chạy `./status.sh` để kiểm tra trạng thái
3. Restart services với `./stop.sh` và `./start.sh`
4. Kiểm tra ports có bị conflict không

---

**Happy Coding! 🚀**
