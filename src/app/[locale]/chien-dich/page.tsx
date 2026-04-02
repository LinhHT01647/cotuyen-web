"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { ChevronRight, Eye, Calendar, PlusCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Dummy data fallback
const dummyNews = [
  {
    id: "1",
    title: "Ra mắt giải đấu Mùa 1: Tâm Điểm Trận Chiến",
    subtitle: "Cùng tham gia giải đấu thể thao điện tử chuyên nghiệp đầu tiên của Cờ Tuyến với tổng giải thưởng lên đến 500 triệu đồng.",
    coverImage: "/images/hero-vietnam.png",
    type: "event",
    views: 15420,
    createdAt: "2026-04-02T10:00:00Z"
  },
  {
    id: "2",
    title: "Cập nhật bản đồ Sương Mù & Thay đổi chiến thuật",
    subtitle: "Chi tiết các thay đổi nhằm cân bằng sức mạnh phòng thủ và khả năng cơ động của các thiết giáp trên chiến trường.",
    coverImage: "/images/mother-farewell.png",
    type: "news",
    views: 8320,
    createdAt: "2026-03-28T15:30:00Z"
  }
];

export default function ChienDichPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const t = useTranslations('News');
  const locale = useLocale();

  useEffect(() => {
    // Check role from localStorage
    const role = localStorage.getItem("role");
    if (role === "admin") setIsAdmin(true);

    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news?page=1&limit=10", {
          headers: {
            'Accept-Language': locale
          }
        });
        if (res.ok) {
          const data = await res.json();
          setNews(data.data || []);
        } else {
          // Fallback to dummy data mapping assumed API structure
          setNews(dummyNews);
        }
      } catch (err) {
        setNews(dummyNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [locale]);

  return (
    <main className="min-h-screen" style={{ background: "#0A0404" }}>
      <Nav />

      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vietnam.png"
            alt="Hero Banner"
            fill
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, rgba(10,4,4,1) 0%, rgba(10,4,4,0.4) 100%)"
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📰</span>
              <span
                className="heading-font font-semibold tracking-widest text-xs uppercase"
                style={{ color: "#DA0000" }}
              >
                {t('title')}
              </span>
            </div>
            <h1 className="display-font text-4xl sm:text-5xl font-bold" style={{ color: "#F5EDE0" }}>
              {t('title').split(' ')[0]}{" "}
              <span style={{
                background: "linear-gradient(135deg, #FFDD00, #F5C518)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {t('title').split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
          
          {isAdmin && (
            <Link 
              href="/admin/news/create"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg heading-font font-bold text-sm tracking-wide text-white transition-all hover:scale-105 hidden sm:flex"
              style={{
                background: "linear-gradient(135deg, #DA0000 0%, #FF2020 100%)",
                boxShadow: "0 0 20px rgba(218,0,0,0.5)",
              }}
            >
              <PlusCircle size={18} />
              {t('create')}
            </Link>
          )}
        </div>
      </section>

      {/* News List Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
             <div className="text-center py-20 text-red-500 animate-pulse heading-font font-bold">
               {t('loading')}
             </div>
          ) : news.length === 0 ? (
             <div className="text-center py-20" style={{ color: "rgba(240,237,224,0.4)" }}>
               {t('empty')}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/chien-dich/${item.id}`}
                  className="group rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(18,10,10,0.8)",
                    border: "1px solid rgba(218,0,0,0.18)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.coverImage || "/images/hero-vietnam.png"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badge type */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded text-[10px] heading-font font-black tracking-widest uppercase shadow-lg"
                      style={item.type === 'event' ? { background: '#DA0000', color: '#FFF' } : { background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#F0EDE0', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      {item.type === 'event' ? 'EVENT' : 'NEWS'}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="heading-font text-lg font-bold mb-2 tracking-wide leading-snug line-clamp-2" style={{ color: "#F5EDE0" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm line-clamp-3 mb-6" style={{ color: "rgba(240,237,224,0.5)" }}>
                      {item.subtitle}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between text-xs" style={{ color: "rgba(240,237,224,0.3)" }}>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(item.createdAt).toLocaleDateString(locale)}
                      </div>
                      <div className="flex items-center gap-1.5 font-bold" style={{ color: "#F5C518" }}>
                        <Eye size={14} />
                        {(item.views || 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
