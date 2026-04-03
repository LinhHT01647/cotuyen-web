# Kiến trúc Frontend: Command Chess (co-tuyen-web)

Frontend của Cờ Tuyến (Command Chess) được thiết kế đặc biệt tối ưu cho người dùng phổ thông (Human Web) lẫn các hệ thống cào dữ liệu AI (AI Web Crawler).

## 1. Cơ chế Stealth Routing (AI Web)
Thay vì render toàn bộ HTML và JS nặng nề cho các bot AI thu thập dữ liệu (ví dụ: GPTBot, Claude-Web, Google-Extended), hệ thống tích hợp sẵn cơ chế **Stealth Rewrite** trong Middleware.

Cách hoạt động (`src/middleware.ts`):
- Middleware tự động kiểm tra cú pháp của header `User-Agent`.
- Nếu phát hiện nó khớp với bất kỳ Bot AI nào đã định nghĩa, Middleware sẽ lập tức chuyển hướng yêu cầu (rewrite ngầm) tệp đến mảng `/ai/`.
- Mảng `/ai` layout (`src/app/[locale]/ai/layout.tsx` và `page.tsx`) sẽ bỏ qua toàn bộ React Client Context, Navbar và Footer, thay vào đó chỉ render ra một cấu trúc HTML thuần (Plain Semantics HTML/Markdown) với dung lượng cực thấp và Token Rate thân thiện.

## 2. Hệ Thống Multi-language (i18n)
Toàn bộ dự án đi theo cấu trúc dynamic routing đa ngôn ngữ của `next-intl`:
- Route bắt buộc cấu trúc: `/[locale]/...`
- `locale` mặc định hoặc hỗ trợ: `vi` (Tiếng Việt), `en` (English), `zh` (Chinese).
- Text resources được cô lập trong thư mục `/messages/`. Không có bất kỳ Text cứng (Hardcoded string) nào tồn tại trong Codebase Components.
- Khi gọi đến Backend của Command Chess, Frontend bắt buộc đóng gói Header `Accept-Language: <locale>` để nhận được error message và payload tương ứng đúng ngôn ngữ.

## 3. SEO Metadata Động (Dynamic Metadata)
Với Next.js App Router, toàn bộ thẻ Meta và Title được tự động khởi tạo linh hoạt bằng cách sử dụng cấu trúc `generateMetadata()` và lấy `getTranslations()` từ `next-intl/server`. Điều này giúp hệ thống đạt điểm SEO cao cho cả 3 ngôn ngữ trên toàn bộ màn hình.
