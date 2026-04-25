# Ôn Tập Mã Nguồn — `algorithms/07-merge-sort-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Merge 2 mảng đã sort (hàm merge thuần) không dùng sort().
  - BÀI 5: In ra từng bước chia (left/right) và gộp (merge) khi chạy mergeSort.
  - BÀI 6: Merge sort giảm dần (đổi điều kiện trong merge).
- **Trung bình**
  - BÀI 7: Merge sort in-place (O(1) extra space) - khó, gợi ý merge 2 đoạn liền kề.
  - BÀI 8: Đếm số cặp nghịch thế (inversion count) dùng merge sort.
  - BÀI 9: Sort mảng object theo key (vd: age) dùng merge sort với comparator.
- **Nâng cao**
  - BÀI 10: Merge K mảng đã sort thành 1 mảng (divide and conquer hoặc heap).
  - BÀI 11: External merge sort: giả sử chỉ đọc/ghi từng block, merge từng cặp file.
  - BÀI 12: So sánh merge sort vs quick sort: worst case, stable, memory (đo thời gian trên mảng đã sort, random, nhiều trùng).

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🔀 MERGE SORT - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║   MERGE SORT - BÀI TẬP                  ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Cài merge sort tăng dần cho mảng số.
console.log("  Input : [5, 1, 4, 2, 8]
console.log("  Output: [1, 2, 4, 5, 8]
console.log("  - Viết hàm merge(a, b) gộp 2 mảng đã sort.
console.log("  - Viết hàm mergeSort(nums) dùng đệ quy.

console.log("\nBÀI 2: Đếm số inversion bằng merge sort.
console.log("  Input : [2, 4, 1, 3, 5]
console.log("  Output: 3  // (2,1), (4,1), (4,3)
console.log("  - Trong khi merge, mỗi lần lấy phần tử từ mảng phải trước mảng trái
console.log("    thì tăng số inversion lên đúng với số phần tử còn lại bên trái.

console.log("\nBÀI 3: So sánh thời gian merge sort với bubble sort trên mảng lớn.
console.log("  Input : mảng random n = 5000
console.log("  Output: merge << bubble (ghi ms từng thuật toán)

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Merge 2 mảng đã sort (hàm merge thuần) không dùng sort().
console.log("BÀI 5: In ra từng bước chia (left/right) và gộp (merge) khi chạy mergeSort.
console.log("BÀI 6: Merge sort giảm dần (đổi điều kiện trong merge).

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Merge sort in-place (O(1) extra space) - khó, gợi ý merge 2 đoạn liền kề.
console.log("BÀI 8: Đếm số cặp nghịch thế (inversion count) dùng merge sort.
console.log("BÀI 9: Sort mảng object theo key (vd: age) dùng merge sort với comparator.

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Merge K mảng đã sort thành 1 mảng (divide and conquer hoặc heap).
console.log("BÀI 11: External merge sort: giả sử chỉ đọc/ghi từng block, merge từng cặp file.
console.log("BÀI 12: So sánh merge sort vs quick sort: worst case, stable, memory (đo thời gian trên mảng đã sort, random, nhiều trùng).

console.log("\n" + "=".repeat(50));
console.log("👉 Implement trong playground.js, dùng measureTime() để so sánh.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
