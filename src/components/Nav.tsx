"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/chien-dich", label: "Sự Kiện" },
  { href: "/luat-choi", label: "Luật Chơi" },
  { href: "/cong-dong", label: "Cộng Đồng" },
  { href: "/dang-nhap", label: "Đổi Quà" },
];

const downloadLinks = [
  { icon: "🍎", label: "App Store", sub: "iOS", href: "#" },
  { icon: "🤖", label: "Google Play", sub: "Android", href: "#" },
  { icon: "📦", label: "APK Direct", sub: "Windows/Mac", href: "#" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("CHỈ HUY");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
      const savedName = localStorage.getItem("username");
      if (savedName) setUsername(savedName.toUpperCase());
    } else {
      setIsLoggedIn(false);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    router.refresh();
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(8,4,4,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(218,0,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wordmark.png"
                alt="Co Tuyen"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm heading-font font-medium tracking-wide transition-all duration-200 relative whitespace-nowrap"
                  style={{
                    color: pathname === link.href ? "#fff" : "rgba(255,255,255,0.65)",
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ background: "#DA0000" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE — Download + Account */}
            <div className="hidden md:flex items-center gap-3 relative z-50">

              {/* ── DOWNLOAD DROPDOWN ── */}
              <div
                className="relative"
                onMouseEnter={() => setDownloadOpen(true)}
                onMouseLeave={() => setDownloadOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 heading-font font-black text-sm tracking-wider transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #CC0000 0%, #FF2020 100%)",
                    color: "#fff",
                    boxShadow: "0 0 18px rgba(218,0,0,0.5)",
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  <Download size={14} />
                  TẢI GAME
                  <ChevronDown
                    size={12}
                    className="transition-transform duration-200"
                    style={{ transform: downloadOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Dropdown panel */}
                {downloadOpen && (
                  <div
                    className="absolute right-0 top-[calc(100%+6px)] w-52 rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      background: "#0d0505",
                      border: "1px solid rgba(218,0,0,0.3)",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.6), 0 0 20px rgba(218,0,0,0.1)",
                    }}
                  >
                    {downloadLinks.map(({ icon, label, sub, href }) => (
                      <Link
                        key={label}
                        href={href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        <span className="text-xl w-7 text-center flex-shrink-0">{icon}</span>
                        <div>
                          <div
                            className="heading-font font-black text-sm"
                            style={{ color: "#F0EDE0" }}
                          >
                            {label}
                          </div>
                          <div className="text-[10px]" style={{ color: "rgba(240,237,224,0.4)" }}>
                            {sub}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ── NẠP THẺ (separate button) ── */}
              <Link
                href="#"
                className="flex items-center gap-1.5 px-4 py-2 heading-font font-black text-sm tracking-wider transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #CC9900 0%, #FFDD00 100%)",
                  color: "#000",
                  boxShadow: "0 0 14px rgba(255,221,0,0.4)",
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                💰 NẠP THẺ
              </Link>

              {/* Account button */}
              {isLoggedIn ? (
                <div className="relative group">
                  <button
                    className="px-4 py-2 rounded heading-font font-bold text-sm tracking-wider text-white transition-all duration-200"
                    style={{
                      background: "rgba(218,0,0,0.15)",
                      border: "1px solid rgba(218,0,0,0.5)",
                    }}
                  >
                    {username}
                  </button>
                  <div
                    className="absolute right-0 top-[120%] w-52 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden"
                    style={{ background: "#0A0404", border: "1px solid rgba(218,0,0,0.3)" }}
                  >
                    <Link
                      href="/ho-so"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/10 heading-font font-medium tracking-wider transition-colors"
                    >
                      HỒ SƠ CỦA TÔI
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-white/5 heading-font font-medium tracking-wider transition-colors"
                    >
                      ĐĂNG XUẤT
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/dang-nhap"
                  className="px-4 py-2 rounded heading-font font-bold text-sm tracking-wider text-white transition-all duration-200"
                  style={{
                    background: "rgba(218,0,0,0.15)",
                    border: "1px solid rgba(218,0,0,0.4)",
                  }}
                >
                  ĐĂNG NHẬP
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 transition-colors"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-4 pb-5 pt-2"
            style={{ background: "rgba(8,4,4,0.98)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 heading-font font-medium tracking-wide text-sm border-b"
                style={{
                  color: pathname === link.href ? "#DA0000" : "rgba(255,255,255,0.65)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Download Links */}
            <div className="mt-4 mb-2">
              <p className="text-[10px] heading-font font-bold tracking-widest mb-3 px-2" style={{ color: "rgba(240,237,224,0.35)" }}>
                TẢI GAME NGAY
              </p>
              <div className="grid grid-cols-2 gap-2">
                {downloadLinks.map(({ icon, label, sub, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="text-lg">{icon}</span>
                    <div>
                      <div className="heading-font font-bold text-xs" style={{ color: "#F0EDE0" }}>{label}</div>
                      <div className="text-[9px]" style={{ color: "rgba(240,237,224,0.4)" }}>{sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
              {/* Nạp Thẻ — separate highlight */}
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg mt-2"
                style={{
                  background: "rgba(255,221,0,0.1)",
                  border: "1px solid rgba(255,221,0,0.3)",
                }}
              >
                <span className="text-lg">💰</span>
                <div>
                  <div className="heading-font font-bold text-xs" style={{ color: "#FFDD00" }}>Nạp Thẻ</div>
                  <div className="text-[9px]" style={{ color: "rgba(240,237,224,0.4)" }}>Top-up</div>
                </div>
              </Link>
            </div>

            {isLoggedIn ? (
              <div className="mt-4 border-t border-white/10 pt-4">
                <span className="block px-2 text-xs heading-font font-bold text-gray-500 tracking-widest mb-3">
                  XIN CHÀO, {username}
                </span>
                <Link
                  href="/ho-so"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-2 py-3 rounded heading-font font-bold text-sm tracking-wider text-gray-300 hover:text-white hover:bg-white/5 mb-2 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "transparent" }}
                >
                  HỒ SƠ CỦA TÔI
                </Link>
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="block w-full text-center py-3 rounded heading-font font-bold text-sm tracking-wider text-white"
                  style={{ border: "1px solid rgba(218,0,0,0.5)", background: "transparent" }}
                >
                  ĐĂNG XUẤT
                </button>
              </div>
            ) : (
              <Link
                href="/dang-nhap"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center py-3 rounded heading-font font-bold text-sm tracking-wider text-white"
                style={{ background: "#DA0000" }}
              >
                ĐĂNG NHẬP
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* ── FLOATING DOWNLOAD BAR (mobile bottom) ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        style={{
          background: "rgba(8,4,4,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(218,0,0,0.25)",
        }}
      >
        <div className="flex items-center justify-around py-2 px-2">
          {downloadLinks.map(({ icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all active:scale-95"
            >
              <span className="text-xl leading-none">{icon}</span>
              <span
                className="heading-font font-bold text-[9px] tracking-wide"
                style={{ color: "rgba(240,237,224,0.7)" }}
              >
                {label}
              </span>
            </Link>
          ))}
          {/* NẠP THẺ — separate button in mobile bar */}
          <Link
            href="#"
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all active:scale-95"
            style={{ background: "rgba(255,221,0,0.12)" }}
          >
            <span className="text-xl leading-none">💰</span>
            <span
              className="heading-font font-bold text-[9px] tracking-wide"
              style={{ color: "#FFDD00" }}
            >
              NẠP THẺ
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
