/*
  Ping IndexNow (Bing, Yandex, Seznam, Naver...) with recently changed URLs.
  Usage after deploy:  node scripts/indexnow.mjs            (pages whose lastmod is within 3 days)
                       node scripts/indexnow.mjs --all      (every URL in the sitemap)
  The key file is public/bfd1e370ded6e766059fd039d6967140.txt and must be live on the site first.
*/
import { readFileSync } from "node:fs";
const KEY = "bfd1e370ded6e766059fd039d6967140";
const HOST = "autolyftusa.online";
const xml = readFileSync("dist/sitemap.xml", "utf8");
const all = [...xml.matchAll(/<loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)].map((m) => ({ url: m[1], lastmod: m[2] }));
const cutoff = Date.now() - 3 * 864e5;
const urlList = (process.argv.includes("--all") ? all : all.filter((u) => Date.parse(u.lastmod) >= cutoff)).map((u) => u.url);
if (!urlList.length) { console.log("Nothing changed in the last 3 days."); process.exit(0); }
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
