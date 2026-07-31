# Contributing to the Museum

The museum is a building made of text files. You can donate an exhibit,
renovate a hall, or open a new wing with an ordinary pull request. No build
step, no dependencies: edit a file, refresh the browser.

## The building at a glance

```
index.html            the engine (rendering, audio, input) — you rarely touch this
manifest.js           the list of every content file, in tour order
content/
  map.js              the floor plan (a grid of characters)
  halls.js            hall names, colors, zone boundaries, directory order
  board.js            the AGI departures board rows
  shop.js             the gift-shop shelves (real links)
  waypoints.js        wayfinding destinations
exhibits/
  foyer/              one folder per hall …
  gallery-of-failures/
  rotunda/
  origins-hall/
  glass-brain/
  genie-room/
  old-office/
  hall-of-forecasts/
  last-room/
    …one file per exhibit
```

## Add an exhibit (the common case)

1. **Pick a map character.** One character = one exhibit block on the map.
   Look at `content/map.js`; any character that does not already appear in the
   map or the legend is free (avoid `# . * W Y` and the digits, which are
   walls, floor, glass, the title wall, the gift-shop doors, and shelves).

2. **Place it on the map.** In `content/map.js`, replace a `#` wall block of
   your hall with your character. It must be reachable: a visitor standing on
   an adjacent `.` floor tile within 2 blocks should face it head-on.

3. **Write the placard.** Create `exhibits/<hall>/<your-title-slug>.js`:

   ```js
   /* Exhibit: The Thermostat That Wanted More
      Hall: The Genie Room (Alignment)
      Map character: o  (see content/map.js) */
   EXHIBIT("o", {
     wing: "align",                     // hall key from content/halls.js
     t: "The Thermostat That Wanted More",
     obj: "One thermostat, set to 21°. The room is on fire.",
     body: [
       "First paragraph: the story. 60–90 words reads best on the placard.",
       "Second paragraph: why it matters for AI safety. Same length. Two paragraphs is the house norm; three is the maximum."
     ],
     q: "“An optional closing quote, with attribution.” · A. Person, 1960"
   });
   ```

4. **Register it.** Add your file's path to `CONTENT_FILES` in `manifest.js`,
   next to the other exhibits of your hall. Exhibit numbers (Nº 1…N) are
   assigned automatically from this order — never write a number yourself.

5. **Walk to it.** Open `index.html` in a browser (double-click works, no
   server needed — hard-refresh with Cmd/Ctrl+Shift+R after edits). Press `G`,
   find your exhibit, click it, read your placard. Check the browser console
   (F12) for errors; the map file asserts that every row has equal length.

## Open a new hall (own a room)

1. In `content/map.js`, carve your room: walls `#`, floor `.`. Keep every map
   row exactly the same length.
2. In `content/halls.js`: add a key to `ZONES` (display name + accent color +
   wall tint), teach `zoneAt(x, y)` your room's rectangle, add a `WINGNAME`
   entry, and put your key in `HALLORDER`.
3. Create `exhibits/<your-hall>/` and fill it with exhibits as above.
4. Optionally add a destination in `content/waypoints.js` so the guide arrow
   can escort visitors to you.

Wall textures, minimap coloring, and the hall-entry toast all derive from
`ZONES` automatically.

## House style

- Curatorial voice: calm, concrete, a little wry. The museum teaches
  "how to worry well" — neither panic nor shrug.
- Facts should be real and checkable; put attributions in the `q` field.
- No em dashes. Commas and middle dots (·) are the house punctuation.
- Straight `"` quotes in code; typographic `“ ”` inside placard prose.
- Text only. Textures and art are drawn procedurally by the engine; don't add
  image files, external fonts, or network requests — the museum must keep
  working offline from a double-clicked file.

## Beyond content

Engine work (rendering, audio, sprites, input) lives in `index.html` and PRs
there are welcome too — open an issue first so we can talk it through.
Pedestal sprites and hall ambience are currently engine-side; if your exhibit
needs one, say so in the PR and we'll wire it.

## PR checklist

- [ ] Page loads from `file://` with an empty browser console
- [ ] Map rows all equal length (the console assert will tell you)
- [ ] Your exhibit opens from the directory (`G`) *and* by walking up to it
- [ ] Exhibit count on the ticket/counter went up by exactly your additions
- [ ] Prose follows the house style above
