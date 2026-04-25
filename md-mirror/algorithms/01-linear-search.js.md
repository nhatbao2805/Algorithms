# Ôn Tập Mã Nguồn — `algorithms/01-linear-search.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * LINEAR SEARCH — TÌM KIẾM TUYẾN TÍNH
 * ============================================
 *
 * Khái niệm:
 * - Duyệt lần lượt từng phần tử từ đầu đến cuối mảng.
 * - Gặp target thì dừng ngay và trả về chỉ số (index).
 * - Duyệt hết mảng mà không thấy thì trả về -1.
 *
 * Độ phức tạp:
 * - Thời gian: tốt nhất O(1) | trung bình O(n) | xấu nhất O(n)
 * - Bộ nhớ phụ: O(1)
 *
 * Khi nên dùng:
 * - Dữ liệu chưa sắp xếp.
 * - Số phần tử không quá lớn.
 * - Chỉ tìm kiếm vài lần, không cần tiền xử lý.
 *
 * Khi không nên dùng:
 * - Dữ liệu lớn và phải tìm nhiều lần.
 * - Mảng đã sắp xếp (ưu tiên Binary Search).
 *
 * Mẹo nhớ nhanh:
 * - linearSearch thường trả về index đầu tiên tìm thấy.
 * - Nếu cần tất cả vị trí trùng nhau, phải duyệt hết mảng.
 *
 * ============================================
 * DSA QUICK NOTES — SET / MAP / XOR
 * ============================================
 *
 * Cách nhận diện nhanh khi làm bài
 *
 * Khi gặp bài về unique / duplicate:
 * - "remove duplicates" → dùng Set
 * - "appear once / count frequency" → dùng Map / đếm
 * - "appear once, còn lại xuất hiện đúng 2 lần" → dùng XOR
 *
 * --- SET — Những điều cần nhớ ---
 *
 * Bản chất: Set là tập hợp không cho phép phần tử trùng lặp.
 *
 * Ví dụ:
 *   new Set([1, 2, 2, 3])  →  {1, 2, 3}
 *
 * Lưu ý (tránh hiểu nhầm):
 * - Sai: "Set thấy trùng là xóa phần tử cũ"
 * - Đúng: "Set không cho thêm phần tử trùng lần thứ hai"
 *   set.add(2); set.add(2);  →  vẫn chỉ có {2} (phần tử 2 vẫn còn, không thêm lần nữa)
 *
 * Cách kiểm tra duplicate với Set (luôn kiểm tra trước khi add):
 *   nếu has(x) → duplicate
 *   nếu chưa có → add(x)
 *
 * Khi nào dùng Set:
 * - Kiểm tra duplicate, loại bỏ trùng, đã xuất hiện chưa
 * - Bài first repeating element
 *
 * --- MAP — Những điều cần nhớ ---
 *
 * Bản chất: Map lưu dạng key → value (ví dụ 2 → 3 nghĩa là số 2 xuất hiện 3 lần).
 *
 * Lưu ý:
 * - Map không tự remove duplicate trong mảng gốc.
 * - Map không cho key trùng: ghi cùng key lần hai sẽ ghi đè giá trị.
 *   map.set(2, 1); map.set(2, 5);  →  key 2 có giá trị 5 (ghi đè giá trị cũ)
 *
 * Cách dùng Map để đếm:
 *   nếu key đã có → +1
 *   nếu chưa có → set = 1
 *
 * Khi nào dùng Map:
 * - Đếm số lần xuất hiện, frequency counter, Two Sum, nhóm/ghép dữ liệu
 *
 * --- XOR — Những điều cần nhớ ---
 *
 * Công thức: a ^ a = 0 ;  a ^ 0 = a
 *
 * Khi nào dùng XOR:
 * - Bài kiểu: mọi phần tử xuất hiện 2 lần, chỉ một phần tử xuất hiện 1 lần → XOR thường tối ưu.
 *
 * Cheat sheet nhanh:
*   check duplicate (kiểm tra trùng lặp)          → Set
*   count frequency (đếm tần suất)                → Map
*   find pair complement (tìm cặp bù)             → Map
*   single number (phần tử xuất hiện 1 lần)       → XOR
*   remove duplicates (loại bỏ phần tử trùng)     → Set
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

```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
