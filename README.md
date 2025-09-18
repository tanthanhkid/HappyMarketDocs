# HappyMarketDocs - Phát triển Nội tâm & Huấn luyện

## 📋 Tổng quan

**HappyMarketDocs** là một hệ thống documentation toàn diện về phát triển nội tâm, huấn luyện tư vấn và phát triển bản thân. Dự án được xây dựng trên nền tảng Hugo static site generator với custom theme, tích hợp Admin Panel để tạo bài học động từ nhiều nguồn nội dung khác nhau.

### 🌟 Điểm nổi bật

- **Hugo Static Site**: Tốc độ tải nhanh, SEO tối ưu, bảo mật cao
- **Custom Theme**: Thiết kế hiện đại theo phong cách AWS Documentation
- **Admin Panel**: Giao diện quản lý để tạo bài học động từ 3 nguồn nội dung
- **API Integration**: Hệ thống API để quản lý và tải nội dung
- **Responsive Design**: Tối ưu cho mọi thiết bị từ desktop đến mobile
- **Search Engine**: Tìm kiếm nhanh chóng trong toàn bộ nội dung
- **Content Management**: Quản lý nội dung có cấu trúc với taxonomy và categories

## 🎯 Mục tiêu

- Tạo ra một nguồn tài liệu tập trung về phát triển nội tâm và huấn luyện bằng tiếng Việt
- Cung cấp giao diện người dùng hiện đại, dễ sử dụng như AWS Docs
- Hỗ trợ tìm kiếm nhanh chóng và điều hướng trực quan
- Responsive design hoạt động tốt trên mọi thiết bị
- Tích hợp Admin Panel để tạo bài học động từ nhiều nguồn nội dung
- Cung cấp API để quản lý và tương tác với nội dung

## 🛠️ Công nghệ sử dụng

### Backend & Framework
- **Framework**: [Hugo](https://gohugo.io/) - Static Site Generator nhanh và mạnh mẽ
- **Theme**: Custom theme `happymarket-theme` dựa trên phong cách AWS Documentation
- **Language**: Go (Hugo) + JavaScript (Admin Panel)
- **Build Tool**: Hugo CLI với các script npm

### Frontend & Styling
- **CSS Framework**: Tailwind CSS cho styling hiện đại
- **JavaScript**: Vanilla JS cho Admin Panel và tương tác
- **Fonts**: Inter font family từ Google Fonts
- **Icons**: Heroicons và custom SVG icons

### Search & API
- **Search Engine**: Fuse.js cho tìm kiếm client-side
- **API**: JSON-based API cho Admin Panel
- **File Management**: Static file serving với Hugo

### Development & Deployment
- **Package Manager**: npm cho dependencies
- **Linting**: markdownlint-cli cho Markdown files
- **Formatting**: Prettier cho code formatting
- **Deployment**: Netlify với Hugo build
- **Version Control**: Git với GitHub

## 📁 Cấu trúc dự án

```
HappyMarketDocs/
├── content/                           # Nội dung tài liệu chính
│   ├── _index.md                     # Trang chủ
│   ├── KHAI-NIEM-NGUON/              # Khái niệm nguồn (25+ khái niệm)
│   │   ├── quy-luật/                 # 5 quy luật cơ bản
│   │   ├── nguyên-lý/                # 4 nguyên lý nền tảng
│   │   ├── công-thức/                # 4 công thức thực hành
│   │   ├── năng-lực/                 # 11 năng lực cần thiết
│   │   ├── phương-pháp/              # 3 phương pháp
│   │   ├── nguyên-tắc/               # 4 nguyên tắc
│   │   ├── quan-niệm/                # 9 quan niệm
│   │   ├── tâm-thái/                 # 5 tâm thái
│   │   ├── hệ-quy-chiếu/             # 4 hệ quy chiếu
│   │   ├── môi-trường/               # 9 môi trường
│   │   ├── công-cụ-phương-tiện/      # 3 công cụ
│   │   ├── văn-hoá-nghi-thức-nghi-lễ/ # 7 nghi thức
│   │   ├── chìa-khoá/                # 2 chìa khóa
│   │   ├── mật-mã/                   # 1 mật mã
│   │   └── khái-niệm-nguồn/          # Bộ khái niệm nguồn
│   ├── KHOA-HOC/                     # Khóa học phát triển bản thân
│   │   ├── NOI-TAM/                  # Nội tâm (2 khóa học)
│   │   ├── SUC-KHOE/                 # Sức khỏe (4 khóa học)
│   │   ├── MOI-QUAN-HE/              # Mối quan hệ (2 khóa học)
│   │   └── TAI-CHINH/                # Tài chính (5 khóa học)
│   ├── TU-KHAINIEM/                  # Từ - khái niệm chuyên môn
│   │   └── knn-nội-tâm/              # 66 từ/khái niệm chuyên sâu
│   ├── HINH/                         # Tài liệu hình ảnh (12 hình)
│   └── BAI-HOC/                      # Bài học được tạo từ Admin Panel
├── public/                           # Static files được build
│   ├── admin/                        # Admin Panel
│   │   ├── index.html                # Trang chủ admin
│   │   ├── tao-bai-hoc.html          # Form tạo bài học
│   │   ├── js/                       # JavaScript cho admin
│   │   │   ├── file-loader.js        # Load files từ API
│   │   │   ├── lesson-generator.js   # Logic tạo bài học
│   │   │   └── preview.js            # Preview functionality
│   │   └── README.md                 # Tài liệu Admin Panel
│   ├── api/files/                    # API endpoints
│   │   ├── hinh                      # API cho hình ảnh
│   │   ├── khai-niem-nguon           # API cho khái niệm nguồn
│   │   └── tu-khainiem               # API cho từ khái niệm
│   ├── css/                          # Compiled CSS
│   ├── js/                           # Compiled JavaScript
│   ├── categories/                   # Category pages
│   ├── tags/                         # Tag pages
│   ├── series/                       # Series pages
│   └── sitemap.xml                   # Sitemap
├── themes/happymarket-theme/         # Custom Hugo theme
│   ├── layouts/                      # HTML templates
│   │   ├── _default/baseof.html      # Base template
│   │   ├── _default/single.html      # Single page template
│   │   ├── _default/list.html        # List page template
│   │   └── partials/                 # Partial templates
│   └── static/                       # Theme static files
├── resources/_gen/                    # Generated resources
├── config.yaml                       # Cấu hình Hugo chính
├── netlify.toml                      # Cấu hình Netlify
├── package.json                      # npm dependencies & scripts
└── README.md                         # Tài liệu này
```

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống

- Hugo Extended (phiên bản 0.100.0 trở lên)
- Git
- Node.js (cho các công cụ build)

### Cài đặt Hugo

#### macOS (sử dụng Homebrew)
```bash
brew install hugo
```

#### Windows (sử dụng Chocolatey)
```bash
choco install hugo-extended
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get install hugo
```

### Chạy dự án

1. **Clone repository**
```bash
git clone <repository-url>
cd Wiki
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
hugo server -D
```

4. **Truy cập trang web**
Mở trình duyệt và truy cập: `http://localhost:1313`

## 📝 Nội dung tài liệu

### Các chủ đề chính

1. **Khái niệm nguồn** (25+ khái niệm)
   - **Quy luật** (5 khái niệm): ảnh-hưởng, chuyển-hoá, giá-trị, tâm-thức, thu-hút
   - **Nguyên lý** (4 khái niệm): ánh-sáng, kích-hoạt-não, nghi-vấn-thuận-chiều, vòng-tri-thức
   - **Công thức** (4 khái niệm): 4-bước-tư-vấn-huấn-luyện, chuyển-biết-tin-hiểu, i-buông-định-thân, nhịp-điệu
   - **Năng lực** (11 khái niệm): chất-giọng, chứa-đựng, công-nghệ, lắng-nghe, ngôn-ngữ-có-hình-ảnh, ngôn-ngữ-định-hướng-tương-lai, nói-và-viết, phán-đoán, trả-lời-mọi-loại-câu-hỏi, tuduy, xử-lý-tình-huống
   - **Phương pháp** (3 khái niệm): gia-tốc, thụ-đắc, tụ-chúng
   - **Nguyên tắc** (4 khái niệm): chia-sẻ-tri-thức, mưa-lúc-nào-cũng-có-cây, người-tham-gia-chuyển-hoá, thành-tựu-do-người-cao-nhân
   - **Quan niệm** (9 khái niệm): Các quan niệm về cuộc sống và phát triển
   - **Tâm thái** (5 khái niệm): an-vui, bao-dung, thuở-ban-đầu, trân-trọng-biết-ơn, tự-nhiên-tự-tin-tự-chủ
   - **Hệ quy chiếu** (4 khái niệm): cấu-trúc-con-người, công-thức-cội-nguồn, đạo-lý-tôn-giáo-tín-ngưỡng-khoa, tam-giác-hiện-thực
   - **Môi trường** (9 khái niệm): bao-dung, chân-thật, hy-vọng, khiêm-tốn, niềm-tin, trân-trọng-biết-ơn, trí-tuệ, vui-vẻ, yêu-thương
   - **Công cụ phương tiện** (3 khái niệm): hỗ-trợ-giảng-dạy, hỗ-trợ-sức-khoẻ, tổng-nghiệp
   - **Văn hoá nghi thức nghi lễ** (7 khái niệm): Các nghi thức và văn hóa
   - **Chìa khóa** (2 khái niệm): ghi-nhận-biết-ơn, quảng-bá-phổi-hợp-dẫn-dắt
   - **Mật mã** (1 khái niệm): 3-7-7-3

2. **Khóa học phát triển bản thân** (13 khóa học)
   - **Nội tâm** (2 khóa học): WNT1-thau-hieu-noi-tam-kien-tao-an-vui, WNT2-7-bo-thi-quan-trong-doi-nguoi
   - **Sức khỏe** (4 khóa học): Thấu hiểu sức khỏe, tư duy, hành trình 21 ngày, phòng bệnh
   - **Mối quan hệ** (2 khóa học): WQH1-thau-hieu-yeu-thuong, WQH2-nhan-thuc-du-day-ve-con-nguoi
   - **Tài chính** (5 khóa học): Thấu hiểu tài chính, kinh doanh, đầu tư, quản lý tiền bạc, tự do tài chính

3. **Từ - Khái niệm chuyên môn** (66 từ/khái niệm)
   - **KNN Nội tâm**: 66 từ/khái niệm chuyên sâu về nội tâm
   - Định nghĩa và giải thích chi tiết
   - Thuật ngữ chuyên môn trong lĩnh vực tư vấn và huấn luyện

4. **Tài liệu hình ảnh** (12 hình)
   - 3-gốc-nhìn-của-con-người, con-thuyền-suôi-dòng, hinh-8, hinh-9, hinh-10, hinh-11, hinh-12
   - hưởng-thụ-học-tập, lộ-trình-nâng-tầm-nhận-thức-nội-tâm, nguyên-lý-ánh-sáng, quy-luật-chuyển-hóa, wit-home
   - Hình ảnh minh họa trực quan, đồ họa thông tin, sơ đồ và biểu đồ

5. **Bài học động** (Tạo từ Admin Panel)
   - Kết hợp 3 nguồn: Hình ảnh + Khái niệm nguồn + Từ khái niệm
   - Tự động tạo cấu trúc bài học hoàn chỉnh
   - Preview trước khi lưu

## 🎨 Tính năng giao diện

### Frontend Features
- **Design System**: Thiết kế nhất quán theo phong cách AWS Documentation
- **Responsive Design**: Tối ưu cho mọi kích thước màn hình (desktop, tablet, mobile)
- **Search Engine**: Tìm kiếm nhanh trong toàn bộ nội dung với Fuse.js
- **Navigation**: Menu điều hướng trực quan với sidebar và breadcrumbs
- **Table of Contents**: Mục lục tự động cho mỗi trang với highlighting
- **Code Highlighting**: Syntax highlighting cho code blocks với Prism.js
- **Print Friendly**: Tối ưu cho in ấn với CSS print styles
- **Accessibility**: Hỗ trợ keyboard navigation và screen readers
- **Performance**: Lazy loading images, smooth scrolling, optimized assets

### Admin Panel Features
- **Dynamic Lesson Creation**: Tạo bài học từ 3 nguồn nội dung khác nhau
- **Interactive Forms**: Giao diện thân thiện với dropdown và tìm kiếm
- **Real-time Preview**: Xem trước nội dung trước khi lưu
- **File Management**: Quản lý và tải files từ API endpoints
- **Validation**: Kiểm tra đầy đủ thông tin trước khi tạo bài học
- **Auto Table of Contents**: Tự động cập nhật mục lục khi có bài học mới
- **Modern UI**: Glassmorphism design với gradient backgrounds
- **Responsive**: Hoạt động tốt trên mọi thiết bị

### Technical Features
- **Static Site Generation**: Hugo build với tối ưu hóa performance
- **SEO Optimization**: Meta tags, sitemap, structured data
- **Security Headers**: Netlify security headers configuration
- **CDN Ready**: Optimized for CDN delivery
- **Git Integration**: Git info integration cho version tracking

## 🔧 Cấu hình

### Cấu hình Hugo (config.yaml)

```yaml
baseURL: 'https://happymarketdocs.com'
languageCode: 'vi-VN'
title: 'HappyMarketDocs - Phát triển Nội tâm & Huấn luyện'
theme: 'happymarket-theme'
defaultContentLanguage: 'vi'

# Cấu hình build
buildDrafts: false
buildFuture: false
buildExpired: false
enableRobotsTXT: true
enableGitInfo: true

# Cấu hình menu
menu:
  main:
    - identifier: home
      name: Trang chủ
      url: /
      weight: 10
    - identifier: khoa-hoc
      name: Khóa học
      url: /khoa-hoc/
      weight: 20
    - identifier: khai-niem-nguon
      name: Khái niệm nguồn
      url: /khai-niem-nguon/
      weight: 30
    - identifier: tu-khainiem
      name: Từ - Khái niệm
      url: /tu-khainiem/
      weight: 40
    - identifier: hinh
      name: Hình ảnh
      url: /hinh/
      weight: 50

# Cấu hình taxonomy
taxonomies:
  category: categories
  tag: tags
  series: series

# Cấu hình params
params:
  description: 'Tài liệu toàn diện về phát triển nội tâm, huấn luyện tư vấn và phát triển bản thân'
  author: 'HappyMarket Team'
  version: '1.0.0'
  keywords: ['phát triển nội tâm', 'huấn luyện', 'tư vấn', 'phát triển bản thân']
  
  # Theme settings
  theme:
    primary_color: '#FF9900'      # AWS Orange
    secondary_color: '#232F3E'    # AWS Dark Blue
    accent_color: '#146EB4'       # AWS Blue
    
  # Search configuration
  search:
    enable: true
    type: 'fuse'
    placeholder: 'Tìm kiếm trong tài liệu...'
    max_results: 20
    
  # Social links
  social:
    github: 'https://github.com/happymarket/docs'
    linkedin: 'https://linkedin.com/company/happymarket'
    facebook: 'https://facebook.com/happymarket'
    twitter: 'https://twitter.com/happymarket'
    youtube: 'https://youtube.com/happymarket'
```

### Cấu hình Netlify (netlify.toml)

```toml
[build]
  publish = "public"
  command = "hugo --gc --minify"

[build.environment]
  HUGO_VERSION = "0.100.0"
  HUGO_ENV = "production"
  HUGO_ENABLEGITINFO = "true"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Cấu hình npm Scripts (package.json)

```json
{
  "scripts": {
    "dev": "hugo server -D --disableFastRender",
    "build": "hugo --gc --minify",
    "build:production": "hugo --gc --minify --environment production",
    "clean": "rm -rf public resources",
    "preview": "hugo server --disableFastRender",
    "deploy": "hugo --gc --minify && netlify deploy --prod --dir=public",
    "deploy:preview": "hugo --gc --minify && netlify deploy --dir=public",
    "lint": "markdownlint content/**/*.md",
    "format": "prettier --write content/**/*.md",
    "check": "hugo --gc --minify --quiet && echo 'Build successful'",
    "serve": "hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313"
  }
}
```

## 🎛️ Admin Panel

### Tổng quan Admin Panel

Admin Panel là một tính năng đặc biệt của HappyMarketDocs, cho phép tạo bài học động từ 3 nguồn nội dung khác nhau:

1. **Hình ảnh** (`/content/HINH/`) - 12 file hình ảnh minh họa
2. **Khái niệm nguồn** (`/content/KHAI-NIEM-NGUON/`) - 25+ khái niệm cốt lõi
3. **Từ khái niệm** (`/content/TU-KHAINIEM/knn-nội-tâm/`) - 66 từ chuyên môn

### Truy cập Admin Panel

1. **Development**: `http://localhost:1313/admin/`
2. **Production**: `https://happymarketdocs.com/admin/`

### Tính năng chính

#### 1. Tạo Bài Học Dynamic
- **Form tương tác**: Giao diện thân thiện với 3 dropdown chọn nguồn
- **Tìm kiếm**: Tìm kiếm nhanh trong danh sách files
- **Preview**: Xem trước nội dung trước khi lưu
- **Validation**: Kiểm tra đầy đủ thông tin trước khi tạo

#### 2. Cấu trúc Bài Học
Mỗi bài học được tạo sẽ có cấu trúc:
```markdown
# [Tên bài học]

## Hình ảnh minh họa
[Nội dung từ file HINH]

## Khái niệm nguồn  
[Nội dung từ file KHAI-NIEM-NGUON]

## Từ - Khái niệm
[Nội dung từ file TU-KHAINIEM]

## Tổng kết
[Phần tổng hợp tự động]
```

#### 3. Công nghệ sử dụng
- **Frontend**: HTML5, CSS3 (Tailwind), JavaScript (Vanilla)
- **API**: JSON files (có thể thay thế bằng API thực)
- **Integration**: Hugo static site generator
- **UI/UX**: Responsive design, modern interface

### Cách sử dụng Admin Panel

1. **Truy cập**: Mở trình duyệt và truy cập `/admin/`
2. **Chọn nội dung**: Sử dụng dropdown hoặc tìm kiếm để chọn 3 nguồn
3. **Preview**: Click "Preview" để xem nội dung ghép
4. **Tạo bài học**: Click "Tạo Bài Học" để lưu vào `/content/BAI-HOC/`
5. **Tự động cập nhật**: Mục lục BAI-HOC sẽ được cập nhật tự động

## 🔄 Tự động cập nhật mục lục

### Tính năng Auto Table of Contents

Hệ thống tự động cập nhật mục lục cho danh mục BAI-HOC mỗi khi có bài học mới được tạo:

#### Cách hoạt động
1. **Tự động**: Khi tạo bài học mới qua Admin Panel, mục lục sẽ được cập nhật tự động
2. **Thủ công**: Có thể chạy script cập nhật mục lục thủ công khi cần
3. **Thông minh**: Hiển thị bài học mới nhất và tổng quan về tất cả bài học

#### Scripts có sẵn
```bash
# Cập nhật mục lục thủ công
npm run update-toc

# Test tính năng cập nhật mục lục
npm run test-toc
```

#### Cấu trúc mục lục
- **Tổng quan**: Hiển thị số lượng bài học
- **Bài học mới nhất**: 5 bài học được tạo gần đây nhất
- **Danh sách đầy đủ**: Tất cả bài học được sắp xếp theo ngày tạo
- **Thông tin chi tiết**: Tiêu đề, mô tả, ngày tạo và liên kết

## 🔌 API Endpoints

### File Management API

#### GET `/api/files/hinh`
Trả về danh sách files hình ảnh
```json
[
  {
    "id": "3-goc-nhin-cua-con-nguoi",
    "title": "3 GỐC NHÌN CỦA CON NGƯỜI",
    "description": "Hình ảnh WNT36003 - 3 GỐC NHÌN CỦA CON NGƯỜI",
    "path": "/content/HINH/3-gốc-nhìn-của-con-người.md",
    "tags": ["hình-ảnh", "đồ-họa", "THẤU HIỂU NỘI TÂM - KIẾN TẠO AN VUI"],
    "category": "hinh"
  }
]
```

#### GET `/api/files/khai-niem-nguon`
Trả về danh sách khái niệm nguồn

#### GET `/api/files/tu-khainiem`
Trả về danh sách từ khái niệm

## 📚 Viết nội dung

### Cấu trúc file markdown

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn gọn"
date: 2024-01-01
draft: false
tags: ["phát triển nội tâm", "huấn luyện", "tư vấn"]
categories: ["khai-niem-nguon"]
weight: 10
type: "page"
tableOfContents: true
---

# Tiêu đề chính

Nội dung bài viết...

## Tiêu đề phụ

Nội dung chi tiết...
```

### Quy tắc viết nội dung

1. **Sử dụng tiếng Việt chuẩn**
2. **Cấu trúc rõ ràng** với heading hierarchy
3. **Sử dụng bullet points** cho danh sách
4. **Thêm hình ảnh minh họa** khi cần thiết
5. **Liên kết nội bộ** giữa các bài viết
6. **Cập nhật thường xuyên** nội dung
7. **Sử dụng taxonomy** (tags, categories, series) để phân loại

## 🚀 Deployment

### Netlify (Khuyến nghị)

1. **Kết nối GitHub repository**
2. **Cấu hình build settings**:
   - Build command: `hugo --gc --minify`
   - Publish directory: `public`
   - Hugo version: `0.100.0`
3. **Environment variables**:
   - `HUGO_ENV`: `production`
   - `HUGO_ENABLEGITINFO`: `true`
4. **Deploy tự động** khi push code

### Vercel

1. **Import project** từ GitHub
2. **Cấu hình framework**: Hugo
3. **Build settings**:
   - Build command: `hugo --gc --minify`
   - Output directory: `public`
4. **Deploy** tự động

### Manual Deployment

```bash
# Build production
npm run build:production

# Deploy to Netlify
npm run deploy

# Deploy preview
npm run deploy:preview
```

## 🧪 Development Workflow

### Local Development

```bash
# Clone repository
git clone <repository-url>
cd HappyMarketDocs

# Install dependencies
npm install

# Start development server
npm run dev

# Access admin panel
open http://localhost:1313/admin/
```

### Code Quality

```bash
# Lint markdown files
npm run lint

# Format code
npm run format

# Check build
npm run check
```

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp để cải thiện tài liệu và tính năng:

### Cách đóng góp

1. **Fork** repository
2. **Tạo branch** mới cho feature: `git checkout -b feature/amazing-feature`
3. **Commit** thay đổi: `git commit -m 'Add amazing feature'`
4. **Push** lên branch: `git push origin feature/amazing-feature`
5. **Tạo Pull Request**

### Quy tắc đóng góp

#### Nội dung
- Tuân thủ cấu trúc thư mục hiện có
- Viết nội dung bằng tiếng Việt chuẩn
- Kiểm tra chính tả và ngữ pháp
- Thêm hình ảnh chất lượng cao
- Sử dụng taxonomy (tags, categories) phù hợp

#### Code
- Tuân thủ coding standards
- Thêm comments cho code phức tạp
- Test tính năng mới trước khi commit
- Cập nhật documentation nếu cần

#### Admin Panel
- Test tính năng tạo bài học
- Kiểm tra API endpoints
- Đảm bảo responsive design
- Validate form inputs

### Báo cáo lỗi

Khi báo cáo lỗi, vui lòng cung cấp:
- Mô tả chi tiết lỗi
- Các bước để reproduce
- Screenshot (nếu có)
- Thông tin browser và OS

## 📊 Thống kê dự án

- **100+** khái niệm và từ chuyên môn
- **13** khóa học phát triển bản thân
- **15** nhóm khái niệm nguồn
- **66** từ/khái niệm KNN nội tâm
- **12** hình ảnh minh họa
- **Admin Panel** với tính năng tạo bài học động
- **API** để quản lý nội dung
- **Responsive design** cho mọi thiết bị

## 🔮 Roadmap

### Tính năng sắp tới
- [ ] Tích hợp Algolia Search
- [ ] Dark mode toggle
- [ ] User authentication cho Admin Panel
- [ ] Export bài học ra PDF
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app

### Cải tiến
- [ ] Performance optimization
- [ ] SEO enhancement
- [ ] Accessibility improvements
- [ ] API documentation
- [ ] Automated testing

## 📞 Liên hệ

- **Email**: docs@happymarket.com
- **Website**: https://happymarket.com
- **GitHub**: https://github.com/happymarket/docs
- **LinkedIn**: https://linkedin.com/company/happymarket
- **Facebook**: https://facebook.com/happymarket
- **Twitter**: https://twitter.com/happymarket
- **YouTube**: https://youtube.com/happymarket

## 📄 License

Dự án này được phát hành dưới [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Hugo** - Static site generator
- **Tailwind CSS** - CSS framework
- **Fuse.js** - Search library
- **Netlify** - Hosting platform
- **HappyMarket Team** - Content creators

---

**HappyMarketDocs** - Nơi kiến thức phát triển nội tâm được chia sẻ và phát triển! 🚀

*Được xây dựng với ❤️ bởi HappyMarket Team*
