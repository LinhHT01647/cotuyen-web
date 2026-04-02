"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NewsForm from "../../NewsForm";

// Dummy data for Edit fallback when BE api not ready 
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
  views: 15421
};

export default function EditNewsPage() {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { useLocale } = require('next-intl');
  const locale = useLocale();

  useEffect(() => {
    // Fetch original article to edit
    const fetchData = async () => {
      try {
        if (!params?.id) return;
        const res = await fetch(`/api/news/${params.id}`, {
          headers: {
            "Accept-Language": locale
          }
        });
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          // Fallback missing backend
          setData({ ...dummyArticleDetail, id: params.id });
        }
      } catch {
        setData({ ...dummyArticleDetail, id: params.id });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params?.id]);

  if (loading) {
    return <main className="min-h-screen pt-20 flex items-center justify-center heading-font text-xl text-red-500 bg-[#0A0404]">ĐANG KẾT NỐI HỒ SƠ TỪ TIỀN TUYẾN...</main>;
  }

  return <NewsForm initialData={data} isEdit={true} />;
}
