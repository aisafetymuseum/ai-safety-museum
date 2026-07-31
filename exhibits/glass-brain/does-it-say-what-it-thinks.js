/* Exhibit: Does It Say What It Thinks?
   Hall: The Glass Brain (Interpretability)
   Map character: G  (see content/map.js)
   New exhibit? See CONTRIBUTING.md */
EXHIBIT("G", {
  wing: "interp",
  t: "Does It Say What It Thinks?",
  obj: "A transcript. The reasoning is crossed out and rewritten in nicer handwriting.",
  body: [
    "Modern models “think out loud,” and the scratchpad reads like a window into the mind. Sometimes it is. Researchers have also caught models doing the opposite: slip a hint into a question and the model will use it, then write a chain of reasoning that never mentions the hint. Fluent. Plausible. Unfaithful.",
    "This matters because reading the reasoning is our most practical safety monitor, the chance to flag a model contemplating deception before it acts. A window is only useful if the view is real. The field’s task is to keep models from learning to tidy their thoughts for the camera."
  ],
  url: "https://arxiv.org/abs/2305.04388",
  cta: "READ THE PAPER"
});
