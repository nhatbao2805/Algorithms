/**
 * ============================================
 * 📘 GREEDY ALGORITHM - THUẬT TOÁN THAM LAM
 * ============================================
 *
 * 🔍 LÝ THUYẾT:
 * Greedy luôn chọn LỰA CHỌN TỐT NHẤT TẠI THỜI ĐIỂM HIỆN TẠI
 * mà không xem xét tương lai. Hy vọng các lựa chọn cục bộ
 * tối ưu sẽ dẫn đến lời giải toàn cục tối ưu.
 *
 * ⚠️ KHÔNG PHẢI LÚC NÀO CŨNG ĐÚNG!
 * Greedy chỉ đúng khi bài toán có:
 * - Greedy Choice Property: Chọn tối ưu cục bộ dẫn đến tối ưu toàn cục
 * - Optimal Substructure: Lời giải tối ưu chứa lời giải tối ưu con
 *
 * 📊 ĐỘ PHỨC TẠP:
 * - Thường O(n log n) do cần sort trước
 * - Hoặc O(n) nếu không cần sort
 *
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Activity selection, interval scheduling
 * ✅ Dùng khi: Huffman coding, đổi tiền xu (hệ thống tiêu chuẩn)
 * ✅ Dùng khi: Fractional knapsack
 * ❌ Không dùng khi: 0/1 Knapsack (cần DP)
 * ❌ Không dùng khi: Không chứng minh được Greedy Choice
 *
 * 💡 GREEDY vs DP:
 * - Greedy: Chọn 1 lần, không quay lại → Nhanh hơn
 * - DP: Thử tất cả, chọn tốt nhất → Luôn đúng
 */

// ============================
// VÍ DỤ 1: Activity Selection (Chọn hoạt động)
// ============================
function activitySelection(activities) {
  console.log("\n🏃 Activity Selection:");
  activities.forEach((a) => console.log(`  [${a.start}-${a.end}] ${a.name}`));

  activities.sort((a, b) => a.end - b.end);
  console.log("\n  Sau khi sort theo thời gian kết thúc:");

  const selected = [activities[0]];
  let lastEnd = activities[0].end;
  console.log(
    `  ✅ Chọn: ${activities[0].name} [${activities[0].start}-${activities[0].end}]`,
  );

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= lastEnd) {
      selected.push(activities[i]);
      lastEnd = activities[i].end;
      console.log(
        `  ✅ Chọn: ${activities[i].name} [${activities[i].start}-${activities[i].end}]`,
      );
    } else {
      console.log(
        `  ❌ Bỏ:   ${activities[i].name} [${activities[i].start}-${activities[i].end}] (trùng)`,
      );
    }
  }
  console.log(`  → Tổng: ${selected.length} hoạt động`);
  return selected;
}

function example1() {
  console.log("━".repeat(50));
  console.log("VÍ DỤ 1: Activity Selection");
  console.log("━".repeat(50));
  activitySelection([
    { name: "A", start: 1, end: 4 },
    { name: "B", start: 3, end: 5 },
    { name: "C", start: 0, end: 6 },
    { name: "D", start: 5, end: 7 },
    { name: "E", start: 3, end: 9 },
    { name: "F", start: 5, end: 9 },
    { name: "G", start: 6, end: 10 },
    { name: "H", start: 8, end: 11 },
  ]);
}

// ============================
// VÍ DỤ 2: Coin Change Greedy (hệ tiền tệ chuẩn)
// ============================
function coinChangeGreedy(coins, amount) {
  console.log(`\n💰 Coin Change Greedy: amount=${amount}, coins=[${coins}]`);
  coins.sort((a, b) => b - a);
  const result = [];
  let remaining = amount;

  for (const coin of coins) {
    while (remaining >= coin) {
      result.push(coin);
      remaining -= coin;
      console.log(`  Dùng ${coin} → còn ${remaining}`);
    }
  }

  if (remaining === 0) {
    console.log(`  → ${result.length} xu: [${result}]`);
  } else {
    console.log(`  → Không thể đổi! (Greedy thất bại)`);
  }
  return result;
}

function example2() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 2: Coin Change Greedy");
  console.log("━".repeat(50));
  // Hệ tiền chuẩn: Greedy đúng
  coinChangeGreedy([1, 5, 10, 25], 41);
  // Hệ tiền đặc biệt: Greedy SAI! (cần DP)
  console.log("\n⚠️ Greedy có thể sai:");
  coinChangeGreedy([1, 3, 4], 6);
  console.log("  DP sẽ cho: [3, 3] = 2 xu (tốt hơn!)");
}

// ============================
// VÍ DỤ 3: Fractional Knapsack
// ============================
function fractionalKnapsack(items, capacity) {
  console.log(`\n🎒 Fractional Knapsack: capacity=${capacity}`);
  items.forEach((i) => {
    i.ratio = i.value / i.weight;
    console.log(
      `  ${i.name}: w=${i.weight}, v=${i.value}, ratio=${i.ratio.toFixed(2)}`,
    );
  });

  items.sort((a, b) => b.ratio - a.ratio);
  let totalValue = 0;
  let remaining = capacity;

  for (const item of items) {
    if (remaining >= item.weight) {
      totalValue += item.value;
      remaining -= item.weight;
      console.log(
        `  Lấy hết ${item.name}: +${item.value} (còn ${remaining}kg)`,
      );
    } else if (remaining > 0) {
      const fraction = remaining / item.weight;
      totalValue += item.value * fraction;
      console.log(
        `  Lấy ${(fraction * 100).toFixed(0)}% ${item.name}: +${(item.value * fraction).toFixed(1)}`,
      );
      remaining = 0;
    }
  }
  console.log(`  → Tổng giá trị: ${totalValue.toFixed(1)}`);
  return totalValue;
}

function example3() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 3: Fractional Knapsack");
  console.log("━".repeat(50));
  fractionalKnapsack(
    [
      { name: "A", weight: 10, value: 60 },
      { name: "B", weight: 20, value: 100 },
      { name: "C", weight: 30, value: 120 },
    ],
    50,
  );
}

// ============================
// VÍ DỤ 4: Jump Game
// ============================
function canJump(nums) {
  console.log(`\n🦘 Jump Game: [${nums}]`);
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      console.log(`  i=${i}: Không thể tới! maxReach=${maxReach}`);
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log(`  i=${i}, nums[i]=${nums[i]}, maxReach=${maxReach}`);
    if (maxReach >= nums.length - 1) {
      console.log(`  → ✅ Có thể đến cuối!`);
      return true;
    }
  }
  return maxReach >= nums.length - 1;
}

function example4() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 4: Jump Game");
  console.log("━".repeat(50));
  canJump([2, 3, 1, 1, 4]); // true
  canJump([3, 2, 1, 0, 4]); // false
}

// ============================
// VÍ DỤ 5 (Nâng cao): Minimum Platforms (ga tàu)
// ============================
function minPlatforms(arrivals, departures) {
  console.log(`\n🚂 Minimum Platforms:`);
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);

  let platforms = 0,
    maxPlatforms = 0;
  let i = 0,
    j = 0;

  while (i < arrivals.length) {
    if (arrivals[i] <= departures[j]) {
      platforms++;
      console.log(`  Tàu đến ${arrivals[i]} → platforms=${platforms}`);
      i++;
    } else {
      platforms--;
      console.log(`  Tàu đi  ${departures[j]} → platforms=${platforms}`);
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  console.log(`  → Cần tối thiểu ${maxPlatforms} platform`);
  return maxPlatforms;
}

function example5() {
  console.log("\n" + "━".repeat(50));
  console.log("VÍ DỤ 5 (Nâng cao): Minimum Platforms");
  console.log("━".repeat(50));
  minPlatforms(
    [900, 940, 950, 1100, 1500, 1800],
    [910, 1200, 1120, 1130, 1900, 2000],
  );
}

// 🏃 CHẠY
console.log("╔══════════════════════════════════════════════╗");
console.log("║   GREEDY - THUẬT TOÁN THAM LAM              ║");
console.log("╚══════════════════════════════════════════════╝");
example1();
example2();
example3();
example4();
example5();

console.log("\n" + "=".repeat(50));
console.log("📋 TÓM TẮT GREEDY:");
console.log("=".repeat(50));
console.log("Chọn tốt nhất tại mỗi bước, không quay lại");
console.log("✅ Activity selection, interval, jump game");
console.log("✅ Fractional knapsack, coin change (tiền chuẩn)");
console.log("⚠️ Không phải lúc nào cũng đúng!");
console.log("💡 So sánh: Greedy (nhanh, ko chắc đúng) vs DP (chậm, luôn đúng)");
console.log("=".repeat(50));
