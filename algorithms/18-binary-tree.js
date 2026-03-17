/**
 * ============================================
 * 🌳 BINARY TREE (CÂY NHỊ PHÂN)
 * ============================================
 *
 * MỖI NODE:
 * - value: giá trị
 * - left: con trái (BinaryTreeNode hoặc null)
 * - right: con phải (BinaryTreeNode hoặc null)
 *
 * MỘT SỐ KHÁI NIỆM:
 * - Root: node gốc
 * - Leaf: node lá (không có con)
 * - Height: chiều cao (số cạnh dài nhất từ root đến leaf)
 *
 * VARIANT HAY GẶP:
 * - Binary Search Tree (BST): với mỗi node:
 *   left.value < node.value < right.value
 *
 * DÙNG KHI:
 * - Cần lưu dữ liệu có cấu trúc phân nhánh (menu, DOM, category…)
 * - Cần tìm kiếm nhanh (BST)
 * - Nhiều bài LeetCode về tree dùng pattern tương tự nhau.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Xây BST đơn giản từ mảng số
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return this; // bỏ qua trùng
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
}

// ============================================
// DUYỆT TREE (TRAVERSAL)
// ============================================

// DFS - Inorder (Left, Node, Right) → với BST cho ra mảng đã sort
function inorderTraversal(node, result = []) {
  if (!node) return result;
  inorderTraversal(node.left, result);
  result.push(node.value);
  inorderTraversal(node.right, result);
  return result;
}

// DFS - Preorder (Node, Left, Right)
function preorderTraversal(node, result = []) {
  if (!node) return result;
  result.push(node.value);
  preorderTraversal(node.left, result);
  preorderTraversal(node.right, result);
  return result;
}

// DFS - Postorder (Left, Right, Node)
function postorderTraversal(node, result = []) {
  if (!node) return result;
  postorderTraversal(node.left, result);
  postorderTraversal(node.right, result);
  result.push(node.value);
  return result;
}

// BFS - Level Order (từng tầng)
function levelOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

// Tính chiều cao cây
function height(node) {
  if (!node) return -1; // hoặc 0 tuỳ định nghĩa
  return 1 + Math.max(height(node.left), height(node.right));
}

// ============================================
// VÍ DỤ MINH HOẠ
// ============================================

function buildSampleBST() {
  const bst = new BinarySearchTree();
  [8, 3, 10, 1, 6, 14, 4, 7, 13].forEach((v) => bst.insert(v));
  return bst.root;
}

function exampleTraversals() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ: Duyệt cây nhị phân (BST)");
  console.log("━".repeat(50));

  const root = buildSampleBST();
  console.log("Inorder  (LNR)  :", inorderTraversal(root));   // sorted tăng dần
  console.log("Preorder (NLR)  :", preorderTraversal(root));
  console.log("Postorder (LRN) :", postorderTraversal(root));
  console.log("Level Order BFS :", levelOrderTraversal(root));
  console.log("Chiều cao cây   :", height(root));
}

console.log("╔══════════════════════════════════════════╗");
console.log("║          BINARY TREE / BST              ║");
console.log("╚══════════════════════════════════════════╝");

exampleTraversals();

console.log("\n" + "=".repeat(50));
console.log("GỢI Ý BÀI TẬP: xem file 18-binary-tree-problems.js");
console.log("=".repeat(50));

