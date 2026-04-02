import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BookOpen, Info } from "lucide-react";

const terrainRules = [
  {
    icon: "🌊",
    label: "Sông & Biển",
    desc: "Quân bộ có thể đi qua sông hoặc đứng trên sông như đất bình thường. Riêng Tàu Chiến và Tàu Chở thì chỉ di chuyển được trên mặt nước.",
    color: "#3A86FF",
  },
  {
    icon: "🏔️",
    label: "Núi",
    desc: "Núi cản tầm bắn của Pháo — Pháo không bắn xuyên qua núi được. Trực Thăng không thể hạ cánh trên núi. Bộ Binh đứng trên núi sẽ di chuyển được xa hơn bình thường.",
    color: "#9CA3AF",
  },
  {
    icon: "🎭",
    label: "Quân Úp Mặt",
    desc: "Hầu hết quân được đặt úp mặt xuống — đối thủ không biết bạn đang có loại quân gì cho đến khi quân đó di chuyển hoặc tấn công. Đây là yếu tố bí ẩn tạo nên sương mù chiến tranh.",
    color: "#FFDD00",
  },
  {
    icon: "🎯",
    label: "Mục Tiêu",
    desc: "Bắt được quân Chỉ Huy của đối phương → Thắng ngay lập tức. Bảo vệ Chỉ Huy của bạn là ưu tiên số một.",
    color: "#DA0000",
  },
];

const pieces = [
  {
    name: "Chỉ Huy",
    emoji: "⭐",
    count: "1 quân",
    move: "Có thể di chuyển xa bao nhiêu tùy thích theo 8 hướng (kể cả chéo), nhưng không nhảy qua quân khác. Quan trọng: chỉ được tiêu diệt quân địch khi đứng sát bên cạnh (1 ô gần nhất). Đây là quân quan trọng nhất — nếu bị bắt, bạn thua ngay.",
    color: "#FFDD00",
    tag: "QUAN TRỌNG",
  },
  {
    name: "Bộ Binh",
    emoji: "🪖",
    count: "4 quân",
    move: "Khi chưa vượt sông: chỉ tiến thẳng tối đa 2 bước, tiêu diệt địch bằng cách đánh chéo về phía trước. Sau khi vượt sông: linh hoạt hơn — có thể đi thẳng, đi ngang hoặc chéo về phía trước, mỗi lần 1 bước. Không bao giờ được đi lùi.",
    color: "#34D399",
  },
  {
    name: "Đặc Nhiệm",
    emoji: "🎯",
    count: "2 quân",
    move: "Có 2 chế độ tùy tình huống: khi đứng một mình (không có đồng đội kề bên) — nhảy theo hình chữ L như Mã trong cờ vua, có thể vượt qua quân khác; khi có đồng đội gần — chỉ đi thẳng 1 bước về phía trước.",
    color: "#A78BFA",
  },
  {
    name: "Thiết Giáp",
    emoji: "🚗",
    count: "2 quân",
    move: "Di chuyển xa bao nhiêu tùy thích theo 4 hướng thẳng (lên, xuống, trái, phải), không nhảy qua quân khác. Lưu ý: Thiết Giáp KHÔNG thể vượt qua sông — đây là điểm yếu lớn nhất của loại quân này.",
    color: "#FB923C",
  },
  {
    name: "Pháo",
    emoji: "💣",
    count: "2 quân",
    move: "Di chuyển: đúng 2 bước theo 8 hướng. Bắn: chọn một hướng và bắn — viên đạn bay qua đúng 1 quân bất kỳ (gọi là 'ngòi') rồi tiêu diệt quân địch đầu tiên ở phía sau. Núi cản tầm bắn, nhưng nếu Pháo đang đứng trên núi thì bắn được qua núi.",
    color: "#F87171",
  },
  {
    name: "Trực Thăng",
    emoji: "🚁",
    count: "1 quân (hiện mặt ngay từ đầu)",
    move: "Bay tối đa 4 ô theo 4 hướng thẳng, có thể bay qua mọi địa hình (sông, núi) nhưng không đáp xuống sông hoặc núi. Không tấn công trực tiếp. Có thể vận chuyển 1 quân trong 3 lượt: lượt 1 - quân lên trực thăng; lượt 2 - trực thăng bay đến nơi cần; lượt 3 - thả quân xuống.",
    color: "#60A5FA",
  },
  {
    name: "Tàu Chiến",
    emoji: "🚢",
    count: "1 tàu (có sẵn trên bản đồ)",
    move: "Di chuyển xa bao nhiêu tùy thích theo 4 hướng thẳng, chỉ trên mặt nước. Khả năng đặc biệt: thay vì di chuyển, có thể bắn vào điểm đất kề bên bờ nước để tiêu diệt quân địch đứng đó.",
    color: "#0EA5E9",
  },
  {
    name: "Tàu Chở",
    emoji: "⛴",
    count: "1 tàu (có sẵn trên bản đồ)",
    move: "Di chuyển tối đa 4 ô trên mặt nước, theo 4 hướng thẳng. Không tấn công. Có thể chở 1 quân bộ qua sông trong 3 lượt: lên tàu → tàu di chuyển → thả quân lên bờ.",
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
          <Image src="/images/hero-vietnam.png" alt="Luật Chơi" fill className="object-cover object-center opacity-15" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,4,4,0.6) 0%, rgba(10,4,4,0.97) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5" style={{ color: "#FFDD00" }} />
            <span className="text-xs heading-font font-semibold tracking-widest uppercase" style={{ color: "#FFDD00" }}>
              Hướng Dẫn Cho Người Mới
            </span>
          </div>

          <h1 className="display-font font-black mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F0EDE0" }}>
            LUẬT CHƠI{" "}
            <span style={{ background: "linear-gradient(135deg, #DA0000, #FF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              CỜ TUYẾN
            </span>
          </h1>

          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "rgba(240,237,224,0.6)" }}>
            Cờ Tuyến là game chiến thuật quân sự cho <strong style={{ color: "#F0EDE0" }}>2 người chơi</strong>, chơi theo lượt. Bạn chỉ huy một đội quân trên sa bàn có sông, núi, và biển. Mục tiêu: <strong style={{ color: "#DA0000" }}>bắt quân Chỉ Huy của đối thủ</strong> để chiến thắng.
          </p>

          {/* Quick overview */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { val: "8", label: "Loại quân" },
              { val: "2", label: "Người chơi" },
              { val: "Theo lượt", label: "Kiểu chơi" },
              { val: "Úp mặt", label: "Yếu tố bí ẩn" },
            ].map(({ val, label }) => (
              <div key={label} className="px-5 py-3 rounded-lg text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,221,0,0.2)" }}>
                <div className="heading-font font-black text-lg" style={{ color: "#FFDD00" }}>{val}</div>
                <div className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.45)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to play overview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Cách Chơi <span style={{ color: "#DA0000" }}>Cơ Bản</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                step: "01",
                title: "Sắp Xếp Quân",
                desc: "Mỗi người đặt 12 quân vào 3 hàng phía mình: 10 quân được úp mặt xuống (đối thủ không biết loại gì), chỉ có Trực Thăng và 2 Tàu là hiện mặt ngay từ đầu.",
                color: "#FFDD00",
              },
              {
                step: "02",
                title: "Luân Phiên Đi",
                desc: "Hai người thay nhau đi, mỗi lượt di chuyển đúng 1 quân. Có thể di chuyển đến ô trống, hoặc tấn công vào ô có quân địch để tiêu diệt.",
                color: "#DA0000",
              },
              {
                step: "03",
                title: "Chiến Thắng",
                desc: "Người nào bắt được quân Chỉ Huy của đối thủ thì thắng ngay lập tức. Hãy vừa tấn công vừa bảo vệ quân Chỉ Huy của mình.",
                color: "#34D399",
              },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="rounded-xl p-6" style={{ background: "rgba(18,8,8,0.9)", border: `1px solid ${color}25` }}>
                <div className="heading-font font-black text-4xl mb-3 opacity-30" style={{ color }}>{step}</div>
                <h3 className="heading-font font-black text-base mb-3" style={{ color }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.6)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Terrain section */}
          <h3 className="display-font text-2xl font-bold mb-6 text-center" style={{ color: "#F0EDE0" }}>
            Địa Hình <span style={{ color: "#DA0000" }}>Trên Sa Bàn</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {terrainRules.map((t) => (
              <div key={t.label} className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: "rgba(18,8,8,0.9)", border: `1px solid ${t.color}25` }}>
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <div>
                  <h4 className="heading-font font-black text-sm mb-2" style={{ color: t.color }}>{t.label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.55)" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pieces */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Các Loại <span style={{ color: "#DA0000" }}>Quân Cờ</span>
            </h2>
            <p className="text-sm" style={{ color: "rgba(240,237,224,0.45)" }}>
              6 loại quân do bạn tự đặt + 2 tàu có sẵn trên bản đồ. Hầu hết được úp mặt xuống khi bắt đầu.
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
                <div className="sm:w-1/3 flex-shrink-0 flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{piece.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="heading-font font-black text-sm" style={{ color: piece.color }}>{piece.name}</h3>
                      {piece.tag && (
                        <span className="px-1.5 py-0.5 text-[9px] heading-font font-bold rounded" style={{ background: "#DA000033", color: "#DA0000" }}>
                          {piece.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.35)" }}>
                      {piece.count}
                    </span>
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

          {/* Hidden pieces note */}
          <div className="mt-8 p-6 rounded-xl border border-dashed flex items-start gap-4"
            style={{ borderColor: "rgba(255,221,0,0.3)", background: "rgba(255,221,0,0.04)" }}>
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#FFDD00" }} />
            <div>
              <h4 className="heading-font font-bold mb-2" style={{ color: "#FFDD00" }}>💡 Về quân úp mặt</h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,224,0.6)" }}>
                Quân chưa bị lật có thể di chuyển tối đa <strong style={{ color: "#F0EDE0" }}>2 ô</strong> theo mọi hướng (thẳng và chéo), không được nhảy qua quân khác, và chưa dùng được kỹ năng đặc biệt. Khi bạn di chuyển hoặc tấn công bằng quân úp, nó sẽ tự động lật mặt lên để lộ danh tính.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Win/Lose */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(10,4,4,0.6)", borderTop: "1px solid rgba(218,0,0,0.12)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="display-font text-3xl font-bold mb-2" style={{ color: "#F0EDE0" }}>
              Thắng & <span style={{ color: "#DA0000" }}>Thua</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏆", cond: "Bắt quân Chỉ Huy của đối thủ", result: "THẮNG ngay", color: "#FFDD00", bg: "rgba(255,221,0,0.08)" },
              { icon: "💀", cond: "Quân Chỉ Huy của bạn bị bắt", result: "THUA ngay", color: "#DA0000", bg: "rgba(218,0,0,0.08)" },
              { icon: "🏳️", cond: "Nhấn đầu hàng", result: "THUA ngay", color: "#DA0000", bg: "rgba(218,0,0,0.06)" },
              { icon: "⏱️", cond: "Hết thời gian suy nghĩ", result: "THUA", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "📡", cond: "Mất kết nối quá lâu", result: "Xử thua", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
              { icon: "🤝", cond: "Cả hai mất kết nối", result: "Hủy trận", color: "#9CA3AF", bg: "rgba(255,255,255,0.03)" },
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
          Sẵn Sàng Bước Vào Sa Bàn?
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(240,237,224,0.45)" }}>
          Tạo tài khoản miễn phí và thử ngay trận đầu tiên của bạn.
        </p>
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
