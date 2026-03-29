/**
 * ============================================
 * 🔍 LINEAR SEARCH - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   LINEAR SEARCH - BÀI TẬP               ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Tìm phần tử đầu tiên = target trong mảng.");
console.log("  Input : nums = [5, 1, 7, 3, 9], target = 3");
console.log("  Output: index = 3");
console.log("  Gợi ý: function linearSearch(nums, target) { /* TODO */ }");

console.log("\nBÀI 2: Tìm tất cả vị trí của target.");
console.log("  Input : nums = [1, 2, 3, 2, 4, 2], target = 2");
console.log("  Output: [1, 3, 5]");
console.log("  Gợi ý: trả về mảng index, dùng 1 vòng for.");

console.log("\nBÀI 3: Tìm phần tử đầu tiên thoả predicate.");
console.log(
  "  Input : nums = [1, 3, 4, 5], predicate = (n) => n % 2 === 0  // số chẵn đầu tiên",
);
console.log("  Output: index = 2  (phần tử 4)");
console.log("  Input : nums = [10, 200, 50], predicate = (n) => n > 100");
console.log("  Output: index = 1  (phần tử 200)");
console.log("  Input : nums = [1, 3, 5], predicate = (n) => n % 2 === 0  // không có số chẵn");
console.log("  Output: index = -1  (hoặc null / undefined — thống nhất 1 quy ước)");
console.log("  Gợi ý: function findFirst(nums, predicate) { /* TODO */ }");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Tìm index cuối cùng của target trong mảng (duyệt từ cuối hoặc từ đầu).");
console.log("  Input : nums = [1, 2, 3, 2, 4, 2], target = 2");
console.log("  Output: index = 5");
console.log("BÀI 5: Kiểm tra target có tồn tại trong mảng hay không (trả true/false).");
console.log("  Input : nums = [1, 2, 3], target = 2  →  Output: true");
console.log("  Input : nums = [1, 2, 3], target = 5  →  Output: false");
console.log("BÀI 6: Tìm giá trị nhỏ nhất / lớn nhất trong mảng (1 lần duyệt).");
console.log("  Input : [3, 1, 4, 1, 5]  →  Output: min = 1, max = 5");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Tìm phần tử đầu tiên lặp lại (xuất hiện ≥ 2 lần).");
console.log("  Input : [2, 1, 3, 2, 4]  →  Output: 2");
console.log("BÀI 8: Tìm 2 phần tử có tổng = target (2 vòng for → sau đó tối ưu bằng map).");
console.log("  Input : nums = [2, 7, 11, 15], target = 9  →  Output: [0, 1]  (2+7=9)");
console.log("BÀI 9: Tìm subarray liên tiếp có tổng lớn nhất (Kadane hoặc brute force).");
console.log("  Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]  →  Output: 6  // [4,-1,2,1]");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Tìm phần tử thiếu trong mảng [1..n] (chỉ thiếu 1 số), O(n).");
console.log("  Input : [1, 2, 4, 5] (n=4)  →  Output: 3");
console.log("BÀI 11: Cho mảng có 1 số xuất hiện 1 lần, còn lại xuất hiện 2 lần. Tìm số đó (dùng XOR).");
console.log("  Input : [4, 1, 2, 1, 2]  →  Output: 4");
console.log("BÀI 12: Tìm median của 2 mảng đã sort (không merge, tìm trực tiếp).");
console.log("  Input : nums1 = [1, 3], nums2 = [2]  →  Output: 2.0");
console.log("  Input : nums1 = [1, 2], nums2 = [3, 4]  →  Output: 2.5");

console.log("\n" + "=".repeat(50));
console.log("👉 Tự implement trong playground.js và test với assertEqual().");
console.log("=".repeat(50));

