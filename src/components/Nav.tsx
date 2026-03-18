"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/chien-dich", label: "Chiến Dịch" },
  { href: "/luat-choi", label: "Luật Chơi" },
  { href: "/cong-dong", label: "Cộng Đồng" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    router.refresh();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8,4,4,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="heading-font text-2xl font-black tracking-widest"
              style={{ color: "#DA0000" }}
            >
              CỜ TUYẾN
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm heading-font font-medium tracking-wide transition-all duration-200 relative"
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded heading-font font-bold text-sm tracking-wider text-white transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(218,0,0,0.5)",
                }}
              >
                ĐĂNG XUẤT
              </button>
            ) : (
              <Link
                href="/dang-nhap"
                className="px-5 py-2 rounded heading-font font-bold text-sm tracking-wider text-white transition-all duration-200"
                style={{
                  background: "#DA0000",
                  boxShadow: "0 0 18px rgba(218,0,0,0.5)",
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
          style={{ background: "rgba(8,4,4,0.95)" }}
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
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block w-full mt-4 text-center py-3 rounded heading-font font-bold text-sm tracking-wider text-white"
              style={{ border: "1px solid rgba(218,0,0,0.5)", background: "transparent" }}
            >
              ĐĂNG XUẤT
            </button>
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
  );
}
