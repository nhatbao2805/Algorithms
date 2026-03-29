/**
 * ============================================
 * ⏱️ BIG-O NOTATION - BỘ BÀI TẬP (KHÔNG LỜI GIẢI)
 * ============================================
 *
 * Mục tiêu:
 * - Nhận diện độ phức tạp thời gian / không gian của đoạn code.
 * - So sánh các thuật toán với nhau.
 *
 * Hãy xem từng đoạn mô tả, tự viết code trong `playground.js`
 * rồi phân tích Big-O cho thuật toán bạn chọn.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   BIG-O NOTATION - BÀI TẬP              ║");
console.log("╚══════════════════════════════════════════╝");

// BÀI 1: Đếm số cặp (i, j) trong mảng
console.log("\nBÀI 1: Đếm số cặp (i, j) với i < j");
console.log("  Input : a = [2, 1, 3]");
console.log("  Output: 2  // (0,2): 2<3, (1,2): 1<3");
console.log("  Input : a = [3, 2, 1]");
console.log("  Output: 0");
console.log("- Tổng quát: mảng n phần tử, đếm cặp (i, j), i < j và a[i] < a[j].");
console.log("Gợi ý:");
console.log("  1) Viết cách đơn giản dùng 2 vòng for lồng nhau.");
console.log("  2) Phân tích Big-O.");
console.log("  3) Nghĩ xem có cách tốt hơn (gợi ý: dùng merge sort).");

// BÀI 2: Tìm phần tử xuất hiện nhiều nhất
console.log("\nBÀI 2: Element xuất hiện nhiều nhất");
console.log("  Input : [1, 2, 2, 3, 2]");
console.log("  Output: { value: 2, count: 3 }");
console.log("  Input : [1, 1, 2, 2]  // hòa");
console.log("  Output: ghi rõ quy ước (vd: lấy số nhỏ nhất trong các max)");
console.log("Yêu cầu:");
console.log("  - Cách 1: Duyệt từng phần tử và đếm thủ công → O(n²).");
console.log("  - Cách 2: Dùng hash map → O(n).");
console.log("  → Hãy tự code 2 cách và so sánh thời gian bằng measureTime().");

// BÀI 3: So sánh hai thuật toán
console.log("\nBÀI 3: So sánh thuật toán A và B");
console.log("  Input : cùng nums = [5,1,4,2,8] (hoặc mảng random n phần tử)");
console.log("  Output: A(nums) và B(nums) cùng [1,2,4,5,8]; so sánh ms khi n = 5000, 10000");
console.log("- Ví dụ: A = bubble sort O(n²), B = merge sort O(n log n).");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Phân tích O(?) của 1 vòng for duyệt mảng n phần tử.");
console.log("  Input : nums.length = n  →  Output: time = ?, space = ?");
console.log("BÀI 5: Phân tích O(?) của 2 vòng for lồng nhau, mỗi vòng n lần.");
console.log("  Input : n  →  Output: tổng số lần lặp ~n² → time = ?");
console.log("BÀI 6: Cho đoạn code: tìm min trong mảng rồi tìm max. Time? Space?");
console.log("  Input : mảng n phần tử  →  Output: O(?) time, O(?) space");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Đếm số cặp (i,j) với a[i] + a[j] = target. Cách O(n²) vs O(n) dùng map.");
console.log("  Input : a = [1,2,3,4], target = 5  →  Output: 2  // (0,3),(1,2)");
console.log("BÀI 8: Cho thuật toán đệ quy fib(n): phân tích time/space, so với fibMemo(n).");
console.log("  Input : n = 40  →  Output: fib chậm ~ hàng giây; fibMemo gần tức thì");
console.log("BÀI 9: So sánh O(n), O(n log n), O(n²) bằng đo thời gian với n = 1000, 10000, 50000.");
console.log("  Output: bảng ms — đường n² tăng nhanh hơn n log n hơn n");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Thiết kế thuật toán tìm 3 phần tử có tổng = 0, phân tích O(?) và tối ưu.");
console.log("BÀI 11: Phân tích space complexity của merge sort (call stack + mảng tạm).");
console.log("BÀI 12: Cho code có vòng lặp while bên trong for: n lần, mỗi lần while tối đa k bước. Tổng O(?) khi k phụ thuộc n.");

console.log("\n" + "=".repeat(50));
console.log("👉 Hãy qua playground.js để tự triển khai, dùng measureTime() để đo.");
console.log("=".repeat(50));

