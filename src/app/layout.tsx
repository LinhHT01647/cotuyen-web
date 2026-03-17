import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Cờ Tuyển — Chiến Đấu, Đoàn Kết, Vinh Quang",
  description:
    "Cờ Tuyển — Tựa game chiến thuật kết hợp tinh thần dân tộc Việt Nam. Tham gia cộng đồng, tranh tài giải đấu và khẳng định bản thân.",
  keywords: ["Cờ Tuyển", "game chiến thuật", "game Việt Nam", "board game", "online chess"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
