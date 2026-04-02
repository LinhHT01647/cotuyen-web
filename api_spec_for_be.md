# TÀI LIỆU API CHO BACKEND (DỰ ÁN CỜ TUYẾN)

Tài liệu này tổng hợp toàn bộ các Request API từ Frontend Web cho dự án Cờ Tuyến.

> **Cập nhật lần cuối:** 2026-04-02  
> **Prefix chuẩn:** `/api/v1/`  
> **Base URL Production:** `https://cotuyen.vn/api/v1`

---

## TỔNG QUAN HỆ THỐNG GIAO TIẾP

### Headers Bắt Buộc

Trong TẤT CẢ các Client-side Fetch request, Frontend tự động đính kèm:

| Header | Giá trị | Bắt buộc | Mô tả |
|--------|---------|----------|-------|
| `Accept-Language` | `vi` \| `en` \| `zh` | Không | Ngôn ngữ trả về — **mặc định `en`** nếu thiếu |
| `Authorization` | `Bearer <jwt_token>` | Tuỳ endpoint | Bắt buộc với các endpoint có 🔐 |

### Nhiệm vụ của Backend

- Dựa vào `Accept-Language`, Backend **phải dịch** các thông báo `message` và lỗi `error` trả về cho Frontend.
- Nếu **không có header** hoặc locale không hỗ trợ → **mặc định trả về tiếng Anh (en)**.
- Locale hiện được hỗ trợ: `vi` (Tiếng Việt), `en` (English), `zh` (中文).

### Format Lỗi Chuẩn

```json
{
  "code": "INVALID_CREDENTIALS",
  "message": "Invalid username or password."
}
```

---

## 1. AUTHENTICATION & TÀI KHOẢN

**Base path:** `/api/v1/auth/` → proxy tới `auth-service:8081`

### 1.1 Đăng nhập (Login)

```
POST /api/v1/auth/login
Accept-Language: vi
```

**Request Body:**
```json
{
  "emailOrUsername": "testuser",
  "password": "Password123",
  "deviceId": "device-uuid-optional",
  "deviceName": "Chrome on Mac",
  "platform": "web"
}
```

> ⚠️ Field `emailOrUsername` chấp nhận cả username và email.  
> Backend detect: nếu chứa `@` → tìm theo email, ngược lại → tìm theo username.

**Response 200:**
```json
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "opaque-refresh-token",
  "userId": "u123",
  "sessionId": "sess-abc",
  "expiresInSec": 900,
  "tokenType": "Bearer",
  "message": "Login successful!"
}
```

> Note: `xp` và `level` sẽ được fetch riêng qua `GET /api/v1/me/stats` sau khi login.

**Response 400/401:**
```json
{
  "code": "INVALID_CREDENTIALS",
  "message": "Invalid username or password."
}
```

**Response 403 (email chưa verify):**
```json
{
  "code": "EMAIL_NOT_VERIFIED",
  "message": "Account email has not been verified. Please check your inbox."
}
```

---

### 1.2 Đăng ký (Register)

```
POST /api/v1/auth/register
Accept-Language: vi
```

**Request Body:**
```json
{
  "username": "newuser",
  "email": "new@domain.com",
  "password": "Password123"
}
```

**Response 201:**
```json
{
  "message": "Account created successfully! Please check your email to verify your account before logging in."
}
```

**Response 409 (username đã tồn tại):**
```json
{
  "code": "USERNAME_TAKEN",
  "message": "Username is already taken."
}
```

---

### 1.3 Xác thực Email (Verify)

```
GET /api/v1/auth/verify-email?token=<url_token>
Accept-Language: vi
```

> Frontend redirect từ email link → gọi GET với token trong query string.

**Response 200:**
```json
{ "message": "Email verified successfully! You can now log in." }
```

**Response 400/401:**
```json
{
  "code": "TOKEN_EXPIRED",
  "message": "Verification link has expired."
}
```

---

### 1.4 Refresh Token

```
POST /api/v1/auth/refresh
```

**Request Body:**
```json
{
  "refreshToken": "opaque-refresh-token",
  "deviceId": "device-uuid"
}
```

**Response 200:** Tương tự login response (accessToken, refreshToken mới).

---

### 1.5 Đăng xuất (Logout)

```
POST /api/v1/auth/logout
Authorization: Bearer <token>
```

**Response 204:** No content.

---

### 1.6 Quên mật khẩu

```
POST /api/v1/auth/forgot-password
Accept-Language: vi
```

**Request Body:**
```json
{ "username": "testuser" }
```

**Response 200:**
```json
{ "message": "A new password has been sent to your email." }
```

---

## 2. PROFILE & STATS

**Base path:** `/api/v1/me/` → proxy tới `core-api:8080` (legacy `/v1/me/`)

> ⚠️ Các route `/api/v1/me/*` hiện chưa tồn tại dưới prefix `/api/v1/`.  
> Tạm thời Frontend phải dùng `/v1/me/` hoặc BE thêm alias.

### 2.1 Lấy Thông tin Profile

```
GET /v1/me
Authorization: Bearer <token>
```

**Response 200:**
```json
{
  "userId": "u123",
  "displayName": "VuaCoTuyen",
  "avatarUrl": "https://..."
}
```

### 2.2 Lấy Stats (XP, Rank, W/L/D)

```
GET /v1/me/stats
Authorization: Bearer <token>
```

**Response 200:**
```json
{
  "userId": "u123",
  "xp": 1000,
  "rank": "Trung Sĩ",
  "rankXpCurrent": 200,
  "rankXpMax": 500,
  "wins": 12,
  "losses": 5,
  "draws": 1,
  "matches": 18,
  "winRate": 66.7
}
```

---

## 3. HỆ THỐNG GIFTCODE

**Base path:** `/api/v1/giftcode/` → proxy tới `core-api:8080`

### 3.1 Đổi mã Giftcode (Redeem)

```
POST /api/v1/giftcode/redeem
Authorization: Bearer <token>
Accept-Language: vi
```

**Request Body:**
```json
{
  "code": "COTUYEN2026NEW",
  "userId": "u123"
}
```

> ✅ Không cần `Idempotency-Key` header — server tự tạo từ `userId + code`.

**Response 200:**
```json
{
  "message": "Gift code redeemed successfully! Rewards have been sent to your account.",
  "rewards": [
    { "type": "COIN", "amount": 500000 },
    { "type": "ITEM", "itemId": "wpn_01" }
  ]
}
```

**Response 409 (đã sử dụng):**
```json
{
  "code": "USER_LIMIT_REACHED",
  "error": "You have already redeemed this gift code."
}
```

**Response 410 (hết hạn):**
```json
{
  "code": "CODE_EXPIRED",
  "error": "Gift code has expired."
}
```

---

## 4. TIN TỨC & BÀI VIẾT (NEWS)

**Base path:** `/api/v1/news/` → proxy tới `core-api:8080`

> Backend trả về `title` và `content` đúng ngôn ngữ theo `Accept-Language`.  
> Database lưu: `title_vi`, `title_en`, `title_zh`, `content_vi`, `content_en`, `content_zh`.

### 4.1 Lấy danh sách Tin tức

```
GET /api/v1/news?page=1&limit=10&tag=feature
Accept-Language: vi
```

**Response 200:**
```json
{
  "data": [
    {
      "_id": "news123",
      "title": "Patch 1.4 — Cân Bằng Lực Lượng",
      "tag": "CẬP NHẬT",
      "coverImage": "/uploads/patch.jpg",
      "createdAt": "2026-03-15T00:00:00Z",
      "author": "Admin"
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 10
}
```

### 4.2 Lấy chi tiết một bài viết

```
GET /api/v1/news/:id
Accept-Language: vi
```

**Response 200:**
```json
{
  "_id": "news123",
  "title": "Patch 1.4",
  "tag": "CẬP NHẬT",
  "content": "<h1>Nội dung bài viết HTML</h1>...",
  "coverImage": "/uploads/patch.jpg",
  "createdAt": "2026-03-15T00:00:00Z",
  "author": "Admin"
}
```

### 4.3 Admin Tạo bài viết

```
POST /api/v1/admin/news
Authorization: Bearer <admin_token>
Accept-Language: vi
```

**Request Body (localized fields):**
```json
{
  "title_vi": "Patch 1.5 — Sự Kiện Mùa Xuân",
  "title_en": "Patch 1.5 — Spring Event",
  "title_zh": "1.5版本 — 春节活动",
  "tag": "SỰ KIỆN",
  "coverImage": "https://cotuyen.vn/uploads/patch15.jpg",
  "content_vi": "<p>Nội dung tiếng Việt...</p>",
  "content_en": "<p>English content...</p>",
  "content_zh": "<p>中文内容...</p>",
  "isPublished": true,
  "author": "GameMaster"
}
```

**Response 201:**
```json
{
  "message": "Article created successfully.",
  "article": { "_id": "...", ... }
}
```

### 4.4 Admin Sửa bài viết

```
PUT /api/v1/admin/news/:id
Authorization: Bearer <admin_token>
```

**Request Body:** Tất cả field đều optional (partial update).

### 4.5 Admin Xoá bài viết

```
DELETE /api/v1/admin/news/:id
Authorization: Bearer <admin_token>
Accept-Language: vi
```

**Response 200:**
```json
{ "message": "Article deleted successfully." }
```

---

## 5. BẢNG XẾP HẠNG (LEADERBOARD)

**Base path:** `/api/v1/leaderboard` → proxy tới `core-api:8080`

### 5.1 Lấy bảng danh dự

```
GET /api/v1/leaderboard?limit=10
Accept-Language: vi
```

**Response 200:**
```json
{
  "topPlayers": [
    {
      "rank": 1,
      "username": "VuaCoTuyen",
      "score": 9500,
      "level": 12,
      "avatar": "/uploads/ava1.jpg"
    }
  ]
}
```

---

## 6. UPLOAD (ẢNH/TỆP TIN)

**Base path:** `/api/v1/upload` → proxy tới `core-api:8080`

### 6.1 Upload hình ảnh CMS

```
POST /api/v1/upload
Authorization: Bearer <admin_token>
Accept-Language: vi
Content-Type: multipart/form-data
```

**Form Data:**
- Field name: `file`
- Loại file hỗ trợ: `image/jpeg`, `image/png`, `image/webp`, `image/gif`
- Kích thước tối đa: **10 MB**

**Response 200:**
```json
{
  "message": "File uploaded successfully.",
  "url": "http://cotuyen.vn/uploads/1711234567_patch_cover.jpg"
}
```

**Response 400 (sai định dạng):**
```json
{
  "code": "INVALID_FILE_TYPE",
  "message": "Invalid file format or file is too large."
}
```

---

## 7. ROUTING ARCHITECTURE

```
Client (Web)
    │
    ▼
Nginx (Port 80)
    │
    ├─ /api/v1/auth/*  ──────────► auth-service:8081
    │                               (login, register, verify-email, refresh, logout)
    │
    └─ /api/v1/*       ──────────► core-api:8080
                                    (news, leaderboard, giftcode/redeem, admin/news, upload)

Mobile App
    │
    ▼
Nginx (Port 80)
    │
    ├─ /v1/auth/*      ──────────► auth-service:8081
    └─ /v1/me/*        ──────────► core-api:8080
    └─ /v1/rooms/*     ──────────► core-api:8080
    └─ /v1/ws          ──────────► realtime-gateway:8090
```

---

## 8. I18N — DANH SÁCH MESSAGE KEYS

| Key | EN | VI | ZH |
|-----|----|----|-----|
| `login.success` | Login successful! | Đăng nhập thành công! | 登录成功！ |
| `register.success` | Account created... | Tạo tài khoản thành công... | 账号创建成功... |
| `giftcode.success` | Gift code redeemed! | Đổi giftcode thành công! | 礼包码兑换成功！ |
| `giftcode.expired` | Gift code has expired. | Giftcode đã hết hạn. | 礼包码已过期。 |
| `news.deleted` | Article deleted successfully. | Xoá bài viết thành công. | 文章已删除。 |
| `upload.success` | File uploaded successfully. | Tải lên thành công. | 文件上传成功。 |
| `error.unauthorized` | Unauthorized. | Bạn chưa đăng nhập. | 未授权，请先登录。 |
| `error.forbidden` | Access denied. | Bạn không có quyền truy cập. | 权限不足。 |
| `error.internal` | Internal server error. | Đã xảy ra lỗi hệ thống. | 服务器内部错误。 |

> Full danh sách trong: `internal/pkg/i18n/i18n.go`
