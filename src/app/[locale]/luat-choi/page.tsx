"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BookOpen, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LuatChoiPage() {
  const t = useTranslations('Rules');

  const terrainRules = [
    { icon: "🌊", label: t('t1_l'), desc: t('t1_d'), color: "#3A86FF" },
    { icon: "🏔️", label: t('t2_l'), desc: t('t2_d'), color: "#9CA3AF" },
    { icon: "🎭", label: t('t3_l'), desc: t('t3_d'), color: "#FFDD00" },
    { icon: "🎯", label: t('t4_l'), desc: t('t4_d'), color: "#DA0000" },
  ];

  const pieces = [
    { name: t('p1_n'), emoji: "⭐", count: t('p1_c'), move: t('p1_m'), color: "#FFDD00", tag: t('p1_tag') },
    { name: t('p2_n'), emoji: "🪖", count: t('p2_c'), move: t('p2_m'), color: "#34D399" },
    { name: t('p3_n'), emoji: "🎯", count: t('p3_c'), move: t('p3_m'), color: "#A78BFA" },
    { name: t('p4_n'), emoji: "🚗", count: t('p4_c'), move: t('p4_m'), color: "#FB923C" },
    { name: t('p5_n'), emoji: "💣", count: t('p5_c'), move: t('p5_m'), color: "#F87171" },
    { name: t('p6_n'), emoji: "🚁", count: t('p6_c'), move: t('p6_m'), color: "#60A5FA" },
    { name: t('p7_n'), emoji: "🚢", count: t('p7_c'), move: t('p7_m'), color: "#0EA5E9" },
    { name: t('p8_n'), emoji: "⛴", count: t('p8_c'), move: t('p8_m'), color: "#38BDF8" },
  ];

  return (
    <main className="min-h-screen pb-16 md:pb-0" style={{ background: "#0A0404" }}>
      <Nav />
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-vietnam.png" alt={t('alt_rules')} fill className="object-cover object-center opacity-15" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,4,4,0.6) 0%, rgba(10,4,4,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5" style={{ color: "#FFDD00" }} />
            <span className="text-xs heading-font font-semibold tracking-widest uppercase" style={{ color: "#FFDD00" }}>
              {t('hero_sub')}
            </span>
          </div>
          <h1 className="display-font font-black mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F0EDE0" }}>
            {t('title1')} <span style={{ background: "linear-gradient(135deg, #DA0000, #FF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{t('title2')}</span>
          </h1>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "rgba(240,237,224,0.6)" }} dangerouslySetInnerHTML={{ __html: t.raw('desc') }}></p>
          <div className="flex flex-wrap justify-center gap-4">
            {[ 
              { val: "8", label: t('stat1') }, 
              { val: "2", label: t('stat2') }, 
              { val: t('stat_v3'), label: t('stat3') }, 
              { val: t('stat_v4'), label: t('stat4') } 
            ].map(({ val, label }) => (
              <div key={label} className="px-5 py-3 rounded-lg text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,221,0,0.2)" }}>
                <div className="heading-font font-black text-lg" style={{ color: "#FFDD00" }}>{val}</div>
                <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.45)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>{t('how_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[ 
              { step: "01", title: t('s1'), desc: t('d1'), color: "#FFDD00" },
              { step: "02", title: t('s2'), desc: t('d2'), color: "#DA0000" },
              { step: "03", title: t('s3'), desc: t('d3'), color: "#34D399" } 
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="rounded-xl p-6" style={{ background: "rgba(18,8,8,0.9)", border: `1px solid ${color}25` }}>
                <div className="heading-font font-black text-4xl mb-3 opacity-30" style={{ color }}>{step}</div>
                <h3 className="heading-font font-black text-base mb-3" style={{ color }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.6)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <h3 className="display-font text-2xl font-bold mb-6 text-center" style={{ color: "#F0EDE0" }}>{t('ter_title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {terrainRules.map((tr) => (
              <div key={tr.label} className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(18,8,8,0.9)", border: `1px solid ${tr.color}25` }}>
                <span className="text-3xl flex-shrink-0">{tr.icon}</span>
                <div>
                  <h4 className="heading-font font-black text-sm mb-2" style={{ color: tr.color }}>{tr.label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.55)" }}>{tr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>{t('pieces_title')}</h2>
            <p className="text-sm" style={{ color: "rgba(240,237,224,0.45)" }}>{t('pieces_sub')}</p>
          </div>
          <div className="space-y-3">
            {pieces.map((piece, index) => (
              <div key={piece.name} className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl" style={{ background: index % 2 === 0 ? "rgba(18,8,8,0.85)" : "rgba(255,255,255,0.018)", border: `1px solid ${piece.color}20` }}>
                <div className="sm:w-1/3 flex-shrink-0 flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{piece.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="heading-font font-black text-sm" style={{ color: piece.color }}>{piece.name}</h3>
                      {piece.tag && <span className="px-1.5 py-0.5 text-[9px] heading-font font-bold rounded" style={{ background: "#DA000033", color: "#DA0000" }}>{piece.tag}</span>}
                    </div>
                    <span className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.35)" }}>{piece.count}</span>
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.65)" }}>{piece.move}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl border border-dashed flex items-start gap-4" style={{ borderColor: "rgba(255,221,0,0.3)", background: "rgba(255,221,0,0.04)" }}>
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#FFDD00" }} />
            <div>
              <h4 className="heading-font font-bold mb-2" style={{ color: "#FFDD00" }}>{t('note_title')}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.6)" }} dangerouslySetInnerHTML={{ __html: t.raw('note_desc') }}></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(10,4,4,0.6)", borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>{t('win_title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[ 
              { icon: "🏆", cond: t('w1'), result: t('w1_r'), color: "#FFDD00", bg: "rgba(255,221,0,0.08)" },
              { icon: "💀", cond: t('w2'), result: t('w2_r'), color: "#DA0000", bg: "rgba(218,0,0,0.08)" },
              { icon: "🏳️", cond: t('w3'), result: t('w3_r'), color: "#DA0000", bg: "rgba(218,0,0,0.06)" },
              { icon: "⏱️", cond: t('w4'), result: t('w4_r'), color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "📡", cond: t('w5'), result: t('w5_r'), color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "🤝", cond: t('w6'), result: t('w6_r'), color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" }
            ].map(({ icon, cond, result, color, bg }) => (
              <div key={cond} className="rounded-xl p-4 flex items-center gap-4" style={{ background: bg, border: `1px solid ${color}25` }}>
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-sm" style={{ color: "rgba(240,237,224,0.7)" }}>{cond}</p>
                  <p className="heading-font font-black text-sm" style={{ color }}>{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="display-font text-3xl font-bold mb-3" style={{ color: "#F0EDE0" }}>{t('cta_title')}</h2>
        <p className="text-sm mb-8" style={{ color: "rgba(240,237,224,0.45)" }}>{t('cta_sub')}</p>
        <Link href="/dang-nhap" className="inline-block px-8 py-4 heading-font font-black text-sm tracking-widest text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #DA0000, #FF2020)", boxShadow: "0 0 25px rgba(218,0,0,0.5)", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>{t('cta_btn')}</Link>
      </section>
      <Footer />
    </main>
  );
}