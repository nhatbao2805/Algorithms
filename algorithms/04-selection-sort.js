/**
 * ============================================
 * 📘 SELECTION SORT - SẮP XẾP CHỌN
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Chia mảng thành 2 phần: đã sắp xếp (trái) và chưa sắp xếp (phải).
 * Mỗi lượt, TÌM phần tử NHỎ NHẤT từ phần chưa sắp xếp,
 * rồi ĐƯA nó vào cuối phần đã sắp xếp.
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(n²) | Average O(n²) | Worst O(n²)
 * - Space: O(1) - In-place
 * - Stable: ❌ (có thể thay đổi thứ tự phần tử bằng nhau)
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Cần ÍT hoán đổi nhất (tối đa n-1 lần swap)
 * ✅ Dùng khi: Bộ nhớ hạn chế (in-place)
 * ✅ Dùng khi: Dữ liệu nhỏ
 * ❌ Không dùng khi: Dữ liệu lớn
 * ❌ Không dùng khi: Cần stable sort
 *
 * 💡 TẠI SAO DÙNG:
 * - Ít hoán đổi hơn Bubble Sort
 * - Đơn giản, dễ implement
 * - Luôn O(n²) dù best hay worst case
 */

function selectionSort(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [result[i], result[minIdx]] = [result[minIdx], result[i]];
    }
  }
  return result;
}

function selectionSortDebug(arr) {
  console.log(`\n🎯 Selection Sort: [${arr}]`);
  const result = [...arr];
  let swapCount = 0;

  for (let i = 0; i < result.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) minIdx = j;
    }
    console.log(
      `  Lượt ${i + 1}: Tìm min trong [${result.slice(i)}] → min=${result[minIdx]} tại index ${minIdx}`,
    );
    if (minIdx !== i) {
      [result[i], result[minIdx]] = [result[minIdx], result[i]];
      swapCount++;
      console.log(`    Hoán đổi [${i}] ↔ [${minIdx}] → [${result}]`);
    } else {
      console.log(`    Đã đúng vị trí → [${result}]`);
    }
  }
  console.log(`  → Kết quả: [${result}] (${swapCount} lần hoán đổi)`);
  return result;
}

// VÍ DỤ 1: Cơ bản
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Sắp xếp mảng số");
  console.log("━".repeat(50));
  // Input: [29, 10, 14, 37, 13] → Output: [10, 13, 14, 29, 37]
  selectionSortDebug([29, 10, 14, 37, 13]);
}

// VÍ DỤ 2: So sánh số lần swap với Bubble Sort
function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Đếm số lần swap");
  console.log("━".repeat(50));
  const arr = [5, 3, 1, 4, 2];
  console.log(`Input: [${arr}]`);
  console.log(`Selection Sort: Tối đa ${arr.length - 1} lần swap`);
  console.log(
    `Bubble Sort: Có thể lên đến ${(arr.length * (arr.length - 1)) / 2} lần swap`,
  );
  selectionSortDebug(arr);
}

// VÍ DỤ 3 (Nâng cao): Tìm K phần tử nhỏ nhất
function findKSmallest(arr, k) {
  console.log(`\n🎯 Tìm ${k} phần tử nhỏ nhất trong [${arr}]`);
  const result = [...arr];
  const smallest = [];

  for (let i = 0; i < k; i++) {
    let minIdx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) minIdx = j;
    }
    [result[i], result[minIdx]] = [result[minIdx], result[i]];
    smallest.push(result[i]);
    console.log(`  Phần tử nhỏ thứ ${i + 1}: ${result[i]}`);
  }
  console.log(`  → ${k} phần tử nhỏ nhất: [${smallest}]`);
  return smallest;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3 (Nâng cao): Tìm K phần tử nhỏ nhất");
  console.log("━".repeat(50));
  // Input: [38, 27, 43, 3, 9, 82, 10], k=3
  // Output: [3, 9, 10]
  findKSmallest([38, 27, 43, 3, 9, 82, 10], 3);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════╗");
console.log("║   SELECTION SORT - SẮP XẾP CHỌN        ║");
console.log("╚══════════════════════════════════════════╝");
example1();
example2();
example3();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT SELECTION SORT:");
console.log("=".repeat(50));
console.log("Time: O(n²) | Space: O(1) | Stable: ❌");
console.log("✅ Ít swap (tối đa n-1 lần)");
console.log("✅ Đơn giản, in-place");
console.log("❌ Luôn O(n²), không tối ưu được");
console.log("=".repeat(50));
