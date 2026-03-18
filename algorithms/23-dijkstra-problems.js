/**
 * ============================================
 * 📘 DIJKSTRA - BỘ BÀI TẬP
 * ============================================
 *
 * Đề đã có ví dụ rất chi tiết trong `23-dijkstra.js`.
 * File này chỉ tổng hợp bài tập không lời giải.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   DIJKSTRA - BÀI TẬP                    ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Shortest path trong graph nhỏ.");
console.log("  - Graph 4–5 node, edge weight không âm.");
console.log("  - In ra dist và path từ start đến tất cả node.");

console.log("\nBÀI 2: Bản đồ thành phố (như ví dụ trong file chính).");
console.log("  - Tự thiết kế cityMap khác, thêm nhiều đường/tên phố.");
console.log("  - Tìm đường từ Nhà → mọi nơi (Trường, Chợ, Bệnh viện,...).");

console.log("\nBÀI 3: Ứng dụng Network Delay Time.");
console.log("  - Tự sinh vài bộ test cho hàm networkDelay(...).");
console.log("  - Thử case có node không tới được.");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: In ra thứ tự các đỉnh được relax (thứ tự Dijkstra).");
console.log("BÀI 5: Graph 5–6 đỉnh, có 1 cạnh weight âm → giải thích vì sao Dijkstra có thể sai.");
console.log("BÀI 6: Tìm đường ngắn nhất từ A đến 1 đỉnh cố định Z (chỉ in 1 path, không cần tất cả).");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Cheapest Flights Within K Stops (giới hạn số cạnh, Bellman-Ford style hoặc Dijkstra với (node, stops)).");
console.log("BÀI 8: Path with maximum probability: cạnh có xác suất, tìm đường có tích xác suất lớn nhất (log biến thành tổng → Dijkstra).");
console.log("BÀI 9: Network delay với priority queue (min-heap) thay vì scan toàn bộ mỗi bước → O((V+E) log V).");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Shortest path in weighted grid (chỉ đi 4 hướng, mỗi ô có trọng số) → Dijkstra trên grid.");
console.log("BÀI 11: 2 chiều: tìm đường từ start đến end với điều kiện tối đa k lần 'đi qua ô có cost cao'. (state = (i, j, k)).");
console.log("BÀI 12: Reconstruct path từ start đến tất cả đỉnh (prev[]) và in ra cây đường đi ngắn nhất.");

console.log("\n" + "=".repeat(50));
console.log("👉 Dùng các hàm trong 23-dijkstra.js hoặc tự code lại trong playground.js.");
console.log("=".repeat(50));

