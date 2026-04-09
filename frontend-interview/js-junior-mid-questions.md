# Câu hỏi phỏng vấn JavaScript — Junior / Middle Frontend

> **1–50**: nền tảng. **51–70**: engine (event loop), **bất biến** state, bảo mật web, API hiện đại, **case thực tế** (form, race, số thực). Đối chiếu `js-junior-mid-answers.md`.

---

## 1. Kiểu dữ liệu & ép kiểu

1. Các kiểu nguyên thủy (primitive) trong JS là gì? `typeof null` trả về gì và vì sao hay gây nhầm?
2. `==` khác `===` thế nào? Khi nào nên dùng `===`?
3. Truthy và falsy là gì? Liệt kê các giá trị falsy phổ biến.
4. `Number("")`, `String(undefined)`, `Boolean(0)` — kết quả là gì (ý tưởng ép kiểu)?
5. `parseInt("08")` / `parseInt("08", 10)` — khác nhau điểm nào (theo bối cảnh lịch sử và best practice)?

---

## 2. Biến, scope, hoisting

6. `var`, `let`, `const` khác nhau về scope, hoisting, và gán lại?
7. Temporal Dead Zone (TDZ) là gì? Liên quan tới `let`/`const` thế nào?
8. Block scope khác function scope ra sao? Ví dụ ngắn với `if {}`.

---

## 3. Hàm & `this`

9. Function declaration khác function expression thế nào (hoisting)?
10. Arrow function khác function thường về `this`, `arguments`, và dùng làm method object?
11. `call`, `apply`, `bind` dùng để làm gì? Khác nhau cơ bản?
12. Trong strict mode (`"use strict"`), `this` trong hàm gọi kiểu `fn()` là gì?

---

## 4. Closure & scope chain

13. Closure là gì? Một ví dụ thực tế (counter, memoization)?
14. Vì sao closure có thể gây “rò” bộ nhớ hoặc giữ reference không mong muốn?

---

## 5. Object & prototype

15. Cách tạo object: literal, `new Object()`, `Object.create` — ý tưởng khác nhau?
16. Prototype chain là gì? `obj.__proto__` vs `Object.getPrototypeOf` (ý tưởng)?
17. `class` trong ES6 quan hệ thế nào với prototype (syntactic sugar)?
18. `Object.assign` dùng để làm gì? Shallow copy nghĩa là gì?

---

## 6. Mảng & phương thức

19. `map`, `filter`, `reduce` — mỗi hàm trả về gì? `reduce` cần chú ý gì với giá trị khởi tạo?
20. `splice` khác `slice`?
21. `forEach` có thể `break`/`continue` như vòng lặn `for` không? Cách thay thế?
22. Spread `[...arr]` và `Array.from` — khi nào dùng?

---

## 7. Chuỗi & bất biến

23. String có phải primitive không? Vì sao có thể gọi `"abc".toUpperCase()`?
24. Template literal `${}` dùng trong trường hợp nào?
25. So sánh chuỗi với `===` vs `localeCompare` (ý tưởng)?

---

## 8. Bất đồng bộ & Event Loop

26. Callback, Promise, `async/await` — tiến hóa xử lý bất đồng bộ thế nào?
27. Microtask vs macrotask (ý tưởng): `Promise.then` và `setTimeout` thứ tự trong một tick?
28. `async function` luôn trả về gì?
29. `Promise.all` khác `Promise.allSettled` và `Promise.race`?

---

## 9. Lỗi & xử lý

30. `try / catch / finally` dùng khi nào? `catch (e)` bắt được gì?
31. `throw` có thể ném kiểu gì không phải `Error` không? Best practice?

---

## 10. Module & môi trường

32. `import` / `export` (ESM) khác `require` (CommonJS) trong ý tưởng tải và thời điểm resolve?
33. `import.meta` dùng để làm gì (ý tưởng)?
34. `window` trong browser vs `global` / `globalThis` — ý tưởng?

---

## 11. JSON & API

35. `JSON.parse` và `JSON.stringify` — khi nào lỗi? `undefined` trong object khi stringify?
36. Fetch API: `fetch().then(...)` trả về gì? Lỗi HTTP 404 có tự vào `catch` không?

---

## 12. Map, Set, WeakMap, WeakSet

37. `Map` khác object thường về key và thứ tự?
38. `Set` dùng để làm gì? Cách loại bỏ duplicate trong mảng?
39. `WeakMap` / `WeakSet` — điểm mạnh và hạn chế (reference yếu)?

---

## 13. Các chủ đề khác

40. IIFE là gì? Vì sao từng phổ biến trước khi có module?
41. Debounce và throttle khác nhau? Ví dụ use case (search, scroll)?
42. Deep clone vs shallow clone — cách làm phổ biến và hạn chế `JSON.parse(JSON.stringify())`?
43. `null` khác `undefined` trong JS?
44. `Symbol` dùng để làm gì? Ví dụ một use case?
45. Generator function (`function*`) — ý tưởng (ít gặp FE nhưng nên biết)?
46. Optional chaining `?.` và nullish coalescing `??` giải quyết vấn đề gì?
47. `Array.isArray` vì sao cần thay vì `typeof`?
48. `use strict` mang lại lợi ích gì?
49. `eval` và `new Function` — vì sao tránh trong production?
50. Same-origin policy / CORS là gì (ý tưởng từ phía frontend) khi gọi API?

---

## 14. Nền tảng sâu — engine & mô hình thực thi

51. **Event loop**: mô tả luồng **call stack**, **task queue (macrotask)**, **microtask queue** — thứ tự sau một `console.log` + `Promise.then` + `setTimeout`?
52. **`Object.is`** khác `===` ở những trường hợp nào (`NaN`, `+0`/`-0`)?
53. **`structuredClone`** khác `JSON.parse(JSON.stringify)` — giữ được kiểu gì?
54. **`Object.freeze`**, **`seal`**, **`preventExtensions`** — khác nhau mức độ khóa object?
55. **Cyclic import** ESM — có thể gặp lỗi gì và pattern xử lý (re-export, dynamic import)?

---

## 15. Bất biến, async & API hiện đại

56. Vì sao React khuyến khích **state bất biến** (immutable updates)? Liên quan đến so sánh shallow?
57. **`top-level await`** trong module — dùng khi nào?
58. **`AbortSignal.timeout(n)`** (hoặc `AbortController`) — case thực tế cho `fetch`?
59. **`requestAnimationFrame`** vs **`setTimeout(0)`** cho animation?

---

## 16. Bảo mật & case thực tế

60. **XSS**: `innerHTML = userInput` nguy hiểm thế nào? Biện pháp (sanitize, CSP, text node)?
61. **CSRF** (khái niệm): cookie session + form POST — token / SameSite cookie giúp gì?
62. **`SameSite` cookie** (`Lax`, `Strict`, `None`) — ảnh hưởng gì tới auth, deep link, iframe?

---

## 17. Case phỏng vấn — sản phẩm & lỗi

63. Tính tiền: `0.1 + 0.2 === 0.3`? Cách xử lý **số thập phân** trong tiền tệ (integer cents, `Intl.NumberFormat`)?
64. Hai **double-click** submit form — làm sao **chống gửi trùng** (disable button, idempotency key)?
65. **Race condition**: hai `fetch` cùng endpoint, response về **không đúng thứ tự** — pattern xử lý (latest request id, `AbortController`)?
66. **`JSON.stringify`** với `undefined` trong mảng vs object — khác nhau?
67. **`Array.prototype.sort`** — mặc định sort theo gì? Vì sao phải **compare function** cho số?
68. Web Worker: **dữ liệu** chuyển qua postMessage theo cơ chế nào (structured clone)?
69. **Deep equality**: vì sao `===` không đủ cho object? Gợi ý cách (thư viện, shallow compare keys)?
70. **`Intl`** API (`Intl.DateTimeFormat`, `Intl.Collator`) — case thực tế đa ngôn ngữ?

---

*Tổng: 70 câu (50 nền tảng + 20 nâng cao / case).*
