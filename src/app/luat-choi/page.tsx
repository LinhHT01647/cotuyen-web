import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Map, Shield, Swords, Info, Crosshair, Anchor } from "lucide-react";

const terrainRules = [
  {
    icon: "🌊",
    label: "SÔNG (Water)",
    desc: "Quân bộ đi qua và đứng trên sông như điểm LAND bình thường. Chỉ tàu thuyền mới \"sống\" trên nước. Không chặn tầm bắn pháo.",
    color: "#3A86FF",
  },
  {
    icon: "🏔️",
    label: "NÚI (Mountain)",
    desc: "Chặn đường ray bắn của Pháo. Trực thăng KHÔNG được hạ cánh trên núi. Bộ binh đứng trên núi có moveRange = 2.",
    color: "#9CA3AF",
  },
  {
    icon: "🎭",
    label: "QUÂN ÚP",
    desc: "Hầu hết quân đặt úp mặt xuống — đối thủ không biết loại quân. Quân úp đi tối đa 2 bước, 8 hướng. Tự động lật khi di chuyển hoặc bắt quân.",
    color: "#FFDD00",
  },
  {
    icon: "🎯",
    label: "MỤC TIÊU",
    desc: "Bắt được COMMANDER (Chỉ Huy) của đối phương → Thắng ngay lập tức.",
    color: "#DA0000",
  },
];

const pieces = [
  {
    name: "COMMANDER — Chỉ Huy",
    emoji: "⭐",
    count: "×1 (úp)",
    move: "Di chuyển không giới hạn khoảng cách theo 8 hướng, không nhảy qua quân khác. Tuy nhiên chỉ được BẮT quân địch ở kề cạnh (1 khoảng). Đây là quân quan trọng nhất — bị bắt là thua.",
    color: "#FFDD00",
  },
  {
    name: "INFANTRY — Bộ Binh",
    emoji: "🪖",
    count: "×4 (úp)",
    move: "Trước khi qua sông: tiến thẳng tối đa 2 bước, bắt chéo tiến. Sau khi qua sông: 5 hướng (tiến thẳng, chéo tiến trái/phải, trái, phải) × 1 bước. Trên núi: moveRange = 2.",
    color: "#34D399",
  },
  {
    name: "SPECIAL FORCES — Đặc Nhiệm",
    emoji: "🎯",
    count: "×2 (úp)",
    move: "Đứng một mình (không có đồng minh kề): di chuyển kiểu chữ L (như Mã cờ Vua), nhảy qua quân được. Có đồng minh kề: chỉ tiến 1 bước thẳng.",
    color: "#A78BFA",
  },
  {
    name: "ARMOR — Thiết Giáp",
    emoji: "🚗",
    count: "×2 (úp)",
    move: "Di chuyển không giới hạn khoảng cách theo 4 hướng (N/E/S/W), không nhảy qua quân. ⚠️ KHÔNG được vượt sông (Water).",
    color: "#FB923C",
  },
  {
    name: "CANNON — Pháo",
    emoji: "💣",
    count: "×2 (úp)",
    move: "Di chuyển: đúng 2 bước theo 8 hướng, không nhảy. Bắn: chọn hướng → bay qua đúng 1 quân 'ngòi' → tiêu diệt mục tiêu đầu tiên sau ngòi. Núi chặn tầm bắn (trừ khi Pháo đang đứng trên núi).",
    color: "#F87171",
  },
  {
    name: "HELICOPTER — Trực Thăng",
    emoji: "🚁",
    count: "×1 (lộ mặt)",
    move: "Bay tối đa 4 bước, 4 hướng (N/E/S/W). Bỏ qua địa hình khi bay. Không kết thúc trên Water/Mountain. Vận chuyển quân trong 3 lượt: Lên (LOAD) → Bay (FLY) → Thả (UNLOAD).",
    color: "#60A5FA",
  },
  {
    name: "WARSHIP — Tàu Chiến",
    emoji: "🚢",
    count: "×1 (spawn từ map, lộ mặt)",
    move: "Di chuyển không giới hạn, 4 hướng, chỉ trên Water. Bắn bờ: thay cho di chuyển, bắn vào điểm LAND kề Water để tiêu diệt địch tại đó.",
    color: "#0EA5E9",
  },
  {
    name: "TRANSPORT SHIP — Tàu Chở",
    emoji: "⛴",
    count: "×1 (spawn từ map, lộ mặt)",
    move: "Di chuyển tối đa 4 bước, 4 hướng, chỉ trên Water. Không tấn công. Chở 1 quân bộ (3 lượt): Lên tàu → Tàu di chuyển → Thả quân. Chỉ thao tác ở bờ (LAND kề Water).",
    color: "#38BDF8",
  },
];

export default function LuatChoiPage() {
  return (
    <main className="min-h-screen pb-16 md:pb-0" style={{ background: "#0A0404" }}>
      <Nav />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vietnam.png"
            alt="Luật Chơi"
            fill
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(10,4,4,0.6) 0%, rgba(10,4,4,0.97) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(218,0,0,0.08) 0%, transparent 70%)"
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5" style={{ color: "#FFDD00" }} />
            <span className="text-xs heading-font font-semibold tracking-widest uppercase" style={{ color: "#FFDD00" }}>
              Binh Pháp Cờ Tuyến v2
            </span>
          </div>

          <h1 className="display-font font-black mb-4" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#F0EDE0",
          }}>
            LUẬT CHƠI{" "}
            <span style={{
              background: "linear-gradient(135deg, #DA0000, #FF4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              CỜ TUYẾN
            </span>
          </h1>

          <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: "rgba(240,237,224,0.55)" }}>
            Game chiến thuật quân sự theo lượt cho 2 người chơi. Bàn cờ <strong style={{ color: "#FFDD00" }}>11×12</strong> giao điểm với địa hình sông, núi và biển. Chiến thắng bằng cách bắt <strong style={{ color: "#DA0000" }}>COMMANDER</strong> của đối thủ.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              { val: "11×12", label: "Giao điểm" },
              { val: "8", label: "Loại quân" },
              { val: "2", label: "Người chơi" },
              { val: "3", label: "Địa hình" },
            ].map(({ val, label }) => (
              <div key={label} className="px-5 py-2.5 rounded-lg text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,221,0,0.2)" }}>
                <div className="heading-font font-black text-xl" style={{ color: "#FFDD00" }}>{val}</div>
                <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.45)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Setup */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Bàn Chiến <span style={{ color: "#DA0000" }}>& Địa Hình</span>
            </h2>
            <p className="text-sm" style={{ color: "rgba(240,237,224,0.45)" }}>
              11 cột × 12 hàng = 132 giao điểm. Quân đứng trên giao điểm, không phải trong ô.
            </p>
          </div>

          {/* Terrain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {terrainRules.map((t) => (
              <div key={t.label}
                className="rounded-xl p-5"
                style={{ background: "rgba(18,8,8,0.9)", border: `1px solid ${t.color}25` }}
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="heading-font font-black text-sm tracking-wide mb-2" style={{ color: t.color }}>
                  {t.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(240,237,224,0.5)" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Setup info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl p-6"
              style={{ background: "rgba(18,8,8,0.9)", border: "1px solid rgba(255,221,0,0.2)" }}>
              <h3 className="heading-font font-black text-base mb-4" style={{ color: "#FFDD00" }}>
                🪖 Triển Khai Đầu Game
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(240,237,224,0.6)" }}>
                <li>• <strong style={{ color: "#F0EDE0" }}>P1 (TOP):</strong> đặt quân ở 3 hàng trên cùng (r=0..2) — tiến xuống</li>
                <li>• <strong style={{ color: "#F0EDE0" }}>P2 (BOTTOM):</strong> đặt quân ở 3 hàng dưới cùng (r=8..10) — tiến lên</li>
                <li>• Chỉ đặt trên LAND, không đặt trên nước/núi</li>
                <li>• Trực thăng tránh hàng sát vùng sông nhất</li>
                <li>• Tàu chiến & tàu chở đã spawn sẵn trên map (ký hiệu C/T)</li>
              </ul>
            </div>
            <div className="rounded-xl p-6"
              style={{ background: "rgba(18,8,8,0.9)", border: "1px solid rgba(218,0,0,0.2)" }}>
              <h3 className="heading-font font-black text-base mb-4" style={{ color: "#DA0000" }}>
                🔄 Cơ Chế Lượt
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(240,237,224,0.6)" }}>
                <li>• Mỗi lượt thực hiện <strong style={{ color: "#F0EDE0" }}>đúng 1 action</strong></li>
                <li>• Luân phiên nhau, không được bỏ lượt</li>
                <li>• Actions: Di chuyển, Bắt quân, Pháo bắn, Tàu bắn bờ, Load/Move/Unload Heli, Load/Move/Unload Ship</li>
                <li>• Hết giờ hoặc đầu hàng → thua ngay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pieces */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Hệ Thống <span style={{ color: "#DA0000" }}>8 Loại Quân</span>
            </h2>
            <p className="text-sm" style={{ color: "rgba(240,237,224,0.45)" }}>
              6 loại do người chơi đặt + 2 loại spawn từ map. Hầu hết được úp mặt xuống ban đầu.
            </p>
          </div>

          <div className="space-y-3">
            {pieces.map((piece, index) => (
              <div
                key={piece.name}
                className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl"
                style={{
                  background: index % 2 === 0 ? "rgba(18,8,8,0.85)" : "rgba(255,255,255,0.018)",
                  border: `1px solid ${piece.color}20`,
                }}
              >
                <div className="sm:w-1/3 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{piece.emoji}</span>
                    <div>
                      <h3 className="heading-font font-black text-sm leading-tight" style={{ color: piece.color }}>
                        {piece.name}
                      </h3>
                      <span className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.35)" }}>
                        {piece.count}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.65)" }}>
                    {piece.move}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Special rules box */}
          <div className="mt-8 p-6 rounded-xl border border-dashed flex items-start gap-4"
            style={{ borderColor: "rgba(255,221,0,0.3)", background: "rgba(255,221,0,0.04)" }}>
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#FFDD00" }} />
            <div>
              <h4 className="heading-font font-bold mb-2" style={{ color: "#FFDD00" }}>⚡ Quân Úp — Luật Đặc Biệt</h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.55)" }}>
                Quân chưa lật (<code style={{ color: "#FFDD00" }}>revealed = false</code>) di chuyển tối đa <strong style={{ color: "#F0EDE0" }}>2 bước, 8 hướng</strong> (kể cả chéo), không nhảy qua quân. Không được bắn pháo hay dùng kỹ năng. Tự động lật khi di chuyển hoặc thực hiện bắt quân. Đây là cơ chế tạo yếu tố bí ẩn, sương mù chiến tranh trong Cờ Tuyến.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Win conditions */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(10,4,4,0.6)", borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Điều Kiện <span style={{ color: "#DA0000" }}>Thắng / Thua</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏆", cond: "Bắt COMMANDER địch", result: "THẮNG", color: "#FFDD00", bg: "rgba(255,221,0,0.08)" },
              { icon: "🚩", cond: "Bị bắt COMMANDER", result: "THUA", color: "#DA0000", bg: "rgba(218,0,0,0.08)" },
              { icon: "🏳️", cond: "Đầu hàng (resign)", result: "THUA ngay", color: "#DA0000", bg: "rgba(218,0,0,0.06)" },
              { icon: "⏱️", cond: "Hết giờ (timeout)", result: "THUA", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "📡", cond: "Mất kết nối quá lâu", result: "Forfeit (THUA)", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "🤝", cond: "Cả hai mất kết nối", result: "Abandoned", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
            ].map(({ icon, cond, result, color, bg }) => (
              <div key={cond} className="rounded-xl p-4 flex items-center gap-4"
                style={{ background: bg, border: `1px solid ${color}25` }}>
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="display-font text-3xl font-bold mb-3" style={{ color: "#F0EDE0" }}>
          Đã Nắm Đủ Binh Pháp?
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(240,237,224,0.45)" }}>Bước vào sa bàn và thể hiện tài cầm quân của bạn.</p>
        <Link
          href="/dang-nhap"
          className="inline-block px-8 py-4 heading-font font-black text-sm tracking-widest text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #DA0000, #FF2020)",
            boxShadow: "0 0 25px rgba(218,0,0,0.5)",
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
          }}
        >
          THAM CHIẾN NGAY →
        </Link>
      </section>

      <Footer />
    </main>
  );
}
