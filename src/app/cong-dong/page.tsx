"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Trophy, MessageCircle, Facebook, Youtube, Clock, Users, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const tournaments = [
  {
    name: "Giải Quốc Gia Mùa Xuân",
    prize: "150,000,000₫",
    players: "512",
    status: "Đang Đăng Ký",
    statusColor: "#22C55E",
    date: "01/04/2025",
  },
  {
    name: "Cúp Anh Hùng Tháng 4",
    prize: "200,000,000₫",
    players: "256",
    status: "Sắp Diễn Ra",
    statusColor: "#F5C518",
    date: "15/04/2025",
  },
  {
    name: "Giải Đấu Quốc Tế Hè",
    prize: "150,000,000₫",
    players: "128",
    status: "Lên Kế Hoạch",
    statusColor: "#9CA3AF",
    date: "01/07/2025",
  },
];

const socials = [
  { icon: MessageCircle, label: "Discord", desc: "Chat & thảo luận", count: "8,500+" },
  { icon: Facebook, label: "Facebook", desc: "Tin tức & cập nhật", count: "25,000+" },
  { icon: Youtube, label: "YouTube", desc: "Video & stream", count: "5,200+" },
];

function Countdown() {
  const [time, setTime] = useState({ days: 14, hours: 6, minutes: 30, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const labels: Record<string, string> = { days: "Ngày", hours: "Giờ", minutes: "Phút", seconds: "Giây" };

  return (
    <div className="flex gap-3 justify-center">
      {Object.entries(time).map(([unit, val]) => (
        <div key={unit} className="text-center">
          <div
            className="rounded-lg w-16 h-16 flex items-center justify-center display-font text-2xl font-bold"
            style={{
              background: "rgba(218,0,0,0.1)",
              border: "1px solid rgba(218,0,0,0.35)",
              color: "#DA0000",
              boxShadow: "0 0 12px rgba(218,0,0,0.2)",
            }}
          >
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1" style={{ color: "#6B7280" }}>{labels[unit]}</div>
        </div>
      ))}
    </div>
  );
}

export default function CongDongPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vietnam.png"
            alt="Giải Đấu"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.95) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(218,0,0,0.1) 0%, transparent 70%)"
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(245,197,24,0.3)",
              background: "rgba(245,197,24,0.08)",
            }}
          >
            <Trophy className="w-4 h-4" style={{ color: "#F5C518" }} />
            <span className="text-xs heading-font font-semibold tracking-widest uppercase" style={{ color: "#F5C518" }}>
              Giải Thưởng Khổng Lồ
            </span>
          </div>

          <h1 className="display-font font-black mb-4" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#F5EDE0",
          }}>
            GIẢI ĐẤU{" "}
            <span style={{
              background: "linear-gradient(135deg, #DA0000, #FF4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              HÀO HÙNG
            </span>
          </h1>

          <p className="text-lg mb-3" style={{ color: "#9CA3AF" }}>
            Tranh tài, khẳng định bản thân và chinh phục giải thưởng lên đến
          </p>

          {/* Prize pool */}
          <div
            className="display-font font-black mb-8 inline-block"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              background: "linear-gradient(135deg, #F5C518 0%, #FFD740 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(245,197,24,0.4))",
            }}
          >
            500,000,000₫
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#6B7280" }}>
              GIẢI ĐẤU TIẾP THEO BẮT ĐẦU TRONG
            </p>
            <Countdown />
          </div>

          <Link
            href="/dang-nhap"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded heading-font font-bold tracking-widest text-sm text-white hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
              boxShadow: "0 0 30px rgba(218,0,0,0.45), 0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            ĐĂNG KÝ THAM CHIẾN
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Tournaments List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Lịch Thi Đấu{" "}
              <span style={{
                background: "linear-gradient(135deg, #DA0000, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Sắp Tới
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {tournaments.map((t) => (
              <div
                key={t.name}
                className="feature-card rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                style={{
                  background: "rgba(18,10,10,0.8)",
                  border: "1px solid rgba(218,0,0,0.18)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(218,0,0,0.1)",
                      border: "1px solid rgba(218,0,0,0.25)",
                    }}
                  >
                    <Trophy className="w-6 h-6" style={{ color: "#DA0000" }} />
                  </div>
                  <div>
                    <h3 className="heading-font text-lg font-bold tracking-wide" style={{ color: "#F5EDE0" }}>
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm" style={{ color: "#9CA3AF" }}>
                      <span className="flex items-center gap-1">
                        <Users size={13} /> {t.players} đội
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {t.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-right">
                    <div className="display-font text-xl font-bold" style={{ color: "#F5C518" }}>{t.prize}</div>
                    <div className="text-xs font-semibold" style={{ color: t.statusColor }}>{t.status}</div>
                  </div>
                  <Link
                    href="/dang-nhap"
                    className="px-5 py-2.5 rounded heading-font font-semibold text-sm transition-all hover:text-white"
                    style={{
                      border: "1px solid rgba(218,0,0,0.4)",
                      color: "#DA0000",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#DA0000";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#DA0000";
                    }}
                  >
                    ĐĂNG KÝ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(18,10,10,0.3)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Tham Gia{" "}
              <span style={{
                background: "linear-gradient(135deg, #DA0000, #FF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Chiến Tuyến
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {socials.map(({ icon: Icon, label, desc, count }) => (
              <a
                key={label}
                href="#"
                className="feature-card rounded-xl p-6 flex items-center gap-4 transition-all"
                style={{
                  background: "rgba(18,10,10,0.8)",
                  border: "1px solid rgba(218,0,0,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(218,0,0,0.1)",
                    border: "1px solid rgba(218,0,0,0.25)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#DA0000" }} />
                </div>
                <div>
                  <div className="heading-font font-bold tracking-wide" style={{ color: "#F5EDE0" }}>{label}</div>
                  <div className="text-sm" style={{ color: "#9CA3AF" }}>{desc}</div>
                  <div className="text-sm font-semibold mt-0.5" style={{ color: "#DA0000" }}>{count} thành viên</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
