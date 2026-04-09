# Câu hỏi phỏng vấn — Giải thuật & cấu trúc dữ liệu (Junior / Middle)

> **1–50**: nền tảng & pattern hay gặp. **51–70**: phân tích sâu, hệ thống, case thực tế (scale, cache, API). Đối chiếu `algorithms-interview-answers.md`.

---

## 1. Độ phức tạp

1. Big-O là gì? So sánh O(1), O(log n), O(n), O(n log n), O(n²).
2. Worst / average / amortized — ví dụ amortized O(1) của `Array.push` (dynamic array).
3. Auxiliary space khác “tổng bộ nhớ” allocation thế nào?
4. Hai vòng lồng nhau có khi nào **không** O(n²) không?

---

## 2. Mảng & chuỗi

5. Two pointers — khi nào dùng? Ví dụ bài điển hình.
6. Sliding window khác two pointers “cố định” ra sao?
7. Prefix sum — mục đích và trade-off?
8. Kadane — bài gì, ý tưởng cốt lõi?
9. Merge K danh sách đã sort: heap vs merge từng cặp.

---

## 3. Tìm kiếm & sắp xếp

10. Binary search — điều kiện; lower bound vs upper bound?
11. Merge sort vs quick sort: stable, worst case, in-place?
12. Counting sort / radix — khi nào dùng?
13. Phần tử lớn thứ k: quickselect vs heap k phần tử.

---

## 4. Hash & DSU

14. Hash map trong Two Sum — ý tưởng, độ phức tạp?
15. Worst case hash table — vì sao không phải lúc nào cũng O(1)?
16. Union-Find — ứng dụng; union by rank + path compression?

---

## 5. Stack, queue, cây

17. Monotonic stack — loại bài?
18. BFS vs DFS — khác nhau trên cây/đồ thị?
19. LCA — ý tưởng trên BST và cây tổng quát.

---

## 6. Đồ thị

20. Adjacency list vs matrix?
21. BFS tìm đường ngắn nhất không trọng số — vì sao đúng?
22. Dijkstra — điều kiện; Bellman-Ford khi nào?
23. Topological sort — điều kiện; ứng dụng dependency?

---

## 7. DP & backtracking

24. DP khác divide & conquer?
25. 0/1 knapsack — state thường đặt?
26. LIS O(n log n) — ý tưởng (tails + binary search)?
27. Backtracking vs brute force?

---

## 8. Bit & thiết kế (nhẹ)

28. XOR “một số xuất hiện một lần” — công thức cơ bản?
29. LRU Cache — cấu trúc kết hợp (hash + list)?
30. Bloom filter — false positive / false negative?

---

## 9. Bài coding nền

31. Đảo từ trong chuỗi — two pointers?
32. Ngoặc hợp lệ — stack?
33. Next greater element — monotonic stack?
34. Cycle trong linked list — Floyd (tortoise & hare)?

---

## 10. Chiến lược chọn thuật toán

35. Khi nào hash thay vì sort?
36. Khi nào greedy đúng, khi nào cần DP?
37. Trade-off thời gian vs bộ nhớ với memoization?

---

## 11. Nền tảng sâu — phân tích & biên

38. Vì sao comparison sort có cận **Ω(n log n)** (mô hình quyết định)?
39. Master theorem — ví dụ `T(n) = 2T(n/2) + O(n)`?
40. Phân tích amortized dynamic array tăng gấp đôi?

---

## 12. Đồ thị nâng cao (middle)

41. SCC (Khosaraju/Tarjan) — ý tưởng ứng dụng?
42. MST: Kruskal vs Prim?
43. A* so với Dijkstra (heuristic)?

---

## 13. Hệ thống & dữ liệu lớn

44. External sort — khi nào?
45. B+ tree — vì sao phù hợp DB trên đĩa?
46. Consistent hashing — mục đích sharding cache?

---

## 14. Case thực tế — sản phẩm

47. Phân trang API: **cursor** vs **offset** — trade-off (ổn định khi insert, skip)?
48. Token bucket rate limit — ý tưởng O(1) mỗi request?
49. Hot key trong cache phân tán — vấn đề & hướng xử?
50. Đếm DAU gần đúng — HyperLogLog / Bloom (ý tưởng)?

---

## 15. Cấu trúc nâng cao

51. Trie — khi nào hơn hash cho prefix?
52. Fenwick / Segment tree — bài range sum + update?
53. KMP — tránh backtrack chuỗi (ý tưởng)?
54. Max-flow min-cut — liên hệ (matching)?
55. P vs NP — ý nghĩa khi nói “NP-hard” trong phỏng vấn?

---

## 16. Edge case & triển khai

56. Tránh overflow: `mid = left + (right - left) / 2` — vì sao?
57. So sánh float trong geometry — epsilon?
58. Recursion sâu — chuyển iterative / explicit stack?

---

## 17. Liên hệ frontend / thực tế

59. Virtual list 10k item — độ phức tạp DOM và chiến lược?
60. Debounce gọi API — giảm số request thế nào (không cần công thức chính xác)?

---

## 18. Chứng minh & ôn tập

61. Loop invariant — vai trò khi chứng minh thuật toán đúng?
62. Randomized quicksort — expected vs worst?
63. Stable sort — ví dụ stable / không stable?

---

## 19. Bổ sung case phỏng vấn

64. Cho mảng đã sort có trùng — tìm first/last index của x: cách làm?
65. Two sum trên mảng đã sort — O(n) không hash?
66. Inversion count — ý tưởng (merge sort biến thể)?
67. Longest common subsequence — DP vs brute force?
68. Edit distance — ứng dụng spell check?
69. Reservoir sampling — stream vô hạn (ý tưởng)?
70. “Starvation” trong scheduling task (queue) — liên hệ thực tế UI thread?

---

*Tổng: 70 câu.*

---

## Phụ lục — Luyện code: input / output mẫu

> Dùng khi demo trên LeetCode-style hoặc `node demo.js`. Mỗi bài có **ví dụ** + **edge case** gợi ý. Bạn có thể map với số câu lý thuyết tương ứng.

### A. Two Sum — map / hash (liên hệ câu 14)

**Đề:** Cho `nums` và `target`, trả về **chỉ số** hai phần tử khác nhau có tổng = `target` (mỗi chỉ số dùng một lần). Không có thì `[]` hoặc `null` tùy quy ước.

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `nums = [2, 7, 11, 15]`, `target = 9` | `[0, 1]` |
| Ví dụ 2 | `nums = [3, 3]`, `target = 6` | `[0, 1]` |
| Edge | `nums = [1, 2]`, `target = 4` | không có (hoặc `[]`) |

---

### B. Best time to buy/sell stock (Kadane biến thể) — liên hệ câu 8

**Đề:** Một lần mua trước bán sau; tối đa hóa lợi nhuận.

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `[7, 1, 5, 3, 6, 4]` | `5` (mua 1, bán 6) |
| Ví dụ 2 | `[7, 6, 4, 3, 1]` | `0` |
| Edge | `[1]` | `0` |

---

### C. Maximum subarray (Kadane thuần) — câu 8

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` | `6` (đoạn `[4,-1,2,1]`) |
| Ví dụ 2 | `[1]` | `1` |
| Edge | `[-1]` | `-1` |

---

### D. Binary search — tìm index hoặc insert (câu 10)

**Đề:** Mảng tăng dần, tìm index đầu tiên `>= target` (lower bound).

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `nums = [1, 3, 5, 5, 7]`, `target = 5` | `2` |
| Ví dụ 2 | `nums = [1, 3, 5]`, `target = 4` | `2` (chèn 4 tại index 2) |
| Edge | `[]`, `target = 1` | `0` (theo quy ước insert) |

---

### E. First & last position của x — mảng đã sort (câu 64)

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `nums = [1, 2, 4, 4, 4, 5]`, `target = 4` | `[2, 4]` |
| Ví dụ 2 | `nums = [1]`, `target = 1` | `[0, 0]` |
| Edge | `nums = [1, 2]`, `target = 3` | `[-1, -1]` hoặc `[]` |

---

### F. Two sum II — mảng đã sort, hai pointer (câu 65)

**Đề:** Trả về **1-based** index pair thường gặp trên LC (hoặc 0-based — ghi rõ khi code).

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `numbers = [2, 7, 11, 15]`, `target = 9` | `[1, 2]` (1-based) |
| Ví dụ 2 | `[1, 2, 3, 4]`, `target = 6` | `[2, 4]` |

---

### G. Valid parentheses — stack (câu 32)

**Đề:** Chuỗi chỉ gồm `()[]{}`, hợp lệ hay không.

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `()[]{}` | `true` |
| Ví dụ 2 | `(]` | `false` |
| Edge | `""` | `true` |

---

### H. Reverse words trong chuỗi (câu 31)

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `  hello world  ` | `world hello` (trim khoảng thừa) |
| Ví dụ 2 | `a good   example` | `example good a` |

---

### I. Next greater element I — mảng tĩnh (câu 17, 33)

**Đề:** Với mỗi `nums1[i]`, tìm phần tử lớn hơn đầu tiên bên phải trong `nums2`; không có thì `-1`.

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `nums1 = [4, 1, 2]`, `nums2 = [1, 3, 4, 2]` | `[-1, 3, -1]` |
| Ví dụ 2 | `nums1 = [2, 4]`, `nums2 = [1, 2, 3, 4]` | `[3, -1]` |

---

### J. Longest increasing subsequence — độ dài (câu 26)

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `[10, 9, 2, 5, 3, 7, 101, 18]` | `4` (một LIS: `[2,3,7,101]`) |
| Ví dụ 2 | `[0, 1, 0, 3, 2, 3]` | `4` |
| Edge | `[7]` | `1` |

---

### K. 0/1 Knapsack — tối đa giá trị (câu 25)

**Input:** `weights = [1, 2, 3]`, `values = [6, 10, 12]`, `capacity = 5`  
**Output:** `22` (chọn item 1 + 2: 2+3=5, 10+12=22)

| Edge | `capacity = 0` | `0` |

---

### L. Climbing stairs — Fibonacci DP (ôn DP) (câu 24)

| | Input `n` | Output (số cách lên n bậc, mỗi bước 1 hoặc 2) |
|---|------------|------------------------------------------------|
| Ví dụ | `3` | `3` (1+1+1, 1+2, 2+1) |
| Edge | `1` | `1` |

---

### M. Topological sort — DAG nhỏ (câu 23)

**Đề:** `n` node `0..n-1`, danh sách cạnh directed. Trả về một thứ tự topo hoặc báo không có (có chu trình).

**Input:** `n = 4`, `edges = [[1,0],[2,0],[3,1],[3,2]]`  
**Output:** một trong các: `[3,2,1,0]` hoặc `[3,1,2,0]` (hợp lệ)

**Input (có chu trình):** `n = 2`, `edges = [[0,1],[1,0]]` → không tồn tại topo

---

### N. BFS — số đảo trong grid (câu 21, pattern BFS)

**Đề:** `grid` `0` = nước, `1` = đất; đếm số “đảo” (4-hướng).

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `[["1","1","0"],["1","0","0"],["0","0","1"]]` | `2` |
| Edge | `[["0"]]` | `0` |

---

### O. Dijkstra nhỏ — đồ thị có trọng số không âm (câu 22)

**Định dạng cạnh:** `[u, v, w]` directed hoặc undirected (chọn một và nhất quán).

**Input:** `n = 4`, `edges = [[0,1,1],[0,2,4],[1,2,2],[1,3,6],[2,3,1]]`, `start = 0`  
**Khoảng cách tối thiểu từ 0:**

| Node | `d[node]` | Đường gợi ý |
|------|-----------|-------------|
| 0 | `0` | — |
| 1 | `1` | 0→1 |
| 2 | `3` | 0→1→2 (1+2) |
| 3 | `4` | 0→1→2→3 (1+2+1) |

> Dùng min-heap; sau khi code, assert `d` khớp bảng.

---

### P. LRU Cache — thao tác (câu 29)

**Định dạng lệnh (giả lập):**

```
["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
```

**Output mong đợi (LeetCode 146):** `[null,null,null,1,null,-1,null,-1,3,4]`

---

### Q. Edit distance — Levenshtein (câu 68)

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `word1 = "horse"`, `word2 = "ros"` | `3` |
| Ví dụ 2 | `word1 = "intention"`, `word2 = "execution"` | `5` |
| Edge | `""`, `"a"` | `1` |

---

### R. Longest common subsequence — độ dài (câu 67)

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `text1 = "abcde"`, `text2 = "ace"` | `3` |
| Ví dụ 2 | `"abc"`, `"abc"` | `3` |

---

### S. Inversion count — merge sort (câu 66)

**Đề:** Đếm số cặp `i < j` mà `nums[i] > nums[j]`.

| | Input | Output |
|---|--------|--------|
| Ví dụ 1 | `[2, 4, 1, 3, 5]` | `3` (các cặp (2,1), (4,1), (4,3)) |
| Edge | `[1, 2, 3]` | `0` |

---

### T. Reservoir sampling — k = 1 (câu 69)

**Đề:** Stream không biết trước độ dài; chọn **một** phần tử ngẫu nhiên đều. Khi demo: seed cố định hoặc in index đã chọn sau khi duyệt hết mảng giả lập stream.

**Input mảng giả stream:** `[11, 22, 33, 44]` — output là **một** trong các giá trị (xác suất đều 1/4).

---

### Gợi ý định dạng file demo (`demo-io.js`)

```js
// Ví dụ chấm test nhanh
function run(name, fn, cases) {
  for (const { input, expect } of cases) {
    const out = fn(...input);
    const ok = JSON.stringify(out) === JSON.stringify(expect);
    console.log(name, ok ? "OK" : "FAIL", { input, out, expect });
  }
}
```

---

*Phụ lục: 20 bài IO mẫu (A–T) để luyện code; có thể copy từng bảng vào test suite.*
