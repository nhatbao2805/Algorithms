/**
 * ============================================
 * 📘 RECURSION - ĐỆ QUY
 * ============================================
 * 
 * 🔍 LÝ THUYẾT:
 * Đệ quy là kỹ thuật hàm GỌI CHÍNH NÓ với input nhỏ hơn
 * cho đến khi đạt ĐIỀU KIỆN DỪNG (base case).
 * 
 * Cấu trúc:
 * 1. BASE CASE: Điều kiện dừng (QUAN TRỌNG NHẤT!)
 * 2. RECURSIVE CASE: Gọi lại chính mình với input nhỏ hơn
 * 
 * 📊 ĐỘ PHỨC TẠP:
 * - Phụ thuộc vào bài toán cụ thể
 * - Space: Ít nhất O(n) do call stack (n = độ sâu đệ quy)
 * - Stack Overflow: Khi đệ quy quá sâu (thường > 10,000)
 * 
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Bài toán có cấu trúc ĐỆ QUY tự nhiên
 * ✅ Dùng khi: Duyệt cây, đồ thị
 * ✅ Dùng khi: Divide and Conquer
 * ✅ Dùng khi: Backtracking
 * ❌ Tránh khi: Có thể dùng vòng lặp đơn giản hơn
 * ❌ Tránh khi: Depth quá lớn (stack overflow)
 * 
 * 💡 TẠI SAO DÙNG:
 * - Code ngắn gọn, dễ đọc cho bài toán phức tạp
 * - Tự nhiên cho cấu trúc cây, đồ thị
 * - Nền tảng của nhiều thuật toán: DFS, backtracking, DP
 */

// ============================
// VÍ DỤ 1: Factorial (Giai thừa) - Cơ bản nhất
// ============================
// Time: O(n) | Space: O(n)
function factorial(n) {
  if (n <= 1) return 1;       // Base case
  return n * factorial(n - 1); // Recursive case
}

function factorialDebug(n, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}factorial(${n})`);
  if (n <= 1) {
    console.log(`${indent}→ Base case: return 1`);
    return 1;
  }
  const result = n * factorialDebug(n - 1, depth + 1);
  console.log(`${indent}→ ${n} * factorial(${n - 1}) = ${result}`);
  return result;
}

function example1() {
  console.log('━'.repeat(50));
  console.log('VÍ DỤ 1: Factorial (Giai thừa)');
  console.log('━'.repeat(50));
  // Input: 5 → Output: 120 (5*4*3*2*1)
  console.log('Input: n = 5');
  const result = factorialDebug(5);
  console.log(`Output: ${result}`);
}

// ============================
// VÍ DỤ 2: Fibonacci - Có tối ưu Memoization
// ============================
// Naive: O(2^n) | Memo: O(n)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

function example2() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 2: Fibonacci + Memoization');
  console.log('━'.repeat(50));
  // Input: 10 → Output: 55
  console.log('Input: n = 10');
  
  console.time('Naive O(2^n)');
  console.log(`Naive: fib(10) = ${fibNaive(10)}`);
  console.timeEnd('Naive O(2^n)');
  
  console.time('Memo O(n)');
  console.log(`Memo:  fib(10) = ${fibMemo(10)}`);
  console.timeEnd('Memo O(n)');
  
  console.log(`\nfib(40) với memo = ${fibMemo(40)}`);
  console.log(`fib(40) naive sẽ cần ~2^40 = hơn 1 tỷ phép tính!`);
}

// ============================
// VÍ DỤ 3: Tính tổng mảng lồng nhau (Nested Array Sum)
// ============================
// Time: O(n) | Space: O(d) d = độ sâu lồng
function nestedSum(arr, depth = 0) {
  const indent = '  '.repeat(depth);
  let sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      console.log(`${indent}Gặp mảng con → đệ quy`);
      sum += nestedSum(item, depth + 1);
    } else {
      sum += item;
      console.log(`${indent}Cộng ${item}, tổng tạm = ${sum}`);
    }
  }
  return sum;
}

function example3() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 3: Tổng mảng lồng nhau');
  console.log('━'.repeat(50));
  // Input: [1, [2, 3], [4, [5, 6]]] → Output: 21
  const arr = [1, [2, 3], [4, [5, 6]]];
  console.log(`Input: ${JSON.stringify(arr)}`);
  const result = nestedSum(arr);
  console.log(`Output: ${result}`);
}

// ============================
// VÍ DỤ 4: Đảo chuỗi bằng đệ quy
// ============================
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

function reverseStringDebug(str, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}reverse("${str}")`);
  if (str.length <= 1) {
    console.log(`${indent}→ Base: return "${str}"`);
    return str;
  }
  const result = reverseStringDebug(str.slice(1), depth + 1) + str[0];
  console.log(`${indent}→ "${result}"`);
  return result;
}

function example4() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 4: Đảo chuỗi');
  console.log('━'.repeat(50));
  // Input: "hello" → Output: "olleh"
  console.log('Input: "hello"');
  const result = reverseStringDebug('hello');
  console.log(`Output: "${result}"`);
}

// ============================
// VÍ DỤ 5 (Nâng cao): Power Set (Tập con)
// ============================
// Time: O(2^n) | Space: O(2^n)
function powerSet(arr, index = 0) {
  if (index === arr.length) return [[]];
  const subsets = powerSet(arr, index + 1);
  const withCurrent = subsets.map(s => [arr[index], ...s]);
  return [...subsets, ...withCurrent];
}

function example5() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 5 (Nâng cao): Power Set');
  console.log('━'.repeat(50));
  // Input: [1, 2, 3]
  // Output: [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]
  const input = [1, 2, 3];
  console.log(`Input: [${input}]`);
  const result = powerSet(input);
  console.log(`Output (${result.length} tập con):`);
  result.forEach(s => console.log(`  [${s}]`));
  console.log(`Số tập con = 2^${input.length} = ${result.length}`);
}

// ============================
// VÍ DỤ 6 (Nâng cao): Flatten Object
// ============================
function flattenObject(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

function example6() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 6 (Nâng cao): Flatten Object');
  console.log('━'.repeat(50));
  const input = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 };
  console.log(`Input:`, JSON.stringify(input));
  const result = flattenObject(input);
  console.log(`Output:`, JSON.stringify(result));
  // Output: { "a": 1, "b.c": 2, "b.d.e": 3, "f": 4 }
}

// 🏃 CHẠY
console.log('╔══════════════════════════════════════════╗');
console.log('║   RECURSION - ĐỆ QUY                    ║');
console.log('╚══════════════════════════════════════════╝');
example1();
example2();
example3();
example4();
example5();
example6();

console.log('\n' + '='.repeat(50));
console.log('📋 TÓM TẮT RECURSION:');
console.log('='.repeat(50));
console.log('1. Luôn có BASE CASE (điều kiện dừng)');
console.log('2. Input phải NHỎ DẦN mỗi lần gọi');
console.log('3. Tối ưu: Memoization, Tail Recursion');
console.log('4. Cẩn thận Stack Overflow (> 10,000 depth)');
console.log('5. Dùng cho: Cây, đồ thị, backtracking, DP');
console.log('='.repeat(50));
