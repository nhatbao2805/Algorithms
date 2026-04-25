# Ôn Tập Mã Nguồn — `algorithms/19-heap-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Implement min-heap (insert, extractMin, peek) bằng mảng.
  - BÀI 5: Heapify: cho mảng chưa heap, biến thành min-heap (từ cuối lên gọi sink down).
  - BÀI 6: Tìm K phần tử lớn nhất trong mảng (min-heap size k hoặc sort).
- **Trung bình**
  - BÀI 7: Find median from data stream: thêm số liên tục, trả median hiện tại (2 heap: max-heap nửa trái, min-heap nửa phải).
  - BÀI 8: Task scheduler: cho mảng task và cooldown n, tìm thời gian ít nhất (heap theo tần số).
  - BÀI 9: K closest points to origin: dùng max-heap size k (hoặc quickselect).
- **Nâng cao**
  - BÀI 10: Merge K sorted arrays (mỗi array đã sort, heap lưu (value, arrayIndex, elementIndex)).
  - BÀI 11: Design Twitter: postTweet, getNewsFeed (top 10 mới nhất từ followings), follow/unfollow (heap theo timestamp).
  - BÀI 12: Trapping rain water II: lưới 3D chiều cao, nước đọng (min-heap từ biên, mở rộng vào trong).

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * ⛰️ HEAP (PRIORITY QUEUE) - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║   HEAP / PRIORITY QUEUE - BÀI TẬP       ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: K-th Largest Element.
console.log("  Input : nums = [3,2,1,5,6,4], k = 2
console.log("  Output: 5
console.log("  Gợi ý: dùng min-heap size k hoặc sort rồi lấy phần tử k-th từ cuối.

console.log("\nBÀI 2: Top K Frequent Elements.
console.log("  Input : [1,1,1,2,2,3], k = 2
console.log("  Output: [1,2]
console.log("  Gợi ý: đếm tần suất bằng hash map, dùng heap để lấy k lớn nhất.

console.log("\nBÀI 3: Merge K Sorted Lists (sử dụng heap).
console.log("  Input : lists = [[1,4,5],[1,3,4],[2,6]]
console.log("  Output: [1,1,2,3,4,4,5,6]
console.log("  - Mỗi list đã sort, gộp thành 1 list/array sort.

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Implement min-heap (insert, extractMin, peek) bằng mảng.
console.log("BÀI 5: Heapify: cho mảng chưa heap, biến thành min-heap (từ cuối lên gọi sink down).
console.log("BÀI 6: Tìm K phần tử lớn nhất trong mảng (min-heap size k hoặc sort).

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Find median from data stream: thêm số liên tục, trả median hiện tại (2 heap: max-heap nửa trái, min-heap nửa phải).
console.log("BÀI 8: Task scheduler: cho mảng task và cooldown n, tìm thời gian ít nhất (heap theo tần số).
console.log("BÀI 9: K closest points to origin: dùng max-heap size k (hoặc quickselect).

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Merge K sorted arrays (mỗi array đã sort, heap lưu (value, arrayIndex, elementIndex)).
console.log("BÀI 11: Design Twitter: postTweet, getNewsFeed (top 10 mới nhất từ followings), follow/unfollow (heap theo timestamp).
console.log("BÀI 12: Trapping rain water II: lưới 3D chiều cao, nước đọng (min-heap từ biên, mở rộng vào trong).

console.log("\n" + "=".repeat(50));
console.log("👉 Thử hiện thực priority queue đơn giản trong playground.js hoặc dùng cấu trúc sẵn.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
