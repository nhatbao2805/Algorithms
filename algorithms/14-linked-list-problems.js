/**
 * ============================================
 * 🔗 LINKED LIST - BỘ BÀI TẬP TỔNG HỢP (KHÔNG LỜI GIẢI)
 * ============================================
 *
 * File này chỉ chứa:
 * - Mô tả bài toán
 * - Input/Output mẫu
 * - Gợi ý hàm cần implement
 *
 * 👉 Bạn hãy:
 *  - Đọc đề + case mẫu ở đây
 *  - Sang `playground.js` để tự code và test
 *
 * GỢI Ý IMPORT SANG PLAYGROUND:
 * - Copy signature bài toán (tên hàm + mô tả) sang `playground.js`
 * - Dùng `assertEqual`, `debug`, `measureTime` để test.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   LINKED LIST - BÀI TẬP KHÔNG LỜI GIẢI  ║");
console.log("╚══════════════════════════════════════════╝");

// ============================================
// BÀI 1: Reverse Linked List (Cơ bản)
// ============================================
console.log("\nBÀI 1: Reverse Linked List");
console.log("- Cho 1 danh sách liên kết đơn (singly linked list).");
console.log("- Hãy đảo ngược danh sách.");
console.log("Ví dụ:");
console.log("  Input : 1 → 2 → 3 → 4");
console.log("  Output: 4 → 3 → 2 → 1");
console.log("Gợi ý hàm:");
console.log("  function reverseList(head) { /* TODO */ }");

// ============================================
// BÀI 2: Detect Cycle (Floyd's Tortoise & Hare)
// ============================================
console.log("\nBÀI 2: Linked List Cycle (phát hiện vòng lặp)");
console.log("- Cho head danh sách liên kết, có thể có vòng lặp.");
console.log("- Trả về true nếu tồn tại cycle, ngược lại false.");
console.log("Ví dụ:");
console.log("  1 → 2 → 3 → 4 → quay lại 2  (hasCycle = true)");
console.log("  1 → 2 → 3 → null           (hasCycle = false)");
console.log("Gợi ý hàm:");
console.log("  function hasCycle(head) { /* TODO dùng 2 con trỏ nhanh/chậm */ }");

// ============================================
// BÀI 3: Merge Two Sorted Lists
// ============================================
console.log("\nBÀI 3: Merge Two Sorted Lists");
console.log("- Cho 2 danh sách đã sort tăng dần.");
console.log("- Hãy gộp lại thành 1 danh sách sort tăng dần.");
console.log("Ví dụ:");
console.log("  L1: 1 → 3 → 5");
console.log("  L2: 2 → 4 → 6");
console.log("  →  1 → 2 → 3 → 4 → 5 → 6");
console.log("Gợi ý hàm:");
console.log("  function mergeTwoLists(l1, l2) { /* TODO */ }");

// ============================================
// BÀI 4: Remove N-th Node From End
// ============================================
console.log("\nBÀI 4: Remove N-th Node From End");
console.log("- Xoá node thứ n tính từ cuối danh sách.");
console.log("Ví dụ:");
console.log("  Input: 1 → 2 → 3 → 4 → 5, n = 2");
console.log("  Output: 1 → 2 → 3 → 5  (xoá 4)");
console.log("Gợi ý hàm:");
console.log("  function removeNthFromEnd(head, n) { /* TODO - 2 con trỏ */ }");

// ============================================
// BÀI 5: Palindrome Linked List
// ============================================
console.log("\nBÀI 5: Palindrome Linked List");
console.log("- Kiểm tra danh sách có đối xứng (palindrome) hay không.");
console.log("Ví dụ:");
console.log("  Input : 1 → 2 → 2 → 1");
console.log("  Output: true");
console.log("  Input : 1 → 2 → 3");
console.log("  Output: false");
console.log("Gợi ý hàm:");
console.log("  function isPalindrome(head) { /* TODO */ }");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 6: Tìm độ dài (length) của linked list.");
console.log("  Input : 1 → 2 → 3 → null");
console.log("  Output: 3");
console.log("BÀI 7: Tìm node giữa (middle): nếu chẵn trả node thứ n/2 (slow/fast pointer).");
console.log("  Input : 1 → 2 → 3 → 4 → null");
console.log("  Output: node 2 hoặc 3 tùy quy ước chẵn (thường trả node thứ 2 trong LeetCode)");
console.log("BÀI 8: Xoá node khi chỉ có con trỏ tới chính node đó (không có head). Gợi ý: copy value từ next rồi xoá next.");
console.log("  Input : ... → 4 → 5 → ... , con trỏ đứng tại node 4");
console.log("  Output: list như đã xoá giá trị 4 (không đổi head từ ngoài)");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 9: Reverse linked list từ vị trí left đến right (1-indexed).");
console.log("BÀI 10: Swap nodes in pairs: 1→2→3→4 thành 2→1→4→3.");
console.log("BÀI 11: Add two numbers: 2 linked list biểu diễn số (chữ số ngược), trả về list tổng. (2→4→3) + (5→6→4) = (7→0→8).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 12: Merge K sorted lists (dùng heap hoặc merge lần lượt).");
console.log("BÀI 13: Reorder list: L0→Ln→L1→Ln-1→... (tìm giữa, đảo nửa sau, merge 2 nửa).");
console.log("BÀI 14: Copy list with random pointer: mỗi node có next và random, clone toàn bộ list.");

console.log("\n" + "=".repeat(50));
console.log("👉 Bước tiếp theo: mở playground.js và tự implement các hàm trên.");
console.log("=".repeat(50));

