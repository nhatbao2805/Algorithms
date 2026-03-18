/**
 * ============================================
 * 🔍 BINARY SEARCH - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   BINARY SEARCH - BÀI TẬP               ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Tìm target trong mảng đã sort.");
console.log("  Input : nums = [1,2,3,4,5,6,7], target = 4");
console.log("  Output: index = 3");
console.log("  Gợi ý: function binarySearch(nums, target) { /* TODO */ }");

console.log("\nBÀI 2: Tìm vị trí đầu tiên >= target (lower bound).");
console.log("  Input : nums = [1,2,4,4,5], target = 4 → output = 2");
console.log("  Input : nums = [1,2,4,4,5], target = 3 → output = 2");
console.log("  Gợi ý: biến thể binary search.");

console.log("\nBÀI 3: Tìm số nhỏ nhất trong mảng xoay.");
console.log("  Input : [4,5,6,7,0,1,2] → output = 0");
console.log("  Gợi ý: binary search trên mảng đã xoay (rotated).");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Tìm vị trí cuối cùng của target (upper bound). [1,2,4,4,5], target=4 → 3.");
console.log("BÀI 5: Đếm số lần target xuất hiện trong mảng đã sort (dùng lower + upper bound).");
console.log("BÀI 6: Tìm chèn: cho target, trả về index sẽ chèn để mảng vẫn sort (không cần chèn thật).");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Search in rotated sorted array: [4,5,6,7,0,1,2], target=0 → index 4.");
console.log("BÀI 8: Tìm căn bậc 2 của x (chỉ lấy phần nguyên) bằng binary search trên [0..x].");
console.log("BÀI 9: Cho mảng 2D mỗi hàng sort tăng dần. Tìm target có tồn tại không (binary search từng hàng hoặc 1 lần).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Median of two sorted arrays (độ phức tạp O(log(min(n,m))).");
console.log("BÀI 11: Tìm phần tử nhỏ nhất trong mảng xoay có phần tử trùng. [2,2,2,0,1,2].");
console.log("BÀI 12: Split array largest sum: chia mảng thành k subarray liên tiếp sao cho tổng lớn nhất trong các subarray là nhỏ nhất (binary search trên đáp án).");

console.log("\n" + "=".repeat(50));
console.log("👉 Implement các hàm trên trong playground.js, so sánh với linear search.");
console.log("=".repeat(50));

