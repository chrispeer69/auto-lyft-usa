/**
 * Guards against meta tags that Google will truncate in search results.
 *
 * Titles over ~60 characters and descriptions over ~160 get cut with an
 * ellipsis, which wastes the part you actually wanted read. Composing through
 * these helpers means a long city or service name can never silently push a
 * tag over the limit.
 */

export const TITLE_MAX = 60;
export const DESC_MAX = 158;

/** Truncate at a word boundary rather than mid-word. */
export const clamp = (text: string, max: number) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, '')}…`;
};

export const title = (text: string) => clamp(text, TITLE_MAX);
export const description = (text: string) => clamp(text, DESC_MAX);
