# TÀI LIỆU API CHO BACKEND (DỰ ÁN CỜ TUYẾN)

Tài liệu này tổng hợp toàn bộ các Request API từ Frontend cho dự án Web Cờ Tuyến, bao gồm chuẩn đa ngôn ngữ (Multi-language) để Backend trả về đúng thông báo lỗi/thành công.

## TỔNG QUAN HỆ THỐNG GIAO TIẾP
- **Headers Bắt Buộc:**
  - Trong TẤT CẢ các Client-side Fetch request, Frontend sẽ tự động đính kèm Header:
    `Accept-Language: vi | en | zh`
- **Nhiệm vụ của Backend:**
  - Dựa vào giá trị của `Accept-Language`, Backend **phải dịch** các thông báo `message` và lỗi `error` trả về cho Frontend tương ứng với ngôn ngữ đó. 
  - (Tránh tuyệt đối việc trả về hard-code kiểu "Sai mật khẩu" nếu Client gửi `Accept-Language: en`).

---

## 1. AUTHENTICATION & TÀI KHOẢN

### 1.1 Đăng nhập (Login)
- **Endpoint:** `POST /api/auth/login`
- **Headers:** `Accept-Language: <locale>`
- **Payload (Request):**
  ```json
  {
    "emailOrUsername": "testuser",
    "password": "Password123"
  }
  ```
- **Response (Thành công - 200):**
  ```json
  {
    "token": "jwt_access_token_here",
    "user": {
      "id": "u123",
      "username": "testuser",
      "email": "test@gmail.com",
      "xp": 1000,
      "level": 5
    },
    "message": "Login successful!" // Dịch theo header
  }
  ```
- **Response (Thất bại - 400/401):**
  ```json
  {
    "error": "Mật khẩu không chính xác." // Dịch theo header
  }
  ```

### 1.2 Đăng ký (Register)
- **Endpoint:** `POST /api/auth/register`
- **Headers:** `Accept-Language: <locale>`
- **Payload:**
  ```json
  {
    "username": "newuser",
    "email": "new@domain.com",
    "password": "Password123"
  }
  ```
- **Response (Thành công - 201):** `{ "message": "Tạo tài khoản thành công! Vui lòng đăng nhập." }` (dịch theo header)
- **Response (Lỗi - 400):** `{ "error": "Tên người dùng đã tồn tại." }` (dịch theo header)

### 1.3 Xác thực Email (Verify)
- **Endpoint:** `POST /api/auth/verify-email`
- **Headers:** `Accept-Language: <locale>`
- **Payload:**
  ```json
  {
    "token": "url_token_query_param"
  }
  ```
- **Response (200):** `{ "message": "Email verified successfully" }` (dịch theo header)
- **Response (400):** `{ "error": "Invalid or expired verification link" }` (dịch theo header)

---

## 2. HỆ THỐNG GIFTCODE

### 2.1 Đổi mã Giftcode (Redeem)
- **Endpoint:** `POST /api/giftcode/redeem`
- **Headers:** 
  - `Accept-Language: <locale>`
  - `Authorization: Bearer <token>`
- **Payload:**
  ```json
  {
    "code": "COTUYEN2026NEW",
    "userId": "u123"
  }
  ```
- **Response (Thành công - 200/201):**
  ```json
  {
    "message": "Đổi giftcode thành công! Phần thưởng đã được gửi vào tài khoản.", // Dịch theo header
    "rewards": [
      { "type": "COIN", "amount": 500000 },
      { "type": "ITEM", "itemId": "wpn_01", "name": "Vũ Khí Tân Binh" }
    ]
  }
  ```
- **Response (Lỗi - 400):** `{ "error": "Giftcode đã hết hạn hoặc được sử dụng." }` (dịch theo header)

---

## 3. TIN TỨC & BÀI VIẾT (NEWS)

*Lưu ý: Đối với content của News, Backend có 2 lựa chọn: trả về content theo data dưới DB dựa trên ngôn ngữ header, hoặc để Frontend xử lý tịnh tiến. Thường API trả về tuỳ header.*

### 3.1 Lấy danh sách Tin tức 
- **Endpoint:** `GET /api/news?page=1&limit=10&tag=feature`
- **Headers:** `Accept-Language: <locale>`
- **Response (200):**
  ```json
  {
    "data": [
      {
        "_id": "news123",
        "title": "Patch 1.4 — Cân Bằng Lực Lượng",
        "tag": "CẬP NHẬT",
        "coverImage": "/images/upload/patch.jpg",
        "createdAt": "2026-03-15T00:00:00Z",
        "author": "Admin"
      }
    ],
    "total": 50,
    "page": 1,
    "limit": 10
  }
  ```

### 3.2 Lấy chi tiết một bài viết
- **Endpoint:** `GET /api/news/:id`
- **Headers:** `Accept-Language: <locale>`
- **Response (200):**
  ```json
  {
    "_id": "news123",
    "title": "Patch 1.4",
    "tag": "CẬP NHẬT",
    "content": "<h1>Nội dung bài viết HTML</h1>...",
    "coverImage": "url",
    "createdAt": "2026-03-15T00:00:00Z",
    "author": "Admin"
  }
  ```

### 3.3 Admin Tạo / Sửa bài viết
- **Endpoint:** `POST /api/admin/news` HOẶC `PUT /api/admin/news/:id`
- **Headers:** 
  - `Authorization: Bearer <admin_token>`
  - `Accept-Language: <locale>`
- **Payload:**
  ```json
  {
    "title": "Tiêu đề",
    "tag": "SỰ KIỆN",
    "coverImage": "url",
    "content": "html",
    "isPublished": true
  }
  ```

### 3.4 Admin Xoá
- **Endpoint:** `DELETE /api/admin/news/:id`
- **Response (200):** `{ "message": "Xoá bài viết thành công" }` (dịch theo header)

---

## 4. BẢNG XẾP HẠNG & CỘNG ĐỒNG (LEADERBOARD)

### 4.1 Lấy bảng danh dự
- **Endpoint:** `GET /api/leaderboard?limit=10`
- **Headers:** `Accept-Language: <locale>`
- **Response (200):**
  ```json
  {
    "topPlayers": [
      {
        "rank": 1,
        "username": "VuaCoTuyen",
        "score": 9500,
        "level": 75,
        "avatar": "/img/ava1.jpg"
      }
    ]
  }
  ```

---

## 5. UPLOAD (ẢNH/TỆP TIN)

### 5.1 Upload hình ảnh CMS
- **Endpoint:** `POST /api/upload`
- **Headers:** `Authorization: Bearer <admin_token>`
- **Payload:** `multipart/form-data` (chứa field biến \`file\`)
- **Response (200):**
  ```json
  {
    "message": "Tải lên thành công",
    "url": "https://storage.provider.com/images/12345.jpg"
  }
  ```
