"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AIPage() {
  const t = useTranslations('Index'); // Fallback to Index localization for now

  return (
    <article>
      <section style={{ marginBottom: "2rem" }}>
        <h2>[System Context]</h2>
        <pre style={{ whiteSpace: "pre-wrap", background: "#111", padding: "1rem", border: "1px solid #333" }}>
{`Game Name: Command Chess / Cờ Tuyến
Genre: Strategy / Sandbox Board Game
Status: Live
Endpoints:
  - Human Web UI: /vi | /en | /zh
  - AI Web UI (This page): /[locale]/ai
  - REST APIs: /api/v1/auth | /api/v1/user | /api/admin/news`}
        </pre>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>[Action Items / Links]</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "2rem", lineHeight: "1.8" }}>
          <li>
            <Link href="/ai/news" style={{ color: "#00FF00", textDecoration: "underline" }}>
              /ai/news (Get latest campaigns & updates)
            </Link>
          </li>
          <li>
            <Link href="/ai/rules" style={{ color: "#00FF00", textDecoration: "underline" }}>
              /ai/rules (Read strict game rules for agent simulations)
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#00FF00", textDecoration: "underline" }}>
              / (Return to Human GUI)
            </Link>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>[Semantic Info]</h2>
        <p>The AI interface completely strips visual noise (CSS animations, heavy images, javascript sliders) to reduce context length during scraping. Navigation is strictly text-based.</p>
        <p>Current Client Localized Title: {t('hero.title1')} {t('hero.title2')}</p>
      </section>
    </article>
  );
}
