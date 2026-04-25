# Ôn Tập Mã Nguồn — `algorithms/14-linked-list.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 🔗 LINKED LIST (DANH SÁCH LIÊN KẾT)
 * ============================================
 *
 * LÝ THUYẾT NGẮN GỌN:
 * - Mỗi phần tử = 1 "node" có:
 *   + value (giá trị)
 *   + next (con trỏ tới node tiếp theo, hoặc null)
 * - Head: node đầu tiên
 * - Tail: node cuối (next = null)
 *
 * ƯU ĐIỂM:
 * - Thêm/xoá ở đầu O(1)
 * - Thêm/xoá ở giữa khi đã có node trước đó cũng O(1)
 * - Không cần mảng liên tục trong bộ nhớ
 *
 * NHƯỢC ĐIỂM:
 * - Truy cập phần tử theo index = O(n) (phải duyệt từ head)
 * - Không hỗ trợ truy cập random như array[i]
 *
 * DÙNG KHI:
 * - Cần thao tác nhiều ở ĐẦU/DANH SÁCH (queue, stack custom…)
 * - Cần chèn/xoá ở giữa thường xuyên
 *
 * ============================================
 * CẤU TRÚC & HÀM CƠ BẢN
 * ============================================
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Thêm cuối danh sách: O(1) nếu có tail
  push(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Thêm đầu danh sách: O(1)
  unshift(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // Xoá đầu: O(1)
  shift() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    removed.next = null;
    this.length--;
    return removed;
  }

  // Lấy node theo index (0-based): O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  // Chèn vào vị trí index: O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const prev = this.get(index - 1);
    if (!prev) return false;
    const node = new ListNode(value);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }

  // Xoá tại index: O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    if (removed === this.tail) this.tail = prev;
    removed.next = null;
    this.length--;
    return removed;
  }

  // Đảo ngược danh sách: O(n)
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
    this.head = prev;
    return this;
  }

  // Chuyển sang array để debug
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// ============================================
// VÍ DỤ & TEST CƠ BẢN
// ============================================

function exampleLinkedListBasics() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Tạo Linked List & push/unshift");
  console.log("━".repeat(50));

  const list = new LinkedList();
  list.push(10);
  list.push(20);
  list.unshift(5); // [5, 10, 20]

  console.log("Danh sách sau push/unshift:", list.toArray());
  console.log("Head:", list.head.value, "Tail:", list.tail.value, "Length:", list.length);
}

function exampleInsertRemove() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: insert/remove theo index");
  console.log("━".repeat(50));

  const list = new LinkedList();
  [1, 2, 3, 4].forEach((v) => list.push(v)); // [1,2,3,4]
  console.log("Ban đầu:", list.toArray());

  list.insert(2, 99); // [1,2,99,3,4]
  console.log("Sau insert(2,99):", list.toArray());

  const removed = list.remove(3); // xoá 3
  console.log("Sau remove(3):", list.toArray(), "→ removed:", removed.value);
}

function exampleReverse() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: reverse linked list");
  console.log("━".repeat(50));

  const list = new LinkedList();
  [1, 2, 3, 4, 5].forEach((v) => list.push(v));
  console.log("Trước khi đảo:", list.toArray());
  list.reverse();
  console.log("Sau khi đảo :", list.toArray());
}

console.log("╔══════════════════════════════════════════╗");
console.log("║      LINKED LIST - DANH SÁCH LIÊN KẾT   ║");
console.log("╚══════════════════════════════════════════╝");

exampleLinkedListBasics();
exampleInsertRemove();
exampleReverse();

console.log("\n" + "=".repeat(50));
console.log("GỢI Ý BÀI TẬP: xem file 14-linked-list-problems.js");
console.log("=".repeat(50));


```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
