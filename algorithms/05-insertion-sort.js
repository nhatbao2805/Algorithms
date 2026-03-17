/**
 * ============================================
 * 📘 INSERTION SORT - SẮP XẾP CHÈN
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Giống cách xếp bài trên tay: lấy từng lá bài và CHÈN vào
 * đúng vị trí trong phần đã sắp xếp.
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(n) (đã sắp xếp) | Average O(n²) | Worst O(n²) (ngược)
 * - Space: O(1) - In-place
 * - Stable: ✅
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Mảng nhỏ (< 50 phần tử)
 * ✅ Dùng khi: Mảng GẦN NHƯ đã sắp xếp → O(n)
 * ✅ Dùng khi: Dữ liệu đến theo stream (online algorithm)
 * ✅ Dùng khi: Cần stable sort, in-place
 * ❌ Không dùng khi: Dữ liệu lớn, ngẫu nhiên
 *
 * 💡 TẠI SAO DÙNG:
 * - NHANH NHẤT cho mảng nhỏ hoặc gần sắp xếp
 * - Được dùng bên trong Timsort (sort mặc định của JS/Python)
 * - Online algorithm: có thể sort khi dữ liệu đến dần
 */

function insertionSort(arr) {
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }
  return result;
}

function insertionSortDebug(arr) {
  console.log(`\n📥 Insertion Sort: [${arr}]`);
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;
    console.log(
      `\n  Lượt ${i}: Chèn ${key} vào phần đã sắp xếp [${result.slice(0, i)}]`,
    );

    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      console.log(`    Dịch ${result[j]} sang phải`);
      j--;
    }
    result[j + 1] = key;
    console.log(`    Chèn ${key} vào vị trí [${j + 1}] → [${result}]`);
  }
  console.log(`\n  → Kết quả: [${result}]`);
  return result;
}

// VÍ DỤ 1: Cơ bản
function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Sắp xếp cơ bản");
  console.log("━".repeat(50));
  // Input: [12, 11, 13, 5, 6] → Output: [5, 6, 11, 12, 13]
  insertionSortDebug([12, 11, 13, 5, 6]);
}

// VÍ DỤ 2: Mảng gần sắp xếp (Best case O(n))
function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Mảng gần sắp xếp (Best Case)");
  console.log("━".repeat(50));
  // Input: [1, 2, 4, 3, 5, 6] → Output: [1, 2, 3, 4, 5, 6]
  insertionSortDebug([1, 2, 4, 3, 5, 6]);
}

// VÍ DỤ 3 (Nâng cao): Insertion Sort cho linked-list-like operation
function insertionSortWithComparator(arr, comparator) {
  console.log(`\n📥 Sắp xếp với comparator tùy chỉnh:`);
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;
    while (j >= 0 && comparator(result[j], key) > 0) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }
  console.log(
    `  → [${result.map((x) => (typeof x === "object" ? JSON.stringify(x) : x))}]`,
  );
  return result;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3 (Nâng cao): Sắp xếp chuỗi theo độ dài");
  console.log("━".repeat(50));
  const words = ["banana", "kiwi", "apple", "fig", "cherry"];
  console.log(`Input: [${words}]`);
  // Sắp xếp theo độ dài chuỗi
  const sorted = insertionSortWithComparator(
    words,
    (a, b) => a.length - b.length,
  );
  console.log(`Output (theo độ dài): [${sorted}]`);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════╗");
console.log("║   INSERTION SORT - SẮP XẾP CHÈN        ║");
console.log("╚══════════════════════════════════════════╝");
example1();
example2();
example3();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT INSERTION SORT:");
console.log("=".repeat(50));
console.log("Time: O(n²) worst, O(n) best | Space: O(1) | Stable: ✅");
console.log("✅ Tốt nhất cho mảng nhỏ/gần sắp xếp");
console.log("✅ Được dùng trong Timsort (JS Array.sort)");
console.log("💡 Online algorithm: sort khi dữ liệu đến dần");
console.log("=".repeat(50));
