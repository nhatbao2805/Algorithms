/**
 * ============================================
 * ⏳ EVENT LOOP - BẢN PROBLEM TÓM TẮT
 * ============================================
 *
 * Chi tiết 15 bài tập + đáp án đã có trong:
 *  - `25-event-loop-callstack-exercises.js`
 *  - `25-event-loop-callstack-answers.js`
 *
 * File này chỉ liệt kê nhanh các dạng bài để bạn chọn luyện.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   EVENT LOOP - DANH SÁCH BÀI TẬP        ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\n--- 🟢 CƠ BẢN (Bài 1–2) ---");
console.log("  BÀI 1: Thứ tự sync → Promise.then → setTimeout(0).");
console.log("    Gợi ý (tự chứng minh): A, D, C, B — sync trước, hết microtask, rồi macrotask");
console.log("  BÀI 2: Nhiều Promise.then liên tiếp, thứ tự microtask.");
console.log("    Output mong đợi: xem code trong 25-event-loop-callstack-exercises.js + answers.js");

console.log("\n--- 🟡 TRUNG BÌNH (Bài 3–7) ---");
console.log("  BÀI 3: Mix microtask + macrotask (setTimeout bên trong có Promise.then).");
console.log("  BÀI 4: queueMicrotask vs Promise.then vs setTimeout.");
console.log("  BÀI 5: Promise lồng nhau (then tạo thêm then bên trong).");
console.log("  BÀI 6: setTimeout được đăng ký bên trong Promise.then.");
console.log("  BÀI 7: Microtask starvation (queueMicrotask gọi đệ quy).");

console.log("\n--- 🔴 NÂNG CAO (Bài 8–15) ---");
console.log("  BÀI 8:  async/await + Promise + setTimeout.");
console.log("  BÀI 9:  Then chain phức tạp + return Promise.resolve().then().");
console.log("  BÀI 10: setTimeout lồng nhau + microtask trong từng callback.");
console.log("  BÀI 11: async/await lồng nhau (inner async, await p).");
console.log("  BÀI 12: Promise.reject + catch + then sau catch.");
console.log("  BÀI 13: Promise.all + setTimeout (thứ tự ALL done).");
console.log("  BÀI 14: Vòng lặp sync nặng + microtask + macrotask.");
console.log("  BÀI 15: Tổng hợp: nhiều microtask, 2 setTimeout, await.");

console.log("\n" + "=".repeat(50));
console.log("👉 Hãy chạy trực tiếp: node 25-event-loop-callstack-exercises.js để luyện.");
console.log("=".repeat(50));

