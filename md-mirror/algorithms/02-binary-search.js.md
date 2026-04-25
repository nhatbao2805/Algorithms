# Ôn Tập Mã Nguồn — `algorithms/02-binary-search.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 📘 BINARY SEARCH - TÌM KIẾM NHỊ PHÂN
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Binary Search chia đôi mảng ĐÃ SẮP XẾP mỗi bước.
 * So sánh phần tử giữa với target:
 * - Nếu bằng → tìm thấy
 * - Nếu nhỏ hơn → tìm nửa phải
 * - Nếu lớn hơn → tìm nửa trái
 *
 * ⚠️ ĐIỀU KIỆN: Mảng PHẢI được sắp xếp
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(1) | Average O(log n) | Worst O(log n)
 * - Space: O(1) iterative | O(log n) recursive (call stack)
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Mảng ĐÃ SẮP XẾP
 * ✅ Dùng khi: Cần tìm kiếm nhiều lần
 * ✅ Dùng khi: Dữ liệu lớn (triệu phần tử)
 * ✅ Dùng khi: Tìm biên (lower bound, upper bound)
 * 🔹 lowerBound(x):
 *    - Trả về index đầu tiên có giá trị >= x
 *    - Nếu x chưa có trong mảng, đây là vị trí chèn x để vẫn giữ tăng dần
 * 🔹 upperBound(x):
 *    - Trả về index đầu tiên có giá trị > x
 *    - Là vị trí ngay sau phần tử x cuối cùng
 * 🔸 Ví dụ nhớ nhanh với arr = [1,2,4,4,4,7]
 *    - x = 4  → lowerBound = 2, upperBound = 5, số lần xuất hiện = 5 - 2 = 3
 *    - x = 3  → lowerBound = 2, upperBound = 2 (chèn 3 vào index 2, trước số 4)
 *    - x = 8  → lowerBound = 6, upperBound = 6 (chèn cuối mảng)
 * ❌ Không dùng khi: Mảng chưa sắp xếp
 * ❌ Không dùng khi: Dữ liệu thay đổi liên tục
 *
 * 💡 TẠI SAO DÙNG:
 * - Cực nhanh: 1 triệu phần tử chỉ cần ~20 bước
 * - So sánh: Linear search cần 1 triệu bước
 * - Ứng dụng: Tìm trong database, dictionary, phone book
 */

// ============================
// IMPLEMENTATION: Iterative (Khuyên dùng)
// ============================
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// ============================
// IMPLEMENTATION: Recursive
// ============================
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
}

// ============================
// IMPLEMENTATION VỚI DEBUG
// ============================
function binarySearchDebug(arr, target) {
  console.log(`\n🔍 Binary Search: Tìm ${target} trong [${arr}]`);
  let left = 0,
    right = arr.length - 1,
    step = 0;

  while (left <= right) {
    step++;
    const mid = Math.floor((left + right) / 2);
    console.log(
      `  Bước ${step}: left=${left}, right=${right}, mid=${mid}, arr[mid]=${arr[mid]}`,
    );

    if (arr[mid] === target) {
      console.log(`  → ✅ Tìm thấy tại index ${mid} sau ${step} bước!`);
      return mid;
    }
    if (arr[mid] < target) {
      console.log(`  → ${arr[mid]} < ${target}, tìm nửa PHẢI`);
      left = mid + 1;
    } else {
      console.log(`  → ${arr[mid]} > ${target}, tìm nửa TRÁI`);
      right = mid - 1;
    }
  }
  console.log(`  → ❌ Không tìm thấy sau ${step} bước`);
  return -1;
}

// ============================
// VÍ DỤ 1: Cơ bản
// ============================
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Binary Search cơ bản");
  console.log("━".repeat(50));

  // Input: [1, 3, 5, 7, 9, 11, 13, 15], target = 7
  // Output: 3
  binarySearchDebug([1, 3, 5, 7, 9, 11, 13, 15], 7);

  // Input: [1, 3, 5, 7, 9, 11, 13, 15], target = 6
  // Output: -1
  binarySearchDebug([1, 3, 5, 7, 9, 11, 13, 15], 6);
}

// ============================
// VÍ DỤ 2: Tìm Lower Bound (phần tử >= target đầu tiên)
// ============================
function lowerBound(arr, target) {
  console.log(
    `\n🔍 Lower Bound: Tìm phần tử >= ${target} đầu tiên trong [${arr}]`,
  );
  let left = 0,
    right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log(
      `  left=${left}, right=${right}, mid=${mid}, arr[mid]=${arr[mid]}`,
    );
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  console.log(`  → Index: ${left}, Value: ${arr[left] ?? "N/A"}`);
  return left;
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Lower Bound & Upper Bound");
  console.log("━".repeat(50));

  // Input: [1, 2, 2, 2, 3, 5, 7], target = 2
  // Output: 1 (index đầu tiên của 2)
  lowerBound([1, 2, 2, 2, 3, 5, 7], 2);

  // Input: [1, 2, 2, 2, 3, 5, 7], target = 4
  // Output: 5 (index đầu tiên >= 4, tức là 5)
  lowerBound([1, 2, 2, 2, 3, 5, 7], 4);
}

// ============================
// VÍ DỤ 3: Tìm căn bậc 2 (số nguyên)
// ============================
function sqrtInteger(n) {
  console.log(`\n🔍 Tìm √${n} (số nguyên)`);
  if (n < 2) return n;
  let left = 1,
    right = Math.floor(n / 2),
    step = 0;

  while (left <= right) {
    step++;
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    console.log(`  Bước ${step}: mid=${mid}, mid²=${square}`);

    if (square === n) {
      console.log(`  → ✅ √${n} = ${mid}`);
      return mid;
    }
    if (square < n) left = mid + 1;
    else right = mid - 1;
  }
  console.log(`  → √${n} ≈ ${right} (làm tròn xuống)`);
  return right;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Tìm căn bậc 2");
  console.log("━".repeat(50));

  // Input: 16 → Output: 4
  sqrtInteger(16);
  // Input: 27 → Output: 5 (5² = 25, 6² = 36)
  sqrtInteger(27);
}

// ============================
// VÍ DỤ 4 (Nâng cao): Tìm trong mảng xoay (Rotated Sorted Array)
// ============================
function searchRotated(arr, target) {
  console.log(`\n🔍 Tìm ${target} trong mảng xoay [${arr}]`);
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(
      `  left=${left}, right=${right}, mid=${mid}, arr[mid]=${arr[mid]}`,
    );

    if (arr[mid] === target) {
      console.log(`  → ✅ Tìm thấy tại index ${mid}`);
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        console.log(`  → Target ở nửa trái (đã sắp xếp)`);
        right = mid - 1;
      } else {
        console.log(`  → Target ở nửa phải`);
        left = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[right]) {
        console.log(`  → Target ở nửa phải (đã sắp xếp)`);
        left = mid + 1;
      } else {
        console.log(`  → Target ở nửa trái`);
        right = mid - 1;
      }
    }
  }
  console.log(`  → ❌ Không tìm thấy`);
  return -1;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Mảng xoay");
  console.log("━".repeat(50));

  // Mảng [1,2,3,4,5,6,7] xoay thành [4,5,6,7,0,1,2]
  // Input: [4,5,6,7,0,1,2], target = 0
  // Output: 4
  searchRotated([4, 5, 6, 7, 0, 1, 2], 0);
  searchRotated([4, 5, 6, 7, 0, 1, 2], 5);
}

// ============================
// VÍ DỤ 5 (Nâng cao): Tìm đỉnh mảng (Peak Element)
// ============================
function findPeak(arr) {
  console.log(`\n🔍 Tìm đỉnh trong [${arr}]`);
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log(
      `  left=${left}, right=${right}, mid=${mid}, arr[mid]=${arr[mid]}, arr[mid+1]=${arr[mid + 1]}`,
    );
    if (arr[mid] < arr[mid + 1]) {
      console.log(`  → Đỉnh ở bên phải`);
      left = mid + 1;
    } else {
      console.log(`  → Đỉnh ở bên trái (hoặc tại mid)`);
      right = mid;
    }
  }
  console.log(`  → ✅ Đỉnh tại index ${left}, giá trị = ${arr[left]}`);
  return left;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Tìm đỉnh mảng");
  console.log("━".repeat(50));

  // Input: [1, 3, 20, 4, 1, 0]
  // Output: index 2 (peak = 20)
  findPeak([1, 3, 20, 4, 1, 0]);
  findPeak([1, 2, 3, 4, 5, 3, 1]);
}

// ============================
// 🏃 CHẠY TẤT CẢ VÍ DỤ
// ============================
console.log("╔══════════════════════════════════════╗");
console.log("║   BINARY SEARCH - TÌM KIẾM NHỊ PHÂN ║");
console.log("╚══════════════════════════════════════╝");

example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT BINARY SEARCH:");
console.log("=".repeat(50));
console.log("Time:  O(log n) | Space: O(1)");
console.log("✅ CỰC NHANH cho dữ liệu đã sắp xếp");
console.log("✅ 1 triệu phần tử → chỉ ~20 bước");
console.log("⚠️ YÊU CẦU: mảng PHẢI sắp xếp");
console.log("💡 Biến thể: Lower/Upper Bound, Rotated Array, Peak");
console.log("=".repeat(50));

```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
