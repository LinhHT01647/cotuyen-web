"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  User,
  Shield,
  Trophy,
  Swords,
  Medal,
  Edit3,
  Settings,
  ShieldAlert,
  BadgeInfo,
  Clock,
  Lock,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/dang-nhap");
      return;
    }

    setUsername(localStorage.getItem("username") || "");
    setUserId(localStorage.getItem("userId") || "");
  }, [router]);

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-background text-gray-200">
      <Nav />
      <div className="pt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="flex flex-col mb-8 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 blur-[80px] pointer-events-none rounded-full" />
          <h1 className="text-3xl md:text-5xl font-black heading-font tracking-widest text-[#DA0000] drop-shadow-lg z-10">
            HỒ SƠ CHỈ HUY
          </h1>
          <p className="text-gray-400 mt-2 text-sm z-10 uppercase tracking-widest heading-font">
            THÔNG TIN QUÂN NHÂN VÀ THÀNH TÍCH CHIẾN TRƯỜNG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột 1: ID Card */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div
              className="rounded-lg p-6 relative overflow-hidden"
              style={{
                background: "rgba(10, 4, 4, 0.6)",
                border: "1px solid rgba(218, 0, 0, 0.3)",
                boxShadow: "0 0 40px rgba(0,0,0,0.8)",
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent" />

              <div className="flex flex-col items-center mt-4">
                <div
                  className="w-28 h-28 rounded-full border-[3px] border-[#DA0000] p-1 flex items-center justify-center relative bg-black/50"
                  style={{ boxShadow: "0 0 15px rgba(218,0,0,0.3)" }}
                >
                  <User size={50} className="text-red-500" />
                </div>

                {/* Tên */}
                {username ? (
                  <h2 className="mt-6 text-2xl font-black heading-font tracking-widest text-white uppercase text-center">
                    {username}
                  </h2>
                ) : (
                  <div className="mt-6 h-7 w-36 bg-white/5 rounded animate-pulse" />
                )}

                {/* ID */}
                <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-white/5">
                  <BadgeInfo size={14} className="text-gray-400" />
                  {userId ? (
                    <span className="text-xs text-gray-400 font-mono tracking-widest">
                      ID: {userId.substring(0, 8).toUpperCase()}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500 font-mono tracking-widest">
                      ID: ---
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3">
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 rounded heading-font font-bold text-xs tracking-widest text-white transition-all duration-300 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <Edit3 size={16} /> CẬP NHẬT THÔNG TIN
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded heading-font font-bold text-xs tracking-widest text-gray-400 hover:text-white transition-colors">
                  <Settings size={16} /> THIẾT LẬP TÀI KHOẢN
                </button>
              </div>
            </div>

            {/* Bảo mật thẻ */}
            <div className="p-4 rounded border border-white/5 bg-black/30 flex items-start gap-3">
              <ShieldAlert className="text-red-500 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="heading-font text-xs font-bold text-gray-300 tracking-wider">
                  XÁC MINH CẤP CAO
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Tài khoản của bạn đã được mã hoá và bảo vệ bởi hệ thống
                  chiến lược.
                </p>
              </div>
            </div>
          </div>

          {/* Cột 2 + 3: Rank & Stats */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Banner Rank — Chưa có dữ liệu */}
            <div
              className="rounded-lg p-6 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(218,0,0,0.05) 0%, rgba(0,0,0,0.6) 100%)",
                border: "1px solid rgba(218, 0, 0, 0.2)",
              }}
            >
              <div className="w-20 h-20 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Shield size={36} className="text-gray-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-gray-500 heading-font font-bold tracking-widest uppercase mb-2">
                  Cấp bậc hiện tại
                </p>
                <p className="text-gray-500 heading-font font-black tracking-widest text-xl">
                  CHƯA XẾP HẠNG
                </p>
                <p className="text-xs text-gray-600 mt-3">
                  Dữ liệu cấp bậc sẽ được cập nhật sau khi tham gia trận đầu tiên.
                </p>
              </div>
            </div>

            {/* Stats Grid — Empty states */}
            <h3 className="heading-font font-bold text-lg text-white tracking-widest border-b border-white/10 pb-2">
              CHỈ SỐ TỔNG QUAN
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Trophy, label: "Trận Thắng", color: "text-gray-600" },
                { icon: Swords, label: "Trận Đã Chơi", color: "text-gray-600" },
                { icon: Medal, label: "Tỉ Lệ Thắng", color: "text-gray-600" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="bg-black/20 border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center text-center gap-3"
                >
                  <Icon size={28} className={color} />
                  <div className="flex flex-col items-center gap-1">
                    <Lock size={14} className="text-gray-600" />
                    <span className="text-[10px] text-gray-600 heading-font font-bold uppercase tracking-widest">
                      {label}
                    </span>
                    <span className="text-[10px] text-gray-700">Chưa có dữ liệu</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Match History — Empty State */}
            <div className="mt-4">
              <h3 className="heading-font font-bold text-lg text-white tracking-widest border-b border-white/10 pb-2">
                LỊCH SỬ CHIẾN DỊCH GẦN NHẤT
              </h3>

              <div
                className="mt-6 flex flex-col items-center justify-center gap-4 py-16 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px dashed rgba(255,255,255,0.08)",
                }}
              >
                <Clock size={40} className="text-gray-700" />
                <div className="text-center">
                  <p className="heading-font font-bold text-gray-500 tracking-widest text-sm uppercase">
                    Chưa có lịch sử trận đấu
                  </p>
                  <p className="text-xs text-gray-700 mt-2 max-w-xs">
                    Các chiến dịch của bạn sẽ xuất hiện ở đây sau khi kết nối với hệ thống trận đấu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
