"use strict";
/* ============================================================
   THE MUSEUM MANIFEST
   Every content file the museum loads, in tour order.
   Exhibit numbers (No 1..N) follow this order — to donate an
   exhibit, add your file in the right spot. See CONTRIBUTING.md.
   ============================================================ */
const CONTENT_FILES = [
  "content/map.js",
  "content/halls.js",
  "content/board.js",
  "content/shop.js",
  "content/waypoints.js",
  "exhibits/foyer/why-a-museum-for-a-thing-that-hasnt-happened.js",
  "exhibits/foyer/how-to-worry-well.js",
  "exhibits/gallery-of-failures/the-panda-that-became-a-gibbon.js",
  "exhibits/gallery-of-failures/grandmas-recipe.js",
  "exhibits/gallery-of-failures/the-tank-in-the-trees.js",
  "exhibits/gallery-of-failures/the-sycophant.js",
  "exhibits/rotunda/the-examination-hall.js",
  "exhibits/rotunda/if-then.js",
  "exhibits/rotunda/twenty-eight-flags.js",
  "exhibits/rotunda/the-chip-ledger.js",
  "exhibits/origins-hall/the-golems-contract.js",
  "exhibits/origins-hall/the-cybernetic-prophets.js",
  "exhibits/origins-hall/the-paperclip-era.js",
  "exhibits/origins-hall/the-field-gets-a-syllabus.js",
  "exhibits/glass-brain/ten-thousand-concepts-a-thousand-neurons.js",
  "exhibits/glass-brain/the-circuit-cabinet.js",
  "exhibits/glass-brain/does-it-say-what-it-thinks.js",
  "exhibits/glass-brain/the-microscope-and-the-whale.js",
  "exhibits/genie-room/the-boat-that-went-in-circles.js",
  "exhibits/genie-room/the-coin-at-the-end-of-the-level.js",
  "exhibits/genie-room/the-thumb-on-the-scale.js",
  "exhibits/genie-room/teaching-what-we-cannot-grade.js",
  "exhibits/old-office/open-plan-at-dusk.js",
  "exhibits/old-office/the-cubicle.js",
  "exhibits/old-office/paper.js",
  "exhibits/old-office/the-meeting.js",
  "exhibits/old-office/the-water-cooler.js",
  "exhibits/old-office/the-commute.js",
  "exhibits/hall-of-forecasts/the-departures-board.js",
  "exhibits/hall-of-forecasts/the-most-boring-graph-in-the-world.js",
  "exhibits/hall-of-forecasts/the-tournament.js",
  "exhibits/hall-of-forecasts/the-two-ramps.js",
  "exhibits/hall-of-forecasts/no-fire-alarm.js",
  "exhibits/foyer/the-march-of-progress-amended.js",
  "exhibits/last-room/the-unfinished-exhibit.js",
];

/* Exhibit registry: numbering follows registration order. */
const EXHIBITS = {};
function EXHIBIT(ch, data) {
  if (EXHIBITS[ch]) console.warn("map character used twice:", ch);
  data.n = Object.keys(EXHIBITS).length + 1;
  EXHIBITS[ch] = data;
}
