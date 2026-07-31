/* THE MISINFORMATION MIDWAY — step right up and learn the tricks.
   Eight playable pieces on deception, deepfakes, and the attention
   economy. Most of them inoculate by letting you play the villain.
   Add a booth, or open your own room: see CONTRIBUTING.md. */
ROOM("midway", {
  name: "The Misinformation Midway",
  color: "#e8e46e",
  map: [
    "###############",
    "#.............#",
    "#.............A",
    "#.............#",
    "#.............B",
    "#.............#",
    "#.............C",
    "#.............#",
    "##D##E#F#G##H##",
  ],
  exhibits: {
    A: {
      t: "Bad News",
      obj: "A printing press, oiled and eager.",
      body: [
        "Run your own disinformation empire. The game, by DROG and University of Cambridge researchers, walks you through the actual techniques, impersonation, emotional bait, conspiracy scaffolding, and awards a badge for mastering each.",
        "Inoculation theory in practice: after playing the villain for fifteen minutes, players get measurably better at spotting the tricks in the wild. Generative models have made the tricks cheaper. The antibodies still work."
      ],
      url: "https://www.getbadnews.com/en/play",
      embed: true,
      cta: "PLAY"
    },
    B: {
      t: "Harmony Square",
      obj: "A tidy town square, mid-election.",
      body: [
        "The sequel: you are hired as Chief Disinformation Officer and paid to tear a pleasant little town apart during its elections. Cambridge and DROG again, this time about political manipulation specifically.",
        "Play it before an election year. Any election year."
      ],
      url: "https://harmonysquare.game/en",
      embed: true,
      cta: "PLAY"
    },
    C: {
      t: "Cranky Uncle",
      obj: "An armchair, occupied.",
      body: [
        "John Cook's cartoon uncle teaches the rhetorical machinery of science denial, cherry-picking, fake experts, impossible expectations, by having you practice each move until you can name it on sight.",
        "The techniques do not care what the topic is. That is the point of learning them once."
      ],
      url: "https://app.crankyuncle.info/",
      embed: true,
      cta: "PLAY"
    },
    D: {
      t: "Spot the Troll",
      obj: "Eight social media profiles. Some are people.",
      body: [
        "Clemson University's Media Forensics Hub shows you real profiles, some genuine, some professional trolls drawn from documented influence operations, and asks you to tell them apart. You will be wrong more often than you expect.",
        "The archive is real. The next generation of trolls will not be typing their own posts."
      ],
      url: "https://spotthetroll.org/",
      cta: "PLAY"
    },
    E: {
      t: "Which Face Is Real?",
      obj: "Two portraits. One sitter never existed.",
      body: [
        "Jevin West and Carl Bergstrom's two-card test: a photograph of a person beside a neural network's invention. One click, instant feedback, and a growing unease as your accuracy drifts toward a coin flip.",
        "Launched in 2019 to teach the tells: warped earrings, melted backgrounds. Most of the tells are gone now, which is itself the exhibit."
      ],
      url: "https://www.whichfaceisreal.com/",
      embed: true,
      cta: "PLAY"
    },
    F: {
      t: "Detect Fakes",
      obj: "A row of politicians, saying things.",
      body: [
        "Researchers at MIT and Northwestern collected authentic and fabricated clips of public figures and ask you to judge each one: real or synthetic? Sometimes the video lies, sometimes the audio, sometimes the transcript.",
        "Their research finding, which you are invited to replicate on yourself: people barely beat chance, and confidence does not predict accuracy."
      ],
      url: "https://detectfakes.kellogg.northwestern.edu/",
      embed: true,
      cta: "PLAY"
    },
    G: {
      t: "We Become What We Behold",
      obj: "A camera pointed at a crowd.",
      body: [
        "Nicky Case gives you five minutes and one job: point a news camera at a peaceful crowd and film whatever gets attention. The feedback loop does the rest.",
        "The tightest playable model of engagement optimization ever made. There is no AI in it, and it explains recommendation engines better than most papers."
      ],
      url: "https://ncase.itch.io/wbwwb",
      cta: "PLAY"
    },
    H: {
      t: "The Wisdom and/or Madness of Crowds",
      obj: "A napkin sketch of a friendship, going viral.",
      body: [
        "Draw social networks and watch ideas, true and false, spread through them. Nicky Case's explorable shows the same crowd turning wise or mad depending on nothing but the wiring.",
        "Feeds rewire the crowd hourly. This is the manual for noticing what that does."
      ],
      url: "https://ncase.me/crowds/",
      embed: true,
      cta: "PLAY"
    }
  }
});
