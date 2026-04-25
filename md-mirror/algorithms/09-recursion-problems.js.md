# Ôn Tập Mã Nguồn — `algorithms/09-recursion-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 5: Tính tổng mảng bằng đệ quy (sum(arr) = arr[0] + sum(arr.slice(1))).
  - BÀI 6: Đảo chuỗi bằng đệ quy (reverse(str)).
  - BÀI 7: Kiểm tra palindrome bằng đệ quy (so sánh ký tự đầu/cuối, gọi đệ quy đoạn giữa).
- **Trung bình**
  - BÀI 8: Tổng mảng lồng nhau (nested array): [1, [2, 3], [4, [5, 6]]] → 21.
  - BÀI 9: Sinh tất cả tập con (subsets) của mảng. [1,2] → [[],[1],[2],[1,2]].
  - BÀI 10: Tower of Hanoi: in ra từng bước chuyển n đĩa từ cột A sang C (qua B).
- **Nâng cao**
  - BÀI 11: Combination sum: cho mảng và target, tìm tất cả tổ hợp (có lặp phần tử) có tổng = target.
  - BÀI 12: Flatten object đệ quy: { a: 1, b: { c: 2, d: { e: 3 } } } → { a:1, 'b.c':2, 'b.d.e':3 }.
  - BÀI 13: Generate parentheses: sinh tất cả chuỗi ngoặc đúng có n cặp. VD n=2 → ['(())','()()'].

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🔁 RECURSION - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║    RECURSION - BÀI TẬP                  ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Tính giai thừa n! bằng đệ quy và vòng lặp.
console.log("  Input : n = 5
console.log("  Output: 120
console.log("  So sánh: code, call stack (debug), hiệu năng.

console.log("\nBÀI 2: Fibonacci với memoization.
console.log("  Input : n = 10
console.log("  Output: fib(10) = 55
console.log("  - Viết fib(n) đệ quy thường → đo thời gian với n=35.
console.log("  - Viết fibMemo(n) dùng object memo → đo lại.

console.log("\nBÀI 3: Đếm số node trong cây nhị phân (TreeNode).
console.log("  Input : cây 3 → 9, 20 → 15, 7 (như maxDepth ví dụ)
console.log("  Output: 5
console.log("  - Hàm: countNodes(root).

console.log("\nBÀI 4: Sinh tất cả hoán vị (permutations) của mảng.
console.log("  - Input : [1,2,3]
console.log("  - Output: [[1,2,3],[1,3,2],[2,1,3],...].

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 5: Tính tổng mảng bằng đệ quy (sum(arr) = arr[0] + sum(arr.slice(1))).
console.log("  Input : [1, 2, 3, 4]  →  Output: 10
console.log("BÀI 6: Đảo chuỗi bằng đệ quy (reverse(str)).
console.log("  Input : 'hello'  →  Output: 'olleh'
console.log("BÀI 7: Kiểm tra palindrome bằng đệ quy (so sánh ký tự đầu/cuối, gọi đệ quy đoạn giữa).
console.log("  Input : 'racecar'  →  Output: true
console.log("  Input : 'hello'  →  Output: false

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 8: Tổng mảng lồng nhau (nested array): [1, [2, 3], [4, [5, 6]]] → 21.
console.log("BÀI 9: Sinh tất cả tập con (subsets) của mảng. [1,2] → [[],[1],[2],[1,2]].
console.log("BÀI 10: Tower of Hanoi: in ra từng bước chuyển n đĩa từ cột A sang C (qua B).

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 11: Combination sum: cho mảng và target, tìm tất cả tổ hợp (có lặp phần tử) có tổng = target.
console.log("BÀI 12: Flatten object đệ quy: { a: 1, b: { c: 2, d: { e: 3 } } } → { a:1, 'b.c':2, 'b.d.e':3 }.
console.log("BÀI 13: Generate parentheses: sinh tất cả chuỗi ngoặc đúng có n cặp. VD n=2 → ['(())','()()'].

console.log("\n" + "=".repeat(50));
console.log("👉 Tự implement các hàm trong playground.js, dùng debug() để quan sát call stack.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
