"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay chút để UI render mượt mà
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  const declineCookies = () => {
    // Tuỳ chọn logic từ chối (Vẫn có thể ẩn đi)
    localStorage.setItem("cookie-consent", "false");
    setShow(false);
  };

  if (!hasMounted || !show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-500 ease-out translate-y-0"
      aria-label="Cookie consent banner"
    >
      <div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 rounded-lg shadow-2xl relative overflow-hidden"
        style={{ 
          background: "rgba(10, 4, 4, 0.95)",
          border: "1px solid rgba(218, 0, 0, 0.4)",
          backdropFilter: "blur(10px)"
        }}
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-red-600/10 blur-[50px] pointer-events-none" />

        <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0 relative z-10 w-full md:w-auto">
          <div className="hidden sm:flex bg-red-900/30 p-2 rounded-full border border-red-500/20">
            <Cookie className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="heading-font font-bold text-sm text-gray-100 tracking-wide flex items-center gap-2">
              <span className="sm:hidden text-red-500"><Cookie className="w-4 h-4" /></span>
              CHÍNH SÁCH QUYỀN RIÊNG TƯ
            </h3>
            <p className="text-xs text-gray-400 mt-1 max-w-2xl leading-relaxed">
              Cờ Tuyến Studio sử dụng cookies để nâng cấp trải nghiệm người dùng, 
              phân tích lưu lượng truy cập và tối ưu hoá hệ thống máy chủ. Bằng cách 
              nhấn "Chấp nhận", bạn đồng ý với{" "}
              <a href="#" className="text-red-500 hover:text-red-400 underline transition-colors">
                Chính sách Cookie
              </a>{" "}
              của chúng tôi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0 relative z-10">
          <button
            onClick={declineCookies}
            className="flex-1 md:flex-none px-4 py-2 text-xs heading-font font-bold tracking-widest text-gray-300 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 rounded"
          >
            TỪ CHỐI
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-5 py-2 text-xs heading-font font-bold tracking-widest text-white rounded transition-all duration-300"
            style={{
              background: "#DA0000",
              boxShadow: "0 0 15px rgba(218,0,0,0.4)",
            }}
          >
            CHẤP NHẬN
          </button>
          
          <button 
            onClick={declineCookies}
            className="absolute -top-10 -right-2 md:static md:top-auto md:right-auto text-gray-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
