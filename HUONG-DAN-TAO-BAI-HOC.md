# 📚 HƯỚNG DẪN SỬ DỤNG TÍNH NĂNG TẠO BÀI HỌC

## 🎯 Tổng quan

Tính năng **"Tạo Bài Học"** cho phép bạn tạo ra các bài học hoàn chỉnh từ Admin Panel bằng cách kết hợp 3 nguồn nội dung chính:

- **Hình ảnh** - Các hình ảnh minh họa trực quan
- **Khái niệm nguồn** - Các khái niệm cốt lõi về phát triển nội tâm  
- **Từ - Khái niệm** - Các thuật ngữ chuyên môn sâu sắc

## 🚀 Cách sử dụng

### Bước 1: Truy cập Admin Panel

1. Mở trình duyệt và truy cập: `http://localhost:1313/admin/`
2. Click vào card **"Tạo Bài Học"**
3. Click nút **"Bắt đầu tạo"**

### Bước 2: Nhập thông tin cơ bản

1. **Tên bài học** (bắt buộc):
   - Nhập tên bài học (5-100 ký tự)
   - URL slug sẽ được tạo tự động

2. **URL slug**:
   - Được tạo tự động từ tên bài học
   - Có thể chỉnh sửa nếu cần

### Bước 3: Chọn nội dung từ 3 nguồn

#### 3.1 Hình ảnh
- Sử dụng **tìm kiếm** để tìm hình ảnh phù hợp
- **Chọn hình ảnh** từ dropdown
- Mỗi hình ảnh có mã ID và mô tả chi tiết

#### 3.2 Khái niệm nguồn
- Tìm kiếm theo tên hoặc mô tả
- Chọn khái niệm từ các nhóm: quy luật, nguyên lý, công thức, năng lực, v.v.
- Mỗi khái niệm có mã NT và phân loại rõ ràng

#### 3.3 Từ - Khái niệm
- Tìm kiếm trong 66 từ/khái niệm chuyên môn
- Chọn từ khái niệm phù hợp với chủ đề
- Mỗi từ có mã KNW và định nghĩa chi tiết

### Bước 4: Preview và tạo bài học

1. **Preview**:
   - Click nút **"Preview"** để xem nội dung ghép
   - Kiểm tra cấu trúc và nội dung bài học
   - Chỉnh sửa nếu cần thiết

2. **Tạo bài học**:
   - Click nút **"Tạo Bài Học"**
   - Hệ thống sẽ tạo file markdown trong `/content/BAI-HOC/`
   - Hugo tự động render bài học ra `/public/bai-hoc/`

3. **Hoàn thành**:
   - Nhận thông báo thành công
   - Click **"Xem bài học"** để mở trang bài học
   - Bài học sẽ xuất hiện trong menu **"Bài học"**

## 📁 Cấu trúc bài học được tạo

Mỗi bài học sẽ có cấu trúc:

```markdown
# [Tên bài học]

## Hình ảnh minh họa
[Nội dung từ file HINH]

---

## Khái niệm nguồn  
[Nội dung từ file KHAI-NIEM-NGUON]

---

## Từ - Khái niệm
[Nội dung từ file TU-KHAINIEM]

---

## Tổng kết
[Phần tổng hợp tự động]
```

## 🔧 Tính năng kỹ thuật

### Frontend (Admin Panel)
- **Form validation**: Kiểm tra đầy đủ thông tin
- **Real-time preview**: Xem trước nội dung
- **Search functionality**: Tìm kiếm nhanh trong danh sách
- **Responsive design**: Hoạt động trên mọi thiết bị

### Backend (Netlify Functions)
- **API endpoint**: `/.netlify/functions/create-lesson`
- **File creation**: Tự động tạo file markdown
- **Validation**: Kiểm tra dữ liệu đầu vào
- **Error handling**: Xử lý lỗi và thông báo

### Hugo Integration
- **Auto-render**: Tự động render bài học
- **Navigation**: Tích hợp vào menu chính
- **SEO**: Tối ưu cho search engines
- **Responsive**: Layout responsive cho mọi device

## 📊 Quản lý bài học

### Xem danh sách bài học
- Truy cập: `http://localhost:1313/bai-hoc/`
- Hiển thị tất cả bài học đã tạo
- Sắp xếp theo ngày tạo (mới nhất trước)

### Xem chi tiết bài học
- Click vào tên bài học trong danh sách
- URL: `http://localhost:1313/bai-hoc/[slug]/`
- Hiển thị đầy đủ nội dung với navigation

### Chỉnh sửa bài học
- Mở file markdown trong `/content/BAI-HOC/[slug]/index.md`
- Chỉnh sửa nội dung
- Hugo sẽ tự động rebuild khi có thay đổi

## 🚨 Lưu ý quan trọng

### Validation Rules
- **Tên bài học**: 5-100 ký tự
- **3 nguồn nội dung**: Bắt buộc chọn đầy đủ
- **Slug uniqueness**: Không được trùng lặp

### File Management
- **Auto-create folders**: Hệ thống tự tạo thư mục
- **File naming**: Sử dụng slug làm tên thư mục
- **Backup**: Nên backup trước khi tạo bài học mới

### Performance
- **Build time**: Hugo build mất ~400ms
- **File size**: Mỗi bài học ~2-5KB
- **Cache**: Netlify tự động cache static files

## 🔍 Troubleshooting

### Lỗi thường gặp

#### 1. "Failed to create lesson"
- **Nguyên nhân**: API không hoạt động hoặc validation fail
- **Giải pháp**: Kiểm tra console browser, đảm bảo đầy đủ thông tin

#### 2. "Lesson already exists"
- **Nguyên nhân**: Slug đã tồn tại
- **Giải pháp**: Thay đổi tên bài học hoặc slug

#### 3. "Cannot load files"
- **Nguyên nhân**: API endpoints không hoạt động
- **Giải pháp**: Kiểm tra mock data trong file-loader.js

#### 4. Bài học không hiển thị
- **Nguyên nhân**: Hugo chưa build hoặc cache
- **Giải pháp**: Chạy `hugo server -D` để rebuild

### Debug Mode

Để debug, mở Developer Tools (F12) và kiểm tra:

1. **Console tab**: Xem lỗi JavaScript
2. **Network tab**: Kiểm tra API calls
3. **Application tab**: Xem localStorage/sessionStorage

## 📈 Monitoring và Analytics

### Metrics quan trọng
- **Số bài học tạo**: Theo ngày/tuần/tháng
- **Success rate**: Tỷ lệ tạo bài học thành công
- **Error rate**: Tỷ lệ lỗi và loại lỗi
- **User engagement**: Số lượt xem bài học

### Tools được sử dụng
- **Console logging**: Debug và monitoring
- **Netlify Analytics**: Traffic và performance
- **Hugo build logs**: Build time và errors

## 🔮 Roadmap

### Tính năng sắp tới
- [ ] **Bulk import**: Import nhiều bài học cùng lúc
- [ ] **Template system**: Tạo template cho bài học
- [ ] **Version control**: Quản lý phiên bản bài học
- [ ] **Collaboration**: Nhiều người cùng tạo bài học
- [ ] **Auto-save**: Tự động lưu draft
- [ ] **Rich editor**: WYSIWYG editor cho nội dung

### Cải tiến
- [ ] **Performance**: Tối ưu tốc độ tạo bài học
- [ ] **UX**: Cải thiện trải nghiệm người dùng
- [ ] **Mobile**: Tối ưu cho mobile devices
- [ ] **Accessibility**: Hỗ trợ screen readers

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng:

1. **Kiểm tra documentation**: Đọc kỹ hướng dẫn này
2. **Check console**: Xem lỗi trong browser console
3. **Test locally**: Chạy `hugo server -D` để test
4. **Contact support**: Liên hệ team phát triển

---

**HappyMarketDocs** - Tạo bài học dễ dàng và hiệu quả! 🚀

*Cập nhật lần cuối: 15/01/2024*
