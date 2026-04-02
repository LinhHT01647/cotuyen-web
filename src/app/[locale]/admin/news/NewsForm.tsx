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

  // Active locale tab for editing (vi, en, zh)
  const [activeTab, setActiveTab] = useState<"vi" | "en" | "zh">("vi");

  // Multi-language states matching Backend CreateNewsRequest
  const [formData, setFormData] = useState({
    title_vi: initialData?.title_vi || initialData?.title || "",
    title_en: initialData?.title_en || "",
    title_zh: initialData?.title_zh || "",
    content_vi: initialData?.content_vi || initialData?.content || "",
    content_en: initialData?.content_en || "",
    content_zh: initialData?.content_zh || "",
    tag: initialData?.tag || "news",
    coverImage: initialData?.coverImage || "",
    isPublished: initialData?.isPublished ?? true,
  });

  useEffect(() => {
    // Admin authorization check
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
      const url = isEdit ? `/api/admin/news/${initialData.id}` : "/api/admin/news";
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
      
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || data.error || "Gặp lỗi kết nối tự máy chủ. Không thể lưu bài viết.");
      }

      alert(isEdit ? "Cập nhật bài viết thành công!" : "Đăng bài viết mới thành công!");
      router.push("/admin/news");
      router.refresh();
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
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="heading-font text-3xl font-black mb-8 text-white border-b pb-4 tracking-widest" style={{ borderColor: 'rgba(218,0,0,0.3)' }}>
          {isEdit ? "✏️ CHỈNH SỬA BÀI VIẾT" : "⚔ ĐĂNG TẢI LÊN MẶT TRẬN"}
        </h1>

        {errorMsg && (
          <div className="mb-6 p-4 rounded bg-red-500/10 border border-red-500 text-red-500 font-medium tracking-wide">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* General info */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl heading-font font-bold mb-4 text-[#F0EDE0]">1. THÔNG TIN CHUNG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.6)" }}>Phân loại Tag</label>
                <select
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none transition-all"
                >
                  <option value="news">TIN TỨC BÌNH THƯỜNG (NEWS)</option>
                  <option value="event">SỰ KIỆN QUAN TRỌNG (EVENT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase heading-font tracking-widest" style={{ color: "rgba(240,237,224,0.6)" }}>Ảnh Đại Diện (URL)</label>
                <input
                  required
                  type="text"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all font-mono"
                  placeholder="https://image-url.com/poster.png"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-lg bg-black/30 border border-white/5 w-fit hover:bg-white/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    className="w-5 h-5 accent-red-600 rounded"
                  />
                  <span className="text-sm font-bold tracking-widest text-[#F0EDE0] uppercase">Hiển thị công khai với mọi người (Published)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Multi-language content */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl heading-font font-bold mb-6 text-[#F0EDE0]">2. NỘI DUNG ĐA NGÔN NGỮ (I18N)</h2>
            
            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 mb-6">
              {[
                { id: "vi", label: "🇻🇳 TIẾNG VIỆT", req: true },
                { id: "en", label: "🇬🇧 HIỂN THỊ QUỐC TẾ (ENGLISH)", req: true },
                { id: "zh", label: "🇨🇳 TIẾNG TRUNG", req: false },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 text-sm heading-font font-bold tracking-widest rounded-t-lg transition-all border border-transparent ${
                    activeTab === tab.id 
                      ? "bg-[#DA0000]/10 text-[#DA0000] border-b-[#DA0000] border-b-2" 
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {tab.label} {tab.req && <span className="text-red-500">*</span>}
                </button>
              ))}
            </div>

            {/* Editing fields tied to active Tab */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase heading-font tracking-widest text-[#F5EDE0]">
                  Tiêu đề <span className="text-red-500">{activeTab === 'vi' || activeTab === 'en' ? "*" : ""}</span>
                </label>
                <input
                  required={activeTab === 'vi' || activeTab === 'en'}
                  type="text"
                  value={activeTab === 'vi' ? formData.title_vi : (activeTab === 'en' ? formData.title_en : formData.title_zh)}
                  onChange={(e) => {
                    if (activeTab === 'vi') setFormData({ ...formData, title_vi: e.target.value });
                    if (activeTab === 'en') setFormData({ ...formData, title_en: e.target.value });
                    if (activeTab === 'zh') setFormData({ ...formData, title_zh: e.target.value });
                  }}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-[#DA0000] focus:outline-none focus:ring-1 focus:ring-[#DA0000] transition-all"
                  placeholder={`Nhập tiêu đề (${activeTab.toUpperCase()})...`}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase heading-font tracking-widest text-[#F5EDE0]">
                  Thân bài viết (Hỗ trợ HTML/iframe) <span className="text-red-500">{activeTab === 'vi' || activeTab === 'en' ? "*" : ""}</span>
                </label>
                <textarea
                  required={activeTab === 'vi' || activeTab === 'en'}
                  rows={15}
                  value={activeTab === 'vi' ? formData.content_vi : (activeTab === 'en' ? formData.content_en : formData.content_zh)}
                  onChange={(e) => {
                    if (activeTab === 'vi') setFormData({ ...formData, content_vi: e.target.value });
                    if (activeTab === 'en') setFormData({ ...formData, content_en: e.target.value });
                    if (activeTab === 'zh') setFormData({ ...formData, content_zh: e.target.value });
                  }}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-black/50 border border-white/10 text-white focus:border-[#DA0000] focus:outline-none focus:ring-1 focus:ring-[#DA0000] transition-all font-mono"
                  placeholder={`<p>Chi tiết bài viết ngôn ngữ ${activeTab.toUpperCase()}...</p>`}
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-6 border-t border-white/10 flex justify-end gap-3 sticky bottom-4 bg-[#0A0404]/90 p-4 rounded-xl backdrop-blur">
            <button
              type="button"
              onClick={() => router.push('/admin/news')}
              className="px-6 py-2.5 rounded font-bold text-sm text-white/50 hover:text-white transition-all hover:bg-white/5 uppercase tracking-widest border border-transparent hover:border-white/10"
            >
              Hủy / Trở về
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 rounded heading-font font-black tracking-widest text-white transition-all disabled:opacity-50 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
                boxShadow: "0 0 20px rgba(218,0,0,0.6)",
              }}
            >
              {loading ? "ĐANG XỬ LÝ..." : (isEdit ? "☑ LƯU THAY ĐỔI" : "🚀 ĐĂNG TẢI LÊN MẶT TRẬN")}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
