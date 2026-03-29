/**
 * ============================================
 * 🟢 GREEDY - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   GREEDY - BÀI TẬP                       ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Activity Selection (chọn tối đa số buổi).");
console.log("  Input : [[1,4],[2,3],[3,5]]  (start, end)");
console.log("  Output: 2  (vd: chọn [2,3] và [3,5] hoặc tập tối ưu khác không overlap)");
console.log("  - Cho danh sách [start, end], chọn số hoạt động không trùng lớn nhất.");

console.log("\nBÀI 2: Coin Change (hệ tiền chuẩn).");
console.log("  Input : coins = [1,5,10,25], amount = 67");
console.log("  Output: 6  (25+25+10+5+1+1 hoặc bộ greedy tương đương)");
console.log("  - greedy đúng với hệ xu Mỹ.");

console.log("\nBÀI 3: Jump Game.");
console.log("  Input : nums = [2,3,1,1,4]");
console.log("  Output: true  (có thể đến index cuối)");
console.log("  Input : nums = [3,2,1,0,4]");
console.log("  Output: false");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Best time to buy and sell stock I: 1 lần mua 1 lần bán, lợi nhuận max.");
console.log("BÀI 5: Assign cookies: trẻ có greed[], bánh có size[], mỗi trẻ tối đa 1 bánh. Số trẻ thỏa mãn tối đa.");
console.log("BÀI 6: Lemonade change: khách trả 5/10/20, có đủ tiền thối không (greedy ưu tiên trả 10 trước).");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Jump Game II: số bước nhảy ít nhất để đến cuối.");
console.log("BÀI 8: Partition labels: chia string thành các đoạn sao cho mỗi ký tự chỉ xuất hiện trong 1 đoạn, số đoạn ít nhất.");
console.log("BÀI 9: Minimum number of arrows to burst balloons: intervals, 1 mũi tên xuyên nhiều balloon overlap. Tìm số mũi tên ít nhất.");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Candy: mỗi trẻ có rating, mỗi trẻ ít nhất 1 kẹo, 2 trẻ cạnh nhau rating cao hơn thì nhiều kẹo hơn. Tổng kẹo ít nhất.");
console.log("BÀI 11: Remove K digits: từ số (string) bỏ k chữ số để số còn lại nhỏ nhất (monotonic stack / greedy).");
console.log("BÀI 12: Merge intervals: gộp các đoạn giao nhau, sort theo start rồi greedy merge.");

console.log("\n" + "=".repeat(50));
console.log("👉 Đề chi tiết đã có trong 21-greedy.js, file này là checklist bài tập.");
console.log("=".repeat(50));

