# Ôn Tập Mã Nguồn — `algorithms/15-hash-table-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Kiểm tra 2 mảng có phải anagram không (cùng tần suất ký tự).
  - BÀI 5: Tìm phần tử đầu tiên lặp lại trong mảng (dùng Set hoặc Map).
  - BÀI 6: Group anagrams: nhóm các chuỗi có cùng bộ ký tự.
- **Trung bình**
  - BÀI 7: Longest substring without repeating (dùng map lưu index ký tự gần nhất).
  - BÀI 8: Subarray sum equals K: đếm số subarray có tổng = K (prefix sum + map).
  - BÀI 9: Implement LRU Cache (get/put O(1)) với Map + doubly linked list hoặc Map thứ tự insertion.
- **Nâng cao**
  - BÀI 10: LFU Cache (least frequently used): khi full thì xoá key có tần số thấp nhất.
  - BÀI 11: First missing positive: mảng số nguyên, tìm số nguyên dương nhỏ nhất không xuất hiện. O(n) time, O(1) space.
  - BÀI 12: Copy random list (hash map map node cũ → node mới).

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * #️⃣ HASH TABLE - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║  HASH TABLE - BÀI TẬP                    ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Đếm tần suất từ trong câu.
console.log("  Input : 'this is a test this is good'
console.log("  Output: { this:2, is:2, a:1, test:1, good:1 }

console.log("\nBÀI 2: Two Sum dùng hash map (O(n)).
console.log("  Input : nums = [2, 7, 11, 15], target = 9
console.log("  Output: [0, 1]
console.log("  - Implement lại bài toán Two Sum nhưng dùng hash map key = số, value = index.

console.log("\nBÀI 3: LRU Cache (tư duy).
console.log("  Input : capacity=2 → put(1,1), put(2,2), get(1)→1, put(3,3) đuổi key 2
console.log("  Output: get(2)→-1/null, get(3)→3
console.log("  - Thiết kế API LRUCache(capacity) với get/put.

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Kiểm tra 2 mảng có phải anagram không (cùng tần suất ký tự).
console.log("  Input : 'listen', 'silent'  →  Output: true
console.log("BÀI 5: Tìm phần tử đầu tiên lặp lại trong mảng (dùng Set hoặc Map).
console.log("  Input : [2, 1, 3, 2, 4]  →  Output: 2
console.log("BÀI 6: Group anagrams: nhóm các chuỗi có cùng bộ ký tự.
console.log("  Input : ['eat','tea','tan','ate','nat','bat']
console.log("  Output: 3 nhóm (vd: [eat,tea,ate], [tan,nat], [bat])

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Longest substring without repeating (dùng map lưu index ký tự gần nhất).
console.log("BÀI 8: Subarray sum equals K: đếm số subarray có tổng = K (prefix sum + map).
console.log("BÀI 9: Implement LRU Cache (get/put O(1)) với Map + doubly linked list hoặc Map thứ tự insertion.

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: LFU Cache (least frequently used): khi full thì xoá key có tần số thấp nhất.
console.log("BÀI 11: First missing positive: mảng số nguyên, tìm số nguyên dương nhỏ nhất không xuất hiện. O(n) time, O(1) space.
console.log("BÀI 12: Copy random list (hash map map node cũ → node mới).

console.log("\n" + "=".repeat(50));
console.log("👉 Thử code ít nhất bài 1 và 2 trong playground.js, bài 3 để tư duy cấu trúc.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
