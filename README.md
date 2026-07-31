# The Museum of AI Safety

A first-person, walkable museum in a single HTML file. No dependencies, no build step,
no network, a software-rendered 3D engine,
procedural textures, synthesized WebAudio ambience, and 35 curated exhibits on AI safety.

Live at **[visit.aisafety.museum](https://visit.aisafety.museum)**.

## Run it

Open `index.html` directly in a browser, or serve it:

```sh
python3 -m http.server 8777
# → http://localhost:8777
```

## Controls

| Key | Action |
| --- | --- |
| `W A S D` / `↑ ↓` | walk |
| Mouse (click to capture) / `← →` | look |
| `E` / `Enter` / click | view exhibit |
| `Shift` | brisk pace |
| `M` | floor plan |
| `N` | sound on/off |
| `V` | audio guide (while reading a placard) |
| `G` | museum directory, click any exhibit to be escorted there |
| `T` | wayfinding, a golden arrow guides you (Evolution tour, Old Office, Gift Shop) |
| `J` | the Gift Shop, volunteer, learn, join the field |
| `H` | help · `0` in help resets your tour |
| `← →` | previous / next exhibit (while reading a placard) |

On phones: left thumb walks, right thumb looks, tap to open exhibits.

## The floor plan

Nine halls, 35 exhibits, the Foyer, the Gallery of Failures (adversarial examples,
jailbreaks, shortcut learning, sycophancy), the Rotunda with four governance pillars
under a skylight, Origins Hall (Wiener, Turing, Good, the paperclip era), the Glass
Brain (interpretability), and the Genie Room (alignment), plus two newer wings:

- **The Old Office** (off the Foyer, west): a period diorama of the pre-AI workplace
  sealed behind a floor-to-ceiling **glass vitrine**, five 3D desks with seated
  workers, a water-cooler conversation, a filing cabinet, a photocopier (billboard
  sprites, z-buffered behind the pane). Placards and the gilt-framed oils hang in the
  viewing gallery on your side of the glass. Warm sepia light, typewriter clatter.
- **The Hall of Forecasts** (through the Genie Room, east): AGI timelines as a live
  split-flap **departures board**, Turing 2000, Simon 1985, Minsky DELAYED, Metaculus
  UPDATING LIVE, and a final row: YOU · BOARDING. Exhibits on scaling laws, the
  superforecaster tournament, takeoff speeds, and the No Fire Alarm pillar you must
  walk around. Cool blue light, a clock ticking once per second.

Origins Hall carries *The March of Progress (Amended)*, a five-block mural of the
evolution from ape to desk worker to phone-sloucher to robot to AI orb, protected,
like the office, behind brass-framed museum glass (rays pass through the pane with a
sliding specular streak; exhibits remain readable and clickable through it).

Every hall now displays its placards' artifacts as **3D pedestals under glass
domes**, the boat-race trophy, the paperclip, the gilt mirror, the GPU on its
cushion, the glass neuron, the fire-alarm-with-no-bell hourglass and ramps, the
empty pedestal of the finale, eighteen in all, placed at gallery angles. The
directory escort now drops you at a three-quarter view, museum-catalog style.

Behind the title wall, two doors open into **The Gift Shop · Get Involved**: a real
room with browsable shelf aisles. Every shelf is a product (BlueDot, Apart, 80,000
Hours, MATS, …), walk up, press E, and "take it" opens the real link. **GET INVOLVED
vending machines** flank the doors: glass front, coiled product packs, a coin slot
labeled INSERT ATTENTION, press E to open the catalog.

The museum's name appears twice: as large extruded-gold 3D letters floating and
bobbing in the air of the Foyer, and as a perspective-tilted 3D masthead fixed at
the top of the screen everywhere (click it to return to the Foyer). The finale,
Exhibit Nº 35, stands in the center of the Rotunda.

Two **Gift Shop kiosks** flank the exit: real links to volunteer, study, and work in
AI safety (BlueDot, AISafety.info, Apart Research, AI Safety Camp, 80,000 Hours, MATS,
GovAI, and more). Also reachable any time with `J` or the on-screen buttons.

Around thirty-five seconds into your visit, the curators will interrupt once ,
politely, to mention that the field is looking for volunteers, and offer to
show you the way to the vending machines.

Progress persists in `localStorage`. See all 35 exhibits for your certificate.
Rendering resolution auto-tunes to hold 60 fps on your machine.

The map is a grid of text, edit `content/map.js` to renovate the building;
place a character and write a placard file to donate a new exhibit.

## Contributing

The museum is organized so you can own a piece of it:

- **`exhibits/<hall>/`** — one folder per hall, one file per exhibit. Add a
  file, list it in `manifest.js`, put its character on the map, done.
- **`content/`** — the floor plan, hall definitions, departures board,
  gift-shop links, and wayfinding destinations.
- **`index.html`** — the engine: rendering, textures, audio, input. You never
  need to touch it to add content.

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full guide: adding an
exhibit, opening a new hall, house style, and the PR checklist. No build
step; everything runs offline from a double-clicked `index.html`.

Deployment to the live site is handled separately.
