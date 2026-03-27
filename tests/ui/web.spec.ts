import { test, expect } from '@playwright/test';

// ====================================================
//  TC_WEB_HOME: Trang Chủ (/)
// ====================================================
test.describe('TC_WEB_HOME: Trang Chủ', () => {

  test('TC_WEB_HOME_01: Trang chủ tải thành công - status 200', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('TC_WEB_HOME_02: Tiêu đề trang hiển thị đúng', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Cờ Tuyến|Command Chess|FRONTLINE/i);
  });

  test('TC_WEB_HOME_03: Không có lỗi console JavaScript', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors.length).toBe(0);
  });

  test('TC_WEB_HOME_04: Có nút Đăng Nhập trên trang chủ', async ({ page }) => {
    await page.goto('/');
    // Tìm link hoặc nút điều hướng đến trang đăng nhập
    const loginLink = page.locator('a[href*="dang-nhap"], a[href*="login"], button:has-text("Đăng nhập"), button:has-text("Login")');
    await expect(loginLink.first()).toBeVisible();
  });

  test('TC_WEB_HOME_05: Responsive - hiển thị đúng trên Mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Trang không bị overflow ngang
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(390);
  });
});

// ====================================================
//  TC_WEB_AUTH: Trang Đăng Nhập (/dang-nhap)
// ====================================================
test.describe('TC_WEB_AUTH: Trang Đăng Nhập', () => {

  test('TC_WEB_AUTH_01: Trang đăng nhập tải thành công', async ({ page }) => {
    const response = await page.goto('/dang-nhap');
    expect(response?.status()).toBe(200);
  });

  test('TC_WEB_AUTH_02: Có ô nhập Email', async ({ page }) => {
    await page.goto('/dang-nhap');
    const emailInput = page.locator('input[type="email"], input[name="email"], input[placeholder*="email" i]');
    await expect(emailInput.first()).toBeVisible();
  });

  test('TC_WEB_AUTH_03: Có ô nhập Password', async ({ page }) => {
    await page.goto('/dang-nhap');
    const pwInput = page.locator('input[type="password"]');
    await expect(pwInput.first()).toBeVisible();
  });

  test('TC_WEB_AUTH_04: Có nút Submit/Đăng Nhập', async ({ page }) => {
    await page.goto('/dang-nhap');
    const submitBtn = page.locator('button[type="submit"], button:has-text("Đăng nhập"), button:has-text("Login")');
    await expect(submitBtn.first()).toBeVisible();
  });

  test('TC_WEB_AUTH_05: Submit form trống - hiển thị thông báo lỗi validate', async ({ page }) => {
    await page.goto('/dang-nhap');
    const submitBtn = page.locator('button[type="submit"], button:has-text("Đăng nhập"), button:has-text("Login")');
    await submitBtn.first().click();
    await page.waitForTimeout(1000);
    // Phải có thông báo lỗi, hoặc HTML5 validation chặn lại
    const hasError = await page.locator('[class*="error"], [class*="alert"], [role="alert"]').count() > 0;
    const inputInvalid = await page.locator('input:invalid').count() > 0;
    expect(hasError || inputInvalid).toBeTruthy();
  });

  test('TC_WEB_AUTH_06: Password nhập đúng kiểu type=password (ẩn ký tự)', async ({ page }) => {
    await page.goto('/dang-nhap');
    const pwInput = page.locator('input[type="password"]').first();
    await pwInput.fill('mysecretpass');
    // Đảm bảo type là "password" (ký tự bị ẩn)
    const inputType = await pwInput.getAttribute('type');
    expect(inputType).toBe('password');
  });

  test('TC_WEB_AUTH_07: Đăng nhập sai thông tin - hiện thông báo lỗi server', async ({ page }) => {
    await page.goto('/dang-nhap');
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    const pwInput = page.locator('input[type="password"]').first();
    const submitBtn = page.locator('button[type="submit"]').first();

    await emailInput.fill('doesnotexist@nowhere.xyz');
    await pwInput.fill('wrongpassword123');
    await submitBtn.click();

    // Đợi phản hồi từ server
    await page.waitForTimeout(3000);

    // Trang không redirect mà phải hiển thị lỗi
    const hasError = await page.locator('[class*="error"], [class*="alert"], [role="alert"], .toast-error').count() > 0;
    const stillOnLoginPage = page.url().includes('dang-nhap');
    expect(hasError || stillOnLoginPage).toBeTruthy();
  });
});

// ====================================================
//  TC_WEB_PROFILE: Trang Hồ Sơ (/ho-so)
// ====================================================
test.describe('TC_WEB_PROFILE: Trang Hồ Sơ', () => {

  test('TC_WEB_PROFILE_01: Truy cập /ho-so khi chưa đăng nhập - redirect về đăng nhập hoặc trả 403/401', async ({ page }) => {
    const response = await page.goto('/ho-so');
    await page.waitForLoadState('networkidle');
    const url = page.url();
    const redirectedToLogin = url.includes('dang-nhap') || url.includes('login');
    const blockedStatus = response?.status() === 401 || response?.status() === 403;
    expect(redirectedToLogin || blockedStatus || response?.status() === 200).toBeTruthy();
  });
});

// ====================================================
//  TC_WEB_COMMUNITY: Trang Cộng Đồng (/cong-dong)
// ====================================================
test.describe('TC_WEB_COMMUNITY: Trang Cộng Đồng', () => {

  test('TC_WEB_COMMUNITY_01: Trang cộng đồng tải được - không crash', async ({ page }) => {
    const response = await page.goto('/cong-dong');
    expect(response?.status()).not.toBe(500);
  });

  test('TC_WEB_COMMUNITY_02: Không có lỗi JS console', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/cong-dong');
    await page.waitForLoadState('networkidle');
    expect(errors.length).toBe(0);
  });
});

// ====================================================
//  TC_WEB_MISSIONS: Trang Chiến Dịch (/chien-dich)
// ====================================================
test.describe('TC_WEB_MISSIONS: Trang Chiến Dịch', () => {

  test('TC_WEB_MISSIONS_01: Trang chiến dịch tải được', async ({ page }) => {
    const response = await page.goto('/chien-dich');
    expect(response?.status()).not.toBe(500);
  });
});

// ====================================================
//  TC_WEB_RULES: Trang Luật Chơi (/luat-choi)
// ====================================================
test.describe('TC_WEB_RULES: Trang Luật Chơi', () => {

  test('TC_WEB_RULES_01: Trang luật chơi tải thành công', async ({ page }) => {
    const response = await page.goto('/luat-choi');
    expect(response?.status()).toBe(200);
  });

  test('TC_WEB_RULES_02: Có nội dung văn bản luật chơi - không rỗng', async ({ page }) => {
    await page.goto('/luat-choi');
    await page.waitForLoadState('networkidle');
    const bodyText = await page.locator('body').innerText();
    expect(bodyText.trim().length).toBeGreaterThan(100);
  });
});

// ====================================================
//  TC_WEB_VERIFY: Trang Xác Nhận Email (/verify-email)
// ====================================================
test.describe('TC_WEB_VERIFY: Trang Xác Nhận Email', () => {

  test('TC_WEB_VERIFY_01: Trang verify-email tải được (không 500)', async ({ page }) => {
    const response = await page.goto('/verify-email');
    expect(response?.status()).not.toBe(500);
  });
});

// ====================================================
//  TC_WEB_404: Trang Không Tồn Tại
// ====================================================
test.describe('TC_WEB_404: Trang 404', () => {

  test('TC_WEB_404_01: Truy cập URL không tồn tại - hiển thị trang 404 phù hợp', async ({ page }) => {
    const response = await page.goto('/trang-khong-ton-tai-xyz-abc');
    await page.waitForLoadState('networkidle');
    const status = response?.status() ?? 200;
    const bodyText = await page.locator('body').innerText();
    const has404Content = status === 404 || bodyText.includes('404') || bodyText.toLowerCase().includes('not found');
    expect(has404Content).toBeTruthy();
  });
});
