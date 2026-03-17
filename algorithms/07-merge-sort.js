/**
 * ============================================
 * 📘 MERGE SORT - SẮP XẾP TRỘN
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Sử dụng chiến lược CHIA ĐỂ TRỊ (Divide and Conquer):
 * 1. CHIA: Chia mảng thành 2 nửa bằng nhau
 * 2. TRỊ: Đệ quy sắp xếp từng nửa
 * 3. TRỘN: Trộn 2 nửa đã sắp xếp thành 1 mảng hoàn chỉnh
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(n log n) | Average O(n log n) | Worst O(n log n)
 * - Space: O(n) - Cần mảng phụ để trộn
 * - Stable: ✅
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Cần đảm bảo O(n log n) MỌI trường hợp
 * ✅ Dùng khi: Cần stable sort
 * ✅ Dùng khi: Sắp xếp linked list (không cần O(n) space)
 * ✅ Dùng khi: External sort (dữ liệu lớn hơn RAM)
 * ❌ Không dùng khi: Bộ nhớ hạn chế (cần O(n) extra space)
 * ❌ Không dùng khi: Mảng nhỏ (overhead lớn hơn insertion sort)
 *
 * 💡 TẠI SAO DÙNG:
 * - Luôn O(n log n), không có worst case xấu như Quick Sort
 * - Stable sort: giữ thứ tự phần tử bằng nhau
 * - Là nền tảng của Timsort (sort mặc định JS/Python)
 * - Tốt cho parallel processing
 */

// ============================
// IMPLEMENTATION CƠ BẢN
// ============================
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// ============================
// IMPLEMENTATION VỚI DEBUG
// ============================
function mergeSortDebug(arr, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(`${indent}mergeSort([${arr}])`);

  if (arr.length <= 1) {
    console.log(`${indent}→ Trả về [${arr}] (đã cơ sở)`);
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  console.log(`${indent}CHIA: [${leftArr}] | [${rightArr}]`);

  const left = mergeSortDebug(leftArr, depth + 1);
  const right = mergeSortDebug(rightArr, depth + 1);

  const merged = merge(left, right);
  console.log(`${indent}TRỘN: [${left}] + [${right}] → [${merged}]`);
  return merged;
}

// VÍ DỤ 1: Cơ bản
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Merge Sort cơ bản");
  console.log("━".repeat(50));
  // Input: [38, 27, 43, 3, 9, 82, 10]
  // Output: [3, 9, 10, 27, 38, 43, 82]
  const result = mergeSortDebug([38, 27, 43, 3, 9, 82, 10]);
  console.log(`\nKết quả cuối: [${result}]`);
}

// VÍ DỤ 2: Trộn 2 mảng đã sắp xếp
function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Trộn 2 mảng đã sắp xếp");
  console.log("━".repeat(50));
  const a = [1, 3, 5, 7];
  const b = [2, 4, 6, 8];
  console.log(`Input: [${a}] + [${b}]`);
  const result = merge(a, b);
  console.log(`Output: [${result}]`);
}

// VÍ DỤ 3: So sánh với Quick Sort
function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Sắp xếp mảng lớn");
  console.log("━".repeat(50));
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  console.log(`Input (20 số ngẫu nhiên): [${arr}]`);
  const sorted = mergeSort(arr);
  console.log(`Output: [${sorted}]`);
  console.log(
    `Số bước tối đa: 20 * log2(20) ≈ ${Math.ceil(20 * Math.log2(20))} phép so sánh`,
  );
}

// VÍ DỤ 4 (Nâng cao): Đếm số cặp nghịch thế (Inversion Count)
function mergeSortCountInversions(arr) {
  if (arr.length <= 1) return { sorted: arr, count: 0 };

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortCountInversions(arr.slice(0, mid));
  const right = mergeSortCountInversions(arr.slice(mid));

  const merged = [];
  let i = 0,
    j = 0,
    count = left.count + right.count;

  while (i < left.sorted.length && j < right.sorted.length) {
    if (left.sorted[i] <= right.sorted[j]) {
      merged.push(left.sorted[i++]);
    } else {
      merged.push(right.sorted[j++]);
      count += left.sorted.length - i;
    }
  }

  const sorted = merged
    .concat(left.sorted.slice(i))
    .concat(right.sorted.slice(j));
  return { sorted, count };
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Đếm cặp nghịch thế");
  console.log("━".repeat(50));
  // Nghịch thế: cặp (i,j) mà i < j nhưng arr[i] > arr[j]
  const arr = [5, 3, 2, 4, 1];
  console.log(`Input: [${arr}]`);
  const result = mergeSortCountInversions(arr);
  console.log(`Sorted: [${result.sorted}]`);
  console.log(`Số cặp nghịch thế: ${result.count}`);
  console.log(`(Càng nhiều nghịch thế = mảng càng "lộn xộn")`);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════╗");
console.log("║   MERGE SORT - SẮP XẾP TRỘN            ║");
console.log("╚══════════════════════════════════════════╝");
example1();
example2();
example3();
example4();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT MERGE SORT:");
console.log("=".repeat(50));
console.log("Time: O(n log n) MỌI case | Space: O(n) | Stable: ✅");
console.log("✅ Đảm bảo O(n log n), stable");
console.log("✅ Tốt cho linked list, external sort");
console.log("❌ Cần O(n) bộ nhớ phụ");
console.log("💡 Nền tảng của Timsort");
console.log("=".repeat(50));
