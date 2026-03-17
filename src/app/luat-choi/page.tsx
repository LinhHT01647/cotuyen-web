import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Map, Shield, Swords, Info } from "lucide-react";

const rules = [
  {
    title: "Mục Tiêu Trận Đánh",
    desc: "Tiêu diệt 'Chủ Tướng' của đối phương hoặc chiếm giữ hoàn toàn 'Cứ Điểm Trung Tâm' trong 3 lượt liên tiếp để giành chiến thắng vinh quang.",
    icon: Swords,
    color: "#DA0000",
  },
  {
    title: "Sa Bàn Chiến Thuật",
    desc: "Bàn cờ lưới 9x10 (91 điểm giao cắt). Ở giữa có 'Dòng Sông Chướng Ngại' chia đôi lãnh thổ, một số quân không thể vượt sông.",
    icon: Map,
    color: "#3A86FF",
  },
  {
    title: "Hàng Phòng Ngự (Sở Chỉ Huy)",
    desc: "Khu vực 3x3 ở giữa phần sân nhà. Chủ Tướng và Quân Cấm Vệ chỉ được di chuyển bên trong khu vực này để chỉ đạo toàn quân.",
    icon: Shield,
    color: "#F5C518",
  },
];

const pieces = [
  {
    name: "Chủ Tướng",
    move: "Di chuyển 1 bước dọc hoặc ngang. Không được ra khỏi 'Sở Chỉ Huy'. Hai Chủ Tướng không được 'nhìn thấy mặt nhau' trên cùng một trục dọc mà không có quân cản.",
  },
  {
    name: "Quân Cấm Vệ",
    move: "Di chuyển 1 bước chéo. Nhiệm vụ chính là bảo vệ Chủ Tướng. Không được phép rời khỏi 'Sở Chỉ Huy'.",
  },
  {
    name: "Tượng Binh",
    move: "Di chuyển 2 bước chéo (tạo thành hình vuông 2x2). Không thể vượt sông sang sân đối phương. Sẽ bị cản chặn nếu có quân ở mắt cờ trung gian.",
  },
  {
    name: "Kỵ Binh (Ngựa)",
    move: "Đi thẳng 1 bước rồi rẽ ngang/dọc 1 bước (hình chữ L). Sẽ bị cản nếu có quân đứng ngay hướng đi thẳng trước khi rẽ.",
  },
  {
    name: "Chiến Xa (Xe)",
    move: "Di chuyển dọc và ngang không giới hạn số ô, miễn là không bị quân khác cản đường. Đây là đơn vị tấn công mạnh nhất.",
  },
  {
    name: "Pháo Binh",
    move: "Cách đi giống Chiến Xa. Nhưng khi ăn quân đối phương, bắt buộc phải 'bay' qua đúng một quân cờ (bất kể phe nào) gọi là 'Ngòi'.",
  },
  {
    name: "Bộ Binh (Tốt)",
    move: "Đi thẳng tiến 1 bước. Sau khi vượt sông sang sân đối phương, có thể tiến ngang hoặc tiến thẳng 1 bước. Không bao giờ được đi lùi.",
  },
];

export default function LuatChoiPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vietnam.png"
            alt="Luật Chơi"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(10,4,4,0.7) 0%, rgba(10,4,4,0.95) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(218,0,0,0.1) 0%, transparent 70%)"
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5" style={{ color: "#DA0000" }} />
            <span className="text-xs heading-font font-semibold tracking-widest uppercase" style={{ color: "#DA0000" }}>
              Binh Pháp Yếu Lược
            </span>
          </div>

          <h1 className="display-font font-black mb-4" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#F5EDE0",
          }}>
            LUẬT CHƠI{" "}
            <span style={{
              background: "linear-gradient(135deg, #DA0000, #FF4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              CƠ BẢN
            </span>
          </h1>

          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
            Nắm vững binh pháp, thấu hiểu địa hình và vận dụng linh hoạt từng đơn vị quân.
            Đó là chìa khóa để giành lấy vinh quang trên sa bàn Cờ Tuyển.
          </p>
        </div>
      </section>

      {/* Basic Rules Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-opacity-10" style={{ borderColor: "#DA0000" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Nguyên Tắc{" "}
              <span style={{ color: "#DA0000" }}>Sa Bàn</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rules.map(rule => (
              <div
                key={rule.title}
                className="feature-card rounded-xl p-6 transition-all"
                style={{
                  background: "rgba(18,10,10,0.8)",
                  border: "1px solid rgba(218,0,0,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${rule.color}30`,
                  }}
                >
                  <rule.icon className="w-6 h-6" style={{ color: rule.color }} />
                </div>
                <h3 className="heading-font text-xl font-bold tracking-wide mb-3" style={{ color: "#F5EDE0" }}>
                  {rule.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pieces Movement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-bold" style={{ color: "#F5EDE0" }}>
              Hệ Thống{" "}
              <span style={{ color: "#DA0000" }}>Quân Cờ</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#9CA3AF" }}>
              Cách di chuyển và chiến đấu của 7 loại quân trên bàn cờ
            </p>
          </div>

          <div className="space-y-4">
            {pieces.map((piece, index) => (
              <div
                key={piece.name}
                className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg items-start sm:items-center transition-all bg-opacity-40"
                style={{
                  background: index % 2 === 0 ? "rgba(218,0,0,0.03)" : "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="sm:w-1/4 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#DA0000" }} />
                    <h3 className="heading-font font-bold text-lg" style={{ color: "#F5C518" }}>
                      {piece.name}
                    </h3>
                  </div>
                </div>
                <div className="sm:w-3/4">
                  <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
                    {piece.move}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-xl border border-dashed flex items-start gap-4" style={{ borderColor: 'rgba(218,0,0,0.3)', background: 'rgba(218,0,0,0.05)'}}>
             <Info className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#DA0000" }} />
             <div>
                <h4 className="heading-font font-bold mb-2" style={{ color: "#F5EDE0"}}>Quy Tắc Ăn Quân</h4>
                <p className="text-sm" style={{ color: "#9CA3AF"}}>Khi một quân cờ di chuyển đến vị trí đang bị chiếm giữ bởi quân của đối phương, quân đối phương sẽ bị loại khỏi bàn cờ (bị ăn). Các quân không thể di chuyển đến vị trí đã có quân cùng phe đang đứng.</p>
             </div>
          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "rgba(18,10,10,0.4)" }}>
        <h2 className="display-font text-3xl font-bold mb-6" style={{ color: "#F5EDE0" }}>
          Đã Nắm Đủ Chinh Thao?
        </h2>
        <Link
          href="/dang-nhap"
          className="inline-block px-8 py-3 rounded heading-font font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #DA0000, #FF2020)",
            boxShadow: "0 0 20px rgba(218,0,0,0.4)",
          }}
        >
          THAM KHẢO THỰC CHIẾN
        </Link>
      </section>

      <Footer />
    </main>
  );
}
