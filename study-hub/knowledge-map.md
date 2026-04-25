# Knowledge Map - Bản Đồ Kiến Thức Thống Nhất

> Mục tiêu: dùng **một khung chung** để map giữa `algorithms` + `interview` + `frontend-interview`, tránh học rời rạc.

---

## Cách đọc map

- Mỗi chủ đề có mã `Txx`.
- Mỗi `Txx` map tới:
  - **Thuật toán thực hành** (`algorithms/*`)
  - **Câu hỏi Interview** (`interview/algorithms-interview-questions.md`)
  - **Câu hỏi Frontend** (`frontend-interview/*-questions.md`)

---

## Core Topics

| Topic ID | Năng lực cốt lõi | Algorithms | Interview | Frontend Interview |
|---|---|---|---|---|
| T01 | Complexity mindset (Big-O, trade-off) | `00-big-o-notation*`, `01-linear-search*` | Câu 1-4, 35-37 | JS 1-5 |
| T02 | Search pattern (linear vs binary, bounds) | `01-*`, `02-*` | Câu 10, 56 | JS 19-22 (array methods) |
| T03 | Sorting foundations | `03-*`, `04-*`, `05-*`, `07-*` | Câu 11-13, 38-40 | JS 19-22, CSS logic thứ tự/specificity 1-5 |
| T04 | Recursion & divide-and-conquer | `09-*`, `07-*` | Câu 24, 27, 60 | JS 13-14 (closure/scope) |
| T05 | Two pointers / window | `10-*`, `11-*` | Câu 5-8, 31-34 | JS 23-25, 40-42 |
| T06 | Linear DS (queue/stack/list) | `13-*`, `14-*` | Câu 17-19, 34 | React 6-15 (state, hooks flow) |
| T07 | Hash-based thinking | `15-*` | Câu 14-16, 29 | JS 37-39 (Map/Set/WeakMap) |
| T08 | Graph traversal unweighted | `16-*` | Câu 18, 20-21 | React 20-29 (render/effect flow) |
| T09 | Tree traversal & hierarchical thinking | `18-*` | Câu 19, 68-70 | HTML 12-18 (semantic hierarchy) |
| T10 | Priority & Top-K optimization | `19-*` | Câu 9, 13, 64 | JS 35-36 (JSON/fetch data flow) |
| T11 | Greedy decision making | `21-*` | Câu 36, 62-63 | CSS 36-42 (responsive decisions) |
| T12 | Weighted shortest path | `23-*` | Câu 22, 41-43 | JS 26-29 (async flow reasoning) |
| T13 | Event loop mental model | `25-*` | Câu 57-59 | JS 26-29, 51-57 |
| T14 | Practical system design mini-cases | `99-*`, `50-*` | Câu 44-50, 51-55 | React 30-42, HTML 56-61 |
| T15 | Mock interview integration | all `*-problems.js` | Câu 1-70 | HTML/CSS/JS/React mixed |

---

## Day Mapping (20-day timeline)

- Day 1-2: `T01`, `T02`
- Day 3-4: `T03`
- Day 5: `T04`
- Day 6-7: `T05`
- Day 8-9: `T06`
- Day 10: `T07`
- Day 11: `T08`
- Day 12: `T09`
- Day 13: `T10`
- Day 14: `T11`
- Day 15: `T12`
- Day 16: `T13`
- Day 17-18: `T14`
- Day 19-20: `T15`

---

## Interview Theo Thứ Tự (1 -> 70)

> Để đọc mượt và không bị nhảy số, hãy follow đúng thứ tự này trong timeline.

- Day 1: câu `1-4`
- Day 2: câu `5-9`
- Day 3: câu `10-13`
- Day 4: câu `14-16`
- Day 5: câu `17-19`
- Day 6: câu `20-23`
- Day 7: câu `24-27`
- Day 8: câu `28-30`
- Day 9: câu `31-34`
- Day 10: câu `35-37`
- Day 11: câu `38-40`
- Day 12: câu `41-43`
- Day 13: câu `44-46`
- Day 14: câu `47-50`
- Day 15: câu `51-55`
- Day 16: câu `56-59`
- Day 17: câu `60-63`
- Day 18: câu `64-67`
- Day 19: câu `68-70`
- Day 20: mock full `1-70`

---

## Quy tắc chống học rời rạc (rất quan trọng)

- Mỗi ngày bắt buộc làm theo chuỗi: **Algorithm bài tập -> Interview câu hỏi -> Frontend câu hỏi -> Note**.
- Khi review note, luôn ghi thêm:
  - “Topic ID hôm nay là gì?”
  - “Mình đã map được 3 phần với nhau chưa?”
- Nếu chưa map được 3 phần, ngày đó xem như **chưa hoàn thành**.

