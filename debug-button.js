// Debug script để force enable nút Tạo Bài Học
// Chạy script này trong console của browser

console.log('🔧 Debug: Force enabling Create Button');

// Kiểm tra các elements
const titleInput = document.getElementById('lessonTitle');
const hinhSelect = document.getElementById('hinhSelect');
const khaiNiemSelect = document.getElementById('khaiNiemSelect');
const tuKhaiNiemSelect = document.getElementById('tuKhaiNiemSelect');
const createBtn = document.getElementById('createBtn');

console.log('Elements found:', {
    titleInput: !!titleInput,
    hinhSelect: !!hinhSelect,
    khaiNiemSelect: !!khaiNiemSelect,
    tuKhaiNiemSelect: !!tuKhaiNiemSelect,
    createBtn: !!createBtn
});

// Kiểm tra values
console.log('Current values:', {
    title: titleInput?.value,
    hinh: hinhSelect?.value,
    khaiNiem: khaiNiemSelect?.value,
    tuKhaiNiem: tuKhaiNiemSelect?.value
});

// Force enable nút
if (createBtn) {
    createBtn.disabled = false;
    createBtn.style.opacity = '1';
    createBtn.style.cursor = 'pointer';
    console.log('✅ Create button force enabled');
} else {
    console.log('❌ Create button not found');
}

// Gọi validation nếu có
if (window.previewManager) {
    window.previewManager.validateForm();
    console.log('✅ Validation called');
}

if (window.forceValidate) {
    window.forceValidate();
    console.log('✅ Force validation called');
}
