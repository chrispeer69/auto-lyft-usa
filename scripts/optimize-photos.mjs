/*
  Turns source photos (PNG/JPG) into the WebP files the site serves.
  Usage: node scripts/optimize-photos.mjs <source-folder>
  Files named hero-* or city-* are kept wide (1920px); everything else is 1200px.
  Each photo also gets a -640 copy for phones and small slots (srcset).
  Swap in Lisa's real photos by giving them the same names as the files in public/img.
*/
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { join, parse } from "node:path";

const src = process.argv[2];
if (!src) { console.error("Usage: node scripts/optimize-photos.mjs <source-folder>"); process.exit(1); }
for (const f of readdirSync(src).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const { name } = parse(f);
  const width = /^(hero|city)-/.test(name) ? 1920 : 1200;
  await sharp(join(src, f)).resize({ width, withoutEnlargement: true }).webp({ quality: 74 }).toFile(join("public/img", `${name}.webp`));
  await sharp(join(src, f)).resize({ width: 640 }).webp({ quality: 72 }).toFile(join("public/img", `${name}-640.webp`));
  console.log(`public/img/${name}.webp (+640)`);
}
