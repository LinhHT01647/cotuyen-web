import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-soldier.png"
            alt="Chiến sĩ Điện Biên Phủ"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Cinematic overlay — dark from left, lighter on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(5,2,2,0.97) 0%, rgba(5,2,2,0.82) 45%, rgba(5,2,2,0.3) 75%, rgba(5,2,2,0.05) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,2,2,1) 0%, transparent 30%)",
            }}
          />
          {/* Subtle warm red bloom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 75% 50%, rgba(180,30,0,0.18) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 w-full flex flex-col items-center text-center">
          
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(218,0,0,0.18)",
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

          {/* Giant hero text — 3 stacked lines */}
          <div className="mb-8 w-full">
            <h1 className="display-font font-black leading-tight tracking-tight mt-4">
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  color: "#F0EDE0",
                  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                }}
              >
                MƯU LƯỢC
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  color: "#DA0000",
                  textShadow: "0 0 60px rgba(218,0,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                }}
              >
                CHIẾN THUẬT
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  color: "#F0EDE0",
                  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                }}
              >
                ĐỈNH CAO
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,237,224,0.6)" }}
          >
            Hào khí Đông A - Tái hiện những trận đánh oanh liệt trong lịch sử dân tộc.
            Gia nhập ngay hàng ngũ chiến sĩ và lập nên trang sử vàng của đại Việt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/dang-nhap"
              className="group inline-flex items-center gap-2.5 px-8 py-4 heading-font font-black tracking-widest text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #CC0000 0%, #FF2020 100%)",
                boxShadow: "0 0 35px rgba(218,0,0,0.6), 0 6px 25px rgba(0,0,0,0.4)",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              ↓ TẢI VỀ MIỄN PHÍ
            </Link>
            <Link
              href="/chien-dich"
              className="inline-flex items-center gap-2.5 px-8 py-4 heading-font font-bold text-sm tracking-wide transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(240,237,224,0.25)",
                color: "rgba(240,237,224,0.8)",
                background: "rgba(240,237,224,0.04)",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              ▶ XEM TRAILER
            </Link>
          </div>

          {/* Platform badges */}
          <div className="flex items-center gap-6">
            {["WINDOWS", "MACOS", "MOBILE"].map((p) => (
              <span
                key={p}
                className="text-xs heading-font font-medium tracking-widest"
                style={{ color: "rgba(240,237,224,0.3)" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Soldier row silhouette at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0A0404 0%, transparent 100%)",
          }}
        />
      </section>



      {/* ── FEATURES — "TẠI SAO CỜ TUYỂN?" ── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16" style={{ background: "#0A0404" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-3">
              <span style={{ color: "#DA0000", fontSize: "1.2rem" }}>⚔</span>
            </div>
            <h2
              className="display-font font-black mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F0EDE0" }}
            >
              TẠI SAO{" "}
              <span style={{ color: "#DA0000" }}>CỜ TUYỂN?</span>
            </h2>
            <p
              className="max-w-md mx-auto text-sm leading-relaxed"
              style={{ color: "rgba(240,237,224,0.45)" }}
            >
              Trải nghiệm đỉnh cao chiến thuật quân sự hiện đại trên bàn cờ. Nơi tư duy và bản lĩnh quyết định chiến thắng.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: "🗺",
                tag: "",
                title: "CHIẾN LƯỢC SÂU",
                desc: "Hệ thống đơn vị quân sự đa dạng với hàng ngàn cách phối hợp đội hình đỉnh cao.",
              },
              {
                icon: "🌫",
                tag: "NEW",
                title: "SƯƠNG MÙ CHIẾN TRANH",
                desc: "Thách thức tầm nhìn chiến thuật, buộc người chơi phải phán đoán và trỉnh sát kỹ lưỡng.",
              },
              {
                icon: "🏆",
                tag: "+ LIVE",
                title: "ESPORTS CẠNH TRANH",
                desc: "Đấu trường xếp hạng rực rỡ với hệ thống giải đấu chuyên nghiệp và phần thưởng giá trị.",
              },
            ].map(({ icon, tag, title, desc }) => (
              <div
                key={title}
                className="relative rounded-xl p-6 feature-card"
                style={{
                  background: "rgba(18,8,8,0.9)",
                  border: "1px solid rgba(218,0,0,0.15)",
                }}
              >
                {tag && (
                  <span
                    className="absolute top-4 right-4 px-2 py-0.5 text-[10px] heading-font font-bold rounded"
                    style={{
                      background: tag === "NEW" ? "#DA0000" : "rgba(218,0,0,0.2)",
                      color: "#fff",
                    }}
                  >
                    {tag}
                  </span>
                )}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-2xl"
                  style={{
                    background: "rgba(218,0,0,0.1)",
                    border: "1px solid rgba(218,0,0,0.2)",
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="heading-font font-black text-base tracking-wide mb-2"
                  style={{ color: "#F0EDE0" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.45)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tab bar — BÀN CỜ / XẾP HẠNG / GIẢI ĐẤU / KHO ĐỒ */}
          <div className="flex gap-1 mb-8 overflow-x-auto">
            {["BÀN CỜ", "XẾP HẠNG", "GIẢI ĐẤU", "KHO ĐỒ"].map((tab, i) => (
              <button
                key={tab}
                className="flex-shrink-0 px-6 py-2.5 heading-font font-bold text-sm tracking-wider transition-all"
                style={
                  i === 0
                    ? {
                        borderBottom: "2px solid #DA0000",
                        color: "#DA0000",
                        background: "transparent",
                      }
                    : {
                        borderBottom: "2px solid transparent",
                        color: "rgba(240,237,224,0.35)",
                        background: "transparent",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Placeholder cho video player */}
          <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden relative mb-14" style={{ border: "1px solid rgba(218,0,0,0.1)", aspectRatio: "16/9" }}>
            <div className="absolute inset-0 z-0">
               <Image
                  src="/images/hero-vietnam.png"
                  alt="Gameplay Trailer"
                  fill
                  className="object-cover opacity-60 filter grayscale-[20%]"
                />
                <div className="absolute inset-0" style={{ background: "rgba(10,4,4,0.5)" }} />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <button className="w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105" style={{ background: "#DA0000", boxShadow: "0 0 30px rgba(218,0,0,0.6)" }}>
                 <span className="text-white text-3xl ml-1">▶</span>
               </button>
            </div>
            {/* Progress bar mock */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
               <div className="flex items-center gap-4">
                 <span className="text-xs font-mono" style={{ color: "rgba(240,237,224,0.8)" }}>01:24</span>
                 <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DA0000] w-[35%]" />
                 </div>
                 <span className="text-xs font-mono" style={{ color: "rgba(240,237,224,0.8)" }}>03:45</span>
               </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/chien-dich"
              className="inline-flex items-center gap-2 px-8 py-3.5 heading-font font-black text-sm tracking-widest text-white hover:opacity-90 transition-opacity rounded-sm"
              style={{
                background: "#DA0000",
                boxShadow: "0 0 25px rgba(218,0,0,0.4)",
              }}
            >
              XEM TRAILER ĐẦY ĐỦ 🔥
            </Link>
          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        className="py-12 px-6"
        style={{
          background: "linear-gradient(180deg, #0A0404 0%, #100808 100%)",
          borderTop: "1px solid rgba(218,0,0,0.1)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-12">
          {[
            { val: "5M+", label: "NGƯỜI CHƠI" },
            { val: "120+", label: "QUỐC GIA" },
            { val: "24/7", label: "GIẢI ĐẤU MỞ" },
            { val: "98%", label: "ĐÁNH GIÁ TỐT" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center sm:text-left">
              <div
                className="display-font text-3xl sm:text-4xl font-black italic"
                style={{ color: "#F5C518", textShadow: "2px 2px 0px rgba(218,0,0,0.3)" }}
              >
                {val}
              </div>
              <div
                className="heading-font text-xs tracking-[0.2em] mt-1 font-bold"
                style={{ color: "rgba(240,237,224,0.5)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GIẢI ĐẤU & CỘNG ĐỒNG ── */}
      <section
        className="py-20 px-6 sm:px-10 lg:px-16"
        style={{
          background: "#0A0404",
          borderTop: "1px solid rgba(218,0,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CỘT TRÁI - GIẢI ĐẤU */}
          <div
            className="rounded-xl p-10 flex flex-col justify-center items-center text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(218,0,0,0.1) 0%, rgba(10,4,4,0.9) 100%)",
              border: "1px solid rgba(218,0,0,0.25)",
              minHeight: "480px"
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(218,0,0,0.15) 0%, transparent 70%)"
              }}
            />
            
            <p
              className="relative z-10 heading-font font-bold tracking-widest text-xs uppercase mb-3"
              style={{ color: "#DA0000" }}
            >
              SỰ KIỆN LỚN NHẤT NĂM
            </p>
            <h2
              className="relative z-10 display-font font-black mb-8 leading-[1.1]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE0" }}
            >
              GIẢI ĐẤU<br />HÀO HÙNG
            </h2>
            <div
              className="relative z-10 inline-block rounded-xl px-10 py-5 mb-10 w-full max-w-sm"
              style={{
                background: "rgba(10,4,4,0.6)",
                border: "1px solid rgba(218,0,0,0.3)",
              }}
            >
              <p
                className="heading-font font-medium text-xs tracking-widest mb-1"
                style={{ color: "rgba(240,237,224,0.45)" }}
              >
                TỔNG GIÁ TRỊ GIẢI THƯỞNG
              </p>
              <p
                className="display-font font-black"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F5C518",
                  textShadow: "0 0 25px rgba(245,197,24,0.3)",
                }}
              >
                500,000,000đ
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-4 w-full">
              <Link
                href="/cong-dong"
                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 heading-font font-black text-sm tracking-widest text-white hover:scale-105 transition-transform"
                style={{
                  background: "#DA0000",
                  boxShadow: "0 0 25px rgba(218,0,0,0.5)",
                }}
              >
                ▶ XEM TRỰC TIẾP
              </Link>
              <Link
                href="/dang-nhap"
                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 heading-font font-bold text-sm tracking-wide hover:bg-white/5 transition-colors"
                style={{
                  border: "1px solid rgba(240,237,224,0.2)",
                  color: "rgba(240,237,224,0.8)",
                  background: "rgba(10,4,4,0.5)"
                }}
              >
                ĐĂNG KÝ THI ĐẤU
              </Link>
            </div>
          </div>

          {/* CỘT PHẢI - TẢI GAME & CỘNG ĐỒNG */}
          <div className="flex flex-col gap-6">
            
            {/* TẢI GAME */}
            <div
              className="rounded-xl p-8 flex flex-col justify-center flex-1 relative overflow-hidden group"
              style={{
                background: "rgba(18,8,8,0.9)",
                border: "1px solid rgba(218,0,0,0.15)",
              }}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="display-font font-black text-2xl mb-2 text-white">TẢI GAME MIỄN PHÍ</h3>
                  <p className="text-sm text-white/50 mb-6">Sẵn sàng tham chiến trên mọi nền tảng.</p>
                  <div className="flex gap-4">
                    {["WINDOWS", "MACOS", "MOBILE"].map((p) => (
                      <span
                        key={p}
                        className="text-xs heading-font font-bold tracking-widest px-3 py-1 rounded-full"
                        style={{ border: "1px solid rgba(240,237,224,0.15)", color: "rgba(240,237,224,0.6)" }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/dang-nhap"
                  className="inline-flex justify-center items-center px-8 py-4 heading-font font-black text-sm tracking-widest text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #CC0000 0%, #FF2020 100%)",
                    boxShadow: "0 0 25px rgba(218,0,0,0.4)",
                  }}
                >
                  ↓ TẢI VỀ
                </Link>
              </div>
            </div>

            {/* CỘNG ĐỒNG */}
            <div
              className="rounded-xl p-8 flex flex-col justify-center flex-1 relative overflow-hidden group"
              style={{
                background: "rgba(18,8,8,0.9)",
                border: "1px solid rgba(218,0,0,0.15)",
              }}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="display-font font-black text-2xl mb-2 text-white">GIA NHẬP CỘNG ĐỒNG</h3>
                  <p className="text-sm text-white/50 mb-4">Kết nối với hàng triệu kỳ thủ, chia sẻ chiến thuật và nhận quà độc quyền mỗi ngày.</p>
                  <div className="flex gap-4">
                    {["Discord", "Facebook", "X"].map((soc) => (
                      <span key={soc} className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(240,237,224,0.05)", border: "1px solid rgba(240,237,224,0.1)", color: "rgba(240,237,224,0.8)" }}>
                        {soc[0]}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/cong-dong"
                  className="inline-flex justify-center items-center px-8 py-4 heading-font font-bold text-sm tracking-wide hover:bg-white/5 transition-colors whitespace-nowrap"
                  style={{
                    border: "1px solid rgba(240,237,224,0.2)",
                    color: "rgba(240,237,224,0.8)",
                  }}
                >
                  THAM GIA NGAY
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
