import type { APIRoute } from "astro";
import { SITE_URL } from "../data/company";

// Search and AI answer engines are allowed explicitly; no crawl-delay. /go/ ad
// landers are not disallowed: crawlers must fetch them to see their noindex tag.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot", "Googlebot", "DuckAssistBot", "CCBot"];

export const GET: APIRoute = () =>
  new Response(
    [
      "# Auto Lyft USA",
      `# Plain-text site summaries: ${SITE_URL}/llms.txt and ${SITE_URL}/llms-full.txt`,
      "",
      "User-agent: *",
      "Allow: /",
      "",
      ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
      `Sitemap: ${SITE_URL}/sitemap.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
