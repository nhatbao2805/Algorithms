# Đáp án / bài giải — Giải thuật & cấu trúc dữ liệu

> Đi kèm `algorithms-interview-questions.md`. Trả lời phỏng vấn: định nghĩa ngắn → ví dụ → độ phức tạp.

---

## 1. Độ phức tạp

**1.** Big-O mô tả **tốc độ tăng** thời gian/bộ nhớ theo n. O(1) hằng; O(log n) chia đôi; O(n) duyệt một lần; O(n log n) sort tốt; O(n²) lồng vòng độ dài n.

**2.** Amortized: trung bình dài hạn — push vào dynamic array đôi khi O(n) resize nhưng **trải đều** → amortized O(1).

**3.** Auxiliary: thêm ngoài input; tổng có thể gồm cả output structure.

**4.** Ví dụ: hai vòng với biên phụ thuộc (j < i) có thể O(n) tổng; không phải mọi double loop đều n².

---

## 2. Mảng & chuỗi

**5.** Hai chỉ số từ hai đầu hoặc fast/slow — palindrome, pair sum sorted.

**6.** Cửa sổ trượt trên mảng — tổng/ký tự con tối ưu O(n).

**7.** Tiền xử lý prefix để truy vấn sum[i..j] O(1).

**8.** Kadane: max sum subarray — giữ max kết thúc tại i.

**9.** Min-heap K phần tử O(n log k); merge pairwise O(n log k) tùy cấu trúc.

---

## 3. Tìm kiếm & sắp xếp

**10.** Mảng **đã sort**; lower = first ≥ x, upper = first > x.

**11.** Merge stable O(n log n) worst; quicksort trung bình O(n log n), worst O(n²), không stable (tùy partition).

**12.** Counting/radix khi giá trị trong phạm vi nhỏ / chữ số cố định.

**13.** Quickselect trung bình O(n); heap giữ k phần tử O(n log k).

---

## 4. Hash & DSU

**14.** Map giá trị → chỉ số; một pass O(n).

**15.** Collision nhiều → chain dài hoặc rehash → xấu.

**16.** DSU: nhóm connected components; union by rank + path compression ~α(n).

---

## 5. Stack, queue, cây

**17.** Next greater, histogram — duy trì stack tăng/giảm.

**18.** BFS tầng; DFS sâu — stack đệ quy hoặc explicit.

**19.** BST: so sánh với root; tổng quát: backtrack hoặc parent pointer.

---

## 6. Đồ thị

**20.** List thưa O(V+E) space; matrix O(V²) dense.

**21.** BFS đồng đều trọng số 1 — tầng = khoảng cách.

**22.** Dijkstra không âm; Bellman-Ford âm cạnh (hoặc phát hiện cycle âm).

**23.** DAG không có chu trình; build order package.

---

## 7. DP & backtracking

**24.** DP: chồng **chồng** bài con; D&C: độc lập.

**25.** dp[i][w] với vật i, trọng lượng w.

**26.** Mảng tails tăng dần; binary search vị trí thay thế.

**27.** Backtracking cắt nhánh; brute thử hết.

---

## 8. Bit & thiết kế

**28.** `a^a=0`, `a^0=a` — XOR hết còn lại số lẻ lần.

**29.** Hash map key → node trong doubly linked list; move to front on get.

**30.** Bloom: có thể **false positive**, không false negative (tùy biến thể).

---

## 9. Bài coding nền

**31.** Trim + reverse từng đoạn hai đầu.

**32.** Push khi mở, pop khớp khi đóng.

**33.** Pop nhỏ hơn khi gặp phần tử mới.

**34.** Chậm nhanh gặp → có cycle.

---

## 10. Chiến lược

**35.** Cần tra cứu O(1) theo key — hash; cần thứ tự toàn cục — sort.

**36.** Greedy có **cấu trúc con tối ưu**; không chắc → DP.

**37.** Đổi thời gian lấy không gian bảng memo.

---

## 11. Nền tảng sâu

**38.** Cây quyết định phải có ít nhất n! lá → chiều cao Ω(log n!) = Ω(n log n).

**39.** Case điển hình: `T(n)=2T(n/2)+O(n)` → O(n log n) (merge sort).

**40.** Chi phí resize n/2 + n/4 + … < 2n → amortized O(1) mỗi push.

---

## 12. Đồ thị nâng cao

**41.** SCC: nhóm tương hỗ đạt — phân tích graph, compiler.

**42.** Kruskal + union-find cạnh; Prim + heap đỉnh.

**43.** A* = Dijkstra + heuristic h(n) ≤ thực tế (admissible) — nhanh hơn nếu heuristic tốt.

---

## 13. Hệ thống

**44.** Sort nhiều chunk trên đĩa rồi merge k-way.

**45.** B+ lá liên kết, ít random I/O; phù hợp range query.

**46.** Hash key → vòng ring server — thêm/bớt node ít di chuyển key.

---

## 14. Case thực tế

**47.** Cursor (id, ts) ổn định khi insert; offset lệch khi dữ liệu đổi.

**48.** Bổ sung token theo thời gian; trừ khi request; overflow refill.

**49.** Một key quá nóng → một shard quá tải; shard key + replica, hot key routing.

**50.** HLL ~ cardinality; Bloom membership — bộ nhớ nhỏ, sai số chấp nhận.

---

## 15. Cấu trúc nâng cao

**51.** Prefix search, autocomplete — trie tiết kiệm prefix chung.

**52.** Fenwick O(log n) point update prefix query; segment tree linh hoạt hơn (range update tùy).

**53.** KMP: bảng lps tránh lùi chuỗi đầy đủ.

**54.** Max flow = min cut — matching bipartite ứng dụng.

**55.** NP-hard: không có thuật đa thức biết (P≠NP giả định) — dùng xấp xỉ/heuristic.

---

## 16. Edge case

**56.** `l+r` có thể overflow 32-bit — dùng `left + (right-left)/2`.

**57.** `Math.abs(a-b) < eps` — tránh so trực tiếp.

**58.** Stack explicit hoặc iterative để tránh stack overflow.

---

## 17. Frontend

**59.** Chỉ render cửa sổ visible O(window) DOM; diff nhỏ hơn nếu key ổn định.

**60.** Gộp nhiều gõ thành một request sau im lặng Δt — giảm ~theo tần suất gõ/Δt.

---

## 18. Chứng minh & ôn tập

**61.** Invariant đúng mỗi bước → đúng kết thúc.

**62.** Random pivot expected O(n log n); worst O(n²) nếu pivot xấu.

**63.** Merge stable; heapsort không stable.

---

## 19. Case phỏng vấn

**64.** Binary search first ≥ x rồi kiểm tra ==; last: tìm first > x - 1 hoặc biến thể last occurrence.

**65.** Hai pointer đầu cuối tăng/giảm — O(n).

**66.** Đếm cặp vi phạm thứ tự trong merge step — O(n log n).

**67.** DP 2 chuỗi; brute exponential.

**68.** DP bảng i,j ký tự; ứng dụng spell checker, DNA.

**69.** Giữ mẫu k phần tử ngẫu nhiên với xác suất đều trên stream.

**70.** FIFO đảm bảo fairness; nếu chỉ priority có thể đói tác vụ thấp — cần aging (ý tưởng OS, liên hệ main thread không bị task dài chiếm mãi).

---

*Chúc bạn ôn tập hiệu quả.*
