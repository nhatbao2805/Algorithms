/**
 * ============================================
 * 📘 LINEAR SEARCH - TÌM KIẾM TUYẾN TÍNH
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Tìm kiếm tuyến tính (Linear Search) là thuật toán đơn giản nhất.
 * Duyệt qua TỪNG phần tử trong mảng từ đầu đến cuối
 * cho đến khi tìm thấy phần tử cần tìm hoặc hết mảng.
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(1) | Average O(n) | Worst O(n)
 * - Space: O(1) - Chỉ dùng vài biến phụ
 *
# 📘 DSA Quick Notes — Set / Map / XOR

## 🔥 Cách nhận diện nhanh khi làm bài

### 👉 Khi gặp bài về unique / duplicate

* **“remove duplicates”** → dùng **Set**
* **“appear once / count frequency”** → dùng **Map / counting**
* **“appear once, còn lại xuất hiện đúng 2 lần”** → dùng **XOR**

---

## 🔹 SET — Những điều cần nhớ

### ✅ Bản chất

Set là tập hợp **không cho phép phần tử trùng lặp**

Ví dụ:

```js
new Set([1, 2, 2, 3])
```

👉 kết quả:

```js
{1, 2, 3}
```

---

### ⚠️ NOTE RẤT QUAN TRỌNG (tránh hiểu nhầm)

❌ **KHÔNG PHẢI**

> “Set thấy trùng là xoá phần tử cũ”

✅ **ĐÚNG LÀ**

> “Set không cho thêm phần tử trùng lần thứ 2”

Ví dụ:

```js
set.add(2)
set.add(2)
```

👉 kết quả vẫn là:

```js
{2}
```

Phần tử `2` **vẫn còn**, chỉ là không thêm lần nữa.

---

### 🔍 Cách check duplicate với Set

👉 luôn check trước khi add

```text
nếu has(x) → duplicate
nếu chưa có → add(x)
```

---

### 🎯 Khi nào dùng Set

* check duplicate
* remove duplicates
* kiểm tra phần tử đã xuất hiện chưa
* bài first repeating element

---

## 🔹 MAP — Những điều cần nhớ

### ✅ Bản chất

Map lưu theo dạng:

```text
key → value
```

Ví dụ:

```text
2 → 3
```

nghĩa là số `2` xuất hiện `3 lần`

---

### ⚠️ NOTE RẤT QUAN TRỌNG

❌ Map **không tự remove duplicate trong array**

✅ Map **không cho key bị trùng**

Nếu set cùng key lần 2:

```text
map.set(2, 1)
map.set(2, 5)
```

👉 kết quả:

```text
2 → 5
```

Giá trị cũ bị **ghi đè**

---

### 🔍 Cách dùng Map để count

```text
nếu key đã có → +1
nếu chưa có → set = 1
```

---

### 🎯 Khi nào dùng Map

* đếm số lần xuất hiện
* frequency counter
* Two Sum
* grouping / mapping data

---

## 🔹 XOR — Những điều cần nhớ

### ✅ Công thức vàng

```text
a ^ a = 0
a ^ 0 = a
```

---

### 🎯 Khi nào dùng XOR

Bài kiểu:

> “mọi phần tử xuất hiện 2 lần, chỉ có 1 phần tử xuất hiện 1 lần”

👉 dùng XOR là tối ưu nhất

---

## 🚀 Cheat Sheet cực nhanh

```text
check duplicate       → Set
count frequency       → Map
find pair complement  → Map
single number         → XOR
remove duplicates     → Set
```
 * 💡 TẠI SAO DÙNG:
 * - Đơn giản, dễ implement
 * - Không cần dữ liệu sắp xếp trước
 * - Hoạt động trên mọi kiểu dữ liệu
 * - Tốt cho dữ liệu nhỏ (< 100 phần tử)
 */

// ============================
// IMPLEMENTATION CƠ BẢN
// ============================
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// ============================
// IMPLEMENTATION VỚI DEBUG
// ============================
function linearSearchDebug(arr, target) {
  console.log(`\n🔍 Tìm ${target} trong [${arr}]`);
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `  Bước ${i + 1}: So sánh arr[${i}]=${arr[i]} với ${target} → ${arr[i] === target ? "✅ TÌM THẤY!" : "❌ Khác"}`,
    );
    if (arr[i] === target) {
      console.log(`  → Kết quả: index = ${i}`);
      return i;
    }
  }
  console.log(`  → Kết quả: KHÔNG TÌM THẤY (-1)`);
  return -1;
}

// ============================
// VÍ DỤ 1: Cơ bản - Tìm số trong mảng
// ============================
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Tìm số trong mảng");
  console.log("━".repeat(50));

  const arr = [5, 3, 8, 1, 9, 2, 7];

  // Input: arr = [5,3,8,1,9,2,7], target = 9
  // Output: 4 (index của số 9)
  linearSearchDebug(arr, 9);

  // Input: arr = [5,3,8,1,9,2,7], target = 6
  // Output: -1 (không tìm thấy)
  linearSearchDebug(arr, 6);
}

// ============================
// VÍ DỤ 2: Tìm chuỗi trong mảng
// ============================
function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Tìm chuỗi trong mảng");
  console.log("━".repeat(50));

  const fruits = ["táo", "cam", "chuối", "nho", "xoài"];

  // Input: fruits = ['táo','cam','chuối','nho','xoài'], target = 'nho'
  // Output: 3
  linearSearchDebug(fruits, "nho");
}

// ============================
// VÍ DỤ 3: Tìm TẤT CẢ vị trí xuất hiện
// ============================
function findAllOccurrences(arr, target) {
  console.log(`\n🔍 Tìm TẤT CẢ vị trí của ${target} trong [${arr}]`);
  const positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      positions.push(i);
      console.log(`  Tìm thấy tại index ${i}`);
    }
  }
  console.log(`  → Tổng: ${positions.length} vị trí: [${positions}]`);
  return positions;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Tìm tất cả vị trí xuất hiện");
  console.log("━".repeat(50));

  // Input: [1,3,5,3,7,3,9], target = 3
  // Output: [1, 3, 5] (3 xuất hiện tại index 1, 3, 5)
  findAllOccurrences([1, 3, 5, 3, 7, 3, 9], 3);
}

// ============================
// VÍ DỤ 4: Tìm trong mảng object
// ============================
function findInObjects(arr, key, value) {
  console.log(`\n🔍 Tìm object có ${key} = ${value}`);
  for (let i = 0; i < arr.length; i++) {
    console.log(`  Kiểm tra: ${JSON.stringify(arr[i])}`);
    if (arr[i][key] === value) {
      console.log(`  → ✅ Tìm thấy tại index ${i}!`);
      return arr[i];
    }
  }
  console.log(`  → Không tìm thấy`);
  return null;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4: Tìm trong mảng object");
  console.log("━".repeat(50));

  const users = [
    { id: 1, name: "An", age: 25 },
    { id: 2, name: "Bình", age: 30 },
    { id: 3, name: "Cường", age: 22 },
  ];

  // Input: users, key='name', value='Bình'
  // Output: { id: 2, name: 'Bình', age: 30 }
  findInObjects(users, "name", "Bình");
}

// ============================
// VÍ DỤ 5 (Nâng cao): Tìm giá trị min/max
// ============================
function findMinMax(arr) {
  console.log(`\n🔍 Tìm Min/Max trong [${arr}]`);
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log(`  Bước ${i}: Min mới = ${min}`);
    }
    if (arr[i] > max) {
      max = arr[i];
      console.log(`  Bước ${i}: Max mới = ${max}`);
    }
  }
  console.log(`  → Min = ${min}, Max = ${max}`);
  return { min, max };
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Tìm Min/Max");
  console.log("━".repeat(50));

  // Input: [38, 27, 43, 3, 9, 82, 10]
  // Output: { min: 3, max: 82 }
  findMinMax([38, 27, 43, 3, 9, 82, 10]);
}

// ============================
// 🏃 CHẠY TẤT CẢ VÍ DỤ
// ============================
console.log("╔══════════════════════════════════════╗");
console.log("║   LINEAR SEARCH - TÌM KIẾM TUYẾN TÍNH ║");
console.log("╚══════════════════════════════════════╝");

example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT LINEAR SEARCH:");
console.log("=".repeat(50));
console.log("Time:  O(n) | Space: O(1)");
console.log("✅ Đơn giản, không cần sắp xếp");
console.log("❌ Chậm với dữ liệu lớn");
console.log("💡 Dùng cho: mảng nhỏ, dữ liệu chưa sắp xếp");
console.log("=".repeat(50));
