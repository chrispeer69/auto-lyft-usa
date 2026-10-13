// Renders favicon PNGs and the 1200x630 social image from SVG. Run: node scripts/make-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";

const icon = readFileSync("public/favicon.svg");
for (const [file, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  await sharp(icon, { density: 600 }).resize(size, size).png().toFile(`public/${file}`);
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><radialGradient id="g" cx="0.9" cy="0" r="0.8"><stop offset="0" stop-color="#c81e1e" stop-opacity="0.45"/><stop offset="1" stop-color="#c81e1e" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#0f1419"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="622" width="1200" height="8" fill="#c81e1e"/>
  <g transform="translate(80,90) scale(3.2)">${icon.toString().replace(/<\/?svg[^>]*>/g, "")}</g>
  <text x="80" y="340" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="88">Auto Lyft USA</text>
  <text x="80" y="410" fill="#ffffff" fill-opacity="0.85" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="40">24/7 Flatbed Towing · Columbus, Ohio</text>
  <text x="80" y="465" fill="#ff6b6b" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="38">(614) 633-8163</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og.png");
console.log("icons + og.png written");
