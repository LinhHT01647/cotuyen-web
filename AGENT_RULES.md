# AGENT_RULES — co-tuyen-web (Next.js Web Portal)

> ⬆️ **Đọc root rules trước:** [`../AGENT_RULES.md`](../AGENT_RULES.md)

---

## 📚 Knowledge Base

**NotebookLM Notebook ID:** `99fe7bcb-8943-4879-b003-48f6acac8840`

> Query NotebookLM TRƯỚC khi bắt đầu bất kỳ task nào.

---

## 📋 Requirements (symlink sẵn)

```
_requirements/functional/AUTH.md        ← Login, profile, admin user management
_requirements/functional/GAMEPLAY.md    ← Leaderboard, game history
_requirements/functional/ESPORTS.md     ← Tournament bracket, live broadcast
_requirements/functional/STORE.md       ← Store admin, analytics dashboard
_requirements/non-functional/NFR.md     ← Performance (Store API ≤ 200ms p95)
```

---

## 🧪 Tests (symlink sẵn)

```
_tests/e2e/auth_test.go      ← Auth flow tham khảo (server-side)
_tests/e2e/store_test.go     ← Store endpoints tham khảo
```

---

## API Contract

- **REST:** `co-tuyen-server/docs/openapi.yaml`
- **BASE_URL:** Xem `.env.local` (`NEXT_PUBLIC_API_URL`)
- **Auth:** JWT Bearer token, refresh khi nhận `401`

---

## Non-Negotiable Rules (Web-Specific)

1. **Admin pages** → Chỉ render nếu user có role `admin` (verify từ JWT claims hoặc API)
2. **New page** → PHẢI có `metadata` (SEO) và `<h1>` tag duy nhất
3. **API endpoint mới** → Đọc `_requirements/functional/<FEATURE>.md` + kiểm tra `openapi.yaml` trước
4. **FR-AUTH-07** → Mọi `/admin/*` route PHẢI protected bằng `role=admin`

## Cấu Trúc Hiện Tại (i18n + AI Web)

```
src/middleware.ts           ← Xử lý redirect i18n & phát hiện AI User-Agent stealth
src/app/[locale]/           ← App Router đa ngôn ngữ (vi, en, zh)
src/app/[locale]/ai/        ← Stealth routing zone chỉ trả về text cho AI Crawler
src/app/[locale]/admin/     ← Admin dashboard (role=admin only)
src/components/             ← Shared UI components
messages/                   ← Chứa file json đa ngôn ngữ: vi.json, en.json, zh.json
```

## Commands

```bash
npm run dev                 # Dev server
npm run build               # Production build
npm run lint                # ESLint
```
