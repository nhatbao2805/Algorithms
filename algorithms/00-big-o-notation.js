/**
 * ============================================
 * 📘 BIG-O NOTATION - ĐỘ PHỨC TẠP THUẬT TOÁN
 * ============================================
 * 
 * 🔍 LÝ THUYẾT:
 * Big-O Notation là cách đo lường hiệu suất của thuật toán
 * khi kích thước dữ liệu đầu vào (n) tăng lên.
 * 
 * Nó cho ta biết:
 * - Thuật toán chạy NHANH hay CHẬM khi dữ liệu lớn
 * - Thuật toán dùng BAO NHIÊU BỘ NHỚ
 * 
 * 📊 CÁC MỨC ĐỘ PHỨC TẠP (từ nhanh → chậm):
 * 
 * O(1)        - Hằng số      : Không phụ thuộc vào n
 * O(log n)    - Logarit       : Tăng rất chậm (binary search)
 * O(n)        - Tuyến tính    : Tăng tỉ lệ thuận với n
 * O(n log n)  - Log tuyến tính: Sắp xếp hiệu quả (merge sort)
 * O(n²)       - Bình phương   : 2 vòng lặp lồng nhau
 * O(n³)       - Lập phương    : 3 vòng lặp lồng nhau
 * O(2^n)      - Hàm mũ        : Đệ quy không tối ưu
 * O(n!)       - Giai thừa     : Hoán vị, brute force
 * 
 * 📝 CHEAT NOTES:
 * - Time Complexity: Đo thời gian chạy
 * - Space Complexity: Đo bộ nhớ sử dụng
 * - Best Case: Trường hợp tốt nhất (Ω - Omega)
 * - Average Case: Trường hợp trung bình (Θ - Theta)
 * - Worst Case: Trường hợp xấu nhất (O - Big-O)
 * - Luôn đánh giá theo Worst Case khi phân tích
 * - Bỏ qua hằng số: O(2n) = O(n), O(n + 100) = O(n)
 * - Giữ lại số hạng lớn nhất: O(n² + n) = O(n²)
 */

// ============================
// VÍ DỤ 1: O(1) - Constant Time
// ============================
function getFirstElement(arr) {
  console.log(`\n--- O(1): Lấy phần tử đầu tiên ---`);
  console.log(`Input: [${arr}]`);
  const result = arr[0];
  console.log(`Output: ${result}`);
  console.log(`⏱️ Dù mảng có 10 hay 10 triệu phần tử, chỉ cần 1 bước`);
  return result;
}

// ============================
// VÍ DỤ 2: O(log n) - Logarithmic Time
// ============================
function binarySearchExample(arr, target) {
  console.log(`\n--- O(log n): Tìm kiếm nhị phân ---`);
  console.log(`Input: arr=[${arr}], target=${target}`);
  let left = 0, right = arr.length - 1;
  let steps = 0;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    console.log(`  Bước ${steps}: left=${left}, right=${right}, mid=${mid}, arr[mid]=${arr[mid]}`);
    if (arr[mid] === target) {
      console.log(`Output: Tìm thấy tại index ${mid} sau ${steps} bước`);
      console.log(`⏱️ Mảng ${arr.length} phần tử chỉ cần ~${Math.ceil(Math.log2(arr.length))} bước`);
      return mid;
    }
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  console.log(`Output: Không tìm thấy sau ${steps} bước`);
  return -1;
}

// ============================
// VÍ DỤ 3: O(n) - Linear Time
// ============================
function sumArray(arr) {
  console.log(`\n--- O(n): Tính tổng mảng ---`);
  console.log(`Input: [${arr}]`);
  let sum = 0;
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    sum += arr[i];
    console.log(`  Bước ${steps}: sum = ${sum}`);
  }
  console.log(`Output: ${sum} (${steps} bước cho ${arr.length} phần tử)`);
  console.log(`⏱️ Phải duyệt qua TỪNG phần tử → O(n)`);
  return sum;
}

// ============================
// VÍ DỤ 4: O(n²) - Quadratic Time
// ============================
function findDuplicatePairs(arr) {
  console.log(`\n--- O(n²): Tìm cặp trùng nhau ---`);
  console.log(`Input: [${arr}]`);
  const pairs = [];
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      steps++;
      if (arr[i] === arr[j]) {
        pairs.push([i, j]);
        console.log(`  Bước ${steps}: Tìm thấy cặp trùng arr[${i}]=${arr[i]} == arr[${j}]=${arr[j]}`);
      }
    }
  }
  console.log(`Output: ${pairs.length} cặp, tổng ${steps} phép so sánh`);
  console.log(`⏱️ 2 vòng lặp lồng nhau → n*(n-1)/2 ≈ O(n²)`);
  return pairs;
}

// ============================
// VÍ DỤ 5: O(2^n) - Exponential Time
// ============================
function fibonacci(n, depth = 0) {
  if (depth === 0) {
    console.log(`\n--- O(2^n): Fibonacci đệ quy ---`);
    console.log(`Input: n=${n}`);
  }
  if (n <= 1) return n;
  const result = fibonacci(n - 1, depth + 1) + fibonacci(n - 2, depth + 1);
  if (depth === 0) {
    console.log(`Output: fibonacci(${n}) = ${result}`);
    console.log(`⏱️ Mỗi lần gọi tạo 2 nhánh đệ quy → O(2^n)`);
  }
  return result;
}

// ============================
// VÍ DỤ 6: So sánh Space Complexity
// ============================
function spaceComplexityDemo() {
  console.log(`\n--- SPACE COMPLEXITY ---`);

  // O(1) Space
  let sum = 0;
  const arr = [1, 2, 3, 4, 5];
  for (const num of arr) sum += num;
  console.log(`O(1) Space: Chỉ dùng 1 biến sum = ${sum}`);

  // O(n) Space
  const doubled = arr.map(x => x * 2);
  console.log(`O(n) Space: Tạo mảng mới [${doubled}] - cùng kích thước input`);

  // O(n²) Space
  const n = 3;
  const matrix = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => i * n + j)
  );
  console.log(`O(n²) Space: Tạo ma trận ${n}x${n}:`);
  matrix.forEach(row => console.log(`  [${row}]`));
}

// ============================
// 🏃 CHẠY TẤT CẢ VÍ DỤ
// ============================
console.log('╔══════════════════════════════════════╗');
console.log('║   BIG-O NOTATION - ĐỘ PHỨC TẠP     ║');
console.log('╚══════════════════════════════════════╝');

getFirstElement([10, 20, 30, 40, 50]);
binarySearchExample([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 13);
sumArray([1, 2, 3, 4, 5]);
findDuplicatePairs([1, 2, 3, 2, 1]);
fibonacci(10);
spaceComplexityDemo();

console.log(`\n${'='.repeat(50)}`);
console.log('📋 BẢNG TÓM TẮT:');
console.log('='.repeat(50));
console.log('O(1)      | Truy cập mảng, phép toán đơn');
console.log('O(log n)  | Binary search, cây cân bằng');
console.log('O(n)      | Duyệt mảng 1 lần, tìm kiếm tuyến tính');
console.log('O(n log n)| Merge sort, Quick sort (trung bình)');
console.log('O(n²)     | 2 vòng lặp lồng, Bubble/Selection sort');
console.log('O(2^n)    | Đệ quy không memo, tập con');
console.log('O(n!)     | Hoán vị, bài toán người bán hàng');
console.log('='.repeat(50));
