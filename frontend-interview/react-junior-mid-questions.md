# Câu hỏi phỏng vấn React — Junior / Middle Frontend

> **1–50**: nền tảng. **51–70**: reconciler, rendering đồng thời, SSR/hydration, data fetching, **case thực tế** (optimistic UI, list ảo, form). Đối chiếu `react-junior-mid-answers.md`.

---

## 1. Cơ bản & JSX

1. React là gì (thư viện so với framework)? Vai trò của Virtual DOM (ý tưởng)?
2. JSX là gì? Trình duyệt có hiểu JSX trực tiếp không?
3. `className` thay vì `class`, `htmlFor` thay vì `for` — vì sao?
4. Fragment `<>...</>` dùng khi nào? Khác `div` bọc ngoài thế nào?
5. Điều kiện render trong JSX: `&&`, toán tử ba ngôi — lưu ý với số `0`?

---

## 2. Component, props, state

6. Function component khác class component (hiện tại thực hành phổ biến)?
7. Props là gì? Có thể thay đổi props bên trong con không?
8. State là gì? Khi nào cần nâng state lên component cha (lifting state up)?
9. `key` trong `list` map — vì sao quan trọng? Dùng `index` khi nào được / không nên?
10. Controlled component vs uncontrolled — khác nhau và khi nào dùng?

---

## 3. Hooks cốt lõi

11. `useState` — cách cập nhật state dựa trên state trước; batching là gì?
12. `useEffect` — dependency array: `[]`, `[dep]`, không có array khác nhau thế nào?
13. Cleanup function trong `useEffect` dùng khi nào? Ví dụ (subscription, timer)?
14. `useRef` — giữ giá trị giữa render mà không gây re-render; khác `useState`?
15. `useMemo` và `useCallback` — mục đích và khi nào **không** cần dùng?

---

## 4. Hooks & context nâng cao (middle)

16. `useContext` — tránh prop drilling thế nào? Hạn chế?
17. `useReducer` khi nào phù hợp hơn `useState`?
18. Quy tắc Hooks (Rules of Hooks) là gì? Vì sao không gọi hook trong vòng lặp/if?
19. Custom hook là gì? Tên file/hàm thường đặt thế nào?

---

## 5. Render & hiệu năng

20. Re-render xảy ra khi nào? Làm sao giảm render không cần thiết (ý tưởng)?
21. `React.memo` làm gì? Khi nào có ích?
22. `children` và re-render — lưu ý khi truyền `children`/`props` object?

---

## 6. Form & sự kiện

23. Synthetic event trong React là gì?
24. `e.preventDefault()` và `e.stopPropagation()` dùng khi nào?
25. Form: `onSubmit` xử lý ở đâu; `value` + `onChange` cho controlled input?

---

## 7. Side-effect & dữ liệu

26. Gọi API trong `useEffect` — pattern cơ bản; xử lý `abort` / `cancel` khi unmount (ý tưởng)?
27. `useEffect` chạy trên server với SSR (React 18) — cần biết gì (ý tưởng)?

---

## 8. Lỗi & tổ chức

28. Error Boundary là gì? Hook nào thay thế được không? (kiến thức class)
29. Code splitting / `React.lazy` + `Suspense` — mục đích gì?

---

## 9. React 18 & hiện đại

30. Automatic batching trong React 18 là gì?
31. `startTransition` / `useTransition` — mục đích (ưu tiên cập nhật)?
32. `StrictMode` bật trong dev — làm gì (double render, cảnh báo)?

---

## 10. DOM & nâng cao

33. `createPortal` dùng khi nào (modal, tooltip)?
34. `forwardRef`/`useImperativeHandle` — khi nào cần (expose ref cho thư viện)?
35. Ref callback là gì?

---

## 11. Patterns & thực hành

36. Composition vs inheritance trong React — ý tưởng?
37. `children` prop và `render props` — khác nhau?
38. Controlled modal với state ở cha — một vấn đề thường gặp?

---

## 12. Kiến trúc & hệ sinh thái

39. React Router: `BrowserRouter` vs `HashRouter` (ý tưởng)?
40. Global state: Context đủ hay cần Redux/Zustand — tiêu chí chọn?
41. SSR vs CSR — khác nhau cơ bản; Next.js liên quan (ý tưởng)?
42. `key` prop khi đổi thứ tự danh sách — ảnh hưởng gì?

---

## 13. Testing & build (nhẹ)

43. `data-testid` dùng khi nào trong testing?
44. Vite / Create React App — ý tưởng dev server và bundle (không cần sâu)?

---

## 14. Câu tình huống

45. Vòng lặp vô hạn trong `useEffect` — nguyên nhân thường gặp?
46. Stale closure trong `useEffect` — là gì?
47. So sánh `null` và `undefined` khi render có thể gây lỗi gì?
48. `useEffect` phụ thuộc object/function tạo mới mỗi render — vấn đề?
49. Tại sao không nên dùng index làm `key` nếu danh sách có thêm/xóa/sắp xếp?
50. `flushSync` — khi nào nhắc tới (React 18)?

---

## 15. Nền tảng sâu — render & vòng đời

51. **Concurrent rendering** (React 18) khác render “blocking” (ý tưởng: interruptible, priority)?
52. **`useLayoutEffect`** khác `useEffect` — khi nào chạy, khi nào gây blocking paint?
53. **`useId`** dùng để làm gì (id ổn định, SSR/hydration) — tránh `Math.random()`?
54. **Hydration mismatch**: nguyên nhân thường gặp (random id, `Date.now`, locale) và cách xử (`suppressHydrationWarning` hạn chế chỗ)?
55. **React Server Components** (Next.js App Router) — **khác** client component ở điểm nào (bundle, fetch, hooks)?

---

## 16. Data & kiến trúc (middle)

56. **Stale-while-revalidate** (React Query / SWR) — ý tưởng UX và cache?
57. **Optimistic update** — khi nào dùng, rollback khi API fail?
58. **Virtualization** (React Window / TanStack Virtual) — giải quyết vấn đề gì với list dài?

---

## 17. Case thực tế — sản phẩm

59. Form nhiều bước: **dirty state** / **unsaved changes** — pattern (router prompt, `beforeunload`)?
60. **Nâng state quá cao** (prop drilling) — triệu chứng và hướng (composition, context, slice state)?
61. Provider **Context** lồng nhiều lớp — vấn đề re-render và cách giảm (chia context, memo value)?
62. **`key` trên `<Fragment>`** khi map — có hợp lệ không (phiên bản React)?

---

## 18. Case phỏng vấn — debug & hiệu năng

63. **Lighthouse** báo “Avoid large layout shifts” — liên quan React (ảnh không kích thước, font, async)?
64. **Double render** trong `StrictMode` dev — **mục đích** và effect cleanup chạy hai lần?
65. `useEffect` gọi API + `setState` — user đổi route nhanh: **race** — xử lý (cleanup, abort)?
66. **`children` prop** là function (`render props`) — còn gặp trong codebase cũ không?

---

## 19. Tích hợp & chất lượng

67. **React.memo** + **default props object** inline trong cha — có phá memo không? Vì sao?
68. **Error boundary** không bắt lỗi gì (async trong `useEffect`, event handler)?
69. **Accessibility**: `aria-live` cho vùng thông báo toast/async error — ý tưởng?
70. **Bundle**: tách route + `prefetch` link (React Router / framework) — lợi ích TTFB/FCP?

---

*Tổng: 70 câu (50 nền tảng + 20 nâng cao / case).*
