/**
 * ============================================
 * 📘 BFS - BREADTH-FIRST SEARCH (DUYỆT THEO CHIỀU RỘNG)
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * BFS duyệt đồ thị/cây THEO TỪNG TẦNG (level by level).
 * Sử dụng QUEUE (FIFO) để quản lý thứ tự duyệt.
 *
 * Thuật toán:
 * 1. Đưa node bắt đầu vào queue
 * 2. Lấy node ra khỏi queue, xử lý
 * 3. Đưa tất cả hàng xóm chưa thăm vào queue
 * 4. Lặp lại cho đến khi queue rỗng
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time: O(V + E) V=đỉnh, E=cạnh
 * - Space: O(V) cho queue và visited
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Tìm ĐƯỜNG ĐI NGẮN NHẤT (unweighted graph)
 * ✅ Dùng khi: Duyệt theo tầng (level order)
 * ✅ Dùng khi: Tìm khoảng cách ngắn nhất
 * ✅ Dùng khi: Connected components
 * ❌ Không dùng khi: Đồ thị có trọng số (dùng Dijkstra)
 * ❌ Không dùng khi: Cần DFS (tìm đường, backtrack)
 *
 * 💡 TẠI SAO DÙNG:
 * - Đảm bảo tìm đường ngắn nhất trong unweighted graph
 * - Duyệt từng level: cây, mê cung, social network
 */

// ============================
// VÍ DỤ 1: BFS trên đồ thị (Adjacency List)
// ============================
function bfs(graph, start) {
  console.log(`\n🌊 BFS từ node ${start}:`);
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);
    console.log(
      `  Thăm: ${node} → hàng xóm: [${graph[node]?.filter((n) => !visited.has(n)) || []}]`,
    );

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  console.log(`  → Thứ tự BFS: [${order}]`);
  return order;
}

function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: BFS trên đồ thị");
  console.log("━".repeat(50));

  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
  console.log("Đồ thị: A-B, A-C, B-D, B-E, C-F, E-F");
  bfs(graph, "A");
}

// VÍ DỤ 2: Level Order Traversal (Cây nhị phân)
function levelOrder(root) {
  console.log("\n🌳 Level Order Traversal:");
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
    console.log(`  Level ${result.length}: [${level}]`);
  }
  return result;
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Level Order Traversal");
  console.log("━".repeat(50));

  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: { val: 6, left: null, right: null } },
  };
  console.log("     1");
  console.log("    / \\");
  console.log("   2   3");
  console.log("  / \\   \\");
  console.log(" 4   5   6");
  levelOrder(tree);
}

// VÍ DỤ 3: Tìm đường ngắn nhất (Shortest Path)
function shortestPath(graph, start, end) {
  console.log(`\n🛤️ Shortest Path: ${start} → ${end}`);
  const queue = [[start, [start]]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const [node, path] = queue.shift();

    if (node === end) {
      console.log(
        `  → ✅ Đường đi: ${path.join(" → ")} (${path.length - 1} bước)`,
      );
      return path;
    }

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, [...path, neighbor]]);
        console.log(`  Khám phá: ${node} → ${neighbor}`);
      }
    }
  }
  console.log(`  → ❌ Không tìm thấy đường đi`);
  return null;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Shortest Path (Unweighted)");
  console.log("━".repeat(50));

  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E", "G"],
    G: ["F"],
  };
  shortestPath(graph, "A", "G");
}

// VÍ DỤ 4 (Nâng cao): Flood Fill (tô màu)
function floodFill(image, sr, sc, newColor) {
  console.log(`\n🎨 Flood Fill tại (${sr},${sc}) với màu ${newColor}`);
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;

  const rows = image.length,
    cols = image[0].length;
  const queue = [[sr, sc]];
  image[sr][sc] = newColor;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        image[nr][nc] === oldColor
      ) {
        image[nr][nc] = newColor;
        queue.push([nr, nc]);
      }
    }
  }
  console.log("  Kết quả:");
  image.forEach((row) => console.log(`  [${row}]`));
  return image;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Flood Fill");
  console.log("━".repeat(50));

  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  console.log("Trước:");
  image.forEach((row) => console.log(`  [${row}]`));
  floodFill(image, 1, 1, 2);
}

// VÍ DỤ 5 (Nâng cao): Number of Islands
function numIslands(grid) {
  console.log("\n🏝️ Number of Islands:");
  grid.forEach((row) => console.log(`  [${row}]`));

  const rows = grid.length,
    cols = grid[0].length;
  let islands = 0;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islands++;
        console.log(`  Đảo ${islands} bắt đầu tại (${r},${c})`);
        const queue = [[r, c]];
        grid[r][c] = "0";
        while (queue.length) {
          const [cr, cc] = queue.shift();
          for (const [dr, dc] of dirs) {
            const nr = cr + dr,
              nc = cc + dc;
            if (
              nr >= 0 &&
              nr < rows &&
              nc >= 0 &&
              nc < cols &&
              grid[nr][nc] === "1"
            ) {
              grid[nr][nc] = "0";
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }
  console.log(`  → Tổng số đảo: ${islands}`);
  return islands;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Number of Islands");
  console.log("━".repeat(50));

  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  numIslands(grid);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════════╗");
console.log("║   BFS - DUYỆT THEO CHIỀU RỘNG              ║");
console.log("╚══════════════════════════════════════════════╝");
example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT BFS:");
console.log("=".repeat(50));
console.log("Time: O(V+E) | Space: O(V) | Dùng Queue");
console.log("✅ Đường đi ngắn nhất (unweighted)");
console.log("✅ Level order, flood fill, islands");
console.log("💡 Queue = FIFO → duyệt theo tầng");
console.log("=".repeat(50));
