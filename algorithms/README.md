# 📚 Ôn Luyện Thuật Toán JavaScript - Từ Cơ Bản Đến Nâng Cao

## Cách sử dụng

### Yêu cầu

- **Node.js** (khuyến nghị 14+). Kiểm tra: `node -v`

### Chạy từng bài thuật toán

Mỗi file là một bài độc lập. Chạy từ **thư mục gốc project (Preview)**:

```bash
# Ví dụ chạy bài Big-O, Linear Search, Binary Search
node algorithms/00-big-o-notation.js
node algorithms/01-linear-search.js
node algorithms/02-binary-search.js
```

Hoặc khi đang ở trong `algorithms/`:

```bash
cd algorithms
node 00-big-o-notation.js
node 01-linear-search.js
```

Thay `00`, `01`, … bằng số file bài bạn muốn (xem bảng bên dưới).

### 🎮 Playground – code thử và debug

File **`playground.js`** dùng để bạn tự viết code và xem log.

| Cách | Lệnh | Khi nào dùng |
|------|------|--------------|
| Chạy 1 lần | `node algorithms/playground.js` | Chỉ cần chạy nhanh, không cần watch |
| **Tự chạy lại khi save** | `npm run playground` (trong thư mục Preview) | Đang code, muốn mỗi lần save là thấy log mới |

**Cách dùng watch:** Mở terminal → chạy `npm run playground` → giữ terminal mở → sửa `playground.js` → **Ctrl+S** (Windows/Linux) hoặc **Cmd+S** (Mac) → script chạy lại và in log ra terminal.

Trong `playground.js` có sẵn helper: `debug()`, `assertEqual()`, `measureTime()`, `printArray()`.

## Cấu trúc mỗi file

- **Lý thuyết**: Giải thích thuật toán và ý tưởng
- **Độ phức tạp**: Big-O Time & Space complexity
- **Cheat Notes**: Tóm tắt nhanh cần nhớ
- **Implementation**: Code triển khai
- **Ví dụ**: Từ cơ bản → nâng cao, có input/output rõ ràng
- **Debug**: Có `console.log` để kiểm tra kết quả ngay

## Danh sách thuật toán

### 🟢 Cơ bản (Basic)
| # | File | Thuật toán |
|---|------|-----------|
| 00 | `00-big-o-notation.js` | Lý thuyết Big-O Notation |
| 01 | `01-linear-search.js` | Tìm kiếm tuyến tính |
| 02 | `02-binary-search.js` | Tìm kiếm nhị phân |
| 03 | `03-bubble-sort.js` | Sắp xếp nổi bọt |
| 04 | `04-selection-sort.js` | Sắp xếp chọn |
| 05 | `05-insertion-sort.js` | Sắp xếp chèn |
| 06 | `06-counting-sort.js` | Sắp xếp đếm |

### 🟡 Trung bình (Intermediate)
| # | File | Thuật toán |
|---|------|-----------|
| 07 | `07-merge-sort.js` | Sắp xếp trộn |
| 08 | `08-quick-sort.js` | Sắp xếp nhanh |
| 09 | `09-recursion.js` | Đệ quy |
| 10 | `10-two-pointers.js` | Kỹ thuật hai con trỏ |
| 11 | `11-sliding-window.js` | Cửa sổ trượt |
| 12 | `12-stack.js` | Ngăn xếp (Stack) |

### 🟠 Cấu trúc dữ liệu & Đồ thị
| # | File | Thuật toán |
|---|------|-----------|
| 13 | `13-queue.js` | Hàng đợi (Queue) |
| 14 | `14-linked-list.js` | Danh sách liên kết |
| 15 | `15-hash-table.js` | Bảng băm |
| 16 | `16-bfs.js` | Duyệt theo chiều rộng |
| 17 | `17-dfs.js` | Duyệt theo chiều sâu |
| 18 | `18-binary-tree.js` | Cây nhị phân |

### 🔴 Nâng cao (Advanced)
| # | File | Thuật toán |
|---|------|-----------|
| 19 | `19-heap.js` | Heap (Đống) |
| 20 | `20-dynamic-programming.js` | Quy hoạch động |
| 21 | `21-greedy.js` | Thuật toán tham lam |
| 22 | `22-backtracking.js` | Quay lui |
| 23 | `23-dijkstra.js` | Dijkstra (Đường đi ngắn nhất) |
| 24 | `24-trie.js` | Trie (Cây tiền tố) |

## Tips ôn luyện

1. **Đọc lý thuyết** trước khi xem code
2. **Tự code** trước, rồi mới so sánh với đáp án
3. **Chạy debug** bằng `node <file>.js` để hiểu luồng chạy
4. **Thay đổi input** để test nhiều trường hợp
5. **Giải bài tập** ở cuối mỗi file
