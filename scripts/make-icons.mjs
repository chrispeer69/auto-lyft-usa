// Renders favicon PNGs and the 1200x630 social image from SVG. Run: node scripts/make-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";

const icon = readFileSync("public/favicon.svg");
for (const [file, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  await sharp(icon, { density: 600 }).resize(size, size).png().toFile(`public/${file}`);
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0c0e11"/>
  <rect x="80" y="150" width="8" height="120" fill="#c4161c"/>
  <text x="116" y="232" fill="#ffffff" font-family="Arial, sans-serif" font-weight="700" font-size="76" letter-spacing="5">AUTO LYFT USA</text>
  <text x="118" y="266" fill="#868f9c" font-family="Arial, sans-serif" font-size="22" letter-spacing="8">TOWING · COLUMBUS, OHIO</text>
  <line x1="80" y1="380" x2="1120" y2="380" stroke="#262b33" stroke-width="2"/>
  <text x="80" y="450" fill="#c7ccd4" font-family="Arial, sans-serif" font-size="36">24-7 towing and roadside help</text>
  <text x="80" y="510" fill="#ffffff" font-family="Arial, sans-serif" font-weight="700" font-size="40">(614) 633-8163</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og.png");
console.log("icons + og.png written");
