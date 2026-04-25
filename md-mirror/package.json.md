# Ôn Tập Mã Nguồn — `package.json`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```json
{
  "name": "algorithms-playground",
  "private": true,
  "scripts": {
    "playground": "nodemon --watch algorithms/playground.js algorithms/playground.js",
    "playground:quiet": "nodemon --watch algorithms/playground.js algorithms/playground.js --quiet",
    "exercises:binary-search": "nodemon --watch algorithms/02-binary-search-exercises.js algorithms/02-binary-search-exercises.js"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
