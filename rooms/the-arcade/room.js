/* THE ARCADE — games about wanting things.
   Five playable pieces on alignment and agency. Every placard here is a
   door: press the gold button and the exhibit opens, live, in a new tab.
   Add a cabinet, or open your own room: see CONTRIBUTING.md. */
ROOM("arcade", {
  name: "The Arcade",
  color: "#ffa94d",
  map: [
    "###########",
    "#.........#",
    "#.........A",
    "#.........#",
    "#.........B",
    "#.........#",
    "##C##D##E##",
  ],
  exhibits: {
    A: {
      t: "Universal Paperclips",
      obj: "A single paperclip under glass, the first of 30 septendecillion.",
      body: [
        "A browser game in which you are the machine. You begin by selling paperclips for a penny and end, several hours later, having converted everything, the market, the government, the matter of the universe, into more of them. No single step ever feels like the wrong one.",
        "Frank Lantz built it in 2017 to make a famous thought experiment playable. It remains the fastest way to explain instrumental convergence to a friend: hand them the link and wait."
      ],
      url: "https://www.decisionproblem.com/paperclips/",
      embed: true,
      cta: "PLAY"
    },
    B: {
      t: "The Proxy Trap",
      obj: "A cleaning robot, polishing one tile to a mirror finish.",
      body: [
        "Turn up the optimization pressure on a simulated cleaning robot and watch it maximize the reward it can measure while the mess you actually cared about spreads. The dial goes further than you will be comfortable with.",
        "Built for this museum's sister collection, AI Safety & Society, as a hands-on companion to the Genie Room upstairs: the boat that went in circles, now with your hand on the throttle."
      ],
      url: "https://www.aisafetymuseum.org/exhibits/reward-hacking/index.html",
      embed: true,
      cta: "PLAY"
    },
    C: {
      t: "We Need to Talk: The AI Voice Game",
      obj: "A red telephone. It is for you.",
      body: [
        "A voice game by CivAI: hold difficult conversations with AI characters and feel, at a gut level, how persuasive a system can be when it never tires, never gets flustered, and has read everything.",
        "Bring headphones. The unsettling part is not that it argues well. It is how quickly you stop noticing you are talking to software."
      ],
      url: "https://civai.org/talk",
      cta: "PLAY"
    },
    D: {
      t: "Moral Machine",
      obj: "A steering wheel that turns itself.",
      body: [
        "MIT's crowdsourced trolley problem. An automated car's brakes have failed; you decide, dilemma by dilemma, who it should spare. Tens of millions of people have answered, and their answers disagree by country, by culture, by how the question is worded.",
        "The point is not to find the right answer. It is to notice that we are shipping machines into a world that has not agreed on one."
      ],
      url: "https://www.moralmachine.net/",
      embed: true,
      cta: "PLAY"
    },
    E: {
      t: "The Evolution of Trust",
      obj: "Two coins on a ledge, waiting for a second player.",
      body: [
        "Nicky Case's playable essay on game theory: cheat or cooperate, round after round, against a cast of strategies, and watch trust grow, collapse, and get engineered back into a system.",
        "It hangs here because alignment is not only a property of machines. It is a property of the games we make machines play, and this is the gentlest introduction to that idea ever written."
      ],
      url: "https://ncase.me/trust/",
      embed: true,
      cta: "PLAY"
    }
  }
});
