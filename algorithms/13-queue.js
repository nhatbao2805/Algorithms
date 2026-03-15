/**
 * ============================================
 * 📘 QUEUE - HÀNG ĐỢI
 * ============================================
 * 
 * 🔍 LÝ THUYẾT:
 * Queue hoạt động theo nguyên tắc FIFO (First In, First Out):
 * Phần tử vào TRƯỚC sẽ ra TRƯỚC (giống xếp hàng mua vé).
 * 
 * Thao tác:
 * - enqueue(item): Thêm vào cuối → O(1)
 * - dequeue(): Lấy ra từ đầu → O(1)
 * - front/peek(): Xem phần tử đầu → O(1)
 * - isEmpty(): Kiểm tra rỗng → O(1)
 * 
 * 📊 ĐỘ PHỨC TẠP:
 * - Tất cả thao tác: O(1)
 * - Space: O(n)
 * 
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: BFS (duyệt theo chiều rộng)
 * ✅ Dùng khi: Task scheduling, print queue
 * ✅ Dùng khi: Xử lý theo thứ tự (message queue)
 * ✅ Biến thể: Priority Queue, Deque, Circular Queue
 * 
 * 💡 TẠI SAO DÙNG:
 * - Xử lý dữ liệu theo thứ tự đến
 * - Nền tảng của BFS
 * - JS: Dùng Array shift()/push() hoặc tự implement
 * - ⚠️ Array.shift() là O(n)! Dùng linked list hoặc index cho O(1)
 */

// ============================
// IMPLEMENTATION: Queue bằng Object (O(1) thật sự)
// ============================
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  peek() { return this.items[this.head]; }
  isEmpty() { return this.tail === this.head; }
  size() { return this.tail - this.head; }
  print() {
    const items = [];
    for (let i = this.head; i < this.tail; i++) items.push(this.items[i]);
    console.log(`  Queue: [${items}] (front → back)`);
  }
}

// VÍ DỤ 1: Queue cơ bản
function example1() {
  console.log('━'.repeat(50));
  console.log('VÍ DỤ 1: Queue cơ bản (FIFO)');
  console.log('━'.repeat(50));
  
  const q = new Queue();
  console.log('enqueue(1), enqueue(2), enqueue(3):');
  q.enqueue(1); q.enqueue(2); q.enqueue(3);
  q.print();
  
  console.log(`peek(): ${q.peek()}`);
  console.log(`dequeue(): ${q.dequeue()}`);
  q.print();
  console.log(`dequeue(): ${q.dequeue()}`);
  q.print();
  console.log(`size(): ${q.size()}`);
}

// VÍ DỤ 2: Hot Potato Game (Josephus Problem đơn giản)
function hotPotato(names, num) {
  console.log(`\n🥔 Hot Potato: ${names}, count=${num}`);
  const queue = new Queue();
  for (const name of names) queue.enqueue(name);
  
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    const eliminated = queue.dequeue();
    console.log(`  Loại: ${eliminated}`);
  }
  const winner = queue.dequeue();
  console.log(`  → 🏆 Người thắng: ${winner}`);
  return winner;
}

function example2() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 2: Hot Potato Game');
  console.log('━'.repeat(50));
  hotPotato(['An', 'Bình', 'Cường', 'Dũng', 'Em'], 3);
}

// VÍ DỤ 3: Task Queue (xử lý tuần tự)
function processTaskQueue(tasks) {
  console.log(`\n📋 Task Queue: ${tasks.length} tasks`);
  const queue = new Queue();
  for (const task of tasks) queue.enqueue(task);
  
  let time = 0;
  while (!queue.isEmpty()) {
    const task = queue.dequeue();
    time += task.duration;
    console.log(`  [${time}ms] Xử lý: "${task.name}" (${task.duration}ms)`);
  }
  console.log(`  → Tổng thời gian: ${time}ms`);
}

function example3() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 3: Task Queue');
  console.log('━'.repeat(50));
  processTaskQueue([
    { name: 'Download', duration: 100 },
    { name: 'Parse', duration: 50 },
    { name: 'Render', duration: 200 },
    { name: 'Display', duration: 30 },
  ]);
}

// VÍ DỤ 4 (Nâng cao): Priority Queue
class PriorityQueue {
  constructor() { this.items = []; }
  
  enqueue(item, priority) {
    const element = { item, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority < this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) this.items.push(element);
  }
  
  dequeue() { return this.items.shift(); }
  peek() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}

function example4() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 4 (Nâng cao): Priority Queue');
  console.log('━'.repeat(50));
  
  const pq = new PriorityQueue();
  const patients = [
    { name: 'Bệnh nhẹ', priority: 3 },
    { name: 'Cấp cứu', priority: 1 },
    { name: 'Bệnh vừa', priority: 2 },
    { name: 'Khám định kỳ', priority: 4 },
  ];
  
  patients.forEach(p => {
    pq.enqueue(p.name, p.priority);
    console.log(`  Thêm: "${p.name}" (ưu tiên ${p.priority})`);
  });
  
  console.log('\n  Thứ tự xử lý:');
  while (!pq.isEmpty()) {
    const { item, priority } = pq.dequeue();
    console.log(`  → [${priority}] ${item}`);
  }
}

// VÍ DỤ 5 (Nâng cao): Circular Queue
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
  
  enqueue(item) {
    if (this.isFull()) return false;
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }
  
  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return item;
  }
  
  isEmpty() { return this.count === 0; }
  isFull() { return this.count === this.capacity; }
}

function example5() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 5 (Nâng cao): Circular Queue (Buffer)');
  console.log('━'.repeat(50));
  
  const cq = new CircularQueue(3);
  console.log('Capacity: 3');
  console.log(`enqueue(1): ${cq.enqueue(1)}`);
  console.log(`enqueue(2): ${cq.enqueue(2)}`);
  console.log(`enqueue(3): ${cq.enqueue(3)}`);
  console.log(`enqueue(4): ${cq.enqueue(4)} (full!)`);
  console.log(`dequeue(): ${cq.dequeue()}`);
  console.log(`enqueue(4): ${cq.enqueue(4)} (có chỗ rồi!)`);
  console.log(`Circular Queue tối ưu bộ nhớ cho buffer cố định`);
}

// 🏃 CHẠY
console.log('╔══════════════════════════════════════════╗');
console.log('║   QUEUE - HÀNG ĐỢI                      ║');
console.log('╚══════════════════════════════════════════╝');
example1();
example2();
example3();
example4();
example5();

console.log('\n' + '='.repeat(50));
console.log('📋 TÓM TẮT QUEUE:');
console.log('='.repeat(50));
console.log('FIFO | Enqueue/Dequeue: O(1) | Space: O(n)');
console.log('✅ BFS, task scheduling, message queue');
console.log('✅ Biến thể: Priority Queue, Circular Queue, Deque');
console.log('⚠️ JS Array.shift() là O(n)! Dùng object/index');
console.log('='.repeat(50));
