# Ôn Tập Mã Nguồn — `algorithms/99-final-data-structures-solutions.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🧩 FINAL - LỜI GIẢI & GIẢI THÍCH (DATA STRUCTURES)
 * ============================================
 *
 * File này chứa:
 * - Ý tưởng & sample implementation cho các bài trong
 *   `99-final-data-structures-problems.js`.
 *
 * GỢI Ý:
 * - Đừng đọc file này trước khi bạn đã tự thử code.
 * - Hãy dùng nó để so sánh cách tiếp cận & tối ưu.
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   FINAL SOLUTIONS - DATA STRUCTURES     ║");
console.log("╚══════════════════════════════════════════╝");

// ============================================
// FINAL 1: MessageQueue với linked list
// ============================================
console.log("\nFINAL 1 - MessageQueue: Ý tưởng");
console.log("- Dùng singly linked list với head & tail.");
console.log("- enqueue: thêm node mới ở tail (O(1)).");
console.log("- dequeue: lấy node ở head (O(1)).");

class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MessageQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  enqueue(message) {
    const node = new QNode(message);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
  }

  dequeue() {
    if (!this.head) return null;
    const v = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this._size--;
    return v;
  }

  size() {
    return this._size;
  }
}

// Demo nhỏ
const mq = new MessageQueue();
mq.enqueue("A");
mq.enqueue("B");
mq.enqueue("C");
console.log("MessageQueue demo:", mq.dequeue(), mq.dequeue(), "size=", mq.size());

// ============================================
// FINAL 2: BrowserHistory với doubly linked list
// ============================================
console.log("\nFINAL 2 - BrowserHistory: Ý tưởng");
console.log("- Dùng doubly linked list, con trỏ 'current' trỏ tới trang hiện tại.");
console.log("- visit: xoá hết nhánh forward sau current, thêm node mới cuối, current=new.");
console.log("- back/forward: di chuyển current qua prev/next tối đa steps (nếu còn).");

class HistoryNode {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

class BrowserHistory {
  constructor(homepage) {
    const node = new HistoryNode(homepage);
    this.current = node;
  }

  visit(url) {
    const node = new HistoryNode(url);
    // cắt nhánh forward
    this.current.next = null;
    node.prev = this.current;
    this.current.next = node;
    this.current = node;
    return this.current.url;
  }

  back(steps) {
    while (steps > 0 && this.current.prev) {
      this.current = this.current.prev;
      steps--;
    }
    return this.current.url;
  }

  forward(steps) {
    while (steps > 0 && this.current.next) {
      this.current = this.current.next;
      steps--;
    }
    return this.current.url;
  }
}

// Demo nhỏ
const bh = new BrowserHistory("google.com");
bh.visit("facebook.com");
bh.visit("youtube.com");
console.log("BrowserHistory demo:", bh.back(1), bh.back(1), bh.forward(1));

// ============================================
// FINAL 3: findPaths trong cây thư mục (DFS)
// ============================================
console.log("\nFINAL 3 - findPaths: Ý tưởng");
console.log("- Dùng DFS, mang theo đường dẫn hiện tại.");
console.log("- Khi gặp file trùng tên → push full path vào kết quả.");

function findPaths(root, targetName) {
  const result = [];

  function dfs(node, path) {
    const newPath = path === "/" ? `/${node.name}` : `${path}/${node.name}`;
    if (node.type === "file" && node.name === targetName) {
      result.push(newPath);
    }
    if (node.type === "folder" && node.children) {
      for (const child of node.children) {
        dfs(child, newPath);
      }
    }
  }

  dfs(root, "");
  return result;
}

// ============================================
// FINAL 4: hasPermission trong cây role
// ============================================
console.log("\nFINAL 4 - hasPermission: Ý tưởng");
console.log("- Mỗi RoleNode có: name, permissions[], parent hoặc children.");
console.log("- hasPermission: đi ngược lên cha (hoặc DFS từ root) để kiểm tra.");

class RoleNode {
  constructor(name, permissions = []) {
    this.name = name;
    this.permissions = permissions;
    this.parent = null;
  }
}

function hasPermission(role, permission) {
  let current = role;
  while (current) {
    if (current.permissions.includes(permission)) return true;
    current = current.parent;
  }
  return false;
}

// ============================================
// FINAL 5: shortestPath trong graph (BFS)
// ============================================
console.log("\nFINAL 5 - shortestPath: Ý tưởng");
console.log("- Graph vô hướng, unweighted → dùng BFS để tìm số bước ít nhất.");

function shortestPath(graph, start, target) {
  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === target) return dist;
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // không có đường đi
}

console.log("\n" + "=".repeat(50));
console.log("✅ Đã in demo lời giải cho các bài FINAL.");
console.log("Hãy so sánh với cách bạn tự làm trong playground.");
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
