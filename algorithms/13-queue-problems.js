/**
 * ============================================
 * 📥 QUEUE - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   QUEUE - BÀI TẬP                        ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Cài queue bằng mảng và bằng linked list.");
console.log("  Input : enqueue(1), enqueue(2), dequeue(), enqueue(3)");
console.log("  Output: dequeue() → 1, sau đó front là 2 rồi 3");
console.log("  - So sánh enqueue/dequeue nhiều lần (10^5) xem cách nào nhanh hơn.");

console.log("\nBÀI 2: Implement stack bằng 2 queue.");
console.log("  Input : push(1), push(2), push(3), pop()");
console.log("  Output: pop() → 3, top() → 2");
console.log("  - Hàm: push(x), pop(), top().");

console.log("\nBÀI 3: Simulation hàng chờ in (printer queue).");
console.log("  Input : jobs [{id:'A',t:1},{id:'B',t:2}] theo FIFO");
console.log("  Output: thứ tự in A rồi B (hoặc theo priority nếu bạn thêm rule)");
console.log("  - Mỗi job có độ ưu tiên, thời gian đến.");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Cài queue bằng mảng (vòng tròn) với capacity cố định, enqueue/dequeue O(1).");
console.log("BÀI 5: Implement queue chỉ dùng 2 stack (push vào stack1, pop từ stack2 khi rỗng thì đổ stack1 sang).");
console.log("BÀI 6: BFS đơn giản: duyệt đồ thị theo tầng bằng queue (in thứ tự từ đỉnh start).");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Design circular queue: front, rear, size, isFull, isEmpty.");
console.log("BÀI 8: Sliding window maximum dùng deque (monotonic): giữ chỉ số trong deque, phần tử tương ứng giảm dần.");
console.log("BÀI 9: Number of islands (BFS với queue): đếm thành phần liên thông trên lưới 0/1.");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Implement queue với getMin() trong O(1) (dùng 2 stack hoặc deque phụ).");
console.log("BÀI 11: Level order traversal cây nhị phân (in từng tầng một dòng), dùng queue.");
console.log("BÀI 12: Rate limiter: cho phép tối đa n request trong 1 giây, dùng queue lưu timestamp.");

console.log("\n" + "=".repeat(50));
console.log("👉 Dùng playground.js để mô phỏng và in log từng bước.");
console.log("=".repeat(50));

