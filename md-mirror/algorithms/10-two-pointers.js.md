# Ôn Tập Mã Nguồn — `algorithms/10-two-pointers.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 📘 TWO POINTERS - KỸ THUẬT HAI CON TRỎ
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Sử dụng 2 con trỏ (index) di chuyển trong mảng:
 * - Cùng hướng: slow/fast pointer
 * - Ngược hướng: left/right từ 2 đầu
 *
 * Giảm O(n²) xuống O(n) cho nhiều bài toán.
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Time: O(n) - mỗi con trỏ duyệt tối đa n lần
 * - Space: O(1) - chỉ dùng 2 biến
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Mảng ĐÃ SẮP XẾP + tìm cặp/bộ ba
 * ✅ Dùng khi: Xóa trùng lặp tại chỗ
 * ✅ Dùng khi: Đảo mảng/chuỗi
 * ✅ Dùng khi: Bài toán "container with most water"
 * ✅ Dùng khi: Slow/Fast: phát hiện cycle, tìm middle
 *
 * 💡 TẠI SAO DÙNG:
 * - Giảm brute force O(n²) → O(n)
 * - Không cần bộ nhớ phụ O(1) space
 * - Rất phổ biến trong phỏng vấn
 */

// ============================
// VÍ DỤ 1: Two Sum trên mảng đã sắp xếp
// ============================
// Time: O(n) | Space: O(1)
function twoSumSorted(arr, target) {
  console.log(`\n👆👆 Two Sum: Tìm 2 số có tổng = ${target} trong [${arr}]`);
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    console.log(
      `  left=${left}(${arr[left]}) + right=${right}(${arr[right]}) = ${sum}`,
    );

    if (sum === target) {
      console.log(`  → ✅ Tìm thấy: [${arr[left]}, ${arr[right]}]`);
      return [left, right];
    }
    if (sum < target) {
      console.log(`  → Tổng nhỏ, tăng left`);
      left++;
    } else {
      console.log(`  → Tổng lớn, giảm right`);
      right--;
    }
  }
  console.log(`  → ❌ Không tìm thấy`);
  return [-1, -1];
}

function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Two Sum (mảng đã sort)");
  console.log("━".repeat(50));
  // Input: [1, 2, 3, 4, 6], target = 6
  // Output: [1, 3] (2 + 4 = 6)
  twoSumSorted([1, 2, 3, 4, 6], 6);
}

// ============================
// VÍ DỤ 2: Xóa phần tử trùng (Remove Duplicates)
// ============================
// Time: O(n) | Space: O(1)
function removeDuplicates(arr) {
  console.log(`\n👆👆 Remove Duplicates: [${arr}]`);
  if (arr.length === 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
      console.log(`  Phần tử mới: arr[${slow}] = ${arr[fast]}`);
    }
  }
  console.log(
    `  → Mảng unique: [${arr.slice(0, slow + 1)}], length = ${slow + 1}`,
  );
  return slow + 1;
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Xóa phần tử trùng");
  console.log("━".repeat(50));
  // Input: [1, 1, 2, 2, 3, 4, 4, 5]
  // Output: length = 5, mảng = [1, 2, 3, 4, 5]
  removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]);
}

// ============================
// VÍ DỤ 3: Palindrome Check
// ============================
function isPalindrome(str) {
  console.log(`\n👆👆 Kiểm tra palindrome: "${str}"`);
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    console.log(`  So sánh '${str[left]}' vs '${str[right]}'`);
    if (str[left] !== str[right]) {
      console.log(`  → ❌ Không phải palindrome`);
      return false;
    }
    left++;
    right--;
  }
  console.log(`  → ✅ Là palindrome!`);
  return true;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Kiểm tra Palindrome");
  console.log("━".repeat(50));
  isPalindrome("racecar"); // true
  isPalindrome("hello"); // false
}

// ============================
// VÍ DỤ 4 (Nâng cao): Three Sum
// ============================
// Time: O(n²) | Space: O(1)
function threeSum(arr, target) {
  console.log(`\n👆👆👆 Three Sum = ${target} trong [${arr}]`);
  arr.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        results.push([arr[i], arr[left], arr[right]]);
        console.log(`  ✅ [${arr[i]}, ${arr[left]}, ${arr[right]}]`);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) left++;
      else right--;
    }
  }
  return results;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4 (Nâng cao): Three Sum");
  console.log("━".repeat(50));
  // Input: [-1, 0, 1, 2, -1, -4], target = 0
  // Output: [[-1, -1, 2], [-1, 0, 1]]
  threeSum([-1, 0, 1, 2, -1, -4], 0);
}

// ============================
// VÍ DỤ 5 (Nâng cao): Container With Most Water
// ============================
function maxArea(heights) {
  console.log(`\n👆👆 Max Area: heights = [${heights}]`);
  let left = 0,
    right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    maxWater = Math.max(maxWater, area);
    console.log(
      `  left=${left}(h=${heights[left]}), right=${right}(h=${heights[right]}), area=${area}, max=${maxWater}`,
    );

    if (heights[left] < heights[right]) left++;
    else right--;
  }
  console.log(`  → Max area: ${maxWater}`);
  return maxWater;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Container With Most Water");
  console.log("━".repeat(50));
  // Input: [1,8,6,2,5,4,8,3,7] → Output: 49
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════╗");
console.log("║   TWO POINTERS - HAI CON TRỎ            ║");
console.log("╚══════════════════════════════════════════╝");
example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT TWO POINTERS:");
console.log("=".repeat(50));
console.log("Time: O(n) | Space: O(1)");
console.log("✅ Giảm O(n²) → O(n)");
console.log("✅ Hai dạng: đối đầu (left/right) & cùng hướng (slow/fast)");
console.log("💡 Yêu cầu: mảng thường cần SẮP XẾP trước");
console.log("💡 Phổ biến: Two Sum, Three Sum, Palindrome, Max Area");
console.log("=".repeat(50));

```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
