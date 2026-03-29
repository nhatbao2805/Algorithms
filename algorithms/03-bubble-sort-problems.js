/**
 * ============================================
 * 🔁 BUBBLE SORT - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   BUBBLE SORT - BÀI TẬP                 ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Cài đặt bubble sort tăng dần.");
console.log("  Input : [5,1,4,2,8]");
console.log("  Output: [1,2,4,5,8]");
console.log("  Gợi ý: hoán đổi cặp (j, j+1) nếu nums[j] > nums[j+1].");

console.log("\nBÀI 2: Đếm số lần hoán đổi.");
console.log("  Input : [5, 1, 4, 2, 8]");
console.log("  Output: sorted [1,2,4,5,8] và swapCount (vd: tùy implementation, > 0)");
console.log("  Yêu cầu: trả thêm số swap đã thực hiện để thấy sự kém hiệu quả.");

console.log("\nBÀI 3: Tối ưu bubble sort.");
console.log("  Input : [1, 2, 3, 4, 5]  (đã sort)");
console.log("  Output: sau 1 pass không swap → dừng sớm, ít vòng hơn bản không tối ưu");
console.log("  - So sánh thời gian với bản không tối ưu (dùng measureTime).");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Bubble sort giảm dần (so sánh đổi chiều).");
console.log("  Input : [1, 3, 2]  →  Output: [3, 2, 1]");
console.log("BÀI 5: In ra mảng sau mỗi pass để quan sát từng bước.");
console.log("  Input : [3, 1, 2]  →  Output: nhiều dòng log, dòng cuối [1,2,3]");
console.log("BÀI 6: Sắp xếp mảng chuỗi theo thứ tự alphabet (so sánh string).");
console.log("  Input : ['banana','apple','cherry']");
console.log("  Output: ['apple','banana','cherry']");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Bubble sort ổn định? Giải thích và kiểm tra với mảng có (value, id).");
console.log("BÀI 8: Cocktail shaker sort: bubble nhưng đổi chiều mỗi pass. So sánh số lần so sánh.");
console.log("BÀI 9: Sắp xếp mảng object theo nhiều tiêu chí (vd: theo name, rồi theo age).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Đếm số inversion bằng bubble sort (mỗi swap giảm 1 inversion).");
console.log("BÀI 11: So sánh bubble vs selection vs insertion trên mảng ngẫu nhiên, đã sort, sort ngược (đo thời gian).");
console.log("BÀI 12: Bubble sort với flag 'last swap index': chỉ duyệt đến vị trí swap cuối cùng ở pass trước.");

console.log("\n" + "=".repeat(50));
console.log("👉 Tự code trong playground.js, test với nhiều mảng khác nhau.");
console.log("=".repeat(50));

