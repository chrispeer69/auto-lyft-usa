/*
  Keeps a private, read-only copy of the sister site's current main branch
  (github.com/chrispeer69/columbus-towing) in .sister/columbus-towing, so the
  overlap check always compares against what is live, not whatever branch a
  local Roadside checkout happens to be on. Never touches any Roadside checkout.

  Skipped when SISTER_SRC is set (the cloud routines clone the repo themselves).
  If the network is down, the existing copy is used and a warning is printed.
*/
import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";

if (process.env.SISTER_SRC) process.exit(0);
const DIR = ".sister/columbus-towing";
const URL = "https://github.com/chrispeer69/columbus-towing.git";
const run = (cmd) => execSync(cmd, { stdio: ["ignore", "pipe", "pipe"], encoding: "utf8" }).trim();
try {
  if (!existsSync(`${DIR}/.git`)) {
    mkdirSync(".sister", { recursive: true });
    run(`git clone --depth 1 --branch main --single-branch ${URL} ${DIR}`);
  } else {
    run(`git -C ${DIR} fetch --depth 1 origin main`);
    run(`git -C ${DIR} reset --hard FETCH_HEAD`);
  }
  console.log(`Sister source: columbus-towing main @ ${run(`git -C ${DIR} log -1 --format="%h %cs %s"`)}`);
} catch (e) {
  if (!existsSync(`${DIR}/.git`)) {
    console.error(`Could not clone ${URL}: ${e.stderr || e.message}`);
    process.exit(2);
  }
  console.warn(`Warning: could not refresh the sister copy (${(e.stderr || e.message).split("\n")[0]}); using the cached one.`);
}
