/**
 * ============================================
 * 🧩 FINAL - BÀI TOÁN THỰC TẾ (DATA STRUCTURES)
 * ============================================
 *
 * File này tổng hợp MỘT SỐ bài toán thực tế áp dụng:
 * - Linked List
 * - Queue / Stack
 * - Tree / BFS / DFS
 *
 * ❗ KHÔNG chứa lời giải. Chỉ có mô tả + input mẫu.
 * Lời giải & phân tích nằm trong file:
 *   → `99-final-data-structures-solutions.js`
 *
 * CÁCH DÙNG:
 * - Chạy: node algorithms/99-final-data-structures-problems.js để đọc đề.
 * - Sau đó mở `playground.js` để code lời giải.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   FINAL PRACTICE - DATA STRUCTURES      ║");
console.log("╚══════════════════════════════════════════╝");

// ============================================
// FINAL 1: TRÌ HOÃN TIN NHẮN (MESSAGE QUEUE)
// ============================================
console.log("\nFINAL 1: Hệ thống message queue (queue + linked list)");
console.log("- Bạn xây 1 hệ thống chat, mỗi tin nhắn được đưa vào queue.");
console.log("- Khi server rảnh, nó sẽ lấy tin nhắn ra theo FIFO để xử lý.");
console.log("YÊU CẦU:");
console.log("  1. Thiết kế cấu trúc dữ liệu MessageQueue sử dụng linked list.");
console.log("  2. Hỗ trợ các hàm:");
console.log("     - enqueue(message)");
console.log("     - dequeue() → trả về message hoặc null nếu rỗng");
console.log("     - size()");
console.log("CASE MẪU:");
console.log("  enqueue('A'); enqueue('B'); enqueue('C');");
console.log("  dequeue() → 'A'");
console.log("  dequeue() → 'B'");
console.log("  size()    → 1");

// ============================================
// FINAL 2: LỊCH SỬ BROWSER (DOUBLY LINKED LIST)
// ============================================
console.log("\nFINAL 2: Duyệt lịch sử browser (doubly linked list)");
console.log("- Giống tính năng Back/Forward trên trình duyệt.");
console.log("YÊU CẦU:");
console.log("  Thiết kế lớp BrowserHistory:");
console.log("    - visit(url)");
console.log("    - back(steps) → trở về tối đa 'steps' trang trước");
console.log("    - forward(steps) → đi tới tối đa 'steps' trang sau");
console.log("CASE MẪU:");
console.log("  const bh = new BrowserHistory('google.com');");
console.log("  bh.visit('facebook.com');");
console.log("  bh.visit('youtube.com');");
console.log("  bh.back(1)    → 'facebook.com'");
console.log("  bh.back(1)    → 'google.com'");
console.log("  bh.forward(1) → 'facebook.com'");

// ============================================
// FINAL 3: CÂY THƯ MỤC (TREE + DFS)
// ============================================
console.log("\nFINAL 3: Xây cây thư mục và tìm file (tree + DFS)");
console.log("- Cho dữ liệu thư mục dạng cây (folder, file).");
console.log("- Hãy viết hàm tìm tất cả đường dẫn đến file có tên cụ thể.");
console.log("CASE MẪU (pseudo):");
console.log("  root = {");
console.log("    name: '/', type: 'folder', children: [");
console.log("      { name: 'Users', type: 'folder', children: [...] },");
console.log("      { name: 'etc', type: 'folder', children: [...] },");
console.log("    ]");
console.log("  }");
console.log("  findPaths(root, 'config.json') → ['/etc/config.json', '/Users/me/config.json']");

// ============================================
// FINAL 4: CÂY QUYỀN HẠN (ROLE TREE)
// ============================================
console.log("\nFINAL 4: Hệ thống role & permission (tree + BFS/DFS)");
console.log("- Mỗi role có thể kế thừa role cha.");
console.log("- Mỗi role có 1 danh sách các permission.");
console.log("YÊU CẦU:");
console.log("  1. Thiết kế cấu trúc dữ liệu RoleNode.");
console.log("  2. Viết hàm hasPermission(userRole, permission) → true/false");
console.log("     (tính cả permission kế thừa từ role cha).");
console.log("GỢI Ý:");
console.log("  - Dùng DFS/BFS trên cây role.");

// ============================================
// FINAL 5: SHORTEST PATH TRONG SƠ ĐỒ CÔNG TY (GRAPH + BFS)
// ============================================
console.log("\nFINAL 5: Đường đi ngắn nhất giữa 2 người trong công ty (graph + BFS)");
console.log("- Mỗi nhân viên là 1 node, cạnh giữa 2 người nếu họ làm chung dự án.");
console.log("- Hãy tìm độ dài đường đi ngắn nhất giữa 2 người (số bước trung gian).");
console.log("CASE MẪU:");
console.log("  shortestPath('A', 'D') trong graph:");
console.log("    A - B - C - D");
console.log("    A - E - D");
console.log("  → Kết quả: 2 (A → E → D)");

console.log("\n" + "=".repeat(50));
console.log("👉 Lời giải + phân tích: xem file 99-final-data-structures-solutions.js");
console.log("=".repeat(50));

