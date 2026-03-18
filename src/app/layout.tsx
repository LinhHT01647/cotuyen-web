import type { Metadata } from "next";
import "@/styles/globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Cờ Tuyến — Mưu Lược, Chiến Thuật, Đỉnh Cao",
  description:
    "Cờ Tuyến — Tựa game chiến thuật mô phỏng chiến trường đỉnh cao. Tham gia cộng đồng, tranh tài giải đấu và khẳng định bản thân.",
  keywords: ["Cờ Tuyến", "game chiến thuật", "strategy game", "board game", "online chess"],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
