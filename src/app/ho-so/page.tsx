"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { User, Shield, Trophy, Swords, Medal, Edit3, Settings, ShieldAlert, BadgeInfo } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [username, setUsername] = useState("Đang tải...");
  const [userId, setUserId] = useState("---");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/dang-nhap");
      return;
    }
    
    setUsername(localStorage.getItem("username") || "CHỈ HUY KHUYẾT DANH");
    setUserId(localStorage.getItem("userId") || "US-000000");
  }, [router]);

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-background text-gray-200">
      <Nav />
      {/* Spacer cho Fixed Nav */}
      <div className="pt-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col mb-8 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 blur-[80px] pointer-events-none rounded-full" />
          <h1 className="text-3xl md:text-5xl font-black heading-font tracking-widest text-[#DA0000] drop-shadow-lg z-10">
            HỒ SƠ CHỈ HUY
          </h1>
          <p className="text-gray-400 mt-2 text-sm z-10 uppercase tracking-widest heading-font">
            TRẠNG THÁI QUÂN NHÂN VÀ THÀNH TÍCH CHIẾN TRƯỜNG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột 1: Thông tin cá nhân (ID Card) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div 
              className="rounded-lg p-6 relative overflow-hidden backdrop-blur-xl"
              style={{
                background: "rgba(10, 4, 4, 0.6)",
                border: "1px solid rgba(218, 0, 0, 0.3)",
                boxShadow: "0 0 40px rgba(0,0,0,0.8)"
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[50px] pointer-events-none" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent" />
              
              <div className="flex flex-col items-center mt-4">
                <div className="w-28 h-28 rounded-full border-[3px] border-[#DA0000] p-1 flex items-center justify-center relative bg-black/50 shadow-[0_0_15px_rgba(218,0,0,0.3)]">
                  <div className="absolute inset-0 rounded-full border border-red-500/20 m-2" />
                  <User size={50} className="text-red-500" />
                </div>
                
                <h2 className="mt-6 text-2xl font-black heading-font tracking-widest text-white uppercase text-center">
                  {username}
                </h2>
                
                <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-white/5">
                  <BadgeInfo size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-mono tracking-widest">ID: {userId.substring(0,8).toUpperCase() || "UNKNOWN"}</span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded heading-font font-bold text-xs tracking-widest text-white transition-all duration-300 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
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
                <h4 className="heading-font text-xs font-bold text-gray-300 tracking-wider">XÁC MINH CẤP CAO</h4>
                <p className="text-xs text-gray-500 mt-1">Tài khoản của bạn đã được mã hoá và bảo vệ 2 lớp bởi tổng chỉ huy chiến lược.</p>
              </div>
            </div>
          </div>

          {/* Cột 2 + 3: Thống kê & Nhiệm vụ */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Banner Rank */}
            <div 
              className="rounded-lg p-6 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6"
              style={{
                background: "linear-gradient(135deg, rgba(218,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
                border: "1px solid rgba(218, 0, 0, 0.4)",
              }}
            >
              <div className="w-20 h-20 rounded bg-red-900/40 border border-red-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(218,0,0,0.2)]">
                <Shield size={40} className="text-[#DA0000]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-gray-400 heading-font font-bold tracking-widest uppercase mb-1">Cấp bậc hiện tại</p>
                <h3 className="text-3xl heading-font font-black text-white tracking-widest mb-2">ĐẠI UÝ TIỀN TUYẾN</h3>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                  <div className="bg-[#DA0000] h-1.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">4.500 / 10.000 XP tới Thiếu Tá</p>
              </div>
            </div>

            {/* Stats Grid */}
            <h3 className="heading-font font-bold text-lg text-white tracking-widest border-b border-white/10 pb-2 mt-4">CHỈ SỐ TỔNG QUAN</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center text-center">
                <Trophy size={28} className="text-yellow-500 mb-3" />
                <span className="text-3xl heading-font font-black text-white">142</span>
                <span className="text-[10px] text-gray-400 heading-font font-bold uppercase tracking-widest mt-1">Trận Thắng</span>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center text-center">
                <Swords size={28} className="text-gray-300 mb-3" />
                <span className="text-3xl heading-font font-black text-white">256</span>
                <span className="text-[10px] text-gray-400 heading-font font-bold uppercase tracking-widest mt-1">Trận Đã Chơi</span>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                <Medal size={28} className="text-red-500 mb-3" />
                <span className="text-3xl heading-font font-black text-[#DA0000]">55.4%</span>
                <span className="text-[10px] text-gray-400 heading-font font-bold uppercase tracking-widest mt-1">Tỉ Lệ Thắng</span>
              </div>
            </div>

            {/* Recent Match History Placeholder */}
            <div className="mt-4">
              <h3 className="heading-font font-bold text-lg text-white tracking-widest border-b border-white/10 pb-2">LỊCH SỬ CHIẾN DỊCH GẦN NHẤT</h3>
              <div className="mt-4 flex flex-col gap-3">
                {[
                  { id: 1, result: "THẮNG", mode: "Xếp hạng 1v1", time: "2 giờ trước", score: "+25 XP", color: "text-green-500" },
                  { id: 2, result: "THUA", mode: "Chiến dịch Cốt truyện", time: "Hôm qua", score: "-12 XP", color: "text-red-500" },
                  { id: 3, result: "THẮNG", mode: "Tử chiến 4v4", time: "Hôm qua", score: "+40 XP", color: "text-green-500" },
                ].map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded transition-colors hover:bg-black/40">
                    <div>
                      <span className={`text-xs heading-font font-black tracking-widest ${match.color}`}>{match.result}</span>
                      <p className="text-sm font-medium text-gray-300 mt-1">{match.mode}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-white">{match.score}</span>
                      <p className="text-xs text-gray-500 mt-1">{match.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 text-xs heading-font font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                XEM TOÀN BỘ BÁO CÁO CHIẾN TRƯỜNG &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
