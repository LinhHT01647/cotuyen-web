"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AIPage() {
  const t = useTranslations('AIPage');

  return (
    <article>
      <section style={{ marginBottom: "2rem" }}>
        <h2>[{t('context')}]</h2>
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
        <h2>[{t('actions')}]</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "2rem", lineHeight: "1.8" }}>
          <li>
            <Link href="/ai/news" style={{ color: "#00FF00", textDecoration: "underline" }}>
              /ai/news ({t('news')})
            </Link>
          </li>
          <li>
            <Link href="/ai/rules" style={{ color: "#00FF00", textDecoration: "underline" }}>
              /ai/rules ({t('rules')})
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#00FF00", textDecoration: "underline" }}>
              / ({t('home')})
            </Link>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>[{t('semantic')}]</h2>
        <p>{t('semantic_desc')}</p>
        <p>{t('current_title')} Cờ Tuyến</p>
      </section>
    </article>
  );
}
