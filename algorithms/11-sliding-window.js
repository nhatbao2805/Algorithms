/**
 * ============================================
 * 📘 SLIDING WINDOW - CỬA SỔ TRƯỢT
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Duy trì một "cửa sổ" (subarray/substring) trượt qua mảng.
 * Thay vì tính lại toàn bộ, chỉ CẬP NHẬT khi cửa sổ di chuyển:
 * - Thêm phần tử mới vào bên phải
 * - Loại bỏ phần tử cũ bên trái
 *
 * 2 dạng:
 * 1. FIXED SIZE: Cửa sổ kích thước cố định k
 * 2. VARIABLE SIZE: Cửa sổ co giãn theo điều kiện
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time: O(n) - mỗi phần tử vào/ra cửa sổ 1 lần
 * - Space: O(1) hoặc O(k) tùy bài
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Tìm subarray/substring tối ưu
 * ✅ Dùng khi: Tổng/trung bình k phần tử liên tiếp
 * ✅ Dùng khi: Longest substring without repeating
 * ✅ Dùng khi: Minimum window substring
 *
 * 💡 TẠI SAO DÙNG:
 * - Giảm O(n*k) → O(n) cho subarray problems
 * - Rất phổ biến trong phỏng vấn
 */

// ============================
// VÍ DỤ 1: Tổng lớn nhất của k phần tử liên tiếp (Fixed Window)
// ============================
function maxSumSubarray(arr, k) {
  console.log(`\n🪟 Max Sum Subarray, k=${k}: [${arr}]`);

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let maxSum = windowSum;
  console.log(`  Cửa sổ ban đầu [0..${k - 1}]: sum = ${windowSum}`);

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    console.log(
      `  Trượt → [${i - k + 1}..${i}]: +${arr[i]} -${arr[i - k]} = ${windowSum}`,
    );
    maxSum = Math.max(maxSum, windowSum);
  }
  console.log(`  → Max sum = ${maxSum}`);
  return maxSum;
}

function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Max Sum of K Consecutive (Fixed Window)");
  console.log("━".repeat(50));
  // Input: [2, 1, 5, 1, 3, 2], k=3 → Output: 9 (5+1+3)
  maxSumSubarray([2, 1, 5, 1, 3, 2], 3);
}

// ============================
// VÍ DỤ 2: Smallest Subarray with Sum >= S (Variable Window)
// ============================
function minSubarrayLen(arr, target) {
  console.log(`\n🪟 Smallest Subarray Sum >= ${target}: [${arr}]`);
  let left = 0,
    sum = 0,
    minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      const len = right - left + 1;
      console.log(`  [${left}..${right}] sum=${sum}, len=${len}`);
      minLen = Math.min(minLen, len);
      sum -= arr[left];
      left++;
    }
  }
  const result = minLen === Infinity ? 0 : minLen;
  console.log(`  → Min length = ${result}`);
  return result;
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Smallest Subarray >= S (Variable Window)");
  console.log("━".repeat(50));
  // Input: [2, 1, 5, 2, 3, 2], target=7 → Output: 2 ([5,2])
  minSubarrayLen([2, 1, 5, 2, 3, 2], 7);
}

// ============================
// VÍ DỤ 3: Longest Substring Without Repeating
// ============================
function longestUniqueSubstring(str) {
  console.log(`\n🪟 Longest Unique Substring: "${str}"`);
  const charMap = {};
  let left = 0,
    maxLen = 0,
    maxStr = "";

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (charMap[char] !== undefined && charMap[char] >= left) {
      left = charMap[char] + 1;
    }
    charMap[char] = right;

    const len = right - left + 1;
    if (len > maxLen) {
      maxLen = len;
      maxStr = str.slice(left, right + 1);
      console.log(`  Cửa sổ mới: "${maxStr}" (len=${maxLen})`);
    }
  }
  console.log(`  → Longest: "${maxStr}", length = ${maxLen}`);
  return maxLen;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Longest Substring Without Repeating");
  console.log("━".repeat(50));
  // Input: "abcabcbb" → Output: 3 ("abc")
  longestUniqueSubstring("abcabcbb");
  // Input: "pwwkew" → Output: 3 ("wke")
  longestUniqueSubstring("pwwkew");
}

// ============================
// VÍ DỤ 4 (Nâng cao): Maximum of All Subarrays of Size K
// ============================
function maxOfSubarrays(arr, k) {
  console.log(`\n🪟 Max of Each Window k=${k}: [${arr}]`);
  const result = [];
  const deque = [];

  for (let i = 0; i < arr.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift();
    while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) deque.pop();
    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
      console.log(`  Window [${i - k + 1}..${i}]: max = ${arr[deque[0]]}`);
    }
  }
  console.log(`  → Result: [${result}]`);
  return result;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Max of Each Subarray");
  console.log("━".repeat(50));
  // Input: [1, 3, -1, -3, 5, 3, 6, 7], k=3
  // Output: [3, 3, 5, 5, 6, 7]
  maxOfSubarrays([1, 3, -1, -3, 5, 3, 6, 7], 3);
}

// ============================
// VÍ DỤ 5 (Nâng cao): Find All Anagrams
// ============================
function findAnagrams(str, pattern) {
  console.log(`\n🪟 Find Anagrams of "${pattern}" in "${str}"`);
  const patternMap = {};
  const windowMap = {};
  const result = [];

  for (const c of pattern) patternMap[c] = (patternMap[c] || 0) + 1;

  let matched = 0;
  const needed = Object.keys(patternMap).length;

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    windowMap[rightChar] = (windowMap[rightChar] || 0) + 1;
    if (patternMap[rightChar] && windowMap[rightChar] === patternMap[rightChar])
      matched++;

    if (right >= pattern.length) {
      const leftChar = str[right - pattern.length];
      if (patternMap[leftChar] && windowMap[leftChar] === patternMap[leftChar])
        matched--;
      windowMap[leftChar]--;
    }

    if (matched === needed) {
      const startIdx = right - pattern.length + 1;
      result.push(startIdx);
      console.log(
        `  ✅ Anagram tại index ${startIdx}: "${str.slice(startIdx, startIdx + pattern.length)}"`,
      );
    }
  }
  console.log(`  → Tìm thấy ${result.length} anagram tại: [${result}]`);
  return result;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Find All Anagrams");
  console.log("━".repeat(50));
  // Input: str="cbaebabacd", pattern="abc"
  // Output: [0, 6] ("cba" tại 0, "bac" tại 6)
  findAnagrams("cbaebabacd", "abc");
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════╗");
console.log("║   SLIDING WINDOW - CỬA SỔ TRƯỢT        ║");
console.log("╚══════════════════════════════════════════╝");
example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT SLIDING WINDOW:");
console.log("=".repeat(50));
console.log("Time: O(n) | Space: O(1) hoặc O(k)");
console.log("Fixed Window: Tổng/trung bình k phần tử");
console.log("Variable Window: Tìm subarray tối ưu");
console.log("💡 Giảm O(n*k) → O(n)");
console.log("💡 Template: expand right, shrink left");
console.log("=".repeat(50));
