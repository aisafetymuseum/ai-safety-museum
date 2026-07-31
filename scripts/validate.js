#!/usr/bin/env node
/* Museum validator: runs the manifest + every content file in a sandbox,
   including the room composer, then checks the composed building.
   CI runs this on every PR; you can run it locally with `node scripts/validate.js`. */
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
process.chdir(path.join(__dirname, ".."));

const ctx = { console };
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });

const fail = msg => { console.error("✗ " + msg); process.exitCode = 1; };
const ok = msg => console.log("✓ " + msg);

run("manifest.js");
for (const f of vm.runInContext("CONTENT_FILES", ctx)) run(f);

const { MAP, MW, MH, EXHIBITS, ZONES, WINGNAME, HALLORDER, SHOP, BOARDROWS, WAYPOINTS } =
  vm.runInContext("({ MAP, MW, MH, EXHIBITS, ZONES, WINGNAME, HALLORDER, SHOP, BOARDROWS, WAYPOINTS })", ctx);

/* map integrity */
if (!MAP.every(r => r.length === MAP[0].length)) fail("map rows are not all the same length");
else ok(`map is ${MW}x${MH}, all rows equal`);

/* exhibits */
const chars = Object.keys(EXHIBITS);
ok(chars.length + " exhibits registered");
const ns = chars.map(c => EXHIBITS[c].n).sort((a, b) => a - b);
if (!ns.every((n, i) => n === i + 1)) fail("exhibit numbering is not contiguous 1..N");

const mapText = MAP.join("");
for (const ch of chars) {
  const e = EXHIBITS[ch];
  if (!mapText.includes(ch)) fail(`exhibit "${e.t}" (char ${JSON.stringify(ch)}) is not on the map`);
  if (!e.t || !e.obj || !Array.isArray(e.body) || !e.body.length)
    fail(`exhibit "${e.t || ch}" is missing t/obj/body`);
  if (!WINGNAME[e.wing]) fail(`exhibit "${e.t}" has unknown wing "${e.wing}"`);
  if (e.body.some(p => /—|–/.test(p)) || /—|–/.test(e.obj))
    fail(`exhibit "${e.t}" uses an em/en dash (house style: commas and middle dots)`);
}

/* every exhibit must be reachable: some adjacent-ish floor tile */
for (const ch of chars) {
  let reachable = false;
  for (let y = 0; y < MH && !reachable; y++) {
    const x = MAP[y].indexOf(ch);
    if (x < 0) continue;
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]])
      if ((MAP[y + dy] || "")[x + dx] === ".") { reachable = true; break; }
  }
  if (!reachable) fail(`exhibit "${EXHIBITS[ch].t}" (${JSON.stringify(ch)}) has no adjacent floor: visitors cannot reach it`);
}
ok("all exhibits are on the map and reachable");

/* halls */
for (const h of HALLORDER) if (!ZONES[h]) fail(`HALLORDER contains unknown hall "${h}"`);
ok(HALLORDER.length + " halls in the directory");

/* misc content */
if (!Object.keys(SHOP).length) fail("shop is empty");
if (!BOARDROWS.length) fail("departures board is empty");
if (!Object.keys(WAYPOINTS).length) fail("no waypoints");

if (process.exitCode) { console.error("\nThe museum failed inspection."); }
else console.log("\nThe museum passes inspection. " + chars.length + " exhibits, " + HALLORDER.length + " halls.");
