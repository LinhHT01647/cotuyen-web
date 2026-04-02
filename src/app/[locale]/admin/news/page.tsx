"use client";

import { useEffect, useState } from "react";
import { Link, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Trash2, Edit3, PlusCircle, ExternalLink, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function AdminNewsDashboard() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const locale = useLocale();

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news?page=1&limit=50", {
        headers: {
          "Accept-Language": locale
        }
      });
      if (res.ok) {
        const data = await res.json();
        setNews(data.data || []);
      } else {
        setErrorMsg("Không thể tải danh sách bài viết từ Backend.");
      }
    } catch (err: any) {
      setErrorMsg("Lỗi mạng: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
      fetchNews();
    } else {
      router.push("/");
    }
  }, [router, locale]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}" vĩnh viễn không?`)) {
      return;
    }
    
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`/api/admin/news/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept-Language": locale
        }
      });
      
      const data = await res.json().catch(() => ({}));
      
      if (res.ok) {
        alert("Xóa thành công!");
        setNews(news.filter(n => n.id !== id));
      } else {
        alert(data.message || data.error || "Lỗi khi xóa bài viết");
      }
    } catch (err: any) {
      alert("Lỗi kết nối: " + err.message);
    }
  };

  if (!isAdmin) {
    return <div className="min-h-screen bg-[#0A0404] flex items-center justify-center text-white">Đang kiểm tra quyền hạn...</div>;
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b" style={{ borderColor: 'rgba(218,0,0,0.3)' }}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚙️</span>
              <span className="heading-font font-bold tracking-widest text-xs uppercase" style={{ color: "#DA0000" }}>
                Khu Vực Quản Trị
              </span>
            </div>
            <h1 className="heading-font text-3xl font-black text-white tracking-widest">
              QUẢN LÝ TIN TỨC / SỰ KIỆN
            </h1>
          </div>
          
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <button 
              onClick={fetchNews}
              disabled={loading}
              className="p-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            </button>
            <Link 
              href="/admin/news/create"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
                boxShadow: "0 0 15px rgba(218,0,0,0.4)",
              }}
            >
              <PlusCircle size={18} />
              BÀI VIẾT MỚI
            </Link>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded bg-red-500/10 border border-red-500 text-red-500 font-medium">
            {errorMsg}
          </div>
        )}

        {/* Data Table */}
        <div className="rounded-xl overflow-hidden" style={{ background: "rgba(18,10,10,0.8)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ background: "rgba(218,0,0,0.1)", borderBottom: "1px solid rgba(218,0,0,0.2)" }}>
                  <th className="px-6 py-4 heading-font font-bold text-xs tracking-widest text-[#FF5555]">BÀI VIẾT</th>
                  <th className="px-6 py-4 heading-font font-bold text-xs tracking-widest text-[#FF5555]">PHÂN LOẠI</th>
                  <th className="px-6 py-4 heading-font font-bold text-xs tracking-widest text-[#FF5555]">NGÀY ĐĂNG</th>
                  <th className="px-6 py-4 heading-font font-bold text-xs tracking-widest text-[#FF5555]">TÁC GIẢ</th>
                  <th className="px-6 py-4 heading-font font-bold text-xs tracking-widest text-[#FF5555] text-right">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading && news.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-white/40">
                      Đang tải danh sách bài viết...
                    </td>
                  </tr>
                ) : news.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-white/40">
                      Chưa có bài viết nào được đăng tải.
                    </td>
                  </tr>
                ) : (
                  news.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                            {item.coverImage ? (
                              <img src={item.coverImage} alt="" className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full bg-white/5 flex items-center justify-center text-xs">No Img</div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-[#F5EDE0] line-clamp-1">{item.title}</div>
                            <div className="text-xs text-white/40 mt-1">ID: {item.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded text-[10px] heading-font font-black tracking-widest uppercase"
                          style={item.tag === 'event' || item.type === 'event' 
                            ? { background: 'rgba(218,0,0,0.2)', color: '#FF5555', border: '1px solid rgba(218,0,0,0.3)' } 
                            : { background: 'rgba(255,255,255,0.05)', color: '#F0EDE0', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                          {item.tag || item.type || "NEWS"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white/60">
                        {new Date(item.createdAt).toLocaleDateString(locale)}
                      </td>
                      <td className="px-6 py-4 text-sm text-white/60">
                        {item.author || "Admin"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link 
                            href={`/chien-dich/${item.id}`}
                            className="p-2 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                            title="Xem trên trang"
                            target="_blank"
                          >
                            <ExternalLink size={18} />
                          </Link>
                          <Link 
                            href={`/admin/news/edit/${item.id}`}
                            className="p-2 rounded hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-colors"
                            title="Chỉnh sửa"
                          >
                            <Edit3 size={18} />
                          </Link>
                          <button 
                            onClick={() => handleDelete(item.id, item.title)}
                            className="p-2 rounded hover:bg-red-500/20 text-red-500 hover:text-red-400 transition-colors"
                            title="Xóa bài viết"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
