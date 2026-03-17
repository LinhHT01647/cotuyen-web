"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function DangNhapPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <main className="min-h-screen flex" style={{ background: "#0A0404" }}>

      {/* ── LEFT PANEL: Cinematic illustration ── */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image
          src="/images/mother-farewell.png"
          alt="Người Mẹ Tiễn Con"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,4,4,0.15) 0%, rgba(10,4,4,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,4,4,1) 0%, rgba(10,4,4,0.4) 30%, transparent 60%)",
          }}
        />

        {/* Logo top-left */}
        <Link
          href="/"
          className="absolute top-6 left-6 z-10 flex items-center gap-2"
        >
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{
              background: "#DA0000",
              clipPath: "polygon(10% 0%, 100% 0%, 90% 50%, 100% 100%, 10% 100%, 0% 50%)",
            }}
          >
            <span className="text-yellow-300 text-sm font-bold">★</span>
          </div>
          <span
            className="heading-font text-lg font-black tracking-wider"
            style={{ color: "#F0EDE0" }}
          >
            CỜ TUYỂN
          </span>
        </Link>

        {/* Bottom caption */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(218,0,0,0.2)",
              border: "1px solid rgba(218,0,0,0.4)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#FF3030" }}
            />
            <span
              className="heading-font font-semibold tracking-widest text-xs uppercase"
              style={{ color: "#FF5555" }}
            >
              ⚔ 12,547 CHIẾN SĨ ĐANG TRỰC TUYẾN
            </span>
          </div>

          <div
            className="display-font font-black mb-1"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE0" }}
          >
            CỜ TUYỂN
          </div>
          <p
            className="heading-font font-medium italic text-sm"
            style={{ color: "rgba(240,237,224,0.55)" }}
          >
            &quot;Chiến đấu vì những người bạn yêu thương&quot;
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL: Form ── */}
      <div
        className="w-full lg:w-1/2 flex flex-col relative"
        style={{ background: "#0E0606" }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-8 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Mobile logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{
                background: "#DA0000",
                clipPath: "polygon(10% 0%, 100% 0%, 90% 50%, 100% 100%, 10% 100%, 0% 50%)",
              }}
            >
              <span className="text-yellow-300 text-xs font-bold">★</span>
            </div>
            <span
              className="heading-font font-black tracking-wider"
              style={{ color: "#F0EDE0" }}
            >
              CỜ TUYỂN
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm heading-font font-medium tracking-wide transition-colors"
            style={{ color: "rgba(240,237,224,0.45)" }}
          >
            ← Quay về trang chủ
          </Link>

          <a
            href="#"
            className="text-sm heading-font font-semibold tracking-wide transition-colors"
            style={{ color: "rgba(240,237,224,0.45)" }}
          >
            TRỢ GIÚP
          </a>
        </div>

        {/* Form body */}
        <div className="flex-1 flex items-center justify-center px-8 py-10">
          <div className="w-full max-w-md">

            {/* Tab toggle */}
            <div
              className="flex rounded-lg mb-8 p-1 gap-1"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {(["login", "register"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 py-2.5 text-sm heading-font font-bold tracking-widest rounded transition-all"
                  style={
                    tab === t
                      ? {
                          background: "#DA0000",
                          color: "#fff",
                          boxShadow: "0 0 15px rgba(218,0,0,0.3)",
                        }
                      : {
                          color: "rgba(240,237,224,0.35)",
                          background: "transparent",
                        }
                  }
                >
                  {t === "login" ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {tab === "register" && (
                <div>
                  <label
                    className="block text-xs heading-font font-semibold tracking-widest uppercase mb-1.5"
                    style={{ color: "rgba(240,237,224,0.5)" }}
                  >
                    TÊN CHIẾN SĨ
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn Hùng"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F0EDE0",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(218,0,0,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(218,0,0,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              )}

              <div>
                <label
                  className="block text-xs heading-font font-semibold tracking-widest uppercase mb-1.5"
                  style={{ color: "rgba(240,237,224,0.5)" }}
                >
                  EMAIL TRUY CẬP
                </label>
                <div className="relative">
                  <span
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "rgba(240,237,224,0.3)" }}
                  >
                    ✉
                  </span>
                  <input
                    type="email"
                    placeholder="TenTruyCap@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-sm transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F0EDE0",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(218,0,0,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(218,0,0,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs heading-font font-semibold tracking-widest uppercase mb-1.5"
                  style={{ color: "rgba(240,237,224,0.5)" }}
                >
                  MẬT MÃ QUÂN SỰ
                </label>
                <div className="relative">
                  <span
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "rgba(240,237,224,0.3)" }}
                  >
                    🔒
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-lg text-sm transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F0EDE0",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(218,0,0,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(218,0,0,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: "rgba(240,237,224,0.3)" }}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {tab === "register" && (
                <div>
                  <label
                    className="block text-xs heading-font font-semibold tracking-widest uppercase mb-1.5"
                    style={{ color: "rgba(240,237,224,0.5)" }}
                  >
                    XÁC NHẬN MẬT MÃ
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: "rgba(240,237,224,0.3)" }}
                    >
                      🔒
                    </span>
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-lg text-sm transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0EDE0",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(218,0,0,0.5)";
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(218,0,0,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                      style={{ color: "rgba(240,237,224,0.3)" }}
                    >
                      {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Remember / Forgot */}
              {tab === "login" && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer" style={{ color: "rgba(240,237,224,0.45)" }}>
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 rounded accent-red-600"
                    />
                    Nhớ đăng nhập
                  </label>
                  <a
                    href="#"
                    className="heading-font font-semibold transition-colors"
                    style={{ color: "#DA0000" }}
                  >
                    Quên mật mã?
                  </a>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 heading-font font-black tracking-widest text-sm text-white transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2 mt-2"
                style={{
                  background: "linear-gradient(135deg, #CC0000 0%, #FF2020 100%)",
                  boxShadow: "0 0 30px rgba(218,0,0,0.4), 0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {tab === "login" ? "ĐĂNG NHẬP NGAY" : "GIA NHẬP HÀNG NGŨ"} ⚔
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span className="text-xs heading-font" style={{ color: "rgba(240,237,224,0.25)" }}>
                ─── HOẶC ───
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Google", icon: "G" },
                { label: "Apple", icon: "" },
                { label: "Facebook", icon: "f" },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  className="py-3 rounded-lg font-bold text-sm transition-all hover:opacity-80"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(240,237,224,0.7)",
                  }}
                >
                  {icon || label}
                </button>
              ))}
            </div>

            {/* Sign up toggle */}
            <p
              className="text-center text-xs mt-6"
              style={{ color: "rgba(240,237,224,0.3)" }}
            >
              {tab === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
              <button
                onClick={() => setTab(tab === "login" ? "register" : "login")}
                className="font-semibold heading-font transition-colors"
                style={{ color: "#DA0000" }}
              >
                {tab === "login" ? "Đăng ký ngay" : "Đăng nhập"}
              </button>
            </p>

            <p
              className="text-center text-xs mt-3"
              style={{ color: "rgba(240,237,224,0.2)" }}
            >
              Bằng cách đăng nhập, bạn đồng ý với{" "}
              <a href="#" style={{ color: "rgba(218,0,0,0.6)" }}>
                Điều khoản dịch vụ
              </a>{" "}
              của Cờ Tuyến Studio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
