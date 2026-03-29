/**
 * ============================================
 * 🌳 BINARY TREE - BỘ BÀI TẬP TỔNG HỢP (KHÔNG LỜI GIẢI)
 * ============================================
 *
 * File này chỉ chứa đề + case mẫu, KHÔNG có code giải.
 * Hãy dùng nó như 1 "menu bài tập" rồi tự code trong `playground.js`.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   BINARY TREE - BÀI TẬP KHÔNG LỜI GIẢI  ║");
console.log("╚══════════════════════════════════════════╝");

// ============================================
// BÀI 1: Maximum Depth of Binary Tree
// ============================================
console.log("\nBÀI 1: Maximum Depth of Binary Tree");
console.log("- Cho root của cây nhị phân, hãy trả về chiều cao (độ sâu lớn nhất).");
console.log("Ví dụ:");
console.log("  Input:   3");
console.log("         /   \\");
console.log("        9    20");
console.log("            /  \\");
console.log("           15   7");
console.log("  Output: 3");
console.log("Gợi ý hàm:");
console.log("  function maxDepth(root) { /* TODO */ }");

// ============================================
// BÀI 2: Validate Binary Search Tree (BST)
// ============================================
console.log("\nBÀI 2: Validate Binary Search Tree");
console.log("- Kiểm tra cây có phải BST hợp lệ không.");
console.log("Ví dụ:");
console.log("  Hợp lệ   :   2");
console.log("            /   \\");
console.log("           1     3");
console.log("  Không hợp lệ:  5");
console.log("               /   \\");
console.log("              1     4");
console.log("                   / \\");
console.log("                  3   6   (4 nằm bên phải 5 nhưng < 5)");
console.log("  Output: cây hợp lệ → true, cây ví dụ sai → false");
console.log("Gợi ý hàm:");
console.log("  function isValidBST(root) { /* TODO - dùng khoảng min/max */ }");

// ============================================
// BÀI 3: Level Order Traversal (BFS theo tầng)
// ============================================
console.log("\nBÀI 3: Level Order Traversal");
console.log("- Trả về mảng 2D, mỗi phần tử là 1 tầng của cây.");
console.log("Ví dụ:");
console.log("  Input:   3");
console.log("         /   \\");
console.log("        9    20");
console.log("            /  \\");
console.log("           15   7");
console.log("  Output: [[3], [9, 20], [15, 7]]");
console.log("Gợi ý hàm:");
console.log("  function levelOrder(root) { /* TODO - dùng queue */ }");

// ============================================
// BÀI 4: Path Sum
// ============================================
console.log("\nBÀI 4: Path Sum");
console.log("- Cho số targetSum, kiểm tra có tồn tại đường đi từ root đến leaf");
console.log("  sao cho tổng các node trên đường = targetSum hay không.");
console.log("Ví dụ:");
console.log("  Input: targetSum = 22");
console.log("          5");
console.log("         / \\");
console.log("        4   8");
console.log("       /   / \\");
console.log("      11  13  4");
console.log("     /  \\      \\");
console.log("    7    2      1");
console.log("  → true (5+4+11+2 = 22)");
console.log("Gợi ý hàm:");
console.log("  function hasPathSum(root, targetSum) { /* TODO - DFS */ }");

// ============================================
// BÀI 5: Lowest Common Ancestor (LCA)
// ============================================
console.log("\nBÀI 5: Lowest Common Ancestor");
console.log("- Cho root của BST và 2 node p, q.");
console.log("- Tìm node tổ tiên chung thấp nhất (LCA).");
console.log("Ví dụ với BST:");
console.log("          6");
console.log("        /   \\");
console.log("       2     8");
console.log("      / \\   / \\");
console.log("     0   4 7   9");
console.log("        / \\");
console.log("       3   5");
console.log("  LCA(2, 8) = 6");
console.log("  LCA(2, 4) = 2");
console.log("Gợi ý hàm:");
console.log("  function lowestCommonAncestor(root, p, q) { /* TODO */ }");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 6: Inorder / Preorder / Postorder traversal (đệ quy và iterative dùng stack).");
console.log("  Input : cây 1-2-3 (root 1, con 2,3)  →  Output inorder: [2,1,3]");
console.log("BÀI 7: Đếm số node trong cây (countNodes).");
console.log("  Input : cây BÀI 1 (3-9-20-15-7)  →  Output: 5");
console.log("BÀI 8: Tìm node có giá trị lớn nhất / nhỏ nhất trong cây (BST: min=leftmost, max=rightmost).");
console.log("  Input : BST BÀI 5 (root 6)  →  Output: min=0, max=9");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 9: Binary tree từ preorder và inorder (xây lại cây, root = pre[0], tìm trong inorder).");
console.log("BÀI 10: Kth smallest in BST (inorder đến phần tử thứ k).");
console.log("BÀI 11: Serialize / Deserialize binary tree (chuỗi hóa và khôi phục cây).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 12: Binary tree maximum path sum: đường đi bất kỳ (node có thể dùng tối đa 1 lần), trả về tổng lớn nhất.");
console.log("BÀI 13: Lowest Common Ancestor (cây nhị phân thường, không phải BST).");
console.log("BÀI 14: Recover BST: 2 node bị swap sai, tìm và sửa (inorder tìm 2 vị trí nghịch thế).");

console.log("\n" + "=".repeat(50));
console.log("👉 Hãy mở playground.js và implement các hàm trên với test case tương ứng.");
console.log("=".repeat(50));

