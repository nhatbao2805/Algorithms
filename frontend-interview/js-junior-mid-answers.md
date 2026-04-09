# Đáp án / bài giải — JavaScript (Junior / Middle)

> Đi kèm `js-junior-mid-questions.md` (**70 câu**). Trả lời phỏng vấn: ngắn trước, mở rộng nếu được hỏi sâu.

---

## 1. Kiểu dữ liệu & ép kiểu

**1.** Primitive: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, và **`null`**. `typeof null === "object"` là **bug lịch sử** của JS — cần nhớ khi kiểm tra null: `value === null`.

**2.** `==` có **ép kiểu** (abstract equality); `===` so sánh **không ép kiểu** (strict). Nên ưu tiên `===` để tránh kết quả khó đoán.

**3.** Truthy: giá trị chuyển sang `true` trong boolean context. **Falsy** phổ biến: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

**4.** `Number("")` → `0`; `String(undefined)` → `"undefined"`; `Boolean(0)` → `false` — minh họa ép kiểu tường minh.

**5.** `parseInt` **nên luôn có radix** `10` để tránh hiểu nhầm cơ số (đặc biệt chuỗi bắt đầu `0` trong tương thích cũ). `parseInt("08", 10)` → `8`.

---

## 2. Biến, scope, hoisting

**6.** **`var`**: function scope, hoisting khai báo (không gán), có thể khai báo lại. **`let`/`const`**: block scope, TDZ, không khai báo lại cùng scope; `const` không gán lại binding (object vẫn đổi được property).

**7.** **TDZ**: khoảng từ đầu block đến dòng khai báo `let`/`const` — truy cập trước khai báo gây `ReferenceError`.

**8.** `{ let x = 1 }` — `x` chỉ trong block. `var` trong `if` vẫn **nhìn thấy** ngoài block nếu cùng function (trước khi có block scope).

---

## 3. Hàm & `this`

**9.** **Declaration** được hoist cả tên (có thể gọi trước dòng khai báo trong scope). **Expression** gán biến → biến hoist nhưng gán chưa chạy nên gọi sớm có thể lỗi.

**10.** **Arrow**: không có `this` riêng (kế thừa lexical), không có `arguments` object như function thường. Không thích hợp làm method cần `this` động object (trừ khi hiểu rõ).

**11.** **`call`/`apply`**: gọi hàm với `this` và tham số (apply nhận mảng). **`bind`**: trả về hàm mới đã gắn `this`/tham số.

**12.** Strict mode: `fn()` → `this` là **`undefined`** (trong không phải object), trong sloppy là `global` (browser: `window`).

---

## 4. Closure & scope chain

**13.** Closure: hàm “nhớ” môi trường nơi tạo ra — biến ngoài vẫn tồn tại khi hàm trong được gọi sau. Ví dụ: counter, factory, memo.

**14.** Biến ngoài không được GC nếu closure vẫn giữ reference — dễ lỡ giữ DOM lớn, timer, listener nếu không dọn.

---

## 5. Object & prototype

**15.** Literal nhanh nhất; `new Object()` tương tự; `Object.create(proto)` tạo object với **prototype** tùy chọn rõ ràng.

**16.** Chuỗi tìm property trên prototype. `__proto__` legacy; `Object.getPrototypeOf` chuẩn.

**17.** `class` là **cú pháp** trên prototype + constructor; `extends` dùng `super`.

**18.** `Object.assign` copy **thuộc tính enumerable** của object nguồn sang đích — **shallow** (chỉ lớp đầu, object lồng nhau vẫn chia reference).

---

## 6. Mảng & phương thức

**19.** `map` → mảng mới cùng độ dài; `filter` → mảng con; `reduce` → **một** giá trị gộp. `reduce` nên có **initial value** để tránh lỗi mảng rỗng / kiểu nhầm.

**20.** `splice` **sửa** mảng gốc (remove/insert); `slice` **cắt** copy mảng con **không** sửa gốc.

**21.** `forEach` không `break`/`return` không thoát ngoài; dùng `for...of`, `some`/`every`, hoặc vòng `for` thường.

**22.** Spread nhân bản nông (shallow) iterable; `Array.from` tạo mảng từ iterable/array-like (NodeList, arguments).

---

## 7. Chuỗi & bất biến

**23.** String primitive; trình duyệt **boxing** tạm thời `String` object khi gọi method — không đổi giá trị gốc.

**24.** Template literal: nhiều dòng, nhúng biểu thức — gọn hơn nối chuỗi.

**25.** `===` so sánh byte/byte; `localeCompare` cho **thứ tự theo ngôn ngữ** (sort chuỗi).

---

## 8. Bất đồng bộ & Event Loop

**26.** Callback → callback hell; Promise chuẩn hóa trạng thái; `async/await` cú pháp đọc như đồng bộ trên Promise.

**27.** **Microtask** (Promise) chạy **trước** **macrotask** (`setTimeout`) sau khi call stack rỗng, trong một “vòng” — thứ tự: sync → microtasks → macrotasks (tóm tắt).

**28.** `async function` **luôn** trả về **Promise** (resolve giá trị return hoặc reject nếu throw).

**29.** `Promise.all`: tất cả thành công hoặc **một reject** là fail. `allSettled`: chờ hết, không fail sớm. `race`: kết quả đầu tiên settle.

---

## 9. Lỗi & xử lý

**30.** Bắt lỗi runtime; `finally` chạy dù có return. `catch` nhận giá trị thrown (thường `Error`).

**31.** Có thể `throw` bất kỳ; best practice: **`throw new Error("message")`** hoặc subclass để stack trace rõ.

---

## 10. Module & môi trường

**32.** ESM **static** (import phân tích lúc parse), **tree-shake**; CommonJS **dynamic** hơn, `require` runtime — Node bundler thường hợp nhất.

**33.** `import.meta.url` (ví dụ) — metadata module; hữu ích resolve asset.

**34.** `window` = global browser; `globalThis` **universal** (browser/worker/Node); `global` là Node cũ.

---

## 11. JSON & API

**35.** `JSON.parse` lỗi nếu chuỗi không hợp lệ. `JSON.stringify` bỏ `undefined` trong property object (không phải mảng sparse) — cần biết khi gửi API.

**36.** `fetch` trả Promise **Response**; **404** vẫn **resolve** — phải check `response.ok` hoặc `status` rồi `throw`. `catch` network error thật (CORS, offline).

---

## 12. Map, Set, WeakMap, WeakSet

**37.** `Map` key bất kỳ (object OK), **giữ thứ tự chèn**; object thường key chỉ string/symbol.

**38.** `Set` tập unique; duplicate từ mảng: `new Set(arr)` rồi spread hoặc `Array.from`.

**39.** WeakMap/WeakSet key chỉ **object**, **weak reference** — không enumerate toàn bộ; không leak memory khi object bị GC.

---

## 13. Các chủ đề khác

**40.** `(function(){ ... })()` — scope riêng, tránh ô nhiễm global trước module.

**41.** **Debounce**: gọi sau khi **ngừng** kích hoạt (gõ search). **Throttle**: giới hạn tốc độ gọi (scroll).

**42.** Shallow: copy lớp 1. Deep: cấu trúc lồng — `JSON` clone mất `Date`, `function`, `undefined`, `Map`…

**43.** `undefined`: chưa gán / thiếu tham số. `null`: gán **cố ý** “không có” (API hay trả `null`).

**44.** `Symbol` unique key — tránh conflict property, `Symbol.iterator` cho iterable.

**45.** Generator `yield` từng bước — iterator, lazy sequence; ít nhưng biết ý tưởng.

**46.** `?.` tránh lỗi khi `null`/`undefined` giữa chuỗi truy cập. `??` chỉ thay khi `null`/`undefined`, không thay `0`/`""` như `||`.

**47.** `typeof []` là `"object"` — không phân biệt mảng; `Array.isArray` chuẩn.

**48.** Bắt lỗi dễ hơn (biến chưa khai báo), `this` strict, một số từ khóa cấm.

**49.** `eval` chạy string như code — phá tối ưu, XSS; `new Function` tương tự rủi ro.

**50.** **Same-origin**: scheme + host + port. **CORS**: server cho phép origin khác qua header; browser chặn đọc response nếu không đúng policy — frontend phải xử lý lỗi `fetch` và CORS.

---

## 14. Nền tảng sâu — engine & mô hình thực thi

**51.** Chạy sync trên stack → xong; microtasks (`Promise.then`) hết trước macrotask tiếp (`setTimeout`). Thứ tự ví dụ: log sync → micro → rồi timer (sau khi stack và micro rỗng).

**52.** `Object.is(NaN, NaN)` true; `Object.is(+0, -0)` false — `===` ngược lại với `-0`/`+0`.

**53.** `structuredClone` giữ `Date`, `Map`, `Set`, `ArrayBuffer`…; JSON chỉ JSON-safe types.

**54.** `preventExtensions`: không thêm property. `seal`: không thêm/xóa, vẫn sửa value. `freeze`: không đổi value (primitive), không thêm/xóa (object frozen deep không tự động cho nested).

**55.** Vòng lặp import → lỗi TDZ hoặc undefined; giải pháp: dynamic `import()`, tách module, re-export sau.

---

## 15. Bất biến, async & API hiện đại

**56.** Immutability giúp phát hiện thay đổi (reference thay đổi), time-travel devtools, tránh bug mutation chung.

**57.** `await` top-level trong ES module — khởi tải async trước khi export side effect (dùng cẩn — chặn parse tree).

**58.** Hủy `fetch` sau timeout hoặc unmount — `AbortController.abort()` hoặc `AbortSignal.timeout(ms)` nếu môi trường hỗ trợ.

**59.** `rAF` đồng bộ với repaint ~60fps; `setTimeout` không khóa frame — animation mượt dùng `rAF`.

---

## 16. Bảo mật & case thực tế

**60.** XSS: chèn script/HTML độc — chạy trong origin trang. Tránh: không `innerHTML` user; sanitize; CSP `script-src`.

**61.** CSRF: site độc gửi request kèm cookie session. Token CSRF + `SameSite` giảm khả năng gửi chéo.

**62.** `Strict` gửi cookie same-site chặt; `Lax` cho top-level GET; `None` cần `Secure` — ảnh hưởng OAuth, embed, cross-site POST.

---

## 17. Case phỏng vấn — sản phẩm & lỗi

**63.** Floating point IEEE754 — dùng **cent integer** hoặc thư viện decimal; hiển thị `Intl.NumberFormat`.

**64.** Disable nút sau click, hoặc idempotency key server — tránh double charge.

**65.** Giữ `requestId` tăng; chỉ `setState` nếu response khớp id mới nhất; hoặc abort request cũ.

**66.** Mảng: `undefined` thành `null` trong JSON. Object: bỏ key `undefined`.

**67.** Mặc định sort **theo chuỗi Unicode** — `[10,2,1].sort()` sai cho số. Cần `(a,b)=>a-b`.

**68.** `postMessage` clone structured clone (tương tự) — không share memory (trừ Transferable).

**69.** So sánh object cần deep compare hoặc chỉ so subset field (form libs).

**70.** `Intl` format ngày/số theo locale — i18n không tự nối chuỗi.

---

*Chúc bạn ôn tập hiệu quả.*
