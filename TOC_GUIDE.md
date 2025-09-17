# 📋 Hướng dẫn sử dụng Table of Contents tự động của Hugo

## ✅ Đã hoàn thành

### 1. Kích hoạt TOC trong các file markdown
Đã cập nhật các file sau để kích hoạt Table of Contents:
- `content/getting-started/what-is-franchising.md`
- `content/getting-started/benefits-and-risks.md` 
- `content/getting-started/types-of-franchising.md`

**Thay đổi**: `tableOfContents: false` → `tableOfContents: true`

### 2. Cải thiện cấu hình Hugo
Đã cập nhật `config.yaml`:
```yaml
tableOfContents:
  startLevel: 2      # Bắt đầu từ heading level 2 (##)
  endLevel: 6        # Kết thúc ở heading level 6 (######)
  ordered: true      # Hiển thị số thứ tự
```

### 3. Template TOC đã sẵn sàng
File `themes/happymarket-theme/layouts/partials/toc.html` đã được tạo sẵn với giao diện đẹp.

## 🚀 Cách sử dụng

### Kích hoạt TOC cho file mới
Thêm vào front matter của file markdown:
```yaml
---
title: "Tiêu đề bài viết"
tableOfContents: true  # ← Thêm dòng này
---
```

### Cấu trúc heading để TOC hoạt động tốt
```markdown
# Tiêu đề chính (H1) - Không hiển thị trong TOC

## Tiêu đề cấp 2 (H2) - Hiển thị trong TOC
### Tiêu đề cấp 3 (H3) - Hiển thị trong TOC
#### Tiêu đề cấp 4 (H4) - Hiển thị trong TOC
##### Tiêu đề cấp 5 (H5) - Hiển thị trong TOC
###### Tiêu đề cấp 6 (H6) - Hiển thị trong TOC
```

### Tùy chỉnh TOC cho từng trang
```yaml
---
title: "Tiêu đề"
tableOfContents: true
toc:
  startLevel: 2
  endLevel: 4
---
```

## 🎨 Giao diện TOC

TOC sẽ hiển thị với:
- 📋 Icon mục lục
- Số thứ tự (1, 2, 3...)
- Liên kết nhảy đến từng phần
- Styling đẹp với Tailwind CSS

## 🔧 Cấu hình nâng cao

### Thay đổi cấu hình toàn cục
Trong `config.yaml`:
```yaml
markup:
  tableOfContents:
    startLevel: 2
    endLevel: 6
    ordered: true
    marker: "<!-- toc -->"  # Tùy chỉnh vị trí hiển thị
```

### Tùy chỉnh template TOC
Chỉnh sửa `themes/happymarket-theme/layouts/partials/toc.html`:
```html
{{ if .TableOfContents }}
<div class="toc-container">
    <h3>📋 Mục lục</h3>
    {{ .TableOfContents }}
</div>
{{ end }}
```

## 📝 Lưu ý quan trọng

1. **TOC chỉ hiển thị khi có ít nhất 2 heading** (H2 trở lên)
2. **H1 không hiển thị trong TOC** (theo cấu hình startLevel: 2)
3. **TOC tự động cập nhật** khi bạn thay đổi heading
4. **Có thể tắt TOC** bằng cách set `tableOfContents: false`

## 🧪 Test

Để test TOC:
1. Chạy `hugo server -D`
2. Truy cập `http://localhost:1313`
3. Vào các trang đã kích hoạt TOC
4. Kiểm tra mục lục hiển thị bên trái hoặc trên đầu trang

## 📚 Tài liệu tham khảo

- [Hugo Table of Contents Documentation](https://gohugo.io/content-management/toc/)
- [Hugo Markdown Configuration](https://gohugo.io/getting-started/configuration-markup/)
