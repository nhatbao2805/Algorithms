/**
 * ============================================
 * 🎮 PLAYGROUND - VÙNG CODE THỬ NGHIỆM
 * ============================================
 *
 * • `node algorithms/playground.js` → chạy MỘT lần rồi thoát. Save file KHÔNG tự chạy lại.
 * • Muốn mỗi lần Save là log mới: trong thư mục Preview chạy `npm run playground` và GIỮ terminal đó mở.
 * • Cursor: Terminal → Run Task… → "Playground: chạy lại mỗi khi save (nodemon)"
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
    if (nums.length <= 20) {
      debug(
        `i=${i}, num=${nums[i]}, cần=${complement}, map has? ${map.has(complement)}`,
      );
    }
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
