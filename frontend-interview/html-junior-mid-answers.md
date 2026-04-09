# Đáp án / bài giải — HTML (Junior / Middle)

> Đi kèm `html-junior-mid-questions.md` (**70 câu**: 1–50 nền tảng, 51–70 nâng cao & case). Trả lời phỏng vấn: ngắn trước, mở rộng nếu được hỏi sâu.

---

## 1. Cấu trúc tài liệu & meta

**1.** `DOCTYPE` báo cho trình duyệt chế độ chuẩn (standards mode), tránh quirks mode cũ. HTML5: `<!DOCTYPE html>`.

**2.** `html` bọc toàn tài liệu; `head` chứa meta, title, link CSS… (không hiển thị trực tiếp nội dung chính); `body` chứa nội dung người dùng thấy.

**3.** `lang` giúp đọc màn hình chọn giọng/ngữ pháp đúng, trình duyệt gợi ý dịch, và gợi ý font/ngôn ngữ; SEO cũng hiểu ngôn ngữ trang.

**4.** `charset` quy định mã hóa ký tự; UTF-8 hỗ trợ đa ngôn. Đặt sớm để trình duyệt parse đúng trước khi đọc nội dung (tránh lỗi hiển thị ký tự).

**5.** `viewport` (thường `width=device-width, initial-scale=1`) cho layout responsive trên mobile. Thiếu thì site có thể co như desktop, chữ nhỏ, phải zoom.

**6.** `title` hiện trên tab, lịch sử, bookmark; công cụ tìm kiếm dùng làm tiêu đề kết quả (quan trọng SEO).

**7.** Ví dụ: `<link rel="icon" href="/favicon.ico" sizes="any">` hoặc PNG/SVG tùy dự án; có thể thêm `apple-touch-icon`.

**8.** `base` đặt URL gốc cho mọi đường dẫn tương đối trong tài liệu. Sai cấu hình có thể phá vỡ link, asset, hoặc mở nhầm URL — ít dùng trừ khi có lý do rõ.

---

## 2. Tải script & tài nguyên

**9.** Script không `defer`/`async` trong `head` chặn parse HTML (blocking). Cuối `body` thường chạy sau khi DOM phần trên đã có; vẫn nên ưu tiên `defer` trong `head` khi có thể.

**10.** **`defer`**: tải song song, chạy sau khi HTML parse xong, giữ thứ tự giữa các script `defer`. **`async`**: tải song song, chạy ngay khi xong tải, thứ tự không đảm bảo — phù hợp script độc lập (analytics). Cả hai đều không chặn parse như script đồng bộ thuần (trong điều kiện hiện đại).

**11.** **`preload`**: ưu tiên tải sớm tài nguyên quan trọng cho lần render hiện tại. **`prefetch`**: gợi ý tải trước cho lần điều hướng sau. **`preconnect`**: bắt tay sớm DNS/TLS tới origin — giảm latency khi biết trước sẽ gọi domain đó.

---

## 3. Ngữ nghĩa (Semantic HTML)

**12.** Giúp cấu trúc rõ (đọc code, maintain), công nghệ hỗ trợ hiểu đúng (a11y), outline tài liệu tốt hơn so với “soup” `div`.

**13.** **`article`**: khối nội dung độc lập, có thể tái dùng (bài viết, comment). **`section`**: nhóm chủ đề trong tài liệu; không nhất thiết độc lập như bài báo. Có overlap — chọn theo “có phải một thực thể nội dung độc lập không”.

**14.** Spec cho phép nhiều `h1` trong một số mô hình (ví dụ nhiều `article`). Thực hành phổ biến: **một `h1` chính** cho trang để outline rõ; trong component lồng nhau có thể dùng heading phù hợp cấp.

**15.** Không bắt buộc `ul`. `nav` chỉ cần nhóm các liên kết điều hướng; có thể là list hoặc không, miễn hợp lý và a11y.

**16.** Bọc nội dung minh họa (ảnh, biểu đồ, đoạn code) kèm chú thích tùy chọn qua `figcaption`.

**17.** `time` đánh dấu thời gian có thể đọc được; `datetime` cho máy (ISO 8601) để parse, lịch, SEO sự kiện.

**18.** **`strong`**: tầm quan trọng mạnh. **`em`**: nhấn giọng/nhấn mạnh ngữ điệu. **`mark`**: highlight tham chiếu (ví dụ kết quả tìm kiếm), không nhất thiết “quan trọng” như `strong`.

---

## 4. Liên kết & nhúng

**19.** Tuyệt đối: full URL. Tương đối: theo file hiện tại. `/...`: từ gốc origin — hữu ích khi không phụ thuộc thư mục hiện tại.

**20.** Tab mới có `window.opener`; `noopener` (và thường kèm `noreferrer`) giảm rủi ro tab cũ bị điều khiển qua `window.opener` và rò rỉ referrer tùy chính sách.

**21.** Gợi ý tải xuống thay vì điều hướng (cùng origin / CORS cho phép tùy trình duyệt). Tên file có thể gợi ý qua `download="ten-file.ext"`.

**22.** `picture` + `source` khi cần **art direction** hoặc **định dạng khác nhau** (WebP/AVIF fallback), hoặc media query khác nhau. Chỉ responsive đơn giản đôi khi đủ với `img` + `srcset`/`sizes`.

**23.** Chọn đúng file ảnh theo **mật độ pixel** và/hoặc **kích thước hiển thị** (`sizes` mô tả slot), tránh tải ảnh quá lớn trên mobile.

**24.** Nhúng trang/app khác. Rủi ro: XSS nếu src không tin cậy, clickjacking; có thể dùng `sandbox`, CSP, chỉ embed domain tin cậy.

---

## 5. Form & input

**25.** **GET**: tham số trên URL, idempotent, cache bookmark được, giới hạn độ dài URL. **POST**: body, dùng gửi dữ liệu thay đổi server / dữ liệu lớn / nhạy cảm hơn (vẫn phải HTTPS).

**26.** Gợi ý bàn phím và validation nhẹ: `email` (có `@`), `tel`, `url`, `number` (bước, min/max) — trải nghiệm mobile tốt hơn `text` thuần.

**27.** Gắn `label` qua `for="id"` khớp `id` của input, hoặc bọc input trong `label`. Tăng vùng bấm, screen reader đọc đúng nhãn.

**28.** Không. Placeholder mất khi gõ, không thay thế nhãn cố định; dễ gây lỗi a11y và nhầm lẫn.

**29.** Constraint validation API: trình duyệt chặn submit nếu không thỏa (khi form check được bật). Vẫn cần validate server-side.

**30.** Nhóm các control liên quan (địa chỉ, thanh toán) + tiêu đề nhóm qua `legend` cho screen reader.

**31.** `multiple` cho chọn nhiều option; `optgroup` gắn nhãn nhóm option dài.

**32.** `textarea` nhiều dòng, giá trị mặc định là text giữa thẻ mở/đóng; `input` một dòng (trừ type đặc biệt).

**33.** `accept` lọc MIME/extension; `multiple` cho phép nhiều file.

**34.** **`readonly`**: gửi khi submit, không sửa được. **`disabled`**: không gửi, không focus. **`autocomplete`**: gợi ý trình duyệt điền/tắt gợi ý.

---

## 6. Bảng & danh sách

**35.** `thead`/`tbody`/`tfoot` cấu trúc hàng/cột; `th` tiêu đề, `td` ô dữ liệu.

**36.** `scope` giúp screen reader biết ô `th` thuộc cột hay hàng — quan trọng với bảng phức tạp.

**37.** Tiêu đề/mô tả bảng; cải thiện a11y và hiểu nhanh nội dung bảng.

**38.** `ul` không thứ tự; `ol` có thứ tự; `dl` danh sách định nghĩa (thuật ngữ `dt`, mô tả `dd`).

---

## 7. Accessibility & SEO (HTML)

**39.** Outline logic; screen reader và SEO dùng cấu trúc heading để điều hướng và hiểu chủ đề.

**40.** Ảnh trang trí thuần (decorative) — `alt=""` để bộ đọc bỏ qua, tránh đọc rác.

**41.** **`aria-label`**: nhãn trực tiếp trên element. **`aria-labelledby`**: trỏ tới id phần tử khác làm nhãn. **`aria-describedby`**: thêm mô tả bổ sung (gợi ý lỗi, hint).

**42.** Khi không đủ thẻ native (hoặc composite widget) cần báo vai trò cho AT — ví dụ `role="dialog"` cho modal (kết hợp focus trap, `aria-modal` trong thực tế).

**43.** `tabindex="0"` đưa vào thứ tự tab tự nhiên; `-1` loại khỏi tab nhưng focus được bằng script; số dương >0 **tránh** (làm thứ tự tab khó đoán).

**44.** Mô tả có thể hiện dưới dạng snippet (không đảm bảo luôn hiện); ảnh hưởng CTR, không phải “ranking factor” đơn giản nhưng quan trọng cho người dùng.

**45.** Tránh duplicate content: chỉ định URL chuẩn khi có nhiều URL cùng nội dung (query string, HTTP/HTTPS, www).

---

## 8. Thuộc tính & thực hành

**46.** `id` duy nhất trong document (khi dùng như hook); `class` lặp lại, nhiều class trên một element. `id` thường cho label/hash/script cụ thể.

**47.** Lưu dữ liệu nhỏ trên DOM không ảnh hưởng style: `data-user-id="42"` — đọc qua `dataset` trong JS.

**48.** Cho phép sửa nội dung trực tiếp trên trang; rủi ro XSS nếu paste HTML, cần sanitize nếu lưu server.

**49.** `hidden` là trạng thái ngữ nghĩa “không dành cho mọi user agent / không hiển thị” theo spec; ẩn CSS có thể chỉ là trình bày — với a11y, `hidden`/`aria-hidden` cần cân nhắc kỹ.

**50.** **`button`**: hành động trên trang (mở menu, submit form) — bấm phím Space/Enter, role rõ. **`a`**: điều hướng có URL — nếu chỉ toggle menu, `button` + xử lý phím/KB phù hợp hơn (tránh `href="#"` giả).

---

## 9. Nền tảng sâu — parser, tài liệu & bảo mật

**51.** Parser đọc stream byte → tokenize → xây cây DOM (có thể sửa lỗi). HTML5 có **quy tắc recovery** — thẻ chưa đóng, sai lồng vẫn cố render thay vì dừng hẳn (khác XML strict).

**52.** CSP giới hạn nguồn **script**, **style**, **img**, **connect**… — giảm XSS (chặn inline script, domain lạ) nếu cấu hình đúng.

**53.** **`noopener`**: cắt `window.opener` — chống tab cũ bị điều khiển. **`noreferrer`**: không gửi `Referer` (và trên một số trình duyệt có tác dụng tương tự noopener).

**54.** `<dialog>` có API `showModal()` + **focus trap** khi dùng đúng; vẫn cần `aria-labelledby`, đóng bằng Escape theo UX — `div` thuần phải tự làm toàn bộ.

**55.** Canonical trỏ **một URL chuẩn** cho cùng nội dung — gom tín hiệu SEO, tránh trùng do UTM. Sai canonical → index nhầm hoặc mất tín hiệu.

---

## 10. Case thực tế — sản phẩm & trải nghiệm

**56.** `autocomplete` + `name` đúng chuẩn giúp password manager điền đúng ô, giảm lỗi người dùng; kết hợp `label` rõ ràng.

**57.** Thường **một `h1` mỗi view** (hoặc mỗi article chính). Route đổi nên cập nhật **`document.title`** (và meta) cho SEO/UX tab.

**58.** `width`/`height` gợi ý tỷ lệ → giảm **CLS**. `srcset`/`sizes` chọn ảnh phù hợp → giảm bytes. `fetchpriority="high"` chỉ cho **LCP candidate** thật sự (thường một ảnh).

**59.** `lang` trên `html` + `dir` khi RTL — ảnh hưởng font fallback, `unicode-bidi`, và layout (margin/logical properties trong CSS).

**60.** `scope`/`th` đúng giúp screen reader; bàn phím: focus vào control trong bảng, không dùng `tabindex` dương giả.

**61.** Ảnh **above-the-fold / LCP** không nên lazy — trình duyệt cần tải sớm; lazy phần dưới trang.

---

## 11. Nâng cao (middle) — tích hợp & chuẩn hóa

**62.** JSON-LD mô tả **Article**, **Product**, **FAQ**… — Google có thể hiển thị **rich result** (sao, câu hỏi, giá) nếu đủ điều kiện.

**63.** `inputmode="numeric"` mở bàn phím số; `enterkeyhint="search"` đổi nhãn phím Enter — UX form mobile.

**64.** **`preconnect`** = DNS + TCP + TLS sớm; **`dns-prefetch`** chỉ DNS — nhẹ hơn, ít “cam kết” hơn.

**65.** Giữ nội dung/khả năng dùng tối thiểu khi không JS; `noscript` thông báo hoặc form fallback server-render.

---

## 12. Case phỏng vấn — phân tích lỗi

**66.** Kiểm tra **thứ tự DOM** (không chỉ nhìn màn hình), `label` `for`/`id`, tránh `tabindex` >0; flex `order` có thể làm AT đọc khác thị giác.

**67.** Dùng **canonical** tới URL không query; hoặc `noindex` cho bản duplicate nếu cần — tùy chiến lược.

**68.** `iframe` từ domain khác bị **Same-Origin** hạn chế; `sandbox` giảm quyền; CSP `frame-src` giới hạn nguồn embed.

**69.** Paste HTML → sanitize (DOMPurify, allowlist tag); **luôn sanitize server** trước khi lưu/ render lại.

**70.** **`hidden`**: không hiển thị, thường không focus. **`aria-hidden`**: ẩn khỏi AT nhưng vẫn có thể focus nếu focus vào — cần tránh kết hợp focus trap sai. **`display:none`**: không layout, không hiển thị — thường khỏi tab order; khác nhau về **semantic** và **focus management** — ưu tiên ẩn đúng công cụ + quản lý focus.

---

*Chúc bạn ôn tập hiệu quả.*
