import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const AI_USER_AGENTS = [
  "gptbot",           // OpenAI GPT Crawler
  "chatgpt-user",     // OpenAI ChatGPT web browsing
  "oai-searchbot",    // OpenAI Search
  "claudebot",        // Anthropic Claude
  "anthropic",        // Anthropic generic
  "google-extended",  // Google Gemini / Bard
  "perplexitybot",    // Perplexity AI
  "cohere-ai",        // Cohere
  "omgili",           // Used by various datasets
  "bot",              // Generic catch-all for simpler bots (bingbot, googlebot)
  "spider",           // Generic
  "crawler"           // Generic
];

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  const isAIBot = AI_USER_AGENTS.some(bot => userAgent.includes(bot));
  const pathname = request.nextUrl.pathname;

  if (
    isAIBot && 
    !pathname.startsWith('/api') && 
    !pathname.startsWith('/_next') &&
    !pathname.match(/^\/(vi|en|zh)\/ai(\/|$)/) &&
    !pathname.startsWith('/ai') &&
    !pathname.includes('.')
  ) {
    const hasLocalePrefix = /^\/(vi|en|zh)(\/|$)/.test(pathname);
    let newPath = pathname;
    
    if (hasLocalePrefix) {
      newPath = pathname.replace(/^\/(vi|en|zh)/, '/$1/ai');
    } else {
      // Nếu next-intl đang điều hướng (ví dụ / -> /vi), hãy cho phép đổi ngôn ngữ trước
      if (response.status >= 300 && response.status < 400) {
        return response;
      }
      newPath = pathname === '/' ? '/ai' : `/ai${pathname}`;
    }
    
    const rewriteResponse = NextResponse.rewrite(new URL(newPath, request.url));
    
    // Giữ nguyên headers của ngôn ngữ từ next-intl
    response.headers.forEach((value, key) => {
      rewriteResponse.headers.set(key, value);
    });

    return rewriteResponse;
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|.*\\..*).*)']
};
