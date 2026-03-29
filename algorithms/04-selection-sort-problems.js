/**
 * ============================================
 * 🔁 SELECTION SORT - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║  SELECTION SORT - BÀI TẬP               ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Cài đặt selection sort tăng dần.");
console.log("  Input : [5, 1, 4, 2, 8]");
console.log("  Output: [1, 2, 4, 5, 8]");
console.log("  Ý tưởng: mỗi vòng chọn phần tử nhỏ nhất còn lại đưa về đầu.");

console.log("\nBÀI 2: Sắp xếp giảm dần bằng selection sort (biến thể nhỏ).");
console.log("  Input : [1, 3, 2]");
console.log("  Output: [3, 2, 1]");

console.log("\nBÀI 3: So sánh với bubble sort.");
console.log("  Input : cùng mảng random n = 2000");
console.log("  Output: log thời gian ms + (tuỳ chọn) số swap từng thuật toán");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: In ra phần tử được chọn (min) và vị trí đổi chỗ sau mỗi vòng.");
console.log("  Input : [4, 2, 1]  →  Output: log từng bước, cuối [1,2,4]");
console.log("BÀI 5: Selection sort cho mảng string (so sánh theo thứ tự từ điển).");
console.log("  Input : ['dog','ant','cat']  →  Output: ['ant','cat','dog']");
console.log("BÀI 6: Trả về số lần hoán đổi (swap) đã thực hiện.");
console.log("  Input : [3, 1, 2]  →  Output: sorted [1,2,3] và swapCount (vd 2)");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Dual selection sort: mỗi pass vừa chọn min đưa về đầu vừa chọn max đưa về cuối.");
console.log("BÀI 8: Sắp xếp mảng object theo key: selectionSort(arr, key) với key='age' hoặc 'name'.");
console.log("BÀI 9: So sánh số lần so sánh (comparison) của selection vs bubble (cùng mảng).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Chứng minh selection sort không ổn định (cho ví dụ cụ thể).");
console.log("BÀI 11: Heap sort dựa trên ý tưởng 'chọn max' nhưng dùng heap → O(n log n). So sánh với selection.");
console.log("BÀI 12: Tournament sort (tree selection): dùng cây để tìm min nhanh hơn cho từng pass.");

console.log("\n" + "=".repeat(50));
console.log("👉 Viết hàm selectionSort(nums) trong playground.js và thử nghiệm.");
console.log("=".repeat(50));

