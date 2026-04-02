import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import Image from "next/image";

// Colour palette
// #0A0404  – deep black-red background
// #DA0000  – primary red (main accent)
// #FF2020  – bright red (hover/glow lighter)
// #F0EDE0  – off-white cream text
// #FFDD00  – Vietnamese flag yellow (highlights)
// #F5C518  – warm golden yellow (stats, prizes)

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('Index');
  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-soldier.png"
            alt="Người lính chỉ huy"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(5,2,2,0.97) 0%, rgba(5,2,2,0.82) 45%, rgba(5,2,2,0.3) 75%, rgba(5,2,2,0.05) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,2,2,1) 0%, transparent 30%)",
            }}
          />
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
              {t('hero.online')}
            </span>
          </div>

          {/* Giant hero text */}
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
                {t('hero.title1')}
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  color: "#DA0000",
                  textShadow: "0 0 60px rgba(218,0,0,0.6), 0 4px 30px rgba(0,0,0,0.6)",
                }}
              >
                {t('hero.title2')}
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 9rem)",
                  color: "#FFDD00",
                  textShadow: "0 0 40px rgba(255,221,0,0.4), 0 4px 30px rgba(0,0,0,0.6)",
                }}
              >
                {t('hero.title3')}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(240,237,224,0.6)" }}
          >
            {t('hero.subtitle')}
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
              {t('hero.cta1')}
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
              {t('hero.cta2')}
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

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0A0404 0%, transparent 100%)",
          }}
        />
      </section>


      {/* ── TẢI GAME / DOWNLOAD ── */}
      <section
        className="py-16 px-6 sm:px-10 lg:px-16"
        style={{
          background: "linear-gradient(180deg, #0A0404 0%, #0d0505 100%)",
          borderTop: "1px solid rgba(255,221,0,0.12)",
          borderBottom: "1px solid rgba(255,221,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left text */}
            <div className="text-center lg:text-left">
              <p
                className="heading-font font-bold tracking-widest text-xs uppercase mb-2"
                style={{ color: "#FFDD00" }}
              >
                {t('download.tag')}
              </p>
              <h2
                className="display-font font-black mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F0EDE0" }}
              >
                {t('download.title1')} <span style={{ color: "#FFDD00" }}>{t('download.title2')}</span>
              </h2>
              <p className="text-sm max-w-md" style={{ color: "rgba(240,237,224,0.5)" }}>
                {t('download.subtitle')}
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* iOS */}
              <Link
                href="/dang-nhap"
                className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,221,0,0.25)",
                }}
              >
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.5)" }}>TẢI TRÊN</div>
                  <div className="heading-font font-black text-base tracking-wide" style={{ color: "#F0EDE0" }}>App Store</div>
                </div>
              </Link>

              {/* Android */}
              <Link
                href="/dang-nhap"
                className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,221,0,0.25)",
                }}
              >
                <span className="text-3xl">🤖</span>
                <div className="text-left">
                  <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.5)" }}>TẢI TRÊN</div>
                  <div className="heading-font font-black text-base tracking-wide" style={{ color: "#F0EDE0" }}>Google Play</div>
                </div>
              </Link>

              {/* APK */}
              <Link
                href="/dang-nhap"
                className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(218,0,0,0.3)",
                }}
              >
                <span className="text-3xl">📦</span>
                <div className="text-left">
                  <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.5)" }}>TẢI FILE</div>
                  <div className="heading-font font-black text-base tracking-wide" style={{ color: "#F0EDE0" }}>APK Direct</div>
                </div>
              </Link>

              {/* Top-up */}
              <Link
                href="/dang-nhap"
                className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(255,221,0,0.15) 0%, rgba(218,0,0,0.1) 100%)",
                  border: "1px solid rgba(255,221,0,0.4)",
                  boxShadow: "0 0 20px rgba(255,221,0,0.1)",
                }}
              >
                <span className="text-3xl">💰</span>
                <div className="text-left">
                  <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(255,221,0,0.7)" }}>TIẾP NĂNG LƯỢNG</div>
                  <div className="heading-font font-black text-base tracking-wide" style={{ color: "#FFDD00" }}>Nạp Thẻ</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── FEATURES — "TẠI SAO CỜ TUYẾN?" ── */}
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
              {t('features.title1')}{" "}
              <span style={{ color: "#DA0000" }}>{t('features.title2')}</span>
            </h2>
            <p
              className="max-w-md mx-auto text-sm leading-relaxed"
              style={{ color: "rgba(240,237,224,0.45)" }}
            >
              {t('features.subtitle')}
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
                desc: "Thách thức tầm nhìn chiến thuật, buộc người chơi phải phán đoán và trinh sát kỹ lưỡng.",
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

          {/* Tab bar */}
          <div className="flex gap-1 mb-8 overflow-x-auto">
            {(t.raw('features.tabs') as string[]).map((tab, i) => (
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

          {/* Video player placeholder */}
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
                 <span className="text-xs heading-font" style={{ color: "rgba(240,237,224,0.8)" }}>01:24</span>
                 <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DA0000] w-[35%]" />
                 </div>
                 <span className="text-xs heading-font" style={{ color: "rgba(240,237,224,0.8)" }}>03:45</span>
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
              {t('features.cta')}
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
          {(t.raw('stats.items') as {val: string, label: string}[]).map(({ val, label }) => (
            <div key={label} className="text-center sm:text-left">
              <div
                className="display-font text-3xl sm:text-4xl font-black italic"
                style={{ color: "#FFDD00", textShadow: "2px 2px 0px rgba(218,0,0,0.4)" }}
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


      {/* ── SỰ KIỆN ── */}
      <section
        className="py-20 px-6 sm:px-10 lg:px-16"
        style={{
          background: "#050202",
          borderTop: "1px solid rgba(218,0,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px" style={{ background: "#FFDD00" }}></span>
                <span className="heading-font font-bold tracking-widest text-sm uppercase" style={{ color: "#FFDD00" }}>{t('events.tag')}</span>
              </div>
              <h2 className="display-font font-black text-3xl sm:text-4xl" style={{ color: "#F0EDE0" }}>{t('events.title')}</h2>
            </div>
            <div className="flex gap-2">
              {(t.raw('events.tabs') as string[]).map((tab, i) => (
                <button
                  key={tab}
                  className="px-4 py-1.5 heading-font font-bold text-xs tracking-wide rounded-full transition-all"
                  style={
                    i === 0
                      ? { background: "#DA0000", color: "#fff" }
                      : { background: "rgba(240,237,224,0.06)", color: "rgba(240,237,224,0.45)", border: "1px solid rgba(240,237,224,0.1)" }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                tag: "⚔ GIẢI ĐẤU",
                tagColor: "#DA0000",
                title: t('events.mock_title1'),
                prize: t('events.mock_prize1'),
                time: "01/03 – 30/04/2026",
                status: t('events.ongoing'),
              },
              {
                tag: "🎁 SỰ KIỆN",
                tagColor: "#FFDD00",
                title: t('events.mock_title2'),
                prize: t('events.mock_prize2'),
                time: "01/03 – 31/03/2026",
                status: t('events.ongoing'),
              },
              {
                tag: "🏆 RANKING",
                tagColor: "#FF8C00",
                title: t('events.mock_title3'),
                prize: t('events.mock_prize3'),
                time: "01/04 – 30/04/2026",
                status: t('events.upcoming'),
              },
            ].map((ev, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(18,8,8,0.9)",
                  border: `1px solid ${ev.tagColor}30`,
                }}
              >
                <span
                  className="heading-font font-bold text-xs tracking-widest"
                  style={{ color: ev.tagColor }}
                >
                  {ev.tag}
                </span>
                <h3 className="heading-font font-black text-lg leading-tight" style={{ color: "#F0EDE0" }}>
                  {ev.title}
                </h3>
                <div>
                  <p className="text-xs mb-1" style={{ color: "rgba(240,237,224,0.4)" }}>{t('events.reward')}</p>
                  <p className="heading-font font-black text-base" style={{ color: "#FFDD00" }}>{ev.prize}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-xs" style={{ color: "rgba(240,237,224,0.4)" }}>{ev.time}</span>
                  <span
                    className="px-2 py-0.5 heading-font font-bold text-[10px] rounded-full"
                    style={{
                      background: ev.status === t('events.ongoing') ? "rgba(218,0,0,0.2)" : "rgba(255,140,0,0.2)",
                      color: ev.status === t('events.ongoing') ? "#FF5555" : "#FF8C00",
                      border: `1px solid ${ev.status === t('events.ongoing') ? "rgba(218,0,0,0.4)" : "rgba(255,140,0,0.4)"}`,
                    }}
                  >
                    {ev.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/chien-dich"
              className="heading-font font-bold text-sm tracking-widest uppercase flex items-center gap-2 justify-center"
              style={{ color: "#DA0000" }}
            >
              {t('events.view_all')} <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ── TIN TỨC & TÍNH NĂNG ── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16" style={{ background: "#0A0404" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-[#DA0000]"></span>
                <span className="heading-font font-bold text-[#DA0000] tracking-widest text-sm uppercase">{t('news.tag')}</span>
              </div>
              <h2 className="display-font font-black text-3xl sm:text-4xl text-[#F0EDE0]">{t('news.title')}</h2>
            </div>
            <Link href="/cong-dong" className="heading-font font-bold text-sm text-[#DA0000] hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2">
              Xem tất cả <span className="text-xl leading-none">→</span>
            </Link>
          </div>

          {/* News category tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-1">
            {(t.raw('news.tabs') as string[]).map((tab, i) => (
              <button
                key={tab}
                className="flex-shrink-0 px-5 py-2 heading-font font-bold text-xs tracking-wide rounded-full transition-all"
                style={
                  i === 0
                    ? { background: "#DA0000", color: "#fff" }
                    : {
                        background: "rgba(240,237,224,0.05)",
                        color: "rgba(240,237,224,0.5)",
                        border: "1px solid rgba(240,237,224,0.1)",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Featured article + list layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">

            {/* Big featured card */}
            <div className="lg:col-span-3 group cursor-pointer rounded-xl overflow-hidden bg-[#120a0a] border border-[#DA0000]/10 hover:border-[#DA0000]/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image src="/images/news-update.png" fill alt="Chiến Dịch Sinh Tồn" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#DA0000] px-3 py-1 rounded-sm heading-font font-bold text-xs text-white tracking-widest">{t('news.update')}</div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6">
                <span className="heading-font text-[10px] text-white/40 tracking-widest mb-3 block">15 {t('news.month')} 03, 2026</span>
                <h3 className="heading-font font-bold text-xl text-[#F0EDE0] mb-3 group-hover:text-[#DA0000] transition-colors">{t('news.headline')}</h3>
                <p className="text-sm text-white/50">{t('news.headline_sub')}</p>
              </div>
            </div>

            {/* Right article list */}
            <div className="lg:col-span-2 flex flex-col gap-0">
              {[
                {
                  tag: t('events.tag').replace('📅 ', ''),
                  tagColor: "#FFDD00",
                  title: t('news.mock[0].title'),
                  date: "12 {t('news.month')} 03, 2026",
                },
                {
                  tag: t('news.mock[1].tag'),
                  tagColor: "#DA0000",
                  title: t('news.mock[1].title'),
                  date: "08 {t('news.month')} 03, 2026",
                },
                {
                  tag: t('news.mock[2].tag'),
                  tagColor: "#60A5FA",
                  title: t('news.mock[2].title'),
                  date: "05 {t('news.month')} 03, 2026",
                },
                {
                  tag: t('news.mock[3].tag'),
                  tagColor: "#34D399",
                  title: t('news.mock[3].title'),
                  date: "01 {t('news.month')} 03, 2026",
                },
              ].map((article, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-4 cursor-pointer hover:bg-white/3 transition-colors px-2 rounded-lg group"
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                >
                  <span
                    className="flex-shrink-0 heading-font font-bold text-[10px] tracking-widest mt-1 w-16 text-center px-1 py-0.5 rounded-sm h-fit"
                    style={{ background: `${article.tagColor}20`, color: article.tagColor }}
                  >
                    {article.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="heading-font font-bold text-sm text-[#F0EDE0] leading-snug group-hover:text-[#DA0000] transition-colors mb-1">
                      {article.title}
                    </p>
                    <span className="text-[11px] text-white/35 heading-font tracking-wider">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── ĐỔI GIFTCODE ── */}
      <section
        className="py-16 px-6 sm:px-10 lg:px-16"
        style={{
          background: "linear-gradient(135deg, #0d0505 0%, #100808 100%)",
          borderTop: "1px solid rgba(255,221,0,0.15)",
          borderBottom: "1px solid rgba(255,221,0,0.15)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2">
            <span className="text-4xl">🎁</span>
          </div>
          <h2
            className="display-font font-black mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F0EDE0" }}
          >
            {t('giftcode.title1')} <span style={{ color: "#FFDD00" }}>{t('giftcode.title2')}</span>
          </h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(240,237,224,0.5)" }}>
            {t('giftcode.subtitle')}
          </p>

          {/* Giftcode form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <input
              type="text"
              placeholder={t('giftcode.placeholder')}
              className="flex-1 px-5 py-4 rounded-sm text-sm heading-font tracking-wider outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,221,0,0.3)",
                color: "#F0EDE0",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            />
            <button
              className="px-8 py-4 heading-font font-black text-sm tracking-widest text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FFAA00 0%, #FFDD00 100%)",
                color: "#0A0404",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                boxShadow: "0 0 25px rgba(255,221,0,0.3)",
              }}
            >
              {t('giftcode.cta')}
            </button>
          </div>

          <p className="heading-font text-xs tracking-widest" style={{ color: "rgba(240,237,224,0.3)" }}>
            {t('giftcode.note')}
          </p>
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
              {t('tournament.tag')}
            </p>
            <h2
              className="relative z-10 display-font font-black mb-8 leading-[1.1]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE0" }}
            >
              {t('tournament.title1')}<br />{t('tournament.title2')}
            </h2>
            <div
              className="relative z-10 inline-block rounded-xl px-10 py-5 mb-10 w-full max-w-sm"
              style={{
                background: "rgba(10,4,4,0.6)",
                border: "1px solid rgba(255,221,0,0.35)",
              }}
            >
              <p
                className="heading-font font-medium text-xs tracking-widest mb-1"
                style={{ color: "rgba(240,237,224,0.45)" }}
              >
                {t('tournament.prize_label')}
              </p>
              <p
                className="display-font font-black"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#FFDD00",
                  textShadow: "0 0 30px rgba(255,221,0,0.4)",
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
                {t('tournament.cta1')}
              </Link>
              <Link
                href="/dang-nhap"
                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 heading-font font-bold text-sm tracking-wide hover:bg-white/5 transition-colors"
                style={{
                  border: "1px solid rgba(255,221,0,0.35)",
                  color: "#FFDD00",
                  background: "rgba(10,4,4,0.5)"
                }}
              >
                {t('tournament.cta2')}
              </Link>
            </div>
          </div>

          {/* CỘT PHẢI */}
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
                  <h3 className="display-font font-black text-2xl mb-2 text-white">{t('tournament.gift_title')}</h3>
                  <p className="text-sm mb-6" style={{ color: "#FFDD00" }}>{t('tournament.gift_sub')}</p>
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
                  {t('tournament.gift_cta')}
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
                  <h3 className="display-font font-black text-2xl mb-2 text-white">{t('tournament.social_title')}</h3>
                  <p className="text-sm text-white/50 mb-4">{t('tournament.social_sub')}</p>
                  <div className="flex gap-4">
                    {[
                      { label: "Discord", bg: "#5865F2" },
                      { label: "Facebook", bg: "#1877F2" },
                      { label: "X", bg: "#14171A" },
                    ].map((soc) => (
                      <span
                        key={soc.label}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: soc.bg, opacity: 0.85 }}
                      >
                        {soc.label[0]}
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
                  {t('tournament.social_cta')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ── CTA NHẬN GIFTCODE ── */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden" style={{ background: "#0A0404" }}>
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/cta-giftcode.png" fill alt="Nhận Giftcode" className="object-cover object-right md:object-center opacity-70 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0404] via-[#0A0404]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0404] via-transparent to-[#0A0404]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="display-font font-black text-4xl sm:text-5xl text-white leading-tight mb-4" style={{ textShadow: "0 0 30px rgba(255,100,0,0.4)" }}>
              NHẬN TÚI QUÀ <span className="block sm:inline" style={{ color: "#FFDD00", textShadow: "0 0 20px rgba(255,221,0,0.5)" }}>TÂN BINH</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                href="/dang-nhap"
                className="inline-flex items-center gap-3 px-8 py-4 heading-font text-sm font-black tracking-widest text-white hover:opacity-90 transition-opacity rounded-sm"
                style={{ background: "linear-gradient(135deg, #CC0000 0%, #FF2020 100%)", boxShadow: "0 0 30px rgba(218,0,0,0.5)" }}
              >
                {t('cta.button')}
              </Link>
            </div>
            <p className="heading-font text-xs text-white/40 tracking-widest mt-6">{t('cta.note')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
