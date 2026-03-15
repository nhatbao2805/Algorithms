/**
 * ============================================
 * 🎮 PLAYGROUND - VÙNG CODE THỬ NGHIỆM
 * ============================================
 *
 * File này dùng để bạn TỰ CODE và DEBUG.
 *
 * 🚀 TỰ ĐỘNG CHẠY LẠI KHI SAVE:
 *    Trong thư mục Preview chạy:  npm run playground
 *    Mỗi lần bạn Ctrl+S (save) file này → log sẽ chạy lại ngay.
 *
 * Chạy 1 lần (không watch):  node algorithms/playground.js
 */

// ============================
// 🔧 HELPER: Đo thời gian chạy
// ============================
function measureTime(label, fn) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`⏱️ [${label}] ${(end - start).toFixed(3)}ms`);
  return result;
}

// ============================
// 🔧 HELPER: So sánh kết quả
// ============================
function assertEqual(actual, expected, label = "") {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  const icon = pass ? "✅" : "❌";
  console.log(
    `${icon} ${label || "Test"}: ${pass ? "PASS" : `FAIL → got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`}`,
  );
  return pass;
}

// ============================
// 🔧 HELPER: In mảng đẹp
// ============================
function printArray(label, arr) {
  console.log(`📋 ${label}: [${arr}]`);
}

// ============================
// 🔧 HELPER: In bước debug
// ============================
function debug(...args) {
  console.log("  🐛", ...args);
}

console.log("╔══════════════════════════════════════════╗");
console.log("║   🎮 PLAYGROUND - CODE THỬ NGHIỆM       ║");
console.log("╚══════════════════════════════════════════╝");
console.log("");

// ============================
// ✏️ VIẾT CODE CỦA BẠN Ở ĐÂY
// ============================

// --- Ví dụ: Two Sum ---
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    debug(
      `i=${i}, num=${nums[i]}, cần=${complement}, map has? ${map.has(complement)}`,
    );
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [-1, -1];
}

// --- Test ---
console.log("--- Two Sum ---");
const result = twoSum([2, 7, 11, 15], 9);
printArray("Result", result);
assertEqual(result, [0, 1], "twoSum([2,7,11,15], 9)");
assertEqual(twoSum([3, 2, 4], 6), [1, 2], "twoSum([3,2,4], 6)");

console.log("");

// --- Đo hiệu suất ---
measureTime("twoSum 10000 phần tử", () => {
  const big = Array.from({ length: 10000 }, (_, i) => i);
  return twoSum(big, 19997);
});

console.log("💡 Xóa code ví dụ ở trên và viết code của bạn!");
console.log("   Dùng debug(), assertEqual(), measureTime()");
console.log("   Chạy: node algorithms/playground.js");
