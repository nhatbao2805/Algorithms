# Ôn Tập Mã Nguồn — `algorithms/05-insertion-sort-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Insertion sort giảm dần (chèn vào vị trí đúng trong đoạn đã sort).
  - BÀI 5: In ra mảng sau mỗi lần chèn 1 phần tử.
  - BÀI 6: Dùng binary search để tìm vị trí chèn (binary insertion sort) → giảm số lần so sánh.
- **Trung bình**
  - BÀI 7: Chèn 1 phần tử mới vào mảng đã sort (giữ mảng sort, không sort lại toàn bộ).
  - BÀI 8: Shell sort: insertion sort với gap (n/2, n/4, ... 1). So sánh thời gian với insertion thuần.
  - BÀI 9: Kiểm tra insertion sort ổn định: sort mảng (value, id), xem thứ tự id với value bằng nhau.
- **Nâng cao**
  - BÀI 10: Linked list insertion sort: chèn từng node vào danh sách đã sort (O(1) space nếu in-place).
  - BÀI 11: Đếm số phần tử 'lệch' so với vị trí đúng (số inversion) bằng insertion sort.
  - BÀI 12: Tim sort ý tưởng: chia mảng thành các run (đoạn tăng/giảm), sort từng run bằng insertion, merge các run.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🔁 INSERTION SORT - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║  INSERTION SORT - BÀI TẬP               ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Cài insertion sort tăng dần.
console.log("  Input : [5, 1, 4, 2, 8]
console.log("  Output: [1, 2, 4, 5, 8]
console.log("  Ý tưởng: coi như ta đang sắp xếp bài, mỗi lần chèn 1 phần tử vào vị trí đúng.

console.log("\nBÀI 2: Sắp xếp gần như đã sort.
console.log("  Input : [1, 2, 3, 5, 4, 6, 7]
console.log("  Output: [1, 2, 3, 4, 5, 6, 7]  (insertion thường nhanh hơn bubble trên case này)

console.log("\nBÀI 3: Sắp xếp mảng các object theo field 'age'.
console.log(
  "  Input : [{name:'A', age:30}, {name:'B', age:20}, {name:'C', age:25}]",
);
console.log(
  "  Output: [{name:'B', age:20}, {name:'C', age:25}, {name:'A', age:30}]",
);

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Insertion sort giảm dần (chèn vào vị trí đúng trong đoạn đã sort).
console.log("BÀI 5: In ra mảng sau mỗi lần chèn 1 phần tử.
console.log("BÀI 6: Dùng binary search để tìm vị trí chèn (binary insertion sort) → giảm số lần so sánh.

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Chèn 1 phần tử mới vào mảng đã sort (giữ mảng sort, không sort lại toàn bộ).
console.log("BÀI 8: Shell sort: insertion sort với gap (n/2, n/4, ... 1). So sánh thời gian với insertion thuần.
console.log("BÀI 9: Kiểm tra insertion sort ổn định: sort mảng (value, id), xem thứ tự id với value bằng nhau.

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Linked list insertion sort: chèn từng node vào danh sách đã sort (O(1) space nếu in-place).
console.log("BÀI 11: Đếm số phần tử 'lệch' so với vị trí đúng (số inversion) bằng insertion sort.
console.log("BÀI 12: Tim sort ý tưởng: chia mảng thành các run (đoạn tăng/giảm), sort từng run bằng insertion, merge các run.

console.log("\n" + "=".repeat(50));
console.log("👉 Tự implement trong playground.js, dùng debug() để in từng bước chèn.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
