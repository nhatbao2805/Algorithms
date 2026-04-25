# Ôn Tập Mã Nguồn — `algorithms/23-dijkstra-problems.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mục Lục Theo Mức Độ

- **Cơ bản**
  - BÀI 4: In ra thứ tự các đỉnh được relax (thứ tự Dijkstra).
  - BÀI 5: Graph 5–6 đỉnh, có 1 cạnh weight âm → giải thích vì sao Dijkstra có thể sai.
  - BÀI 6: Tìm đường ngắn nhất từ A đến 1 đỉnh cố định Z (chỉ in 1 path, không cần tất cả).
- **Trung bình**
  - BÀI 7: Cheapest Flights Within K Stops (giới hạn số cạnh, Bellman-Ford style hoặc Dijkstra với (node, stops)).
  - BÀI 8: Path with maximum probability: cạnh có xác suất, tìm đường có tích xác suất lớn nhất (log biến thành tổng → Dijkstra).
  - BÀI 9: Network delay với priority queue (min-heap) thay vì scan toàn bộ mỗi bước → O((V+E) log V).
- **Nâng cao**
  - BÀI 10: Shortest path in weighted grid (chỉ đi 4 hướng, mỗi ô có trọng số) → Dijkstra trên grid.
  - BÀI 11: 2 chiều: tìm đường từ start đến end với điều kiện tối đa k lần 'đi qua ô có cost cao'. (state = (i, j, k)).
  - BÀI 12: Reconstruct path từ start đến tất cả đỉnh (prev[]) và in ra cây đường đi ngắn nhất.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 📘 DIJKSTRA - BỘ BÀI TẬP
 * ============================================
 *
 * Đề đã có ví dụ rất chi tiết trong `23-dijkstra.js`.
 * File này chỉ tổng hợp bài tập không lời giải.
 */

console.log("╔══════════════════════════════════════════╗
console.log("║   DIJKSTRA - BÀI TẬP                    ║
console.log("╚══════════════════════════════════════════╝

console.log("\nBÀI 1: Shortest path trong graph nhỏ.
console.log("  Input : A-B:1, B-C:2, A-C:10, start=A
console.log("  Output: dist(A)=0, dist(B)=1, dist(C)=3 (đi A→B→C), path tới C: A,B,C
console.log("  - Graph 4–5 node, weight không âm; in dist[] và path.

console.log("\nBÀI 2: Bản đồ thành phố (như ví dụ trong file chính).
console.log("  Input / Output: tự đặt tên đỉnh (Nhà, Trường, …) và in đường + tổng km
console.log("  - Tự thiết kế cityMap khác, thêm nhiều đường/tên phố.

console.log("\nBÀI 3: Ứng dụng Network Delay Time.
console.log("  Input : times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2  (LeetCode mẫu)
console.log("  Output: 2  (thời gian để tất cả node nhận tín hiệu), hoặc -1 nếu không tới được

console.log("\n--- 🟢 CƠ BẢN THÊM ---
console.log("\nBÀI 4: In ra thứ tự các đỉnh được relax (thứ tự Dijkstra).
console.log("BÀI 5: Graph 5–6 đỉnh, có 1 cạnh weight âm → giải thích vì sao Dijkstra có thể sai.
console.log("BÀI 6: Tìm đường ngắn nhất từ A đến 1 đỉnh cố định Z (chỉ in 1 path, không cần tất cả).

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---
console.log("\nBÀI 7: Cheapest Flights Within K Stops (giới hạn số cạnh, Bellman-Ford style hoặc Dijkstra với (node, stops)).
console.log("BÀI 8: Path with maximum probability: cạnh có xác suất, tìm đường có tích xác suất lớn nhất (log biến thành tổng → Dijkstra).
console.log("BÀI 9: Network delay với priority queue (min-heap) thay vì scan toàn bộ mỗi bước → O((V+E) log V).

console.log("\n--- 🔴 NÂNG CAO ---
console.log("\nBÀI 10: Shortest path in weighted grid (chỉ đi 4 hướng, mỗi ô có trọng số) → Dijkstra trên grid.
console.log("BÀI 11: 2 chiều: tìm đường từ start đến end với điều kiện tối đa k lần 'đi qua ô có cost cao'. (state = (i, j, k)).
console.log("BÀI 12: Reconstruct path từ start đến tất cả đỉnh (prev[]) và in ra cây đường đi ngắn nhất.

console.log("\n" + "=".repeat(50));
console.log("👉 Dùng các hàm trong 23-dijkstra.js hoặc tự code lại trong playground.js.
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
