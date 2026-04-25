# Ôn Tập Mã Nguồn — `algorithms/02-binary-search-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Tìm vị trí cuối cùng của target (upper bound).
  - BÀI 5: Đếm số lần target xuất hiện trong mảng đã sort (dùng lower + upper bound).
  - BÀI 6: Tìm chèn: cho target, trả về index sẽ chèn để mảng vẫn sort (không cần chèn thật).
- **Trung bình**
  - BÀI 7: Search in rotated sorted array.
  - BÀI 8: Tìm căn bậc 2 của x (chỉ lấy phần nguyên) bằng binary search trên [0..x].
  - BÀI 9: Cho mảng 2D mỗi hàng sort tăng dần. Tìm target có tồn tại không.
- **Nâng cao**
  - BÀI 10: Median of two sorted arrays (O(log(min(n,m))).
  - BÀI 11: Tìm phần tử nhỏ nhất trong mảng xoay có phần tử trùng.
  - BÀI 12: Split array largest sum (binary search trên đáp án).

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🔍 BINARY SEARCH - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║   BINARY SEARCH - BÀI TẬP               ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Tìm target trong mảng đã sort.
console.log("  Input : nums = [1,2,3,4,5,6,7], target = 4
console.log("  Output: index = 3
console.log("  Gợi ý: function binarySearch(nums, target) { /* TODO */ }

console.log("\nBÀI 2: Tìm vị trí đầu tiên >= target (lower bound).
console.log("  Input : nums = [1,2,4,4,5], target = 4
console.log("  Output: index = 2
console.log("  Input : nums = [1,2,4,4,5], target = 3
console.log("  Output: index = 2  (chèn 3 vào trước số 4)
console.log("  Gợi ý: biến thể binary search.

console.log("\nBÀI 3: Tìm số nhỏ nhất trong mảng xoay.
console.log("  Mảng xoay = mảng tăng dần ban đầu bị cắt tại 1 điểm rồi đổi chỗ 2 đoạn.
console.log("  Ví dụ: [0,1,2,4,5,6,7] xoay thành [4,5,6,7,0,1,2].
console.log("  Đặc điểm: vẫn gồm 2 đoạn đã sort, và có 1 điểm gãy (pivot).
console.log("  Input : nums = [4,5,6,7,0,1,2]
console.log("  Output: 0  (index có thể là 4 tùy đề — thống nhất trả value hoặc index)
console.log("  Gợi ý: binary search trên mảng đã xoay (rotated).

console.log("\nBÀI 3.1: Tìm số lớn nhất trong mảng xoay.
console.log("  Input : nums = [4,5,6,7,0,1,2]
console.log("  Output: 7
console.log("  Gợi ý: tìm index nhỏ nhất (pivot) trước, rồi lấy phần tử đứng ngay trước pivot.
console.log("  Công thức: maxIndex = (pivot - 1 + n) % n


console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Tìm vị trí cuối cùng của target (upper bound).
console.log("  Input : nums = [1,2,4,4,5], target = 4
console.log("  Output: index = 3
console.log("BÀI 5: Đếm số lần target xuất hiện trong mảng đã sort (dùng lower + upper bound).
console.log("  Input : nums = [1,2,4,4,4,5], target = 4
console.log("  Output: 3
console.log("BÀI 6: Tìm chèn: cho target, trả về index sẽ chèn để mảng vẫn sort (không cần chèn thật).
console.log("  Input : nums = [1,3,5], target = 4
console.log("  Output: index = 2  (chèn 4 giữa 3 và 5)

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Search in rotated sorted array.
console.log("  Input : nums = [4,5,6,7,0,1,2], target = 0
console.log("  Output: index = 4
console.log("BÀI 8: Tìm căn bậc 2 của x (chỉ lấy phần nguyên) bằng binary search trên [0..x].
console.log("  Input : x = 8  →  Output: 2
console.log("  Input : x = 15  →  Output: 3
console.log("BÀI 9: Cho mảng 2D mỗi hàng sort tăng dần. Tìm target có tồn tại không.
console.log("  Input : [[1,3,5],[7,9,11],[13,15,17]], target = 9
console.log("  Output: true

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Median of two sorted arrays (O(log(min(n,m))).
console.log("  Input : nums1 = [1,3], nums2 = [2]
console.log("  Output: 2.0
console.log("BÀI 11: Tìm phần tử nhỏ nhất trong mảng xoay có phần tử trùng.
console.log("  Input : nums = [2,2,2,0,1,2]
console.log("  Output: 0
console.log("BÀI 12: Split array largest sum (binary search trên đáp án).
console.log("  Input : nums = [7,2,5,10,8], k = 2
console.log("  Output: 18  (tổng lớn nhất sau khi chia 2 đoạn tối thiểu hóa max-sum)

console.log("\n" + "=".repeat(50));
console.log("👉 Implement các hàm trên trong playground.js, so sánh với linear search.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
