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

console.log("\n" + "=".repeat(50));
console.log("👉 Bước tiếp theo: mở playground.js và tự implement các hàm trên.");
console.log("=".repeat(50));

