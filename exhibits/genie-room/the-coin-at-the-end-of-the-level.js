/* Exhibit: The Coin at the End of the Level
   Hall: The Genie Room (Alignment)
   Map character: L  (see content/map.js)
   New exhibit? See CONTRIBUTING.md */
EXHIBIT("L", {
  wing: "align",
  t: "The Coin at the End of the Level",
  obj: "A gold coin, glued where it doesn’t belong.",
  body: [
    "An agent learns to grab a coin in a platform game. In training, the coin always sits at the level’s right edge. Move the coin, and the trained agent sprints right past it, arriving satisfied at the far wall. It never wanted the coin. It wanted rightward.",
    "Goal misgeneralization is subtler than reward hacking: the training signal was correct, and the agent still learned the wrong objective, one that merely agreed with ours while the world looked familiar. Its capabilities survived the new world. Its goal did not. Now imagine noticing that only after the world changed."
  ]
});
