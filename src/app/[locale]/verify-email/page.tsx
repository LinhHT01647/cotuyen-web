"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, XCircle, Loader2, Shield } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

type Status = "loading" | "success" | "error";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("loading");
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setErrorMsg("Không tìm thấy mã xác nhận trong đường dẫn.");
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`, {
          headers: {
            "Accept-Language": locale
          }
        });
        const text = await res.text();
        let data: any = {};
        try {
          if (text) data = JSON.parse(text);
        } catch (_) {}

        if (res.ok) {
          if (data.username) {
            setUsername(data.username);
            localStorage.setItem("username", data.username);
          }
          setStatus("success");
          setTimeout(() => router.push("/dang-nhap"), 5000);
        } else {
          setStatus("error");
          setErrorMsg(data.message || `Xác minh thất bại (HTTP ${res.status})`);
        }
      } catch (err: any) {
        setStatus("error");
        setErrorMsg("Không kết nối được máy chủ. Vui lòng thử lại.");
      }
    };

    verify();
  }, [searchParams, router]);

  return (
    <div
      className="w-full max-w-md rounded-xl p-10 flex flex-col items-center text-center relative overflow-hidden"
      style={{
        background: "rgba(10,4,4,0.8)",
        border: "1px solid rgba(218,0,0,0.25)",
        boxShadow: "0 0 60px rgba(0,0,0,0.8)",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-24 bg-red-600/10 blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-red-600/30 to-transparent" />

      {/* Loading state */}
      {status === "loading" && (
        <>
          <Loader2 size={60} className="text-[#DA0000] animate-spin mb-6" />
          <h1 className="heading-font text-2xl font-black text-white tracking-widest mb-3">
            ĐANG XÁC MINH...
          </h1>
          <p className="text-gray-500 text-sm">
            Hệ thống đang kiểm tra mã xác nhận của bạn. Vui lòng chờ trong giây lát.
          </p>
        </>
      )}

      {/* Success state */}
      {status === "success" && (
        <>
          <div
            className="w-24 h-24 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center mb-8"
            style={{ boxShadow: "0 0 30px rgba(34,197,94,0.15)" }}
          >
            <CheckCircle2 size={52} className="text-green-500" />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield size={16} className="text-[#DA0000]" />
              <span className="text-xs text-[#DA0000] heading-font font-bold tracking-widest uppercase">
                EMAIL ĐÃ XÁC MINH
              </span>
            </div>
            <h1 className="heading-font text-3xl font-black text-white tracking-widest mb-3">
              CHÀO MỪNG GIA NHẬP!
            </h1>
            {username && (
              <p className="text-[#DA0000] heading-font font-bold text-lg tracking-widest mb-2">
                {username.toUpperCase()}
              </p>
            )}
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Tài khoản của bạn đã được kích hoạt thành công và sẵn sàng tham chiến.{" "}
              <br />
              Đang chuyển đến trang đăng nhập trong{" "}
              <strong className="text-white">5 giây</strong>...
            </p>
          </div>

          <div className="w-full my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-600 text-xs heading-font tracking-widest">⚔</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-3 w-full gap-3 mb-8">
            {[
              { label: "TRẬN ĐẤU", val: "Sẵn sàng" },
              { label: "CỘNG ĐỒNG", val: "Mở khóa" },
              { label: "CẤP BẬC", val: "Mới nhập ngũ" },
            ].map((item) => (
              <div key={item.label} className="bg-black/30 rounded p-3 border border-white/5">
                <p className="text-[9px] text-gray-500 heading-font tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-white heading-font font-bold">{item.val}</p>
              </div>
            ))}
          </div>

          <Link
            href="/dang-nhap"
            className="w-full py-3 rounded heading-font font-bold text-sm tracking-widest text-white text-center block transition-all duration-300 hover:opacity-90"
            style={{ background: "#DA0000", boxShadow: "0 0 20px rgba(218,0,0,0.4)" }}
          >
            ĐĂNG NHẬP NGAY ⚔
          </Link>
        </>
      )}

      {/* Error state */}
      {status === "error" && (
        <>
          <div className="w-24 h-24 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center mb-8">
            <XCircle size={52} className="text-red-500" />
          </div>
          <h1 className="heading-font text-2xl font-black text-white tracking-widest mb-3">
            XÁC MINH THẤT BẠI
          </h1>
          <p className="text-gray-400 text-sm mb-2 leading-relaxed">{errorMsg}</p>
          <p className="text-xs text-gray-600 mb-8">
            Link xác nhận có thể đã hết hạn (24 giờ) hoặc đã được sử dụng trước đó.
          </p>
          <Link
            href="/dang-nhap"
            className="w-full py-3 rounded heading-font font-bold text-sm tracking-widest text-white text-center block transition-all duration-300 hover:bg-white/10"
            style={{ border: "1px solid rgba(218,0,0,0.4)" }}
          >
            VỀ TRANG ĐĂNG NHẬP
          </Link>
        </>
      )}
    </div>
  );
}

export default function VerifyEmailPage() {
  const t = useTranslations('Verify');
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(218,0,0,0.08) 0%, #080404 60%)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="mb-12 flex items-center gap-2">
        <span
          className="heading-font text-3xl font-black tracking-widest"
          style={{ color: "#DA0000" }}
        >
          CỜ TUYẾN
        </span>
      </Link>

      <Suspense
        fallback={
          <div className="w-full max-w-md rounded-xl p-10 flex flex-col items-center text-center"
            style={{ background: "rgba(10,4,4,0.8)", border: "1px solid rgba(218,0,0,0.25)" }}
          >
            <Loader2 size={60} className="text-[#DA0000] animate-spin mb-6" />
            <p className="text-gray-500 text-sm">Đang tải trang xác minh...</p>
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>

      <p className="mt-8 text-xs text-gray-700 text-center">
        Cờ Tuyến Studio © 2025 — Mưu Lược. Chiến Thuật. Đỉnh Cao.
      </p>
    </main>
  );
}
