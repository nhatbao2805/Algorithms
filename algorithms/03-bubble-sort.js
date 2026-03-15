/**
 * ============================================
 * 📘 BUBBLE SORT - SẮP XẾP NỔI BỌT
 * ============================================
 * 
 * 🔍 LÝ THUYẾT:
 * So sánh 2 phần tử liền kề, nếu sai thứ tự thì HOÁN ĐỔI.
 * Phần tử lớn nhất sẽ "nổi" lên cuối mảng sau mỗi lượt.
 * Lặp lại cho đến khi không còn hoán đổi.
 * 
 * 📊 ĐỘ PHỨC TẠP:
 * - Time:  Best O(n) (đã sắp xếp) | Average O(n²) | Worst O(n²)
 * - Space: O(1) - Sắp xếp tại chỗ (in-place)
 * - Stable: ✅ (giữ nguyên thứ tự các phần tử bằng nhau)
 * 
 * 📝 CHEAT NOTES:
 * ✅ Dùng khi: Mảng gần như đã sắp xếp
 * ✅ Dùng khi: Mảng nhỏ (< 50 phần tử)
 * ✅ Dùng khi: Cần stable sort đơn giản
 * ❌ Không dùng khi: Dữ liệu lớn
 * ❌ Không dùng khi: Cần hiệu suất cao
 * 
 * 💡 TẠI SAO DÙNG:
 * - Dễ hiểu nhất trong các thuật toán sắp xếp
 * - Tốt cho mục đích học tập
 * - Có thể tối ưu bằng cờ swapped
 */

function bubbleSort(arr) {
  const n = arr.length;
  const result = [...arr];
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}

function bubbleSortDebug(arr) {
  console.log(`\n🫧 Bubble Sort: [${arr}]`);
  const n = arr.length;
  const result = [...arr];
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    console.log(`\n  Lượt ${i + 1}:`);
    for (let j = 0; j < n - 1 - i; j++) {
      const action = result[j] > result[j + 1] ? 'HOÁN ĐỔI' : 'giữ nguyên';
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
      console.log(`    So sánh [${j}]=${result[j]} vs [${j + 1}]=${result[j + 1]} → ${action} → [${result}]`);
    }
    console.log(`  → Sau lượt ${i + 1}: [${result}]`);
    if (!swapped) {
      console.log(`  → Không có hoán đổi → Đã sắp xếp xong!`);
      break;
    }
  }
  console.log(`  → Kết quả: [${result}]`);
  return result;
}

// VÍ DỤ 1: Cơ bản
function example1() {
  console.log('━'.repeat(50));
  console.log('VÍ DỤ 1: Sắp xếp mảng số');
  console.log('━'.repeat(50));
  // Input: [64, 34, 25, 12, 22, 11, 90]
  // Output: [11, 12, 22, 25, 34, 64, 90]
  bubbleSortDebug([64, 34, 25, 12, 22, 11, 90]);
}

// VÍ DỤ 2: Mảng đã gần sắp xếp (Best case)
function example2() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 2: Mảng gần sắp xếp (tối ưu O(n))');
  console.log('━'.repeat(50));
  // Input: [1, 2, 3, 5, 4, 6, 7]
  // Output: [1, 2, 3, 4, 5, 6, 7] - chỉ cần 1 lượt
  bubbleSortDebug([1, 2, 3, 5, 4, 6, 7]);
}

// VÍ DỤ 3: Sắp xếp giảm dần
function bubbleSortDesc(arr) {
  console.log(`\n🫧 Bubble Sort GIẢM DẦN: [${arr}]`);
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] < result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  console.log(`  → Kết quả: [${result}]`);
  return result;
}

function example3() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 3: Sắp xếp giảm dần');
  console.log('━'.repeat(50));
  // Input: [3, 1, 4, 1, 5, 9, 2, 6]
  // Output: [9, 6, 5, 4, 3, 2, 1, 1]
  bubbleSortDesc([3, 1, 4, 1, 5, 9, 2, 6]);
}

// VÍ DỤ 4 (Nâng cao): Sắp xếp object theo thuộc tính
function bubbleSortObjects(arr, key) {
  console.log(`\n🫧 Sắp xếp objects theo "${key}":`);
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j][key] > result[j + 1][key]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  result.forEach((item, idx) => console.log(`  [${idx}] ${JSON.stringify(item)}`));
  return result;
}

function example4() {
  console.log('\n' + '━'.repeat(50));
  console.log('VÍ DỤ 4 (Nâng cao): Sắp xếp mảng object');
  console.log('━'.repeat(50));
  const students = [
    { name: 'An', score: 85 },
    { name: 'Bình', score: 92 },
    { name: 'Cường', score: 78 },
    { name: 'Dũng', score: 95 },
  ];
  bubbleSortObjects(students, 'score');
}

// 🏃 CHẠY
console.log('╔══════════════════════════════════════╗');
console.log('║   BUBBLE SORT - SẮP XẾP NỔI BỌT    ║');
console.log('╚══════════════════════════════════════╝');
example1();
example2();
example3();
example4();

console.log('\n' + '='.repeat(50));
console.log('📋 TÓM TẮT BUBBLE SORT:');
console.log('='.repeat(50));
console.log('Time: O(n²) | Space: O(1) | Stable: ✅');
console.log('✅ Dễ hiểu, tốt cho mảng nhỏ/gần sắp xếp');
console.log('❌ Chậm với dữ liệu lớn');
console.log('💡 Tối ưu: Cờ swapped giúp dừng sớm');
console.log('='.repeat(50));
