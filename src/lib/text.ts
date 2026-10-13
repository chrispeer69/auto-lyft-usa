/** Copy helpers. Data files may contain `[label](/path)` links; these render them
    as HTML for the page and as plain text for JSON-LD and llms.txt. */

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Escape text and turn `[label](/path)` into internal anchors. */
export function rich(s: string): string {
  let out = "";
  let last = 0;
  for (const m of s.matchAll(LINK)) {
    out += escapeHtml(s.slice(last, m.index));
    out += `<a href="${escapeHtml(m[2])}">${escapeHtml(m[1])}</a>`;
    last = (m.index ?? 0) + m[0].length;
  }
  return out + escapeHtml(s.slice(last));
}

/** Strip link syntax to plain text. */
export function plain(s: string): string {
  return s.replace(LINK, "$1");
}

/** Every internal path linked from a piece of copy (used by the link checker). */
export function linkedPaths(s: string): string[] {
  return [...s.matchAll(LINK)].map((m) => m[2]);
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
