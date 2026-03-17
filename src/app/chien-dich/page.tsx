import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Shield, Swords, Users, Globe, ChevronRight, Star } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Chiến Thuật Độc Đáo",
    desc: "Hệ thống quân cờ lấy cảm hứng từ lịch sử quân sự Việt Nam. Mỗi quân có kỹ năng và vai trò riêng biệt.",
    tag: "GAMEPLAY",
  },
  {
    icon: Shield,
    title: "Phòng Thủ Kiên Cố",
    desc: "Xây dựng phòng tuyến vững chắc, lập kế hoạch phòng thủ và phản công thần tốc.",
    tag: "STRATEGY",
  },
  {
    icon: Users,
    title: "Đồng Đội Oai Hùng",
    desc: "Kết hợp đội hình, phối hợp chiến thuật với đồng đội. Sức mạnh đến từ đoàn kết.",
    tag: "TEAMPLAY",
  },
  {
    icon: Globe,
    title: "Cộng Đồng Toàn Cầu",
    desc: "Đại diện Việt Nam trên đấu trường quốc tế. Mang tinh thần anh hùng dân tộc chinh phục thế giới.",
    tag: "GLOBAL",
  },
];

const milestones = [
  { year: "2023", event: "Thành Lập Dự Án" },
  { year: "2024", event: "Beta Testing & Cộng Đồng 10k+" },
  { year: "2025", event: "Giải Đấu Quốc Tế Đầu Tiên" },
];

export default function ChienDichPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* Hero Banner */}
      <section className="relative h-80 sm:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vietnam.png"
            alt="Cờ Tuyến"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, rgba(10,10,15,1) 0%, rgba(10,10,15,0.5) 60%, rgba(10,10,15,0.2) 100%)"
          }} />
          {/* Red glow */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(218,0,0,0.1) 0%, transparent 70%)"
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🇻🇳</span>
            <span
              className="heading-font font-semibold tracking-widest text-xs uppercase"
              style={{ color: "#DA0000" }}
            >
              KHÁM PHÁ
            </span>
          </div>
          <h1 className="display-font text-4xl sm:text-5xl font-bold" style={{ color: "#F5EDE0" }}>
            Tại Sao{" "}
            <span style={{
              background: "linear-gradient(135deg, #DA0000, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Cờ Tuyến?
            </span>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5C518" }} />
                ))}
                <span className="text-sm ml-1" style={{ color: "#6B7280" }}>4.9/5 từ 5,000+ đánh giá</span>
              </div>
              <h2 className="display-font text-3xl font-bold mb-4" style={{ color: "#F5EDE0" }}>
                Game Chiến Thuật Mang{" "}
                <span style={{
                  background: "linear-gradient(135deg, #DA0000, #FF4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Hồn Việt
                </span>
              </h2>
              <p className="leading-relaxed mb-4 text-sm" style={{ color: "#9CA3AF" }}>
                Cờ Tuyến là tựa game chiến thuật độc đáo được xây dựng trên nền tảng lịch sử
                và văn hóa Việt Nam. Mỗi trận đấu là một câu chuyện về lòng dũng cảm và tinh thần bất khuất.
              </p>
              <p className="leading-relaxed mb-6 text-sm" style={{ color: "#9CA3AF" }}>
                Từ bố cục chiến thuật phức tạp đến nghệ thuật phối hợp đội hình, Cờ Tuyến
                mang đến trải nghiệm game độc đáo mà không tựa game nào có thể so sánh.
              </p>
              <Link
                href="/dang-nhap"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded heading-font font-bold text-sm tracking-wide text-white hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
                  boxShadow: "0 0 20px rgba(218,0,0,0.4)",
                }}
              >
                THAM GIA NGAY
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "50,000+", label: "Người Chơi Đăng Ký" },
                { val: "200+", label: "Giải Đấu Đã Tổ Chức" },
                { val: "500M₫", label: "Tổng Giải Thưởng" },
                { val: "98%", label: "Tỷ Lệ Hài Lòng" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: "rgba(18,10,10,0.8)",
                    border: "1px solid rgba(218,0,0,0.2)",
                  }}
                >
                  <div className="display-font text-2xl font-bold mb-1" style={{ color: "#DA0000" }}>{val}</div>
                  <div className="text-xs leading-snug" style={{ color: "#9CA3AF" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(18,10,10,0.4)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Điều Tạo Nên{" "}
              <span style={{
                background: "linear-gradient(135deg, #DA0000, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Khác Biệt
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc, tag }) => (
              <div
                key={title}
                className="rounded-xl p-6 feature-card transition-all duration-300"
                style={{
                  background: "rgba(18,10,10,0.8)",
                  border: "1px solid rgba(218,0,0,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(218,0,0,0.12)",
                      border: "1px solid rgba(218,0,0,0.25)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#DA0000" }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] heading-font font-bold tracking-widest uppercase block mb-1"
                      style={{ color: "rgba(218,0,0,0.6)" }}
                    >
                      {tag}
                    </span>
                    <h3 className="heading-font text-lg font-bold mb-1.5 tracking-wide" style={{ color: "#F5EDE0" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Hành Trình{" "}
              <span style={{
                background: "linear-gradient(135deg, #DA0000, #FF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Phát Triển
              </span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: "rgba(218,0,0,0.25)" }} />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 pl-10 relative">
                  <div
                    className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(218,0,0,0.15)",
                      border: "2px solid #DA0000",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#DA0000" }} />
                  </div>
                  <div>
                    <div className="heading-font font-bold text-lg" style={{ color: "#DA0000" }}>{year}</div>
                    <div className="font-medium" style={{ color: "#F5EDE0" }}>{event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
