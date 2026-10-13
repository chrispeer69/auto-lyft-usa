/** Deterministically pick one variant per page, so shared blocks don't print the
    same sentence on every page. */
export function pick<T>(key: string, options: T[]): T {
  let h = 0;
  for (const ch of key) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return options[h % options.length];
}
