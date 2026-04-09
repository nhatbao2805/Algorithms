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
