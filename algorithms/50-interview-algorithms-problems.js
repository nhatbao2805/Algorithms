/**
 * ============================================
 * PHỎNG VẤN - 50 BÀI TẬP THƯỜNG GẶP
 * ============================================
 *
 * File CHỈ CHỨA ĐỀ BÀI (không có lời giải).
 * Bạn có thể tự code lời giải trong `playground.js` hoặc theo các file `solutions` tương ứng.
 */

const LINE = "=".repeat(50);

console.log("╔══════════════════════════════════════════╗");
console.log("║   PHỎNG VẤN - 50 BÀI TẬP             ║");
console.log("╚══════════════════════════════════════════╝");

console.log("\n" + LINE);
console.log(
  "Danh sách 50 bài toán thường gặp khi phỏng vấn (patterns: array/string, hashing, two pointers, sliding window, heap, graph, tree, DP, backtracking, greedy, union-find).",
);
console.log(LINE + "\n");

// ============================
// ARRAY / STRING / HASHING
// ============================
console.log("BÀI 1: Hai Tổng Bằng Target (Two Sum - hash map).");
console.log("  Input : nums=[2,7,11,15], target=9");
console.log("  Output: [0,1]");
console.log("  Case 2 Input : nums=[3,2,4], target=6");
console.log("  Case 2 Output: [1,2]");
console.log("  - Tim cap chi so i,j co nums[i]+nums[j]=target.");

console.log("\nBÀI 2: Anagram Hợp Lệ (so khớp tần suất ký tự).");
console.log("  Input : s='anagram', t='nagaram'");
console.log("  Output: true");
console.log("  Case 2 Input : s='rat', t='car'");
console.log("  Case 2 Output: false");
console.log("  - So sanh theo tan suat ky tu.");

console.log("\nBÀI 3: Nhóm Các Chuỗi Anagram (theo tần suất/nhãn).");
console.log("  Input : strs=['eat','tea','tan','ate','nat','bat']");
console.log("  Output: [['eat','tea','ate'],['tan','nat'],['bat']]");
console.log("  Case 2 Input : strs=['']");
console.log("  Case 2 Output: [['']] (một nhóm rỗng)");
console.log("  - Nhom cac chu anagram (su dung hash key).");

console.log("\nBÀI 4: Top K Tần Suất Cao Nhất (hash map + heap).");
console.log("  Input : nums=[1,1,1,2,2,3], k=2");
console.log("  Output: [1,2]");
console.log("  Case 2 Input : nums=[4,4,1,2,2,3], k=2");
console.log("  Case 2 Output: [2,4] (thứ tự có thể đổi)");
console.log("  - Tra ve k phan tu co tan suat cao nhat.");

console.log(
  "\nBÀI 5: Chuỗi Dài Nhất Không Lặp Ký Tự (sliding window 2 con trỏ).",
);
console.log("  Input : s='abcabcbb'");
console.log("  Output: 3 (vi 'abc')");
console.log("  Case 2 Input : s='bbbbb'");
console.log("  Case 2 Output: 1");

console.log(
  "\nBÀI 6: Chuỗi Cửa Sổ Nhỏ Nhất Chứa Đủ T (Minimum Window Substring).",
);
console.log("  Input : s='ADOBECODEBANC', t='ABC'");
console.log("  Output: 'BANC'");
console.log("  Case 2 Input : s='a', t='aa'");
console.log("  Case 2 Output: ''");
console.log("  - Tim doan ngan nhat cua s chua du tat ca ky tu cua t (ke ca so lan).");

console.log(
  "\nBÀI 7: Palindrome Hợp Lệ (bỏ ký tự thừa, không phân biệt hoa thường - two pointers).",
);
console.log("  Input : s='A man, a plan, a canal: Panama'");
console.log("  Output: true");
console.log("  Case 2 Input : s='race a car'");
console.log("  Case 2 Output: false");
console.log("  - Bo qua ky tu khong phai chu so/chu cai va khong phan biet hoa thuong.");

console.log("\nBÀI 8: Chuỗi Palindrome Dài Nhất (expand around center/DP).");
console.log("  Input : s='babad'");
console.log("  Output: 'bab' hoac 'aba'");
console.log("  Case 2 Input : s='cbbd'");
console.log("  Case 2 Output: 'bb'");
console.log("  - Dung expand around center hoac DP.");

console.log("\nBÀI 9: Tiền Tố Chung Dài Nhất (trên mảng chuỗi).");
console.log("  Input : strs=['flower','flow','flight']");
console.log("  Output: 'fl'");
console.log("  Case 2 Input : strs=['dog','racecar','car']");
console.log("  Case 2 Output: ''");

console.log("\nBÀI 10: Mã Hóa/Giải Mã TinyURL (ánh xạ 2 chiều longUrl<->shortUrl).");
console.log("  Input : longUrl='https://example.com/...' ");
console.log("  Output: shortUrl + decode shortUrl => longUrl");
console.log("  Case 2 Input : longUrl='https://leetcode.com/problems/design-tinyurl/'");
console.log("  Case 2 Output: decode(encode(longUrl)) trả lại đúng longUrl");
console.log("  - Thiet ke bien he 2 chieu (hash map).");

// ============================
// TWO POINTERS / INTERVALS / PREFIX-SUM
// ============================
console.log(
  "\nBÀI 11: Xóa Phần Tử Trùng Trong Mảng Đã Sắp Xếp (in-place, giữ số lần xuất hiện hợp lệ).",
);
console.log("  Input : nums=[1,1,2,2,3]");
console.log("  Output: 3 (unique nums) => nums sau khi chen: [1,2,3]");
console.log("  Case 2 Input : nums=[0,0,1,1,1,2,2,3,3,4]");
console.log("  Case 2 Output: k=5, nums prefix: [0,1,2,3,4]");

console.log("\nBÀI 12: Cái Chứa Nhiều Nước Nhất (two pointers tính diện tích).");
console.log("  Input : height=[1,8,6,2,5,4,8,3,7]");
console.log("  Output: 49");
console.log("  Case 2 Input : height=[4,3,2,1,4]");
console.log("  Case 2 Output: 16");

console.log("\nBÀI 13: Ba Số Có Tổng Bằng 0 (3Sum - sort + two pointers).");
console.log("  Input : nums=[-1,0,1,2,-1,-4]");
console.log("  Output: [[-1,-1,2],[-1,0,1]]");
console.log("  Case 2 Input : nums=[0,0,0]");
console.log("  Case 2 Output: [[0,0,0]]");
console.log("  - Sap xep + fixed i + two pointers.");

console.log("\nBÀI 14: Đếm Số Đoạn Con Tổng Bằng K (prefix sum + hash).");
console.log("  Input : nums=[1,1,1], k=2");
console.log("  Output: 2 (vi [1,1] co 2 cach)");
console.log("  Case 2 Input : nums=[1,2,3], k=3");
console.log("  Case 2 Output: 2 (vi [1,2] và [3])");

console.log("\nBÀI 15: Tích Các Phần Tử Trừ Chính Nó (Product Except Self - prefix/suffix).");
console.log("  Input : nums=[1,2,3,4]");
console.log("  Output: [24,12,8,6]");
console.log("  Case 2 Input : nums=[1,2,0,4]");
console.log("  Case 2 Output: [0,0,8,0]");
console.log("  - Khong duoc dung division.");

console.log("\nBÀI 16: Tổng Đoạn Con Lớn Nhất (Kadane - max subarray).");
console.log("  Input : nums=[-2,1,-3,4,-1,2,1,-5,4]");
console.log("  Output: 6");
console.log("  Case 2 Input : nums=[5,4,-1,7,8]");
console.log("  Case 2 Output: 23");

console.log(
  "\nBÀI 17: Độ Dài Nhỏ Nhất Để Tổng Đạt Target (tổng >= s, sliding window).",
);
console.log("  Input : target=7, nums=[2,3,1,2,4,3]");
console.log("  Output: 2 (vi [4,3])");
console.log("  Case 2 Input : target=4, nums=[1,4,4]");
console.log("  Case 2 Output: 1");

console.log("\nBÀI 18: Gộp Các Đoạn Thời Gian Bị Giao Nhau (sort + greedy merge).");
console.log("  Input : intervals=[[1,3],[2,6],[8,10],[15,18]]");
console.log("  Output: [[1,6],[8,10],[15,18]]");
console.log("  Case 2 Input : intervals=[[1,4],[0,4]]");
console.log("  Case 2 Output: [[0,4]]");

console.log("\nBÀI 19: Chèn Một Đoạn Thời Gian Vào Lịch Đã Sắp Xếp (merge sau chèn).");
console.log("  Input : intervals=[[1,3],[6,9]], newInterval=[2,5]");
console.log("  Output: [[1,5],[6,9]]");
console.log(
  "  Case 2 Input : intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval=[4,8]",
);
console.log("  Case 2 Output: [[1,2],[3,10],[12,16]]");

console.log("\nBÀI 20: Kiểm Tra Lịch Phòng Họp Có Xung Đột Không (Meeting Rooms).");
console.log("  Input : intervals=[[0,30],[5,10],[15,20]]");
console.log("  Output: false (có xung đột nên không thể attend tất cả)");
console.log("  - Bien the: Meeting Rooms II (dem so phong toi thieu).");
console.log("  Case 2 Input : intervals=[[0,5],[5,10],[10,15]]");
console.log("  Case 2 Output: true");

// ============================
// BINARY SEARCH / BIT MANIPULATION / MATH
// ============================
console.log(
  "\nBÀI 21: Tìm Vị Trí Đầu Và Cuối Của Target Trong Mảng Đã Sắp Xếp (binary search).",
);
console.log("  Input : nums=[5,7,7,8,8,10], target=8");
console.log("  Output: [3,4]");
console.log("  Case 2 Input : nums=[5,7,7,8,8,10], target=6");
console.log("  Case 2 Output: [-1,-1]");

console.log("\nBÀI 22: Tìm Kiếm Trong Mảng Đã Xoay (binary search trên nửa có thứ tự).");
console.log("  Input : nums=[4,5,6,7,0,1,2], target=0");
console.log("  Output: 4");
console.log("  Case 2 Input : nums=[4,5,6,7,0,1,2], target=3");
console.log("  Case 2 Output: -1");

console.log(
  "\nBÀI 23: Median Của Hai Mảng Đã Sắp Xếp (binary search partition).",
);
console.log("  Input : nums1=[1,3], nums2=[2] ");
console.log("  Output: 2");
console.log("  Case 2 Input : nums1=[1,2], nums2=[3,4]");
console.log("  Case 2 Output: 2.5");
console.log("  - Median: nếu tổng độ dài chẵn thì lấy trung bình 2 giá trị ở giữa.");

console.log("\nBÀI 24: Số Xuất Hiện Một Lần (bitwise XOR).");
console.log("  Input : nums=[4,1,2,1,2]");
console.log("  Output: 4");
console.log("  Case 2 Input : nums=[2,2,1]");
console.log("  Case 2 Output: 1");
console.log("  - XOR khong giong toan bo phan tu can tim.");

console.log("\nBÀI 25: Tìm Số Bị Thiếu Trong Dãy 0..n (math hoặc binary search).");
console.log("  Input : nums=[3,0,1], n=3");
console.log("  Output: 2");
console.log("  Case 2 Input : nums=[0,1], n=2");
console.log("  Case 2 Output: 2");

// ============================
// STACK / QUEUE / MONOTONIC
// ============================
console.log("\nBÀI 26: Kiểm Tra Dấu Ngoặc Hợp Lệ (stack).");
console.log("  Input : s='()[]{}'");
console.log("  Output: true");
console.log("  Case 2 Input : s='([)]'");
console.log("  Case 2 Output: false");

console.log("\nBÀI 27: Min Stack - Truy Vấn Giá Trị Nhỏ Nhất Nhanh (stack + min).");
console.log("  Input : operations: push(2), push(0), push(3), min(), pop(), top(), min()");
console.log("  Output: min tra ve 0, top tra ve 3, min tra ve 0");
console.log("  Case 2 Input : operations: push(-2), push(0), push(-3), min(), pop(), top(), min()");
console.log("  Case 2 Output: min=-3, top=0, min=-2");

console.log("\nBÀI 28: Đánh Giá Biểu Thức Hậu Tố (Reverse Polish Notation - stack).");
console.log("  Input : tokens=['2','1','+','3','*']");
console.log("  Output: 9");
console.log("  Case 2 Input : tokens=['4','13','5','/','+']");
console.log("  Case 2 Output: 6");

console.log("\nBÀI 29: Hàng Đợi FIFO Từ Hai Ngăn Xếp (queue using stacks).");
console.log("  Input : push(x) thêm vào cuối hàng đợi; pop() lấy phần tử đầu (FIFO), thực hiện theo chuỗi thao tác");
console.log("  Output: danh sách giá trị trả về từ các lệnh pop().");
console.log("  Case 1 Input : push(1), push(2), pop(), pop()");
console.log("  Case 1 Output: [1,2]");
console.log("  Case 2 Input : push(1), pop(), push(2), push(3), pop(), pop()");
console.log("  Case 2 Output: [1,2,3]");

console.log("\nBÀI 30: Daily Temperatures - Ngày Chờ Nhiệt Tăng Tiếp Theo (monotonic stack).");
console.log("  Input : temperatures=[73,74,75,71,69,72,76,73]");
console.log("  Output: [1,1,4,2,1,1,0,0]");
console.log("  Case 2 Input : temperatures=[30,40,50,60]");
console.log("  Case 2 Output: [1,1,1,0]");

console.log(
  "\nBÀI 31: Next Greater Element I - Tìm Phần Tử Lớn Hơn Kế Tiếp (monotonic stack).",
);
console.log("  Input : nums=[4,1,2,3]");
console.log("  Output: [-1,2,3,-1]");
console.log("  Case 2 Input : nums=[1,3,4,2]");
console.log("  Case 2 Output: [3,4,-1,-1]");

console.log("\nBÀI 32: Trapping Rain Water - Tính Nước Đọng Giữa Các Cột.");
console.log("  Input : height=[0,1,0,2,1,0,1,3,2,1,2,1]");
console.log("  Output: 6");
console.log("  Case 2 Input : height=[4,2,0,3,2,5]");
console.log("  Case 2 Output: 9");

console.log("\nBÀI 33: Sliding Window Maximum - Lớn Nhất Trong Mỗi Cửa Sổ K (monotonic deque).");
console.log("  Input : nums=[1,3,-1,-3,5,3,6,7], k=3");
console.log("  Output: [3,3,5,5,6,7]");
console.log("  Case 2 Input : nums=[9,10,9,-7,-4,-8,2,-6], k=5");
console.log("  Case 2 Output: [10,10,9,2]");

// ============================
// HEAP / PRIORITY QUEUE
// ============================
console.log("\nBÀI 34: Tìm Phần Tử Lớn Thứ K (quickselect hoặc heap).");
console.log("  Input : nums=[3,2,1,5,6,4], k=2");
console.log("  Output: 5");
console.log("  Case 2 Input : nums=[3,2,3,1,2,4,5,5,6], k=4");
console.log("  Case 2 Output: 4");

console.log("\nBÀI 35: Gộp K Danh Sách Đã Sắp Xếp (min-heap).");
console.log("  Input : lists=[[1,4,5],[1,3,4],[2,6]]");
console.log("  Output: [1,1,2,3,4,4,5,6]");
console.log("  Case 2 Input : lists=[[],[1],[]]");
console.log("  Case 2 Output: [1]");

console.log("\nBÀI 36: Top K Từ Xuất Hiện Nhiều Nhất (hash map + heap).");
console.log("  Input : words=['i','love','leetcode','i','love','coding'], k=2");
console.log("  Output: ['i','love']");
console.log(
  "  Case 2 Input : words=['the','day','is','sunny','the','the','the','sunny','is','is'], k=4",
);
console.log("  Case 2 Output: ['the','is','sunny','day'] (tie theo từ điển)");

// ============================
// LINKED LIST
// ============================
console.log("\nBÀI 37: Đảo Ngược Linked List (iterative).");
console.log("  Input : 1->2->3->4");
console.log("  Output: 4->3->2->1");
console.log("  Case 2 Input : head=null");
console.log("  Case 2 Output: null");

console.log("\nBÀI 38: Phát Hiện Vòng Tròn Trong Linked List (Floyd cycle detection).");
console.log("  Input : head có cycle tai node index i");
console.log("  Output: true/entry node");
console.log("  Case 2 Input : head=[1,2], pos=0");
console.log("  Case 2 Output: true, entryValue=1");

console.log("\nBÀI 39: LRU Cache - Giữ Trang Gần Nhất (doubly linked list + hashmap).");
console.log("  Input : capacity=2; operations: put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)");
console.log("  Output: [1,-1,-1,3,4] (tuy theo vi du)");
console.log(
  "  Case 2 Input : capacity=1; operations: put(2,1), get(2), put(3,1), get(2), get(3)",
);
console.log("  Case 2 Output: [1,-1,1]");

// ============================
// TREE / DFS / BFS
// ============================
console.log("\nBÀI 40: Độ Sâu Tối Đa Của Cây Nhị Phân (DFS).");
console.log("  Input : root=[3,9,20,null,null,15,7]");
console.log("  Output: 3");
console.log("  Case 2 Input : root=[1,null,2,null,3]");
console.log("  Case 2 Output: 3");

console.log("\nBÀI 41: Kiểm Tra Cây Tìm Kiếm Nhị Phân (BST).");
console.log("  Input : root=[2,1,3]");
console.log("  Output: true");
console.log("  Case 2 Input : root=[5,1,4,null,null,3,6]");
console.log("  Case 2 Output: false");

console.log("\nBÀI 42: LCA - Tổ Tiên Chung Gần Nhất Trong Cây Nhị Phân.");
console.log(
  "  Input : root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1",
);
console.log("  Output: 3");
console.log(
  "  Case 2 Input : root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=4",
);
console.log("  Case 2 Output: 5");

console.log(
  "\nBÀI 43: Serialize/Deserialize Cây Nhị Phân (level-order, dùng '#' cho null).",
);
console.log("  Input : root=[1,2,3,null,4]");
console.log(
  "  Output: serialize(root)='1,2,3,#,4' (trim '#' cuối); deserialize(...) khôi phục đúng cấu trúc",
);
console.log("  Case 2 Input : root=[]");
console.log("  Case 2 Output: serialize(root)='' và deserialize('') = cây rỗng");

console.log("\nBÀI 44: Word Search - Tìm Từ Trong Bảng Chữ (backtracking).");
console.log("  Input : board=[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word='ABCCED'");
console.log("  Output: true");
console.log("  Case 2 Input : board=[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word='ABCB'");
console.log("  Case 2 Output: false");

console.log("\nBÀI 45: Rotten Oranges - Trái Bị Thối Lan Rộng Bao Lâu (BFS).");
console.log("  Input : grid=[[2,1,1],[1,1,0],[0,1,1]]");
console.log("  Output: 4");
console.log("  Case 2 Input : grid=[[2,1,1],[0,1,1],[1,0,1]]");
console.log("  Case 2 Output: -1");

// ============================
// GRAPH / TOPO / DIJKSTRA
// ============================
console.log("\nBÀI 46: Có Thể Hoàn Thành Khóa Học Không? (detect cycle - topological sort).");
console.log("  Input : numCourses=2, prerequisites=[[1,0]]");
console.log("  Output: true");
console.log("  Case 2 Input : numCourses=2, prerequisites=[[1,0],[0,1]]");
console.log("  Case 2 Output: false");

console.log("\nBÀI 47: Course Schedule II - Tạo Thứ Tự Học Hợp Lệ (topological order).");
console.log("  Input : numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]]");
console.log("  Output: [0,1,2,3] hoac mot thu tu hop le");
console.log("  Case 2 Input : numCourses=2, prerequisites=[[1,0]]");
console.log("  Case 2 Output: [0,1]");

console.log("\nBÀI 48: Dijkstra - Đường Đi Ngắn Nhất Trong Đồ Thị Trọng Số Không Âm.");
console.log(
  "  Input : edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], start=0, target=3 (cạnh có hướng u->v, w>=0)",
);
console.log("  Output: 4");
console.log(
  "  Case 2 Input : edges như trên, start=0, target=10",
);
console.log("  Case 2 Output: -1");

console.log(
  "\nBÀI 49: Đếm Số Thành Phần Liên Thông Trong Đồ Thị Vô Hướng (DFS/BFS hoặc Union-Find).",
);
console.log("  Input : n=5, edges=[[0,1],[1,2],[3,4]]");
console.log("  Output: 2");
console.log("  Case 2 Input : n=5, edges=[]");
console.log("  Case 2 Output: 5");

console.log(
  "\nBÀI 50: N-Queens - Đếm Số Cách Xếp N Nữ Hoàng Không Tấn Công Nhau (backtracking).",
);
console.log("  Input : n=4");
console.log("  Output: 2");
console.log("  Case 2 Input : n=1");
console.log("  Case 2 Output: 1");
console.log("  Case 3 Input : n=3");
console.log("  Case 3 Output: 0");

console.log("\n" + LINE);
console.log(
  "Nếu bạn muốn, mình có thể tạo thêm file `solutions` tương ứng (hoặc chia theo topic: heap/DP/graph...).",
);
console.log(LINE);

