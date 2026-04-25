# Ôn Tập Mã Nguồn — `algorithms/16-bfs-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: Duyệt graph từ đỉnh start, in ra tất cả đỉnh theo thứ tự BFS.
  - BÀI 5: Kiểm tra graph 2 màu (bipartite): tô 2 màu sao cho 2 đỉnh kề khác màu.
  - BÀI 6: Tìm số bước ngắn nhất từ (0,0) đến (n-1,m-1) trên lưới 0/1 (chỉ đi qua ô 0).
- **Trung bình**
  - BÀI 7: Word ladder: từ start word đến end word, mỗi bước đổi 1 chữ. 'hit'→'cog' với dict ['hot','dot','dog','lot','log','cog'].
  - BÀI 8: Surrounded regions: ô 'O' nào không thoát ra biên thì đổi thành 'X' (BFS/DFS từ biên).
  - BÀI 9: Shortest path in binary matrix: lưới 0/1, đi 8 hướng, tìm đường ngắn nhất từ (0,0) đến (n-1,m-1).
- **Nâng cao**
  - BÀI 10: Multi-source BFS: bắt đầu từ nhiều đỉnh (vd: tất cả ô 0), tìm khoảng cách ngắn nhất từ mỗi ô đến ô 0 gần nhất.
  - BÀI 11: Shortest path với 1 lần được bỏ qua obstacle (0/1 grid, 1 lần đi qua 1).
  - BÀI 12: Open the lock: đồng hồ 4 số [0-9], mỗi bước xoay 1 vị trí 1 nấc. Tránh deadends. Tìm số bước từ '0000' đến target.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🌊 BFS (Breadth-First Search) - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗
console.log("║   BFS - BÀI TẬP                          ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Shortest path trên graph vô hướng, unweighted.
console.log(
  "  Input : graph = { A:['B'], B:['A','C'], C:['B','D'], D:['C'] }, start=A, target=D",
);
console.log("  Output: distance = 3, path vd: A → B → C → D
console.log("  - Input tổng quát: adjacency list, start, target.

console.log("\nBÀI 2: Number of islands (ma trận 0/1).
console.log("  Input : grid = [[1,1,0],[0,1,0],[1,0,1]]
console.log("  Output: 3  (ba cụm ô 1 riêng biệt 4-hướng)

console.log("\nBÀI 3: Mê cung (maze) - từ S đến E.
console.log("  Input : maze 'S' . 'E', '.' đi được, '#' tường (tự chọn ma trận ký tự)
console.log("  Output: số bước ngắn nhất + (tuỳ chọn) chuỗi hướng hoặc tọa độ

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: Duyệt graph từ đỉnh start, in ra tất cả đỉnh theo thứ tự BFS.
console.log("BÀI 5: Kiểm tra graph 2 màu (bipartite): tô 2 màu sao cho 2 đỉnh kề khác màu.
console.log("BÀI 6: Tìm số bước ngắn nhất từ (0,0) đến (n-1,m-1) trên lưới 0/1 (chỉ đi qua ô 0).

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Word ladder: từ start word đến end word, mỗi bước đổi 1 chữ. 'hit'→'cog' với dict ['hot','dot','dog','lot','log','cog'].
console.log("BÀI 8: Surrounded regions: ô 'O' nào không thoát ra biên thì đổi thành 'X' (BFS/DFS từ biên).
console.log("BÀI 9: Shortest path in binary matrix: lưới 0/1, đi 8 hướng, tìm đường ngắn nhất từ (0,0) đến (n-1,m-1).

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Multi-source BFS: bắt đầu từ nhiều đỉnh (vd: tất cả ô 0), tìm khoảng cách ngắn nhất từ mỗi ô đến ô 0 gần nhất.
console.log("BÀI 11: Shortest path với 1 lần được bỏ qua obstacle (0/1 grid, 1 lần đi qua 1).
console.log("BÀI 12: Open the lock: đồng hồ 4 số [0-9], mỗi bước xoay 1 vị trí 1 nấc. Tránh deadends. Tìm số bước từ '0000' đến target.

console.log("\n" + "=".repeat(50));
console.log("👉 Tự implement BFS trong playground.js, dùng queue và visited.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
