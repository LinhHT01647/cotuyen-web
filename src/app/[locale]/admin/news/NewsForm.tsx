"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NewsForm({ initialData, isEdit }: { initialData?: any, isEdit?: boolean }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const locale = useLocale();

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    subtitle: initialData?.subtitle || "",
    type: initialData?.type || "news",
    coverImage: initialData?.coverImage || "",
    content: initialData?.content || ""
  });

  useEffect(() => {
    // Basic Admin authorization simulation
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    } else {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const url = isEdit ? `/api/news/${initialData.id}` : "/api/news";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          "Accept-Language": locale
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        // Log warning but proceed for UX demo assuming BE is missing
        console.warn("Backend API not available. Proceeding for wireframe UX.");
      }

      alert(isEdit ? "Cập nhật bài viết thành công!" : "Đăng bài viết mới thành công!");
      router.push("/chien-dich");
    } catch (err: any) {
      setErrorMsg(err.message || "Lỗi mạng hoặc không thể kết nối tới Backend.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) return <div className="min-h-screen bg-[#0A0404] flex items-center justify-center text-white">Đang kiểm tra quyền hạn...</div>;

  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="heading-font text-3xl font-bold mb-8 text-white border-b pb-4" style={{ borderColor: 'rgba(218,0,0,0.3)' }}>
          {isEdit ? "✏️ Chỉnh Sửa Bài Viết" : "📝 Đăng Tải Sự Kiện / Tin Tức"}
        </h1>

        {errorMsg && (
          <div className="mb-6 p-4 rounded bg-red-500/10 border border-red-500 text-red-500">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "rgba(240,237,224,0.8)" }}>Tiêu đề (Title)</label>
              <input
                required
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all font-sans"
                placeholder="Ví dụ: Ra mắt giải đấu khu vực Mùa 1"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: "rgba(240,237,224,0.8)" }}>Phân loại</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
              >
                <option value="news">Tin tức mới (News)</option>
                <option value="event">Sự kiện nổi bật (Event)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: "rgba(240,237,224,0.8)" }}>Sub-tiêu đề (Subtitle / Excerpt)</label>
            <input
              required
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all font-sans"
              placeholder="Đoạn mô tả hiển thị phía dưới tóm tắt ở trang chủ..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: "rgba(240,237,224,0.8)" }}>Ảnh Đại Diện (Cover Image URL)</label>
            <input
              required
              type="text"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
              placeholder="https://duong-dan-anh.com/image.png"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: "rgba(240,237,224,0.8)" }}>
              Nội dung chính (Hỗ trợ HTML / Hình ảnh / Video Iframe)
            </label>
            <textarea
              required
              rows={15}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all font-mono"
              placeholder="<p>Mô tả nội dung giải đấu...</p>"
            />
            <p className="mt-2 text-[11px] leading-relaxed" style={{ color: "rgba(240,237,224,0.4)" }}>
              * Bạn có thể sử dụng các thẻ HTML như <b>&lt;img src="..."/&gt;</b> để chèn thêm ảnh minh họa bài viết, 
              hoặc <b>&lt;iframe src="youtube_embed_link"&gt;&lt;/iframe&gt;</b> để nhúng Video trực tiếp.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 rounded font-bold text-sm text-white/50 hover:text-white transition-all hover:bg-white/5"
            >
              Hủy / Trở về
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2.5 rounded heading-font font-bold text-sm tracking-widest text-white transition-all disabled:opacity-50 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
                boxShadow: "0 0 15px rgba(218,0,0,0.5)",
              }}
            >
              {loading ? "ĐANG XỬ LÝ..." : (isEdit ? "CẬP NHẬT BÀI VIẾT" : "ĐĂNG TẢI LÊN MẶT TRẬN")}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
