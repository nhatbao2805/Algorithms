/**
 * ============================================
 * 📘 HASH TABLE - BẢNG BĂM
 * ============================================
 * 
 * 🔍 LÝ THUYẾT:
 * Hash Table lưu trữ dữ liệu theo cặp KEY-VALUE.
 * Sử dụng hàm băm (hash function) để chuyển key thành index.
 * Cho phép tìm kiếm, thêm, xóa trong O(1) trung bình.
 * 
 * Xử lý xung đột (collision):
 * 1. Chaining: Mỗi slot là một linked list
 * 2. Open Addressing: Tìm slot trống tiếp theo
 * 
 * 📊 ĐỘ PHỨC TẠP:
 * - Average: Search O(1) | Insert O(1) | Delete O(1)
 * - Worst: O(n) (tất cả key cùng hash → collision)
 * - Space: O(n)
 * 
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Cần tìm kiếm NHANH O(1)
 * ✅ Dùng khi: Đếm tần suất, nhóm dữ liệu
 * ✅ Dùng khi: Two Sum (unsorted), anagram check
 * ✅ Dùng khi: Cache, memoization
 * ❌ Không dùng khi: Cần dữ liệu có thứ tự
 * ❌ Không dùng khi: Cần tìm min/max nhanh
 * 
 * 💡 TẠI SAO DÙNG:
 * - O(1) trung bình cho mọi thao tác
 * - JS: Object {} và Map đều là hash table
 * - Rất phổ biến trong phỏng vấn
 */

// ============================
// IMPLEMENTATION: Hash Table đơn giản
// ============================
class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
  }

  _hash(key) {
    let hash = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) this.table[index] = [];
    const existing = this.table[index].find(pair => pair[0] === key);
    if (existing) existing[1] = value;
    else { this.table[index].push([key, value]); this.count++; }
  }

  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) return undefined;
    const pair = this.table[index].find(pair => pair[0] === key);
    return pair ? pair[1] : undefined;
  }

  delete(key) {
    const index = this._hash(key);
    if (!this.table[index]) return false;
    const idx = this.table[index].findIndex(pair => pair[0] === key);
    if (idx === -1) return false;
    this.table[index].splice(idx, 1);
    this.count--;
    return true;
  }

  keys() {
    const keys = [];
    for (const bucket of this.table) {
      if (bucket) for (const [key] of bucket) keys.push(key);
    }
    return keys;
  }
}

// VÍ DỤ 1: Hash Table cơ bản
function example1() {
  console.log('━'.repeat(50));
  console.log('VÍ DỤ 1: Hash Table cơ bản');
  console.log('━'.repeat(50));
  
  const ht = new HashTable();
  ht.set('name', 'An');
  ht.set('age', 25);
  ht.set('city', 'Hà Nội');
  
  console.log(`  get('name'): ${ht.get('name')}`);
  console.log(`  get('age'): ${ht.get('age')}`);
  console.log(`  get('city'): ${ht.get('city')}`);
  console.log(`  get('xyz'): ${ht.get('xyz')}`);
  console.log(`  keys(): [${ht.keys()}]`);
  
  ht.delete('age');
  console.log(`  Sau delete('age'): ${ht.get('age')}`);
}

// VÍ DỤ 2: Two Sum (O(n) với Hash Map)
function twoSum(nums, target) {
  console.log(`\n#️⃣ Two Sum: [${nums}], target=${target}`);
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(`  i=${i}, num=${nums[i]}, cần=${complement}, map has? ${map.has(complement)}`);
    
    if (map.has(complement)) {
      console.log(`  → ✅ Tìm thấy: [${map.get(complement)}, ${i}]`);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}

function example2() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 2: Two Sum O(n) với Hash Map');
  console.log('━'.repeat(50));
  // Input: [2, 7, 11, 15], target=9 → Output: [0, 1]
  twoSum([2, 7, 11, 15], 9);
  // Input: [3, 2, 4], target=6 → Output: [1, 2]
  twoSum([3, 2, 4], 6);
}

// VÍ DỤ 3: Đếm tần suất ký tự
function charFrequency(str) {
  console.log(`\n#️⃣ Character Frequency: "${str}"`);
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .forEach(([char, count]) => {
      console.log(`  '${char}': ${'█'.repeat(count)} (${count})`);
    });
  return freq;
}

function example3() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 3: Đếm tần suất ký tự');
  console.log('━'.repeat(50));
  charFrequency('abracadabra');
}

// VÍ DỤ 4: Group Anagrams
function groupAnagrams(strs) {
  console.log(`\n#️⃣ Group Anagrams: [${strs}]`);
  const map = new Map();
  
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  
  const groups = [...map.values()];
  groups.forEach((group, i) => console.log(`  Nhóm ${i + 1}: [${group}]`));
  return groups;
}

function example4() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 4: Group Anagrams');
  console.log('━'.repeat(50));
  // Input: ["eat","tea","tan","ate","nat","bat"]
  // Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
}

// VÍ DỤ 5 (Nâng cao): LRU Cache
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

function example5() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 5 (Nâng cao): LRU Cache');
  console.log('━'.repeat(50));
  
  const lru = new LRUCache(3);
  const ops = [
    () => { lru.put(1, 'A'); console.log(`  put(1, 'A') → cache: [${[...lru.cache.entries()].map(e => `${e[0]}:${e[1]}`)}]`); },
    () => { lru.put(2, 'B'); console.log(`  put(2, 'B') → cache: [${[...lru.cache.entries()].map(e => `${e[0]}:${e[1]}`)}]`); },
    () => { lru.put(3, 'C'); console.log(`  put(3, 'C') → cache: [${[...lru.cache.entries()].map(e => `${e[0]}:${e[1]}`)}]`); },
    () => { console.log(`  get(1): ${lru.get(1)} → cache: [${[...lru.cache.entries()].map(e => `${e[0]}:${e[1]}`)}]`); },
    () => { lru.put(4, 'D'); console.log(`  put(4, 'D') → cache: [${[...lru.cache.entries()].map(e => `${e[0]}:${e[1]}`)}] (evicted key 2!)`); },
    () => { console.log(`  get(2): ${lru.get(2)} (evicted!)`); },
  ];
  ops.forEach(op => op());
}

// 🏃 CHẠY
console.log('╔══════════════════════════════════════════════╗');
console.log('║   HASH TABLE - BẢNG BĂM                    ║');
console.log('╚══════════════════════════════════════════════╝');
example1();
example2();
example3();
example4();
example5();

console.log('\n' + '='.repeat(50));
console.log('📋 TÓM TẮT HASH TABLE:');
console.log('='.repeat(50));
console.log('Average: O(1) mọi thao tác | Space: O(n)');
console.log('✅ Tìm kiếm, đếm, nhóm dữ liệu siêu nhanh');
console.log('✅ JS: Object {}, Map, Set đều dùng hash');
console.log('💡 Phỏng vấn: Two Sum, Anagram, Frequency, LRU');
console.log('='.repeat(50));
