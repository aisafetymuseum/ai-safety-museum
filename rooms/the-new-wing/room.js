/* THE NEW WING — the museum's first room module, and a template for yours.
   A room brings its own mini-map and its own exhibit characters; the
   composer attaches it to the building and renumbers everything. Copy this
   folder, rename it, and make the room yours. See CONTRIBUTING.md. */
ROOM("newwing", {
  name: "The New Wing",
  color: "#9fd8a8",
  map: [
    "#####A#####",
    "#.........#",
    "#.........#",
    "#.........#",
    "###########",
  ],
  exhibits: {
    A: {
      t: "This Room Intentionally Left Empty",
      obj: "One picture hook. One patch of unfaded paint where a frame should hang.",
      body: [
        "Every museum keeps a room it has not filled yet. This is ours. The building you are standing in is a text file; this room was added by a few dozen more lines of it, and the museum grew a wall to hold this placard.",
        "If there is a corner of AI safety you wish this museum covered, the history, a risk, a research agenda, a hope, it is yours to curate. Fork the museum, copy this room's folder, and hang something on the hook."
      ],
      q: "“The museum is under construction. So is the field.” · The Curators",
      url: "https://github.com/aisafetymuseum/ai-safety-museum/blob/main/CONTRIBUTING.md",
      cta: "CLAIM THIS ROOM",
      linkLabel: "CLAIM THIS ROOM · HOW TO CONTRIBUTE ↗"
    }
  }
});
