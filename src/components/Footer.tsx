import Link from "next/link";
import { Share2, Mail, Globe, Star } from "lucide-react";
export default function Footer() {
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
              <div
                className="w-7 h-7 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "#DA0000",
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 50%, 100% 100%, 10% 100%, 0% 50%)",
                }}
              >
                <span className="text-yellow-300 text-xs font-bold leading-none">★</span>
              </div>
              <span
                className="heading-font text-xl font-black tracking-wider"
                style={{ color: "#F0EDE0" }}
              >
                CỜ TUYỂN
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,237,224,0.45)" }}>
              &quot;Chiến đấu vì vinh quang Tổ Quốc&quot; - Tựa game dàn trận quân sự hàng đầu, mang tinh thần hào hùng của dân tộc vào kỷ nguyên số.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Share2, label: "Share" },
                { icon: Mail, label: "Email" },
                { icon: Globe, label: "Website" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(240,237,224,0.6)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns Container */}
          <div className="md:w-6/12 flex flex-col sm:flex-row justify-between gap-8 md:gap-4">
            {/* Khám Phá Column */}
            <div className="sm:w-1/2">
              <h3
                className="heading-font font-bold mb-6 tracking-wider text-sm"
                style={{ color: "#F0EDE0" }}
              >
                Khám Phá
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Chiến Dịch Lịch Sử", href: "/chien-dich" },
                  { label: "Hướng Dẫn Luật Chơi", href: "/luat-choi" },
                  { label: "Cộng Đồng Cờ Tuyển", href: "/cong-dong" },
                  { label: "Giải Đấu Thể Thao", href: "/cong-dong" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(240,237,224,0.45)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hỗ Trợ Column */}
            <div className="sm:w-1/2">
              <h3
                className="heading-font font-bold mb-6 tracking-wider text-sm"
                style={{ color: "#F0EDE0" }}
              >
                Hỗ Trợ
              </h3>
              <ul className="space-y-4">
                {[
                  "Trung tâm trợ giúp",
                  "Điều khoản dịch vụ",
                  "Chính sách bảo mật",
                  "Liên hệ hợp tác",
                ].map((item) => (
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
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 relative rounded-sm overflow-hidden opacity-80">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "#DA0000" }}
              >
                <span className="text-yellow-300 text-[10px] font-bold leading-none">★</span>
              </div>
            </div>
            <span className="text-xs" style={{ color: "rgba(240,237,224,0.35)" }}>
              © 2024 Cờ Tuyển Studio. All rights reserved.
            </span>
          </div>

          {/* Center Divider: ----- ★ ----- */}
          <div className="flex items-center gap-4 opacity-50 hidden md:flex">
            <div className="w-8 h-px" style={{ background: "#DA0000" }} />
            <Star size={12} className="fill-current" style={{ color: "#DA0000", stroke: "none" }} />
            <div className="w-8 h-px" style={{ background: "#DA0000" }} />
          </div>

          {/* Credits */}
          <div
            className="text-xs heading-font font-semibold tracking-widest uppercase"
            style={{ color: "rgba(240,237,224,0.3) " }}
          >
            THIẾT KẾ BỞI ĐỘI NGŨ CỜ TUYỂN
          </div>
        </div>

      </div>
    </footer>
  );
}
