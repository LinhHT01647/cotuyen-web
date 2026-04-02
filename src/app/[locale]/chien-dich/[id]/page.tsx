"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Eye, Calendar, AlertTriangle, ArrowLeft, Edit3 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Dummy data fallback aligning with assumed API
const dummyArticleDetail = {
  id: "1",
  title: "Ra mắt giải đấu Mùa 1: Tâm Điểm Trận Chiến",
  subtitle: "Cùng tham gia giải đấu thể thao điện tử chuyên nghiệp đầu tiên của Cờ Tuyến với tổng giải thưởng lên đến 500 triệu đồng.",
  content: `
    <p>Giải đấu thể thao điện tử chuyên nghiệp đầu tiên của Cờ Tuyến với tổng giải thưởng khổng lồ lên đến 500 triệu đồng chính thức khởi tranh. Tham gia ngay để chứng tỏ bản lĩnh chỉ huy xuất chúng và tranh giành vinh quang trên đấu trường quốc tế.</p>
    <br/>
    <h3>Cơ cấu giải thưởng</h3>
    <ul>
      <li><strong>Quán quân:</strong> 250,000,000 VNĐ + Cúp vô địch + Skin Độc Quyền</li>
      <li><strong>Á quân:</strong> 100,000,000 VNĐ + Huy Chương Bạc</li>
      <li><strong>Hạng 3 - 4:</strong> 40,000,000 VNĐ</li>
    </ul>
    <br/>
    <p>Giải đấu sẽ được live-stream trực tiếp trên các nền tảng mạng xã hội chính thức của Cờ Tuyến. Hãy đón xem!</p>
  `,
  coverImage: "/images/hero-vietnam.png",
  type: "event",
  views: 15421,
  createdAt: "2026-04-02T10:00:00Z",
  authorId: "admin_hq"
};

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const t = useTranslations('News');
  const locale = useLocale();
  
  useEffect(() => {
    if (!params?.id) return;
    const role = localStorage.getItem("role");
    if (role === "admin") setIsAdmin(true);

    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/news/${params.id}`, {
          headers: {
            'Accept-Language': locale
          }
        });
        if (res.ok) {
          const data = await res.json();
          setArticle(data);
        } else {
          setArticle(dummyArticleDetail);
        }
      } catch (err) {
        setArticle(dummyArticleDetail);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params?.id, locale]);

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "#0A0404" }}>
      <Nav />
      
      {loading ? (
        <div className="flex-1 flex items-center justify-center pt-20">
           <div className="text-center text-red-500 animate-pulse heading-font font-bold">
             {t('loading')}
           </div>
        </div>
      ) : !article ? (
        <div className="flex-1 flex flex-col items-center justify-center pt-20 text-center" style={{ color: "rgba(240,237,224,0.6)" }}>
          <AlertTriangle size={48} className="mb-4 text-red-500" />
          <h2 className="heading-font font-bold text-2xl mb-2 text-white">404 LỖI / ERROR</h2>
          <Link href="/chien-dich" className="mt-6 text-red-500 hover:underline">← {t('back')}</Link>
        </div>
      ) : (
        <div className="flex-1 w-full pb-20">
          <div className="relative w-full h-[40vh] sm:h-[55vh] max-h-[600px] mt-16 sm:mt-0">
            <Image
              src={article.coverImage || "/images/hero-vietnam.png"}
              alt={article.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(10,4,4,1) 0%, rgba(10,4,4,0.7) 40%, transparent 100%)"
            }} />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-48 relative z-10">
            <Link href="/chien-dich" className="inline-flex items-center gap-1 text-sm font-medium hover:text-white transition-colors mb-4" style={{ color: "rgba(240,237,224,0.5)" }}>
              <ArrowLeft size={16} /> {t('back')}
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded text-xs heading-font font-black tracking-widest uppercase shadow-lg"
                style={article.type === 'event' ? { background: '#DA0000', color: '#FFF' } : { background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#F0EDE0', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {article.type === 'event' ? 'EVENT' : 'NEWS'}
              </span>
              
              {isAdmin && (
                <Link
                  href={`/admin/news/edit/${article.id}`}
                  className="flex items-center gap-1.5 px-3 py-1 rounded text-xs heading-font font-semibold transition-all hover:bg-white/10"
                  style={{ color: "#F5C518", border: "1px solid #F5C518" }}
                >
                  <Edit3 size={12} />
                  {t('edit')}
                </Link>
              )}
            </div>

            <h1 className="display-font text-3xl sm:text-5xl font-bold leading-tight mb-4" style={{ color: "#F5EDE0" }}>
              {article.title}
            </h1>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(240,237,224,0.7)" }}>
              {article.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 py-4 border-y" style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(240,237,224,0.4)" }}>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(article.createdAt).toLocaleString(locale)}</span>
              </div>
              <div className="flex items-center gap-2 font-bold" style={{ color: "#DA0000" }}>
                <Eye size={18} />
                <span className="tracking-wide text-[#F5C518]">{(article.views || 0).toLocaleString()} {t('views')}</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 content-body">
            <div 
              className="prose prose-invert prose-red max-w-none prose-lg" 
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>
        </div>
      )}

      <Footer />
      
      <style dangerouslySetInnerHTML={{__html: `
        .content-body h2, .content-body h3 { color: #f5ede0; font-family: var(--font-heading); font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; }
        .content-body p { color: rgba(240,237,224,0.75); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1.05rem; }
        .content-body ul { color: rgba(240,237,224,0.75); list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .content-body li { margin-bottom: 0.5rem; }
        .content-body img { border-radius: 0.5rem; width: 100%; height: auto; margin: 2rem 0; border: 1px solid rgba(255,255,255,0.1); }
        .content-body iframe { width: 100%; aspect-ratio: 16/9; margin: 2rem 0; border-radius: 0.5rem; border: none; }
      `}} />
    </main>
  );
}
