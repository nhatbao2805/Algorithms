# 🚀 Đẩy project lên GitHub

Làm **lần đầu** theo thứ tự dưới đây.

---

## Bước 1: Tạo repo mới trên GitHub

1. Vào https://github.com/new  
2. **Repository name:** đặt tên (vd: `algorithms-js`)  
3. Chọn **Public**  
4. **Không** tick "Add a README" – để repo trống  
5. Bấm **Create repository**

---

## Bước 2: Khởi tạo Git trong thư mục Preview

Mở terminal, chạy:

```bash
cd /Users/macbookpro2020/Preview

# Tạo repo git (chỉ trong thư mục Preview)
git init

# Thêm tất cả file (đã có .gitignore để bỏ node_modules)
git add .

# Commit lần đầu
git commit -m "Initial commit: algorithms & playground"
```

---

## Bước 3: Kết nối và push lên GitHub

Thay `USERNAME` và `REPO-NAME` bằng tên GitHub và tên repo của bạn (vd: `yourname/algorithms-js`):

```bash
# Thêm remote (thay YOUR_USERNAME và REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Đặt nhánh chính là main
git branch -M main

# Đẩy code lên
git push -u origin main
```

Nếu GitHub bắt đăng nhập: dùng **Personal Access Token** thay cho mật khẩu, hoặc cấu hình SSH.

---

## Lần sau (đã push rồi)

Khi sửa code xong, chỉ cần:

```bash
cd /Users/macbookpro2020/Preview
git add .
git commit -m "Mô tả thay đổi"
git push
```

---

## Dùng SSH thay vì HTTPS

Nếu bạn đã cấu hình SSH key với GitHub:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```
