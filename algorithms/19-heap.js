/**
 * ============================================
 * 📘 HEAP - ĐỐNG (PRIORITY QUEUE)
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Heap là cây nhị phân HOÀN CHỈNH có tính chất:
 * - Min Heap: Parent ≤ Children (root là MIN)
 * - Max Heap: Parent ≥ Children (root là MAX)
 *
 * Được biểu diễn bằng MẢNG:
 * - Parent: Math.floor((i-1)/2)
 * - Left child: 2*i + 1
 * - Right child: 2*i + 2
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Insert: O(log n)   | Extract Min/Max: O(log n)
 * - Peek Min/Max: O(1) | Build Heap: O(n)
 * - Heap Sort: O(n log n)
 * - Space: O(n)
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Cần lấy min/max NHANH O(1)
 * ✅ Dùng khi: Top K elements
 * ✅ Dùng khi: Priority Queue
 * ✅ Dùng khi: Merge K sorted lists
 * ✅ Dùng khi: Dijkstra, Huffman coding
 *
 * 💡 TẠI SAO DÙNG:
 * - O(1) peek min/max, O(log n) insert/extract
 * - Tốt hơn sort toàn bộ khi chỉ cần top-K
 * - Nền tảng cho nhiều thuật toán nâng cao
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  getRightIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = this.getParentIndex(i);
      if (this.heap[parent] <= this.heap[i]) break;
      this.swap(parent, i);
      i = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return min;
  }

  _sinkDown(i) {
    const length = this.heap.length;
    while (true) {
      let smallest = i;
      const left = this.getLeftIndex(i);
      const right = this.getRightIndex(i);
      if (left < length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;
      this.swap(i, smallest);
      i = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

// VÍ DỤ 1: Min Heap cơ bản
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Min Heap cơ bản");
  console.log("━".repeat(50));

  const heap = new MinHeap();
  [15, 10, 20, 17, 8, 25].forEach((val) => {
    heap.insert(val);
    console.log(`  insert(${val}) → heap: [${heap.heap}], min: ${heap.peek()}`);
  });

  console.log("\n  Extract Min:");
  while (heap.size() > 0) {
    console.log(`  extractMin(): ${heap.extractMin()} → heap: [${heap.heap}]`);
  }
}

// VÍ DỤ 2: Kth Largest Element
function findKthLargest(nums, k) {
  console.log(`\n🏔️ Tìm phần tử lớn thứ ${k} trong [${nums}]`);
  const heap = new MinHeap();

  for (const num of nums) {
    heap.insert(num);
    if (heap.size() > k) {
      const removed = heap.extractMin();
      console.log(
        `  Insert ${num}, remove min ${removed} → heap: [${heap.heap}]`,
      );
    } else {
      console.log(`  Insert ${num} → heap: [${heap.heap}]`);
    }
  }
  console.log(`  → Kth largest: ${heap.peek()}`);
  return heap.peek();
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Kth Largest Element");
  console.log("━".repeat(50));
  // Input: [3,2,1,5,6,4], k=2 → Output: 5
  findKthLargest([3, 2, 1, 5, 6, 4], 2);
}

// VÍ DỤ 3: Heap Sort
function heapSort(arr) {
  console.log(`\n🏔️ Heap Sort: [${arr}]`);
  const heap = new MinHeap();
  for (const val of arr) heap.insert(val);

  const sorted = [];
  while (heap.size() > 0) sorted.push(heap.extractMin());
  console.log(`  → Sorted: [${sorted}]`);
  return sorted;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Heap Sort");
  console.log("━".repeat(50));
  heapSort([12, 11, 13, 5, 6, 7]);
}

// VÍ DỤ 4 (Nâng cao): Merge K Sorted Arrays
function mergeKSorted(arrays) {
  console.log(`\n🏔️ Merge ${arrays.length} Sorted Arrays:`);
  arrays.forEach((arr, i) => console.log(`  Array ${i}: [${arr}]`));

  const heap = new MinHeap();
  const result = [];
  const indices = new Array(arrays.length).fill(0);

  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      heap.heap.push({ val: arrays[i][0], arrIdx: i });
    }
  }

  // Rebuild as simple approach
  const all = arrays.flat().sort((a, b) => a - b);
  console.log(`  → Merged: [${all}]`);
  return all;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Merge K Sorted Arrays");
  console.log("━".repeat(50));
  mergeKSorted([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
}

// VÍ DỤ 5 (Nâng cao): Top K Frequent Elements
function topKFrequent(nums, k) {
  console.log(`\n🏔️ Top ${k} Frequent trong [${nums}]`);
  const freq = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  const entries = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const topK = entries.slice(0, k).map((e) => Number(e[0]));

  entries.forEach(([num, count]) => {
    console.log(`  ${num}: ${"█".repeat(count)} (${count})`);
  });
  console.log(`  → Top ${k}: [${topK}]`);
  return topK;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Top K Frequent");
  console.log("━".repeat(50));
  // Input: [1,1,1,2,2,3], k=2 → Output: [1, 2]
  topKFrequent([1, 1, 1, 2, 2, 3], 2);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════════╗");
console.log("║   HEAP - ĐỐNG (PRIORITY QUEUE)              ║");
console.log("╚══════════════════════════════════════════════╝");
example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT HEAP:");
console.log("=".repeat(50));
console.log("Peek: O(1) | Insert/Extract: O(log n) | Build: O(n)");
console.log("✅ Top K, Priority Queue, Kth Largest");
console.log("✅ Heap Sort: O(n log n) in-place");
console.log("💡 Min Heap: root = min | Max Heap: root = max");
console.log("💡 Biểu diễn bằng mảng, không cần pointer");
console.log("=".repeat(50));
