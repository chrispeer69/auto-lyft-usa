// @ts-check
import { defineConfig } from "astro/config";

// Static build. Every page is prerendered HTML, so crawlers get the full copy,
// schema and links without running JavaScript.
export default defineConfig({
  site: "https://autolyftusa.online",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "auto" },
  compressHTML: true,
});
