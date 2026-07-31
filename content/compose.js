"use strict";
/* ================= THE COMPOSER =================
   Stitches ROOM() modules onto the building. Rooms grow south and
   east of the historic core, each attaching to the most recently
   placed room (or the core itself), so the museum branches outward
   like a city: wings sprout rooms, rooms sprout annexes.

   Each room brings its own local mini-map and its own local exhibit
   characters; the composer remaps those into unused global characters,
   so contributions never collide, no matter how many rooms exist.
   This file always loads LAST (see manifest.js). */
(function () {
  if (typeof ROOMS === "undefined" || !ROOMS.length) return;

  /* characters with engine meaning, plus everything already on the map */
  const used = new Set(["#", ".", "*", "W", "Y", "g", "h", "m"]);
  for (const row of MAP) for (const c of row) used.add(c);
  for (const k in EXHIBITS) used.add(k);
  for (const k in SHOP) used.add(k);
  const POOL = "nopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïñòóôõöøùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįŁłŃńŇňŌōŎŏŐőŒœŔŕŘřŚśŜŝŞşŠšŤťŨũŪūŬŭŮůŰűŲųŴŵŶŷŹźŻżŽž";
  let poolI = 0;
  function nextChar() {
    while (poolI < POOL.length && used.has(POOL[poolI])) poolI++;
    if (poolI >= POOL.length) { console.warn("composer: out of exhibit characters"); return null; }
    const c = POOL[poolI++]; used.add(c); return c;
  }

  const grid = MAP.map(r => r.split(""));
  let GW = grid[0].length, GH = grid.length;
  const at = (x, y) => (y >= 0 && y < GH && x >= 0 && x < GW) ? grid[y][x] : "#";
  function ensure(w, h) {
    if (h > GH) { for (let i = GH; i < h; i++) grid.push(Array(GW).fill("#")); GH = h; }
    if (w > GW) { for (const row of grid) for (let i = row.length; i < w; i++) row.push("#"); GW = w; }
  }

  const BASE = { x0: 0, y0: 0, x1: GW - 1, y1: GH - 1 };
  const placed = []; /* room rects, walls included */

  const interiorsOverlap = (a, b) =>
    a.x0 + 1 <= b.x1 - 1 && a.x1 - 1 >= b.x0 + 1 && a.y0 + 1 <= b.y1 - 1 && a.y1 - 1 >= b.y0 + 1;

  function unclaimed(x0, y0, x1, y1) {
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++)
      if (at(x, y) !== "#") return false;
    return true;
  }

  /* dig from (x,y) in direction (dx,dy): through up to 4 wall cells until
     reaching open floor; returns the cells to carve, or null */
  function dig(x, y, dx, dy) {
    const cells = [];
    for (let i = 0; i < 4; i++) {
      const c = at(x, y);
      if (c === ".") return cells;         /* reached the building */
      if (c !== "#") return null;          /* would tunnel through an exhibit */
      cells.push([x, y]); x += dx; y += dy;
    }
    return null;
  }

  function placeRoom(def, idx) {
    const rows = def.map;
    const rh = rows.length, rw = rows[0].length;
    if (!rows.every(r => r.length === rw)) { console.warn("room " + def.key + ": ragged map"); return false; }

    /* translate local exhibit characters to fresh global ones */
    const xlat = {};
    for (const local in (def.exhibits || {})) {
      const gch = nextChar(); if (!gch) return false;
      xlat[local] = gch;
    }

    const parents = [...placed].reverse().concat([BASE]);
    const sides = idx % 2 ? ["E", "S"] : ["S", "E"];
    for (const parent of parents) {
      for (const side of sides) {
        const cands = [];
        if (side === "S") {
          const ry = parent.y1;
          for (let rx = Math.max(0, parent.x0); rx <= parent.x1 - rw + 1; rx++) cands.push([rx, ry]);
        } else {
          const rx = parent.x1;
          for (let ry = Math.max(0, parent.y0); ry <= parent.y1 - rh + 1; ry++) cands.push([rx, ry]);
        }
        for (const [rx, ry] of cands) {
          const rect = { x0: rx, y0: ry, x1: rx + rw - 1, y1: ry + rh - 1 };
          if (placed.some(p => interiorsOverlap(rect, p))) continue;
          if (!unclaimed(rect.x0, rect.y0, rect.x1, rect.y1)) continue;
          /* find a door: a top (S) / left (E) wall cell whose inward neighbor
             is room floor, digging outward reaches existing floor */
          let door = null;
          if (side === "S") {
            for (let x = rx + 1; x < rx + rw - 1 && !door; x++)
              if (rows[1][x - rx] === ".") { const d = dig(x, ry, 0, -1); if (d) door = d; }
          } else {
            for (let y = ry + 1; y < ry + rh - 1 && !door; y++)
              if (rows[y - ry][1] === ".") { const d = dig(rx, y, -1, 0); if (d) door = d; }
          }
          if (!door) continue;

          /* stamp */
          ensure(rect.x1 + 1, rect.y1 + 1);
          for (let y = 0; y < rh; y++) for (let x = 0; x < rw; x++) {
            const c = rows[y][x];
            grid[ry + y][rx + x] = xlat[c] || c;
          }
          for (const [dx2, dy2] of door) grid[dy2][dx2] = ".";

          /* register the hall */
          const hex = def.color || "#c9a06a";
          const rgb = def.rgb || [1, 3, 5].map(i => Math.round(parseInt(hex.slice(i, i + 2), 16) / 5));
          ZONES[def.key] = { name: def.name.toUpperCase(), color: hex, rgb: rgb };
          WINGNAME[def.key] = def.name;
          HALLORDER.push(def.key);
          ROOMRECTS.push({ ...rect, key: def.key });
          placed.push(rect);
          for (const local in (def.exhibits || {}))
            EXHIBIT(xlat[local], Object.assign({}, def.exhibits[local], { wing: def.key }));
          return true;
        }
      }
    }
    console.warn("composer: no space found for room " + def.key);
    return false;
  }

  ROOMS.forEach((def, i) => placeRoom(def, i));

  /* write the composed building back */
  MAP.length = 0;
  for (const row of grid) MAP.push(row.join(""));
  MW = GW; MH = GH;
})();
