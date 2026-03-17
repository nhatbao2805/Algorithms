/**
 * ============================================
 * 📘 DIJKSTRA - ĐƯỜNG ĐI NGẮN NHẤT (CÓ TRỌNG SỐ)
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Dijkstra tìm đường đi ngắn nhất từ 1 đỉnh đến TẤT CẢ đỉnh khác
 * trong đồ thị CÓ TRỌNG SỐ KHÔNG ÂM.
 *
 * Thuật toán:
 * 1. Khởi tạo khoảng cách: start=0, còn lại=∞
 * 2. Chọn đỉnh có khoảng cách NHỎ NHẤT chưa xét
 * 3. Cập nhật khoảng cách hàng xóm (relaxation)
 * 4. Lặp lại cho đến khi xét hết
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Với Priority Queue: O((V + E) log V)
 * - Với mảng đơn giản: O(V²)
 * - Space: O(V)
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Đường ngắn nhất, đồ thị CÓ TRỌNG SỐ KHÔNG ÂM
 * ✅ Dùng khi: GPS navigation, network routing
 * ✅ Dùng khi: Single source shortest path
 * ❌ Không dùng khi: Có cạnh TRỌNG SỐ ÂM (dùng Bellman-Ford)
 * ❌ Không dùng khi: Đồ thị không trọng số (dùng BFS)
 *
 * 💡 TẠI SAO DÙNG:
 * - Hiệu quả nhất cho shortest path không âm
 * - Ứng dụng thực tế: Google Maps, mạng máy tính
 * - Nền tảng: A* search, network flow
 */

// ============================
// IMPLEMENTATION: Dijkstra đơn giản
// ============================
function dijkstra(graph, start) {
  const dist = {};
  const prev = {};
  const visited = new Set();

  for (const node of Object.keys(graph)) {
    dist[node] = Infinity;
    prev[node] = null;
  }
  dist[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let minNode = null;
    let minDist = Infinity;
    for (const node of Object.keys(dist)) {
      if (!visited.has(node) && dist[node] < minDist) {
        minNode = node;
        minDist = dist[node];
      }
    }

    if (minNode === null) break;
    visited.add(minNode);
    console.log(`  Xét ${minNode} (dist=${dist[minNode]})`);

    for (const [neighbor, weight] of Object.entries(graph[minNode] || {})) {
      const newDist = dist[minNode] + weight;
      if (newDist < dist[neighbor]) {
        console.log(
          `    ${neighbor}: ${dist[neighbor]} → ${newDist} (qua ${minNode})`,
        );
        dist[neighbor] = newDist;
        prev[neighbor] = minNode;
      }
    }
  }
  return { dist, prev };
}

function getPath(prev, end) {
  const path = [];
  let curr = end;
  while (curr) {
    path.unshift(curr);
    curr = prev[curr];
  }
  return path;
}

// VÍ DỤ 1: Cơ bản
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Dijkstra cơ bản");
  console.log("━".repeat(50));

  const graph = {
    A: { B: 4, C: 2 },
    B: { D: 3, C: 1 },
    C: { B: 1, D: 5 },
    D: {},
  };
  console.log("Graph: A→B(4), A→C(2), B→D(3), B→C(1), C→B(1), C→D(5)");

  const { dist, prev } = dijkstra(graph, "A");
  console.log("\n  Khoảng cách từ A:");
  Object.entries(dist).forEach(([node, d]) => {
    const path = getPath(prev, node);
    console.log(`  → ${node}: ${d} (path: ${path.join(" → ")})`);
  });
}

// VÍ DỤ 2: Bản đồ thành phố
function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Bản đồ thành phố");
  console.log("━".repeat(50));

  const cityMap = {
    Nhà: { Trường: 5, Chợ: 2, "Công viên": 8 },
    Trường: { Nhà: 5, "Thư viện": 3 },
    Chợ: { Nhà: 2, "Bệnh viện": 7, "Công viên": 3 },
    "Công viên": { Nhà: 8, Chợ: 3, "Thư viện": 1 },
    "Thư viện": { Trường: 3, "Công viên": 1, "Bệnh viện": 2 },
    "Bệnh viện": { Chợ: 7, "Thư viện": 2 },
  };

  const { dist, prev } = dijkstra(cityMap, "Nhà");
  console.log("\n  Từ Nhà đến:");
  Object.entries(dist).forEach(([node, d]) => {
    if (node !== "Nhà") {
      const path = getPath(prev, node);
      console.log(`  → ${node}: ${d}km (${path.join(" → ")})`);
    }
  });
}

// VÍ DỤ 3 (Nâng cao): Network Delay Time
function networkDelay(times, n, k) {
  console.log(`\n📡 Network Delay: ${n} nodes, start=${k}`);
  const graph = {};
  for (let i = 1; i <= n; i++) graph[i] = {};
  for (const [u, v, w] of times) graph[u][v] = w;

  const { dist } = dijkstra(graph, k);
  const maxDelay = Math.max(
    ...Object.values(dist).filter((d) => d !== Infinity),
  );
  const unreachable = Object.values(dist).some((d) => d === Infinity);

  if (unreachable) {
    console.log(`  → Có node không thể đến được!`);
    return -1;
  }
  console.log(`  → Thời gian để tất cả nhận tín hiệu: ${maxDelay}`);
  return maxDelay;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3 (Nâng cao): Network Delay");
  console.log("━".repeat(50));
  // [[from, to, weight], ...]
  networkDelay(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  );
}

// VÍ DỤ 4 (Nâng cao): Cheapest Flights
function findCheapestPrice(n, flights, src, dst, k) {
  console.log(`\n✈️ Cheapest Flight: ${src}→${dst}, max ${k} stops`);

  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i <= k; i++) {
    const temp = [...dist];
    for (const [u, v, w] of flights) {
      if (dist[u] !== Infinity && dist[u] + w < temp[v]) {
        temp[v] = dist[u] + w;
      }
    }
    dist = temp;
    console.log(
      `  Stop ${i}: dist=[${dist.map((d) => (d === Infinity ? "∞" : d))}]`,
    );
  }

  const result = dist[dst] === Infinity ? -1 : dist[dst];
  console.log(`  → Giá rẻ nhất: ${result}`);
  return result;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Cheapest Flights");
  console.log("━".repeat(50));
  // 4 cities, flights: [from, to, price]
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
      [2, 3, 100],
    ],
    0,
    3,
    1,
  );
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════════════╗");
console.log("║   DIJKSTRA - ĐƯỜNG ĐI NGẮN NHẤT                ║");
console.log("╚══════════════════════════════════════════════════╝");
example1();
example2();
example3();
example4();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT DIJKSTRA:");
console.log("=".repeat(50));
console.log("Time: O((V+E)logV) với PQ | Space: O(V)");
console.log("✅ Shortest path cho weighted graph (non-negative)");
console.log("✅ GPS, network routing, game pathfinding");
console.log("❌ Không dùng cho cạnh âm (→ Bellman-Ford)");
console.log("💡 BFS = unweighted, Dijkstra = weighted");
console.log("=".repeat(50));
