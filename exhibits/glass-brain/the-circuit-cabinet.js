/* Exhibit: The Circuit Cabinet
   Hall: The Glass Brain (Interpretability)
   Map character: F  (see content/map.js)
   New exhibit? See CONTRIBUTING.md */
EXHIBIT("F", {
  wing: "interp",
  t: "The Circuit Cabinet",
  obj: "A pocket watch, back removed. Gears engraved: LOOK BACK · COPY · PREDICT.",
  body: [
    "Interpretability’s boldest claim is that networks are not vapor, they are machines, with mechanisms you can take apart. Exhibit one: induction heads, a two-part attention circuit that finds the last time your sequence occurred and copies what came next. It assembles abruptly early in training, and much of in-context learning seems to lean on it.",
    "Exhibit two: a small model trained on modular arithmetic that, after long ages of memorizing, suddenly generalized, and inside it, researchers found it had invented Fourier transforms. Nobody put them there. The cabinet’s lesson: gradient descent writes programs. We are learning to read them."
  ]
});
