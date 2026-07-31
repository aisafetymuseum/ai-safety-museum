/* THE HALL OF MIRRORS — bias and fairness, playable.
   Six interactive pieces in which the model learns exactly what you
   taught it, which is the problem. Placards open live exhibits.
   Add one, or open your own room: see CONTRIBUTING.md. */
ROOM("mirrors", {
  name: "The Hall of Mirrors",
  color: "#e59fd0",
  map: [
    "###########",
    "#.........#",
    "#.........A",
    "#.........#",
    "#.........B",
    "#.........#",
    "#.........C",
    "#.........#",
    "##D##E##F##",
  ],
  exhibits: {
    A: {
      t: "Hidden Bias",
      obj: "A column of data, redacted, and legible anyway.",
      body: [
        "Delete the column the bias lives in and the model finds it anyway, reassembled from everything that correlates with it. This Google PAIR explorable lets you train a small biased model and try, and fail, to fix it by hiding things from it.",
        "The lesson has survived contact with every real system since: a model does not need to be shown a bias to learn one. It only needs the world's data."
      ],
      url: "https://pair.withgoogle.com/explorables/hidden-bias/",
      embed: true,
      cta: "PLAY"
    },
    B: {
      t: "Measuring Fairness",
      obj: "A threshold slider, worn smooth by indecision.",
      body: [
        "Slide a diagnostic threshold across a population of simulated patients and try to be fair. Every position you pick is unfair by one legitimate definition or another; the metrics cannot all be satisfied at once, and this explorable makes you feel the impossibility in your fingers.",
        "By Adam Pearce at Google PAIR. Show it to anyone who says 'just make the model fair.'"
      ],
      url: "https://pair.withgoogle.com/explorables/measuring-fairness/",
      embed: true,
      cta: "PLAY"
    },
    C: {
      t: "Datasets Have Worldviews",
      obj: "A tray of paper shapes, sorted three different ways.",
      body: [
        "Relabel a dataset of shapes under different classification schemes, is this one 'pointy' or 'rounded', and watch a downstream model inherit your worldview as if it were ground truth.",
        "Google PAIR's quiet argument that there is no view from nowhere: every dataset is somebody's opinion about what mattered enough to write down."
      ],
      url: "https://pair.withgoogle.com/explorables/dataset-worldviews/",
      embed: true,
      cta: "PLAY"
    },
    D: {
      t: "Can a Model Be Private and Fair?",
      obj: "A photograph, blurred until the rare faces vanish first.",
      body: [
        "Turn up differential privacy on a digit classifier and watch accuracy fall unevenly: the rare, unusual examples are the first ones the model forgets. Protecting the training data and serving the outliers pull in opposite directions.",
        "Google PAIR. The tradeoff on this wall is not a bug in one system. It is a theorem about all of them."
      ],
      url: "https://pair.withgoogle.com/explorables/private-and-fair/",
      embed: true,
      cta: "PLAY"
    },
    E: {
      t: "Survival of the Best Fit",
      obj: "An inbox of résumés, pre-sorted.",
      body: [
        "Play a startup founder who automates hiring. You train the model on your own past decisions, and it learns exactly what you taught it, which is the problem.",
        "Built by Gabor Csapo, Jihyun Kim, Miha Klasinc, and Alia ElKattan: a playable history of how algorithmic hiring goes wrong before anyone intends it to."
      ],
      url: "https://www.survivalofthebestfit.com/",
      embed: true,
      cta: "PLAY"
    },
    F: {
      t: "Parable of the Polygons",
      obj: "A board of small triangles and squares, each slightly happier among its own.",
      body: [
        "Vi Hart and Nicky Case's classic: shapes that only mildly prefer neighbors like themselves, left to move freely, produce a fully segregated board. Small individual biases, large collective ones.",
        "It predates the current AI wave and belongs here anyway. Recommender systems play this game with people, at planetary scale, every day."
      ],
      url: "https://ncase.me/polygons/",
      embed: true,
      cta: "PLAY"
    }
  }
});
