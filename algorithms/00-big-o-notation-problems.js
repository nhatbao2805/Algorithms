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
console.log("- Input: mảng số nguyên n phần tử.");
console.log("- Yêu cầu: đếm số cặp chỉ số (i, j) sao cho i < j và a[i] < a[j].");
console.log("Gợi ý:");
console.log("  1) Viết cách đơn giản dùng 2 vòng for lồng nhau.");
console.log("  2) Phân tích Big-O.");
console.log("  3) Nghĩ xem có cách tốt hơn (gợi ý: dùng merge sort).");

// BÀI 2: Tìm phần tử xuất hiện nhiều nhất
console.log("\nBÀI 2: Element xuất hiện nhiều nhất");
console.log("- Input: mảng số nguyên (có thể lặp).");
console.log("- Output: giá trị xuất hiện nhiều nhất và số lần xuất hiện.");
console.log("Yêu cầu:");
console.log("  - Cách 1: Duyệt từng phần tử và đếm thủ công → O(n²).");
console.log("  - Cách 2: Dùng hash map → O(n).");
console.log("  → Hãy tự code 2 cách và so sánh thời gian bằng measureTime().");

// BÀI 3: So sánh hai thuật toán
console.log("\nBÀI 3: So sánh thuật toán A và B");
console.log("- Viết 2 hàm xử lý cùng 1 nhiệm vụ nhưng độ phức tạp khác nhau.");
console.log("  Ví dụ: A = bubble sort (O(n²)), B = merge sort (O(n log n)).");
console.log("- Sinh mảng ngẫu nhiên n phần tử, tăng dần n và đo thời gian.");
console.log("  → Quan sát runtime thực tế khớp với Big-O như thế nào.");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Phân tích O(?) của 1 vòng for duyệt mảng n phần tử.");
console.log("BÀI 5: Phân tích O(?) của 2 vòng for lồng nhau, mỗi vòng n lần.");
console.log("BÀI 6: Cho đoạn code: tìm min trong mảng rồi tìm max. Time? Space?");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Đếm số cặp (i,j) với a[i] + a[j] = target. Cách O(n²) vs O(n) dùng map.");
console.log("BÀI 8: Cho thuật toán đệ quy fib(n): phân tích time/space, so với fibMemo(n).");
console.log("BÀI 9: So sánh O(n), O(n log n), O(n²) bằng đo thời gian với n = 1000, 10000, 50000.");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Thiết kế thuật toán tìm 3 phần tử có tổng = 0, phân tích O(?) và tối ưu.");
console.log("BÀI 11: Phân tích space complexity của merge sort (call stack + mảng tạm).");
console.log("BÀI 12: Cho code có vòng lặp while bên trong for: n lần, mỗi lần while tối đa k bước. Tổng O(?) khi k phụ thuộc n.");

console.log("\n" + "=".repeat(50));
console.log("👉 Hãy qua playground.js để tự triển khai, dùng measureTime() để đo.");
console.log("=".repeat(50));

