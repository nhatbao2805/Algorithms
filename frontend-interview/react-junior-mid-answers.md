# Đáp án / bài giải — React (Junior / Middle)

> Đi kèm `react-junior-mid-questions.md` (**70 câu**). Trả lời phỏng vấn: ngắn trước, mở rộng nếu được hỏi sâu.

---

## 1. Cơ bản & JSX

**1.** React là **thư viện** UI (component, declarative). **Virtual DOM** (khái niệm): React so sánh tree ảo để cập nhật DOM thật tối thiểu — không phải “nhanh hơn DOM trực tiếp mọi lúc”, mà giúp code dễ dự đoán và batch update.

**2.** JSX là **cú pháp mở rộng** trông như HTML trong JS; cần **Babel** (hoặc tương đương) biên dịch thành `React.createElement` / JSX runtime.

**3.** Tránh trùng từ khóa JS: `class` → `className`, `for` → `htmlFor`.

**4.** Fragment không tạo thêm **node** DOM — tránh `div` thừa khi cần nhiều root JSX. `div` thêm wrapper có thể phá vỡ layout/CSS.

**5.** `{condition && <A />}`: nếu `condition` là `0`, React **render số 0** — có thể hiển thị “0” trên UI. Dùng `Boolean(condition)`, `condition ? ... : null`, hoặc `!!condition`.

---

## 2. Component, props, state

**6.** **Function component** + Hooks là chuẩn hiện tại. **Class** ít dùng; vẫn biết lifecycle/error boundary nếu cần legacy.

**7.** Props dữ liệu **từ cha xuống con** — **read-only** (không gán lại `props.xxx` trong con); muốn đổi thì gọi callback từ cha.

**8.** State dữ liệu **nội bộ** có thể đổi theo thời gian. **Lifting state**: đưa state lên **ancestor chung** khi nhiều con cần chia sẻ / đồng bộ.

**9.** `key` giúp React **nhận diện** item qua các lần render — ổn định danh sách. **Index** dùng khi danh sách **tĩnh**, không sắp xếp/thêm/xóa; nếu thứ tự đổi, index gây sai mapping state/DOM.

**10.** **Controlled**: input do React state điều khiển (`value` + `onChange`). **Uncontrolled**: DOM giữ giá trị, đọc qua `ref` — file upload, tích hợp thư viện cũ, hoặc form đơn giản.

---

## 3. Hooks cốt lõi

**11.** `setState` với **callback** `prev =>` khi phụ thuộc giá trị cũ. **Batching**: nhiều `setState` trong một event có thể gộp một lần render (React 18 batching rộng hơn).

**12.** `[]`: chạy **một lần** sau mount (mount effect). `[dep]`: chạy khi `dep` đổi. **Không có array**: chạy **mỗi** render — dễ vòng lặp, tránh trừ khi biết rõ.

**13.** Cleanup: `return () => {}` — hủy `setInterval`, unsubscribe, `AbortController.abort`, tránh memory leak.

**14.** `useRef` giữ **mutable** `.current` qua render **không** trigger re-render; phù hợp DOM focus, id, giá trị không cần UI. `useState` mỗi lần set → re-render.

**15.** `useMemo` cache **kết quả tính toán**; `useCallback` cache **hàm**. Chỉ dùng khi **đo được** lợi hoặc cần **ổn định reference** cho `memo`/con — tránh dùng mọi nơi (phức tạp, lợi ích nhỏ).

---

## 4. Hooks & context nâng cao

**16.** `useContext` đọc giá trị từ `Provider` — bỏ qua prop từng cấp. Hạn chế: **re-render** mọi consumer khi value đổi; value nên **ổn định** (`useMemo`) hoặc chia context nhỏ.

**17.** `useReducer` khi logic **nhiều** transition, hoặc state **phức tạp** (nhiều field liên quan) — pattern giống reducer.

**18.** Chỉ gọi hook **ở top level** function component/custom hook. Trong điều kiện/vòng lặp thứ tự hook đổi → lỗi.

**19.** Custom hook: **function bắt đầu `use`**, gọi hook khác; tái sử dụng logic. Tên: `useXxx`.

---

## 5. Render & hiệu năng

**20.** Re-render khi state/context/props **đổi** (tổng quát). Giảm: `memo`, `useMemo`/`useCallback`, `key` ổn định, không tạo object/hàm inline không cần thiết (tùy case).

**21.** `React.memo` bọc component — **bỏ qua** render nếu props shallow equal. Hữu ích cho con **nặng** nhận props ổn định.

**22.** `children` nếu là element **mới tạo** mỗi lần cha render → con có thể re-render dù `memo`. Cần `useMemo` cho children hoặc tách component.

---

## 6. Form & sự kiện

**23.** **Synthetic event**: wrapper chuẩn hóa hành vi cross-browser; không đồng bộ giữ `event` sau async (pooling cũ).

**24.** `preventDefault`: chặn hành vi mặc định (submit form). `stopPropagation`: không đổi bubble lên cha.

**25.** `onSubmit` trên `<form>`; input controlled: `value={state}` + `onChange` cập nhật state.

---

## 7. Side-effect & dữ liệu

**26.** `useEffect(() => { fetch... }, [deps])`; cleanup `AbortController` hoặc flag `cancelled` để không `setState` sau unmount.

**27.** SSR: effect **không** chạy server; `useEffect` chỉ client. Logic cần “chỉ client” đặt trong effect hoặc dynamic import.

---

## 8. Lỗi & tổ chức

**28.** Error Boundary **class** `componentDidCatch` / `static getDerivedStateFromError` — bắt lỗi render con. **Không** có hook tương đương chính thức; vẫn có thư viện hoặc boundary component.

**29.** `lazy` + `Suspense` **tách code** route/component — giảm bundle ban đầu, hiển thị fallback khi đang tải.

---

## 9. React 18 & hiện đại

**30.** **Batching** tự động nhiều `setState` trong async, promise, timeout — ít render hơn.

**31.** `useTransition` — đánh dấu cập nhật **không khẩn** (UI vẫn tương tác); `startTransition` tương tự ngoài hook.

**32.** `StrictMode` **dev**: double-invoke effect/setup, cảnh báo API deprecated — giúp phát hiện side-effect không an toàn.

---

## 10. DOM & nâng cao

**33.** **Portal** render DOM con ra **node khác** (thường `document.body`) — modal vẫn trong React tree, event bubble đúng.

**34.** `forwardRef` chuyển **ref** xuống DOM con; `useImperativeHandle` — expose **API** hạn chế (tránh lộ toàn DOM).

**35.** `ref={(el) => ...}` — ref **callback**; gọi khi mount/unmount.

---

## 11. Patterns & thực hành

**36.** Composition: **truyền children** / props component thay vì kế thừa class.

**37.** `children` là nội dung lồng; **render props** là **hàm** `children`/`render` trả JSX — linh hoạt chia sẻ logic.

**38.** Modal controlled: state `open` ở cha, đóng/mở qua callback — tránh state tách rời.

---

## 12. Kiến trúc & hệ sinh thái

**39.** `BrowserRouter` dùng **History API** (URL đẹp). `HashRouter` dùng `#` — không cần server rewrite.

**40.** Context cho **ít** cập nhật / vài consumer. **Redux/Zustand** khi **nhiều** slice, middleware, devtools, logic phức tạp — tùy dự án.

**41.** **CSR**: HTML gần trống, JS lấy dữ liệu client. **SSR**: HTML render sẵn server — SEO, TTFB. Next.js kết hợp SSR/SSG/CSR.

**42.** `key` sai khi đổi thứ tự → React **reuse** nhầm node — state UI lẫn giữa item.

---

## 13. Testing & build

**43.** `data-testid` — selector **ổn định** cho test, không phụ thuộc CSS/text thay đổi (dùng có chừng mực).

**44.** Vite/CRA: dev server nhanh, bundle ES modules — **HMR**; CRA ít dùng hơn, Vite phổ biến.

---

## 14. Câu tình huống

**45.** `useEffect` thiếu dependency / setState trong effect mà không điều kiện → **chạy lại** mãi.

**46.** **Stale closure**: effect/callback “nhớ” biến cũ vì dependency thiếu — sửa bằng dependency đúng hoặc functional update.

**47.** Render `undefined`/`null` an toàn; nhầm **render object** trực tiếp `{obj}` → lỗi.

**48.** Object/function **mới mỗi render** làm `useEffect` deps “đổi” liên tục → effect chạy lại. Ổn định bằng `useMemo`/`useCallback` hoặc primitive deps.

**49.** Index làm key khi **thứ tự đổi** → React nhầm **identity** item → bug state/input.

**50.** `flushSync` — ép **flush** DOM đồng bộ trước khi đọc layout/measure (API nâng cao, ít dùng).

---

## 15. Nền tảng sâu — render & vòng đời

**51.** Concurrent cho phép **tạm dừng/tiếp tục** render work — ưu tiên tương tác (transitions) thay vì block dài.

**52.** `useLayoutEffect` chạy **sau DOM mutate, trước paint** — đo layout, tránh nhấp nháy; đồng bộ, có thể block paint. `useEffect` sau paint — không block.

**53.** `useId` tạo id **ổn định** giữa server/client — tránh mismatch hydration.

**54.** Mismatch: random, timezone, locale — đồng bộ server/client hoặc render placeholder client-only.

**55.** RSC chạy server, không bundle hooks client cho phần đó; fetch gần DB; client component tương tác + hooks.

---

## 16. Data & kiến trúc (middle)

**56.** Hiển thị cache cũ ngay, refetch nền — UX nhanh, dữ liệu tương đối mới.

**57.** UI cập nhật trước khi server OK; lỗi thì rollback — chat, like.

**58.** Chỉ render **vài trăm** item visible — giảm DOM, scroll mượt.

---

## 17. Case thực tế — sản phẩm

**59.** Track `dirty` fields; prompt khi `react-router` navigate hoặc `beforeunload` (hạn chế UX).

**60.** Quá nhiều prop qua nhiều cấp → context nhỏ, composition, state machine.

**61.** Value context mới mỗi render → re-render mọi consumer — `useMemo` value hoặc tách theme vs session.

**62.** Có: `<Fragment key={id}>` (cần `import { Fragment }` hoặc viết đủ) — hỗ trợ key; shorthand `<>` không có key.

---

## 18. Case phỏng vấn — debug & hiệu năng

**63.** CLS: thiếu width/height ảnh, font swap, inject nội dung async — fix bằng kích thước, skeleton.

**64.** Double invoke effect trong dev để phát hiện **missing cleanup** — side-effect phải idempotent.

**65.** Cleanup `AbortController` hoặc flag `ignore` trong effect — tránh setState sau unmount / response cũ.

**66.** Vẫn có (libraries, older code) — truyền function làm children để chia logic.

---

## 19. Tích hợp & chất lượng

**67.** Object/function inline mới mỗi render → props “đổi” → **memo vô hiệu** — `useMemo` hoặc đưa ra ngoài.

**68.** Boundary chỉ **render** errors; lỗi trong async callback/event không bubble lên boundary (cần try/catch hoặc state lỗi).

**69.** `aria-live="polite"` cho toast — screen reader đọc thông báo mới.

**70.** Code splitting route giảm JS ban đầu; prefetch khi hover link — cải thiện điều hướng sau.

---

*Chúc bạn ôn tập hiệu quả.*
