---
description: Quy trình phát triển tính năng cho Web App (Next.js): từ nhận task, design, code, đến chạy Playwright UI test bắt buộc trước khi commit.
---

# Workflow: Phát triển tính năng Web (Next.js)

Quy trình này BẮT BUỘC được tuân thủ khi phát triển bất kỳ tính năng nào trên web Next.js.
Mỗi tính năng phải đi qua **đủ 6 bước** và phải vượt qua bước kiểm thử mới được phép commit.

---

## 1. Nhận và Phân Tích Task

- Đọc requirements hoặc hỏi NotebookLM để lấy mô tả tính năng cần làm.
- Xác định trang/component liên quan trong `src/app/` hoặc `src/components/`.
- Xác định rõ Acceptance Criteria: tính năng hoàn thành khi nào thì đạt.

## 2. Lấy Design (UI/UX)

- Tham chiếu file design trong `docs/` hoặc hỏi Stitch MCP Server nếu có.
- Xác định layout, màu sắc (Tailwind classes), typography, và responsive breakpoints.
- Đặc biệt lưu ý các trạng thái: loading skeleton, error state, empty state.

## 3. Viết Code (Implementation)

- Tạo/sửa file trong `src/app/<trang>/page.tsx` hoặc `src/components/`.
- Tuân thủ TypeScript strict: không dùng `any`, khai báo interface/type đầy đủ.
- Dùng Server Components mặc định, chỉ thêm `"use client"` khi cần interactivity.
- Xử lý đầy đủ trạng thái: Loading, Error, Empty.

## 4. 🧪 Kiểm Thử Bắt Buộc (Phải Vượt Qua Trước Khi Commit)

### Bước 4a — Kiểm tra TypeScript & Lint
// turbo
```bash
npm run lint
```
> Phải đạt **0 lỗi ESLint**. Sửa hết lỗi trước khi qua bước tiếp.

### Bước 4b — Chạy toàn bộ UI Test (Playwright)
// turbo
```bash
npx playwright test --reporter=list
```
> **Tất cả testcase `TC_WEB_*`** trong `tests/ui/web.spec.ts` phải **PASS**.
> Nếu test fail do tính năng mới thay đổi locator → cập nhật test cho phù hợp.
> Nếu thêm trang mới → BẮT BUỘC thêm test case mới vào `tests/ui/web.spec.ts`.

### Bước 4c — Xem báo cáo Playwright (nếu có lỗi)
// turbo
```bash
npx playwright show-report
```
> Xem screenshot + video của test nào fail để debug nhanh.

### Bước 4d — Kiểm tra thủ công trên trình duyệt

Chạy `npm run dev` và kiểm thử thủ công theo checklist:
- [ ] Trang render đúng UI theo design (màu, font, spacing).
- [ ] Không có lỗi console JavaScript trong browser DevTools.
- [ ] Hoạt động bình thường trên Chrome, Safari, và Mobile viewport (390px).
- [ ] Các link điều hướng hoạt động đúng.
- [ ] Form validation hiển thị đúng thông báo lỗi.

## 5. Commit và Push

Chỉ commit khi các bước 4a → 4d đã xanh:

```bash
git add .
git commit -m "feat(<tên-tính-năng>): <mô tả ngắn>"
git push origin <branch>
```

Quy ước commit: `feat(...)`, `fix(...)`, `test(...)`, `refactor(...)`, `style(...)`.

## 6. Cập Nhật Trạng Thái Task

- Đánh dấu task là ✅ Done trong hệ thống quản lý task.
- Báo cáo với User: Các trang/component đã thay đổi + kết quả Playwright test.
