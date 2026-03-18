/**
 * ============================================
 * 🔀 MERGE SORT - BỘ BÀI TẬP
 * ============================================
 */

console.log("╔══════════════════════════════════════════╗");
console.log("║   MERGE SORT - BÀI TẬP                  ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\nBÀI 1: Cài merge sort tăng dần cho mảng số.");
console.log("  - Viết hàm merge(a, b) gộp 2 mảng đã sort.");
console.log("  - Viết hàm mergeSort(nums) dùng đệ quy.");

console.log("\nBÀI 2: Đếm số inversion bằng merge sort.");
console.log("  - Trong khi merge, mỗi lần lấy phần tử từ mảng phải trước mảng trái");
console.log("    thì tăng số inversion lên đúng với số phần tử còn lại bên trái.");

console.log("\nBÀI 3: So sánh thời gian merge sort với bubble sort trên mảng lớn.");

console.log("\n--- 🟢 CƠ BẢN THÊM ---");
console.log("\nBÀI 4: Merge 2 mảng đã sort (hàm merge thuần) không dùng sort().");
console.log("BÀI 5: In ra từng bước chia (left/right) và gộp (merge) khi chạy mergeSort.");
console.log("BÀI 6: Merge sort giảm dần (đổi điều kiện trong merge).");

console.log("\n--- 🟡 TRUNG BÌNH THÊM ---");
console.log("\nBÀI 7: Merge sort in-place (O(1) extra space) - khó, gợi ý merge 2 đoạn liền kề.");
console.log("BÀI 8: Đếm số cặp nghịch thế (inversion count) dùng merge sort.");
console.log("BÀI 9: Sort mảng object theo key (vd: age) dùng merge sort với comparator.");

console.log("\n--- 🔴 NÂNG CAO ---");
console.log("\nBÀI 10: Merge K mảng đã sort thành 1 mảng (divide and conquer hoặc heap).");
console.log("BÀI 11: External merge sort: giả sử chỉ đọc/ghi từng block, merge từng cặp file.");
console.log("BÀI 12: So sánh merge sort vs quick sort: worst case, stable, memory (đo thời gian trên mảng đã sort, random, nhiều trùng).");

console.log("\n" + "=".repeat(50));
console.log("👉 Implement trong playground.js, dùng measureTime() để so sánh.");
console.log("=".repeat(50));

