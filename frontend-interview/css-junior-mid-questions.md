# Câu hỏi phỏng vấn CSS — Junior / Middle Frontend

> **1–50**: nền tảng. **51–70**: đi sâu cascade/layout engine, stacking, hiệu năng (Core Web Vitals), selector hiện đại, **case thực tế** (responsive, dark mode, modal). Đối chiếu `css-junior-mid-answers.md`.

---

## 1. Cơ bản & độ ưu tiên (specificity)

1. Cách khai báo CSS: inline, internal (`<style>`), external (`<link>`) — ưu/nhược điểm?
2. Specificity là gì? Thứ tự tính điểm cho selector (element, class, id, inline)?
3. `!important` khi nào dùng và vì sao nên tránh lạm dụng?
4. Thứ tự trong file CSS và “thứ tự nguồn” (source order) ảnh hưởng thế nào khi specificity bằng nhau?
5. CSS inheritance: thuộc tính nào kế thừa, thuộc tính nào không? Ví dụ.

---

## 2. Box model & kích thước

6. Box model gồm những phần nào? `box-sizing: border-box` thay đổi điều gì?
7. `margin` collapse là gì? Trường hợp phổ biến?
8. `width: 100%` khác `width: auto` thế nào trong block layout?
9. `min-width` / `max-width` dùng khi nào trong responsive?
10. `overflow: hidden | auto | scroll` khác nhau ra sao?

---

## 3. Display & positioning

11. `display: block | inline | inline-block` khác nhau điểm chính nào?
12. `display: none` khác `visibility: hidden` thế nào?
13. `position: static | relative | absolute | fixed | sticky` — hành vi và containing block?
14. `z-index` hoạt động khi nào? Stacking context là gì (ý tưởng)?
15. `float` còn dùng không? Thay thế phổ biến là gì?

---

## 4. Flexbox

16. Flex container và flex item là gì? Hai trục chính tên gì?
17. `justify-content` điều khiển gì? Liệt kê vài giá trị phổ biến.
18. `align-items` khác `align-self` thế nào?
19. `flex-direction: row-reverse` ảnh hưởng gì tới `justify-content` và `align-items`?
20. `flex: 1` (hoặc `flex: 1 1 0`) thường được hiểu như thế nào trong layout?
21. `gap` trong flex — lợi ích so với margin giữa các item?

---

## 5. CSS Grid

22. `grid-template-columns` và `grid-template-rows` dùng để làm gì?
23. `fr` đơn vị là gì? Khác `%` cơ bản thế nào trong grid?
24. `grid-area` / đặt tên vùng (`grid-template-areas`) dùng khi nào?
25. `minmax()` trong grid giải quyết vấn đề gì?
26. Khi nào chọn Flex thay vì Grid (và ngược lại) — một câu trả lời thực tế?

---

## 6. Typography & màu sắc

27. `rem` khác `em` và `px` trong thiết lập font-size?
28. `line-height` đơn vị không đơn vị (ví dụ `1.5`) nghĩa là gì?
29. `font-weight: 400 | 700` map tới tên gì?
30. `color` có thể dùng những định dạng nào (hex, rgb, hsl, …)?
31. `text-overflow: ellipsis` cần kèm điều kiện gì để hoạt động?

---

## 7. Background & border

32. `background` shorthand có thể gồm những phần nào?
33. `background-size: cover` khác `contain`?
34. `border-radius` ảnh hưởng gì tới nền và viền?
35. `box-shadow` — vài tham số chính (offset, blur, spread, màu)?

---

## 8. Responsive & đơn vị

36. Media query `@media (min-width: ...)` dùng để làm gì? Mobile-first nghĩa là gì?
37. `clamp()`, `min()`, `max()` trong CSS giúp gì cho typography/layout?
38. `viewport` units: `vw`, `vh` — cẩn trọng gì trên mobile (địa chỉ thanh địa chỉ)?
39. Container queries (`@container`) — ý tưởng khác media query thế nào?

---

## 9. Hiệu ứng & biến đổi

40. `transition` cần những thành phần nào (property, duration, easing, delay)?
41. `transform: translate` khác đặt `left/top` với `position` về hiệu năng?
42. `@keyframes` và `animation` — khác `transition` khi nào dùng?

---

## 10. Biến CSS & tổ chức

43. Custom properties (`--var`) khai báo và dùng thế nào? Scope theo selector?
44. `calc()` dùng để làm gì? Một ví dụ thực tế.
45. BEM (ý tưởng) — Block Element Modifier giúp gì cho CSS?

---

## 11. Trình duyệt & hiện đại

46. Vendor prefix còn cần không? Autoprefixer làm gì?
47. `will-change` — mục đích và vì sao không nên lạm dụng?
48. `prefers-reduced-motion` dùng để làm gì?
49. `aspect-ratio` thuộc tính dùng khi nào?
50. CSS layers (`@layer`) — vấn đề giải quyết (ý tưởng)?

---

## 12. Nền tảng sâu — layout engine & cascade

51. **Containing block** của `position: absolute` được xác định thế nào (ancestor có position khác `static`)?
52. **Stacking context** được tạo bởi những tình huống phổ biến nào? Vì sao `z-index: 9999` đôi khi “không lên trên” được modal?
53. **Block Formatting Context (BFC)** là gì? Một cách tạo BFC và tác dụng (chặn margin collapse / clear float)?
54. Trong Flex, **`min-width: auto`** mặc định trên item có thể gây **overflow** — vì sao và cách xử (`min-width: 0`, `overflow`)?
55. **`subgrid`** (Grid Level 2) giải quyết vấn đề gì so với grid lồng thường?

---

## 13. Selector hiện đại & tổ chức

56. `:is()` và `:where()` — khác nhau về **specificity**?
57. Selector **`:has()`** dùng cho case thực tế nào (ví dụ form invalid)?
58. **Logical properties** (`margin-inline`, `padding-block`) — lợi ích với RTL và code gọn?

---

## 14. Hiệu năng, UX & case thực tế

59. **`content-visibility: auto`** — mục tiêu? Rủi ro khi dùng sai (scroll height)?
60. **`font-display: swap`** vs `optional`/`block` — đánh đổi FOIT/FOUT và CLS như thế nào?
61. **`prefers-reduced-motion`**, **`prefers-color-scheme`**, **`prefers-contrast`** — tôn trọng thiết lập hệ điều hành ra sao?
62. **`overscroll-behavior`** — chặn “pull-to-refresh” / scroll chain trên modal?
63. **`touch-action`** — liên quan zoom/pan trên mobile và gesture?

---

## 15. Case phỏng vấn — layout & sản phẩm

64. Căn giữa một khối: so sánh **Flex** (`justify/align`), **Grid**, và **`margin: auto`** (khi nào dùng cái nào)?
65. Full-height section: vấn đề **`100vh`** trên mobile và hướng xử lý (`dvh`, `min-height`, JS nhỏ)?
66. **Dark mode**: đặt token màu (`--bg`, `--text`) ở đâu; chuyển bằng `class` trên `html` hay `prefers-color-scheme`?
67. Tránh **layout shift** khi load font: chiến lược (subset, preload, kích thước fallback)?
68. **Print stylesheet** (`@media print`): ẩn nav, page break — ứng dụng thực tế?
69. Tránh **z-index war** trong design system: pattern **layer tokens** hoặc `@layer`?
70. **Container queries**: ví dụ component card tự đổi cột khi nằm trong sidebar hẹp — khác breakpoint viewport thế nào?

---

*Tổng: 70 câu (50 nền tảng + 20 nâng cao / case).*
