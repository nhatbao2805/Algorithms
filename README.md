# 📚 Ôn Luyện Thuật Toán JavaScript

Bộ tài liệu ôn thuật toán từ cơ bản đến nâng cao bằng JavaScript.

- **algorithms/** – 25 file thuật toán (Big-O, tìm kiếm, sắp xếp, DP, đồ thị, …)
- **algorithms/playground.js** – File code thử nghiệm

Chi tiết danh sách bài & cấu trúc từng file: [algorithms/README.md](algorithms/README.md).

---

## Cách sử dụng

### Yêu cầu

- **Node.js** (phiên bản 14 trở lên). Kiểm tra: `node -v`

### 1. Cài đặt (chỉ lần đầu)

```bash
cd Preview          # vào thư mục project
npm install        # cài nodemon để dùng playground watch
```

### 2. Chạy từng bài thuật toán

Mỗi file trong `algorithms/` chạy độc lập. Từ thư mục **Preview**:

```bash
node algorithms/00-big-o-notation.js
node algorithms/01-linear-search.js
node algorithms/02-binary-search.js
# ... thay số/file tương ứng bài bạn muốn xem
```

Hoặc chạy từ thư mục `algorithms/`:

```bash
cd algorithms
node 00-big-o-notation.js
node 01-linear-search.js
```

### 3. Playground – code thử và xem log

- **Chạy một lần:**  
  `node algorithms/playground.js`

- **Tự chạy lại mỗi khi save:**  
  Trong thư mục **Preview** chạy:
  ```bash
  npm run playground
  ```
  Giữ terminal mở → sửa `algorithms/playground.js` → **Ctrl+S** (hoặc **Cmd+S**) → log tự chạy lại trong terminal.

### 4. Gợi ý ôn luyện

1. Đọc phần lý thuyết ở đầu mỗi file.
2. Chạy file bằng `node ...` để xem debug từng bước.
3. Tự code trong `playground.js`, dùng `debug()`, `assertEqual()`, `measureTime()`.
4. Thay input trong các ví dụ để test thêm.
