"use client";

import { Link } from "@/i18n/routing";
import { Facebook, MessageCircle, Globe, Star, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "#0A0404",
        borderTop: "1px solid rgba(218,0,0,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:w-5/12">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <span
                className="heading-font text-2xl font-black tracking-widest"
                style={{ color: "#DA0000" }}
              >
                CỜ TUYẾN
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,237,224,0.45)" }}>
              {t('tagline')}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: Facebook, label: "Facebook", color: "#1877F2" },
                { icon: MessageCircle, label: "Discord", color: "#5865F2" },
                { icon: Twitter, label: "X / Twitter", color: "#14171A" },
                { icon: Globe, label: "Website", color: "#DA0000" },
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-100"
                  style={{
                    background: `${color}22`,
                    border: `1px solid ${color}55`,
                    color: color,
                    opacity: 0.8,
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* App Store badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "🍎", store: "App Store", sub: "iOS" },
                { icon: "🤖", store: "Google Play", sub: "Android" },
                { icon: "📦", store: "APK Direct", sub: "Windows" },
              ].map(({ icon, store, sub }) => (
                <Link
                  key={store}
                  href="/dang-nhap"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,221,0,0.2)",
                  }}
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-[9px] heading-font" style={{ color: "rgba(240,237,224,0.4)" }}>{sub}</div>
                    <div className="heading-font font-bold text-xs" style={{ color: "#F0EDE0" }}>{store}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Columns Container */}
          <div className="md:w-6/12 flex flex-col sm:flex-row justify-between gap-8 md:gap-4">
            {/* Explore Column */}
            <div className="sm:w-1/3">
              <h3
                className="heading-font font-bold mb-6 tracking-wider text-sm"
                style={{ color: "#F0EDE0" }}
              >
                {t('col1')}
              </h3>
              <ul className="space-y-4">
                {[
                  { label: t('l1'), href: "/chien-dich" },
                  { label: t('l2'), href: "/luat-choi" },
                  { label: t('l3'), href: "/cong-dong" },
                  { label: t('l4'), href: "/cong-dong" },
                  { label: t('l5'), href: "/doi-qua" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href as any}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(240,237,224,0.45)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Column */}
            <div className="sm:w-1/3">
              <h3
                className="heading-font font-bold mb-6 tracking-wider text-sm"
                style={{ color: "#F0EDE0" }}
              >
                {t('col2')}
              </h3>
              <ul className="space-y-4">
                {[t('f1'), t('f2'), t('f3'), t('f4'), t('f5')].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(240,237,224,0.45)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="sm:w-1/3">
              <h3
                className="heading-font font-bold mb-6 tracking-wider text-sm"
                style={{ color: "#F0EDE0" }}
              >
                {t('col3')}
              </h3>
              <ul className="space-y-4">
                {[
                  { label: t('s1'), href: "#" },
                  { label: t('s2'), href: "#" },
                  { label: t('s3'), href: "#" },
                  { label: t('s4'), href: "#" },
                  { label: t('s5'), href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(240,237,224,0.45)" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 relative rounded-sm overflow-hidden opacity-80">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "#DA0000" }}
              >
                <span className="text-[#FFDD00] text-[10px] font-bold leading-none">★</span>
              </div>
            </div>
            <span className="text-xs" style={{ color: "rgba(240,237,224,0.35)" }}>
              {t('copyright')}
            </span>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {[t('terms'), t('privacy'), t('support')].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs heading-font font-medium tracking-wider transition-colors hover:text-white"
                style={{ color: "rgba(240,237,224,0.3)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Center divider */}
          <div className="flex items-center gap-4 opacity-50 hidden md:flex">
            <div className="w-8 h-px" style={{ background: "#DA0000" }} />
            <Star size={12} className="fill-current" style={{ color: "#DA0000", stroke: "none" }} />
            <div className="w-8 h-px" style={{ background: "#DA0000" }} />
          </div>

          {/* Credits */}
          <div
            className="text-xs heading-font font-semibold tracking-widest uppercase"
            style={{ color: "rgba(240,237,224,0.3)" }}
          >
            {t('credits')}
          </div>
        </div>

      </div>
    </footer>
  );
}
