# Đáp án / bài giải — CSS (Junior / Middle)

> Đi kèm `css-junior-mid-questions.md` (**70 câu**). Trả lời phỏng vấn: ngắn trước, mở rộng nếu được hỏi sâu.

---

## 1. Cơ bản & độ ưu tiên

**1.** **External**: tái sử dụng, cache, tách khỏi HTML — tốt cho maintain. **Internal**: scope một trang. **Inline**: specificity cao, khó override, không tái sử dụng — tránh trừ khi cần style động nhỏ.

**2.** Specificity = độ “mạnh” của selector để quyết định rule nào thắng. Thường nhớ: **inline** > **id** > **class/attribute/pseudo-class** > **element/pseudo-element**. (Universal `*` và combinator không cộng điểm theo cách đơn giản đó.)

**3.** Buộc rule thắng mọi rule khác (trừ `!important` khác + specificity). Lạm dụng làm cascade khó debug; chỉ dùng khi override thư viện bất khả kháng hoặc fix tạm có kiểm soát.

**4.** Khi specificity bằng nhau, **rule khai báo sau** (trong cùng nguồn) thắng — “source order”.

**5.** Một số thuộc tính kế thừa: `color`, `font-*`, `line-height`… Thuộc tính box (`margin`, `padding`, `border`, `width`…) thường **không** kế thừa từ parent xuống con theo nghĩa “con tự có luôn giá trị đó” — con có giá trị initial/riêng.

---

## 2. Box model & kích thước

**6.** Content + padding + border + margin. **`border-box`**: `width`/`height` tính gồm padding và border (dễ layout); **`content-box`** (mặc định cũ): width chỉ vùng content.

**7.** Margin dọc của block kề nhau có thể **gộp** thành một (lấy max), thay vì cộng — hay gặp giữa heading và đoạn văn.

**8.** `auto` thường cho block = chiếm chiều ngang còn lại (trừ margin) theo luật block; `100%` = phần trăm của **containing block** — dễ “tràn” nếu còn padding/border tùy `box-sizing`.

**9.** Giới hạn co giãn: ví dụ `max-width: 1200px` + `margin: 0 auto` cho layout; `min-width` tránh co quá hẹp.

**10.** **`hidden`**: cắt nội dung tràn, không cuộn. **`auto`**: cuộn khi cần. **`scroll`**: luôn hiện thanh cuộn (hành vi có thể khác nhẹ theo OS/browser).

---

## 3. Display & positioning

**11.** **Block**: xuống dòng, chiếm full width (mặc định). **Inline**: trên một dòng, width/height khó điều khiển (theo nội dung). **Inline-block**: inline nhưng có block box bên trong — width/height/padding ổn định hơn.

**12.** **`none`**: không chiếm chỗ trong layout (không render box). **`hidden`**: không nhìn thấy nhưng vẫn chiếm chỗ (trừ khi kết hợp cách khác).

**13.** **static**: mặc định, không offset. **relative**: offset so với vị trí bình thường, vẫn giữ chỗ. **absolute**: theo containing block đã positioned (không phải static), không giữ chỗ flow. **fixed**: theo viewport. **sticky**: như relative cho đến khi scroll qua ngưỡng rồi “dính”.

**14.** `z-index` chỉ có hiệu lực rõ trên phần tử trong **stacking context** (positioned + z-index, flex/grid item, opacity <1, transform…). Ngữ cảnh xếp chồng khác nhau không so sánh số đơn giản xuyên suốt toàn trang.

**15.** Float dùng để bọc text quanh ảnh; layout toàn trang bằng float đã lỗi thời. Thay bằng **flex/grid**.

---

## 4. Flexbox

**16.** Phần tử có `display: flex` là **container**; con là **items**. Hai trục: **main axis** và **cross axis** (phụ thuộc `flex-direction`).

**17.** Căn chỉnh **theo main axis**: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`…

**18.** **`align-items`**: căn tất cả items trên **cross axis** (một lần trên container). **`align-self`**: override cho **một** item.

**19.** Đảo hướng main axis nên “đầu/cuối” đổi chỗ — `justify-content: flex-start` theo hướng mới.

**20.** Thường hiểu: **co giãn** để chiếm không gian còn lại (`flex-grow: 1`, basis 0 hoặc auto tùy layout). Cần nói rõ: shorthand `flex: 1` tương đương `1 1 0%` trong nhiều reset (khác `flex: 1 1 auto`).

**21.** `gap` tạo khoảng **đều** giữa các item mà không cần margin âm/bỏ margin item cuối — code gọn hơn.

---

## 5. CSS Grid

**22.** Định nghĩa **cột** và **hàng** của lưới — bố cục hai chiều.

**23.** **`fr`**: chia phần **không gian còn lại** trong grid sau khi trừ min-content/gap; `%` thường tính theo kích thước container (khác ý nghĩa trong một số tình huống).

**24.** Đặt tên vùng (`grid-template-areas`) giúp layout dạng “bản đồ” (header/sidebar/main) dễ đọc; `grid-area` gán item vào vùng.

**25.** `minmax(200px, 1fr)` cho cột vừa **không nhỏ hơn** 200px vừa **chia đều** phần còn lại — tránh cột bị co quá nhỏ.

**26.** **Flex**: một chiều chính (hàng hoặc cột), tuyến tính. **Grid**: hai chiều, phù hợp khung trang, gallery, alignment phức tạp. Nhiều UI vẫn kết hợp cả hai.

---

## 6. Typography & màu

**27.** **`rem`**: so với font-size gốc `html` — nhất quán toàn trang. **`em`**: so với font-size **element hiện tại** — dễ chồng nhân khi lồng. **`px`**: tuyệt đối, không scale theo user preference trừ khi chủ động.

**28.** Hệ số nhân với **font-size hiện tại** của element — line-height tỷ lệ theo chữ.

**29.** 400 = **normal**, 700 = **bold** (tên font phải có weight đó).

**30.** Hex, `rgb()`/`rgba()`, `hsl()`/`hsla()`, và tên màng (`red`) — hiện nay có `color-mix`, `oklch` trên trình duyệt mới.

**31.** Cần **kho giới hạn chiều ngang** (`overflow: hidden` hoặc tương đương), thường kèm `white-space: nowrap` (một dòng) hoặc line-clamp cho nhiều dòng.

---

## 7. Background & border

**32.** Có thể gộp: image, position/size, repeat, attachment, color… (thứ tự linh hoạt theo spec shorthand).

**33.** **`cover`**: phủ kín, có thể crop. **`contain`**: vừa khít trong khung, có thể có “letterbox”.

**34.** Bo góc cắt cả **nền** và **viền** theo bo; ảnh hưởng hit-testing theo hình bo (trong thực tế hiển thị).

**35.** Thường: offset-x, offset-y, blur, spread, màu — tạo đổ bóng hộp (có thể `inset`).

---

## 8. Responsive & đơn vị

**36.** Đổi layout theo **độ rộng/thiết bị**. **Mobile-first**: style mặc định cho nhỏ, `min-width` để tăng phức tạp khi màn rộng.

**37.** **`clamp(min, preferred, max)`**: font/size linh hoạt trong khoảng. **`min()`/`max()`**: chọn giá trị nhỏ nhất/lớn nhất giữa các biểu thức — hữu ích cho responsive không cần nhiều breakpoint.

**38.** `100vh` trên mobile có thể **thay đổi** khi thanh địa chỉ ẩn/hiện — có `dvh`/`svh`/`lvh` trên trình duyệt mới để xử lý mượt hơn.

**39.** Media query theo **viewport**; container query theo **kích thước container** — component tự đổi layout khi khối cha rộng/hẹp, không phụ thuộc toàn màn hình.

---

## 9. Hiệu ứng & biến đổi

**40.** Ít nhất: **property** + **duration**; thêm **timing-function** (easing), **delay**. Có thể liệt kê nhiều cặp transition.

**41.** `transform` thường **composite** trên GPU, ít reflow layout hơn đổi `left/top` trực tiếp — mượt cho animation.

**42.** **`transition`**: chuyển giữa hai trạng thái (hover, class). **`animation` + `@keyframes`**: chuỗi nhiều bước, lặp, đảo chiều — phù hợp loader, phức tạp.

---

## 10. Biến CSS & tổ chức

**43.** `--ten-bien: gia-tri;` trên selector; dùng `var(--ten-bien)`. Kế thừa/xuống cây DOM — đặt trên `:root` cho token toàn cục.

**44.** Tính toán trong CSS: `width: calc(100% - 32px)` — hay cho layout trừ padding/gutter cố định.

**45.** Đặt tên theo **Block__Element--modifier** — tránh xung đột class, đọc được quan hệ component, dễ bảo trì (không bắt buộc mọi dự án nhưng ý tưởng hay).

---

## 11. Trình duyệt & hiện đại

**46.** Nhiều prefix `-webkit-` ít cần viết tay; **Autoprefixer** thêm prefix dựa trên browserslist — build pipeline lo.

**47.** Gợi ý trình duyệt tối ưu layer trước khi đổi property; dùng sai/mọi chỗ có thể tốn bộ nhớ, hại hiệu năng.

**48.** Tôn trọng người dùng bật “giảm chuyển động” — giảm animation/parallax trong `@media (prefers-reduced-motion: reduce)`.

**49.** Giữ **tỷ lệ khung** (ảnh, video, card) mà không cần hack padding-top — hữu ích responsive.

**50.** **`@layer`** kiểm soát **thứ tự cascade** giữa các nhóm rule (base, components, utilities) mà không chỉnh specificity — giảm tranh chấp với utility-first CSS.

---

## 12. Nền tảng sâu — layout engine & cascade

**51.** `absolute` căn theo **containing block** gần nhất có `position` khác `static` (hoặc table cell, transform… theo spec) — không phải luôn là `relative` cha trực tiếp nếu có ancestor khác.

**52.** Stacking context từ: `position`+`z-index`, `opacity`<1, `transform`, `filter`, flex/grid item với z-index… **`z-index` chỉ so trong cùng context** — số lớn không vượt qua context cha.

**53.** BFC: vùng layout độc lập — chặn margin collapse với bên ngoài, chứa float (`overflow: hidden` tạo BFC), tránh float tràn.

**54.** Flex item mặc định `min-width: auto` → không co nhỏ hơn nội dung → overflow. **`min-width: 0`** (hoặc `overflow: hidden`) cho phép co trong flex.

**55.** **Subgrid** cho phép lưới con **kế thừa đường track** từ cha — alignment cột/hàng xuyên lồng mà không nhân đôi định nghĩa.

---

## 13. Selector hiện đại & tổ chức

**56.** `:is(a, b)` cộng specificity **max** của selector bên trong. **`:where()`** có specificity **0** — dùng để reset không tăng điểm.

**57.** `:has(.error)` → style parent khi con invalid — form, card, menu mở.

**58.** Logical properties map theo **inline/block** thay vì left/right — RTL tự đảo, code gọn hơn.

---

## 14. Hiệu năng, UX & case thực tế

**59.** `content-visibility: auto` bỏ qua render ngoài viewport — cải thiện initial paint. Sai: chiều cao ước lượng sai → **scrollbar nhảy** — cần `contain-intrinsic-size` hoặc cẩn.

**60.** `swap` hiện font fallback rồi đổi → có thể CLS nếu không đo kích thước; `optional` không đổi font nếu muộn — giảm CLS nhưng có thể không có custom font.

**61.** Media queries `prefers-*` để giảm animation, đổi theme, tăng contrast — tôn trọng accessibility.

**62.** `overscroll-behavior: contain` trên modal ngăn scroll “xuyên” ra body.

**63.** `touch-action: manipulation` giảm delay 300ms cũ; `none`/`pan-x` kiểm soát gesture.

---

## 15. Case phỏng vấn — layout & sản phẩm

**64.** Flex/Grid: căn **trong container**; `margin: auto` căn **một khối** trong flex/grid hoặc block — chọn theo số phần tử và trục.

**65.** `100vh` = viewport “layout” có thể khác vùng nhìn trên mobile. Dùng **`100dvh`** (dynamic) hoặc `min-height: 100dvh` + fallback.

**66.** Token `--color-bg` trên `:root`; dark mode: `html.dark` hoặc `@media (prefers-color-scheme: dark)` — có thể kết hợp cả hai (user preference).

**67.** `size-adjust`/`fallback`, `font-display`, preload font quan trọng, đặt kích thước tương đương fallback — giảm CLS.

**68.** `@media print` ẩn `nav`, `background`, `page-break-inside: avoid` cho bảng — báo cáo/PDF.

**69.** Chuẩn hóa layer: `z-index` chỉ vài mức (dropdown, modal, toast) hoặc `@layer` utilities → components.

**70.** `@container (min-width: 400px)` trên card — responsive **theo khối cha** (sidebar), không phụ thuộc full width màn hình.

---

*Chúc bạn ôn tập hiệu quả.*
