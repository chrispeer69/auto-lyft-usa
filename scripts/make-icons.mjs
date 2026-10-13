// Renders favicon PNGs and the 1200x630 social image from SVG. Run: node scripts/make-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";

const icon = readFileSync("public/favicon.svg");
for (const [file, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  await sharp(icon, { density: 600 }).resize(size, size).png().toFile(`public/${file}`);
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b1220"/>
  <polygon points="0,560 1200,470 1200,630 0,630" fill="#f59e0b"/>
  <g transform="translate(80,90) scale(3.2)">${icon.toString().replace(/<\/?svg[^>]*>/g, "")}</g>
  <text x="80" y="340" fill="#ffffff" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="92">AUTO LYFT USA</text>
  <text x="80" y="410" fill="#f59e0b" font-family="Arial, sans-serif" font-weight="700" font-size="40">24/7 Flatbed Towing · Columbus, Ohio</text>
  <text x="80" y="465" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="34">(614) 633-8163</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og.png");
console.log("icons + og.png written");
