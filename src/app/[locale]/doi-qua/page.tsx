"use client";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function DoiQuaPage() {
  const t = useTranslations('DoiQua');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [userId, setUserId] = useState("");
  const [giftcode, setGiftcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const uid = localStorage.getItem("userId") || "";
    if (!token) {
      router.replace("/dang-nhap");
    } else {
      setIsLoggedIn(true);
      setUserId(uid);
    }
  }, [router]);

  const handleRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!giftcode.trim()) {
      setMessage({ type: "error", text: t('err_missing') });
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch("/api/giftcode/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code: giftcode.trim(), userId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || data.error || t('err_fail'));
      }
      setMessage({ type: "success", text: data.message || t('success') });
      setGiftcode("");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  // Show nothing while checking auth (prevents flash)
  if (isLoggedIn === null) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0A0404" }}>
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🎁</div>
            <h1
              className="display-font font-black mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#F0EDE0" }}
            >
              {t('title1')} <span style={{ color: "#FFDD00" }}>{t('title2')}</span>
            </h1>
            <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(240,237,224,0.5)" }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleRedeem}
            className="rounded-xl p-8"
            style={{
              background: "rgba(18,8,8,0.95)",
              border: "1px solid rgba(255,221,0,0.2)",
              boxShadow: "0 0 40px rgba(255,221,0,0.05)",
            }}
          >
            {/* Message */}
            {message && (
              <div
                className={`p-4 rounded-lg mb-6 text-sm text-center heading-font font-semibold tracking-wide ${
                  message.type === "success"
                    ? "bg-green-500/10 border border-green-500/40 text-green-400"
                    : "bg-red-500/10 border border-red-500/40 text-red-400"
                }`}
              >
                {message.type === "success" ? "✅ " : "❌ "}
                {message.text}
              </div>
            )}

            <div className="mb-4">
              <label
                className="block text-xs heading-font font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(240,237,224,0.5)" }}
              >
                {t('label')}
              </label>
              <input
                type="text"
                value={giftcode}
                onChange={(e) => setGiftcode(e.target.value.toUpperCase())}
                placeholder={t('placeholder')}
                className="w-full px-5 py-4 text-sm heading-font tracking-widest outline-none rounded-sm transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,221,0,0.3)",
                  color: "#F0EDE0",
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,221,0,0.7)";
                  e.currentTarget.style.boxShadow = "0 0 0 2px rgba(255,221,0,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,221,0,0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 heading-font font-black text-sm tracking-widest transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
              style={
                !loading
                  ? {
                      background: "linear-gradient(135deg, #FFAA00 0%, #FFDD00 100%)",
                      color: "#0A0404",
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      boxShadow: "0 0 25px rgba(255,221,0,0.4)",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(240,237,224,0.4)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }
              }
            >
              {loading ? t('processing') : t('cta')}
            </button>

            <p
              className="text-center text-xs mt-5 heading-font tracking-widest"
              style={{ color: "rgba(240,237,224,0.25)" }}
            >
              {t('note')}
            </p>
          </form>

          {/* Info boxes */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: "🪙", label: t('opt1') },
              { icon: "⚔️", label: t('opt2') },
              { icon: "🎖️", label: t('opt3') },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="text-center py-4 px-2 rounded-lg"
                style={{
                  background: "rgba(255,221,0,0.05)",
                  border: "1px solid rgba(255,221,0,0.15)",
                }}
              >
                <div className="text-2xl mb-1">{icon}</div>
                <div
                  className="text-xs heading-font font-bold tracking-wider"
                  style={{ color: "rgba(240,237,224,0.5)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
