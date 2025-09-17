# Wiki - Tài liệu Nhượng quyền Kinh doanh

## 📋 Tổng quan

**Wiki** là một trang web documentation chuyên nghiệp về chủ đề nhượng quyền kinh doanh, được xây dựng trên nền tảng Hugo framework với thiết kế tương tự AWS Documentation. Trang web cung cấp tài liệu toàn diện, dễ tìm kiếm và thân thiện với người dùng về các khía cạnh của nhượng quyền kinh doanh.

## 🎯 Mục tiêu

- Tạo ra một nguồn tài liệu tập trung về nhượng quyền kinh doanh bằng tiếng Việt
- Cung cấp giao diện người dùng hiện đại, dễ sử dụng như AWS Docs
- Hỗ trợ tìm kiếm nhanh chóng và điều hướng trực quan
- Responsive design hoạt động tốt trên mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **Framework**: [Hugo](https://gohugo.io/) - Static Site Generator nhanh và mạnh mẽ
- **Theme**: Custom theme dựa trên phong cách AWS Documentation
- **CSS Framework**: Tailwind CSS cho styling hiện đại
- **Search**: Algolia DocSearch hoặc Fuse.js cho tìm kiếm
- **Deployment**: Netlify/Vercel cho hosting miễn phí
- **Version Control**: Git với GitHub

## 📁 Cấu trúc dự án

```
Wiki/
├── content/                    # Nội dung tài liệu
│   ├── _index.md              # Trang chủ
│   ├── getting-started/       # Bắt đầu với nhượng quyền
│   ├── business-models/       # Các mô hình kinh doanh
│   ├── legal-aspects/         # Khía cạnh pháp lý
│   ├── financial-planning/    # Lập kế hoạch tài chính
│   ├── marketing-strategies/  # Chiến lược marketing
│   ├── operations/            # Vận hành
│   ├── case-studies/          # Nghiên cứu tình huống
│   └── resources/             # Tài nguyên bổ sung
├── static/                    # Tài nguyên tĩnh
│   ├── images/               # Hình ảnh
│   ├── pdfs/                 # Tài liệu PDF
│   └── videos/               # Video hướng dẫn
├── themes/                    # Custom Hugo theme
├── layouts/                   # Custom layouts
├── data/                      # Dữ liệu cấu hình
├── config.yaml               # Cấu hình Hugo
└── README.md                 # Tài liệu này
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

1. **Bắt đầu với nhượng quyền**
   - Nhượng quyền là gì?
   - Lợi ích và rủi ro
   - Các loại hình nhượng quyền
   - Quy trình đăng ký

2. **Mô hình kinh doanh**
   - Franchise truyền thống
   - Master franchise
   - Area development
   - Multi-unit franchise

3. **Khía cạnh pháp lý**
   - Hợp đồng nhượng quyền
   - Quy định pháp luật Việt Nam
   - Bảo vệ thương hiệu
   - Giải quyết tranh chấp

4. **Lập kế hoạch tài chính**
   - Chi phí đầu tư ban đầu
   - Phí nhượng quyền
   - Dự báo doanh thu
   - Quản lý dòng tiền

5. **Chiến lược marketing**
   - Xây dựng thương hiệu
   - Marketing địa phương
   - Digital marketing
   - Quan hệ công chúng

6. **Vận hành**
   - Quản lý nhân sự
   - Hệ thống báo cáo
   - Đào tạo nhân viên
   - Kiểm soát chất lượng

## 🎨 Tính năng giao diện

- **Design System**: Thiết kế nhất quán theo phong cách AWS
- **Dark/Light Mode**: Chuyển đổi giao diện sáng/tối
- **Responsive**: Tối ưu cho mọi kích thước màn hình
- **Search**: Tìm kiếm nhanh trong toàn bộ nội dung
- **Navigation**: Menu điều hướng trực quan
- **Breadcrumbs**: Hiển thị vị trí hiện tại
- **Table of Contents**: Mục lục tự động cho mỗi trang
- **Code Highlighting**: Highlight code blocks
- **Print Friendly**: Tối ưu cho in ấn

## 🔧 Cấu hình

### Cấu hình Hugo (config.yaml)

```yaml
baseURL: 'https://happymarketdocs.com'
languageCode: 'vi-VN'
title: 'HappyMarketDocs - Tài liệu Nhượng quyền Kinh doanh'
theme: 'happymarket-theme'

params:
  description: 'Tài liệu toàn diện về nhượng quyền kinh doanh tại Việt Nam'
  author: 'HappyMarket Team'
  version: '1.0.0'
  
  # Theme settings
  theme:
    primary_color: '#FF9900'  # AWS Orange
    secondary_color: '#232F3E'  # AWS Dark Blue
    
  # Search configuration
  search:
    enable: true
    type: 'fuse'  # or 'algolia'
    
  # Social links
  social:
    github: 'https://github.com/happymarket/docs'
    linkedin: 'https://linkedin.com/company/happymarket'
```

## 📚 Viết nội dung

### Cấu trúc file markdown

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn gọn"
date: 2024-01-01
draft: false
tags: ["nhượng quyền", "kinh doanh", "pháp lý"]
categories: ["legal-aspects"]
weight: 10
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

## 🚀 Deployment

### Netlify (Khuyến nghị)

1. **Kết nối GitHub repository**
2. **Cấu hình build settings**:
   - Build command: `hugo --gc --minify`
   - Publish directory: `public`
3. **Deploy tự động** khi push code

### Vercel

1. **Import project** từ GitHub
2. **Cấu hình framework**: Hugo
3. **Deploy** tự động

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp để cải thiện tài liệu:

1. **Fork** repository
2. **Tạo branch** mới cho feature
3. **Commit** thay đổi
4. **Push** lên branch
5. **Tạo Pull Request**

### Quy tắc đóng góp

- Tuân thủ cấu trúc thư mục hiện có
- Viết nội dung bằng tiếng Việt chuẩn
- Kiểm tra chính tả và ngữ pháp
- Thêm hình ảnh chất lượng cao
- Cập nhật README nếu cần

## 📞 Liên hệ

- **Email**: docs@happymarket.com
- **Website**: https://happymarket.com
- **GitHub**: https://github.com/happymarket/docs

## 📄 License

Dự án này được phát hành dưới [MIT License](LICENSE).

---

**Wiki** - Nơi kiến thức nhượng quyền được chia sẻ và phát triển! 🚀
