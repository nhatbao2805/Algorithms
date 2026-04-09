# Câu hỏi phỏng vấn HTML — Junior / Middle Frontend

> Gồm **câu nền tảng** (1–50) và **phần mở rộng** (51–70): đi sâu mô hình trình duyệt, bảo mật, a11y, hiệu năng, cùng **tình huống thực tế** (sản phẩm, SEO, form). Đối chiếu `html-junior-mid-answers.md`.

---

## 1. Cấu trúc tài liệu & meta

1. `DOCTYPE` dùng để làm gì? Khai báo HTML5 viết thế nào?
2. Khác nhau giữa thẻ `html`, `head`, và `body`?
3. Thuộc tính `lang` trên `<html>` có tác dụng gì (truy cập, SEO, font)?
4. Vì sao cần `meta charset="UTF-8"` và nên đặt sớm trong `head`?
5. `meta name="viewport"` làm gì? Thiếu nó thì mobile gặp vấn đề gì?
6. `title` trong `head` ảnh hưởng gì tới tab, bookmark, SEO?
7. `link rel="icon"` / favicon khai báo thế nào?
8. Thẻ `base` dùng khi nào? Rủi ro nếu cấu hình sai?

---

## 2. Tải script & tài nguyên

9. Đặt `<script>` cuối `body` khác gì đặt trong `head` không có `defer`/`async`?
10. `defer` và `async` trên `<script>` khác nhau thế nào (thứ tự, DOM, blocking)?
11. `link rel="preload"` / `prefetch` / `preconnect` — ý tưởng dùng (không cần thuộc lòng từng chi tiết spec)?

---

## 3. Ngữ nghĩa (Semantic HTML)

12. Vì sao nên dùng `header`, `nav`, `main`, `article`, `section`, `aside`, `footer` thay vì toàn `div`?
13. Khác biệt giữa `section` và `article`?
14. Một trang có nên nhiều `h1` không? Thực hành tốt là gì?
15. `nav` có bắt buộc chứa `ul` không?
16. `figure` và `figcaption` dùng khi nào?
17. `time` và thuộc tính `datetime` dùng để làm gì?
18. `mark`, `strong`, `em` — khác nhau về ngữ nghĩa?

---

## 4. Liên kết & nhúng

19. Đường dẫn tuyệt đối, tương đối, và từ gốc site (`/path`) khác nhau thế nào?
20. `target="_blank"` — vì sao nên thêm `rel="noopener noreferrer"`?
21. Thuộc tính `download` trên `<a>` dùng khi nào?
22. `picture`, `source`, `img` — khi nào cần `picture` thay vì chỉ `img`?
23. `srcset` và `sizes` trên `img` giải quyết vấn đề gì?
24. `iframe` dùng cho việc gì? Rủi ro bảo mật (clickjacking, sandbox)?

---

## 5. Form & input

25. `method="GET"` và `method="POST"` trong `<form>` khác nhau cơ bản thế nào?
26. Các `input type`: `email`, `number`, `tel`, `url`, `password` — gợi ý gì cho trình duyệt / mobile?
27. `label` gắn với `input` bằng cách nào? Vì sao quan trọng với accessibility?
28. `placeholder` có thay được `label` không? Vì sao?
29. `required`, `min`/`max`, `pattern` — validation mặc định của trình duyệt hoạt động ra sao?
30. `fieldset` và `legend` dùng khi nào?
31. `select` với `multiple`, `optgroup` — khi nào dùng?
32. `textarea` khác `input` về mặc định và hành vi?
33. `input type="file"` — `accept` và `multiple` làm gì?
34. `autocomplete`, `readonly`, `disabled` — khác nhau điểm nào?

---

## 6. Bảng & danh sách

35. Cấu trúc chuẩn: `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`.
36. `th` với `scope="col"` / `scope="row"` — khi nào cần?
37. `caption` trong `table` có lợi ích gì?
38. `ul`, `ol`, `dl` (và `dt`/`dd`) — dùng khi nào?

---

## 7. Accessibility & SEO (HTML)

39. Vì sao thứ tự heading (`h1` → `h2` → …) quan trọng?
40. `alt` trên `img` — khi nào `alt=""` là hợp lý?
41. `aria-label` khác `aria-labelledby` và `aria-describedby` (ý tưởng)?
42. `role` — một ví dụ khi cần bổ sung ngữ nghĩa?
43. `tabindex`: `0`, `-1`, số dương — khác nhau thế nào?
44. `meta name="description"` ảnh hưởng gì tới kết quả tìm kiếm?
45. `link rel="canonical"` giải quyết vấn đề gì?

---

## 8. Thuộc tính & thực hành

46. `id` và `class` — quy tắc và cách dùng trong HTML/CSS/JS?
47. `data-*` dùng để làm gì? Một ví dụ trên frontend.
48. `contenteditable="true"` là gì? Rủi ro?
49. `hidden` so với ẩn bằng CSS — khác nhau về ngữ nghĩa / accessibility?
50. Tình huống: nút mở menu mobile — chọn `button` hay `a` và vì sao?

---

## 9. Nền tảng sâu — parser, tài liệu & bảo mật

51. Trình duyệt chuyển HTML thành **DOM** theo bước nào (từ byte → token → tree — mô tả ý tưởng)? Vì sao **HTML bị lỗi vẫn render** được (error tolerance)?
52. **`Content-Security-Policy`** (qua header hoặc `meta`) chặn/hạn chế loại tài nguyên nào? Liên quan XSS thế nào?
53. `rel="noopener noreferrer"` trên link `target="_blank"`: từng phần giải quyết vấn đề gì (tabnabbing, referrer)?
54. Thẻ **`<dialog>`** (hoặc `role="dialog"`) so với `div` + CSS: lợi ích về semantics và a11y cần nhắc gì (focus, `aria-modal`)?
55. `link rel="canonical"` khi trang có **UTM / bản in / pagination** — mục đích và rủi ro SEO nếu sai?

---

## 10. Case thực tế — sản phẩm & trải nghiệm

56. **Form đăng nhập**: `autocomplete="username"` / `current-password`, `name` hợp lý — vì sao quan trọng cho trình quản lý mật khẩu và a11y?
57. **Trang SPA** một route: nên có mấy `h1`? Chiến lược title/document title khi đổi route (ý tưởng)?
58. Ảnh hero trên landing: kết hợp `fetchpriority="high"` (khi phù hợp), `width`/`height`, `srcset` — mục tiêu **LCP** và **CLS** là gì?
59. Đa ngôn ngữ / RTL: `lang`, `dir="rtl"` đặt ở đâu; ảnh hưởng tới font và layout (ý tưởng)?
60. Bảng dữ liệu lớn: `scope`, header cố định (ý tưởng), và điều hướng bàn phím (`tab`, `Enter`) — vì sao quan trọng?
61. **`loading="lazy"`** trên `img`/`iframe`: khi nào **không** nên lazy (above-the-fold)?

---

## 11. Nâng cao (middle) — tích hợp & chuẩn hóa

62. **Schema.org** (JSON-LD trong `script type="application/ld+json"`) — dùng để làm gì trên SERP?
63. `inputmode`, `enterkeyhint` — cải thiện gì trên mobile cho form số/địa chỉ?
64. **`rel="preconnect"`** vs **`dns-prefetch`**: khác nhau mức độ “bắt tay” với origin?
65. Progressive enhancement: `noscript` và nội dung tối thiểu khi tắt JS — ví dụ ý tưởng?

---

## 12. Case phỏng vấn — phân tích lỗi

66. Người dùng báo “**màn hình đọc đọc sai thứ tự**” trên form — bạn kiểm tra HTML/CSS gì (label, tabindex, DOM order)?
67. Analytics thêm **query string** làm URL trùng nội dung — xử lý canonical / meta robots thế nào (ý tưởng)?
68. Embed **bản đồ / chat bên thứ ba** trong `iframe`: rủi ro và biện pháp (`sandbox`, CSP, `referrerpolicy`)?
69. `contenteditable` trong rich text: rủi ro **XSS** khi paste; hướng xử lý (sanitize phía server/client)?
70. So sánh **ẩn bằng `hidden`**, **`aria-hidden="true"`**, và **`display:none`**: khi nào dùng cái nào để không “đọc nhầm” hoặc ẩn khỏi cây trợ năng?

---

*Tổng: 70 câu (50 nền tảng + 20 nâng cao / case).*
