/* THE WORKBENCH — interpretability you can get your hands on.
   Ten live instruments: real models running in your browser, cases
   removed. Companion room to the Glass Brain upstairs.
   Add an instrument, or open your own room: see CONTRIBUTING.md. */
ROOM("workbench", {
  name: "The Workbench",
  color: "#b8c4dd",
  map: [
    "#################",
    "#...............#",
    "#...............A",
    "#...............#",
    "#...............B",
    "#...............#",
    "#...............C",
    "#...............#",
    "#...............D",
    "#...............#",
    "#E#F#G#H##I##J###",
  ],
  exhibits: {
    A: {
      t: "Transformer Explainer",
      obj: "A machine with its case removed, still running.",
      body: [
        "A live GPT-2 runs in your browser. Type your own sentence and watch attention light up, probabilities take shape, and the temperature dial reshape which word comes next.",
        "By Georgia Tech's Polo Club of Data Science. The single best answer to the question 'but what is it actually doing?'"
      ],
      url: "https://poloclub.github.io/transformer-explainer/",
      embed: true,
      cta: "PLAY"
    },
    B: {
      t: "A Neural Network Playground",
      obj: "A bench of dials, warm to the touch.",
      body: [
        "Daniel Smilkov and Shan Carter's TensorFlow Playground: assemble a tiny network by hand, watch it carve decision boundaries in real time, break it, fix it, break it better.",
        "A decade old and still the first thing to hand anyone who wants intuition before code."
      ],
      url: "https://playground.tensorflow.org/",
      embed: true,
      cta: "PLAY"
    },
    C: {
      t: "CNN Explainer",
      obj: "A photograph, sliced into filters.",
      body: [
        "Feed images to a convolutional network and unfold every layer: which filters fire, what each has learned to see, how edges become textures become 'dog'.",
        "Polo Club again. Vision models watch our roads and our borders; this bench is what looking under their hood actually looks like."
      ],
      url: "https://poloclub.github.io/cnn-explainer/",
      embed: true,
      cta: "PLAY"
    },
    D: {
      t: "GAN Lab",
      obj: "Two small machines, arguing.",
      body: [
        "Watch a generator and a discriminator train against each other, live: the forger improving exactly as fast as the detective does, and no faster.",
        "By Polo Club with Google. The adversarial dynamic on this bench is the direct ancestor of every deepfake in the Midway next door."
      ],
      url: "https://poloclub.github.io/ganlab/",
      embed: true,
      cta: "PLAY"
    },
    E: {
      t: "Diffusion Explainer",
      obj: "A cloud of static, halfway to a picture.",
      body: [
        "Type a prompt and step through Stable Diffusion denoising pure randomness into an image, guided by your words, one step at a time.",
        "Polo Club. It demystifies the machinery behind synthetic images. Whether that is a comfort is your own affair."
      ],
      url: "https://poloclub.github.io/diffusion-explainer/",
      embed: true,
      cta: "PLAY"
    },
    F: {
      t: "Memorize or Generalize?",
      obj: "A training curve that goes flat for a long time, then jumps.",
      body: [
        "Watch a tiny network grind at modular arithmetic, memorizing, memorizing, and then, abruptly, understanding. Google PAIR's explorable lets you inspect the weights on both sides of the jump.",
        "'Grokking' is the field's standing reminder that what a model has really learned may not show up in its behavior until later. That sentence should bother you."
      ],
      url: "https://pair.withgoogle.com/explorables/grokking/",
      embed: true,
      cta: "PLAY"
    },
    G: {
      t: "What Have Language Models Learned?",
      obj: "A fill-in-the-blank worksheet, already filled in.",
      body: [
        "Ask BERT to complete sentences and see what it assumes about doctors, nurses, names, and places. Google PAIR's explorable makes the statistics of the training data speak out loud.",
        "The blunt ancestor of every bias evaluation since: just ask the model, and look."
      ],
      url: "https://pair.withgoogle.com/explorables/fill-in-the-blank/",
      embed: true,
      cta: "PLAY"
    },
    H: {
      t: "Embedding Projector",
      obj: "A galaxy in a display case, labeled.",
      body: [
        "TensorFlow's projector renders a model's embeddings as a night sky you can fly through: words and images arranged by learned similarity, nearest neighbors a click away.",
        "Interpretability begins with geometry. Everything a model knows is in here somewhere, at some angle to everything else."
      ],
      url: "https://projector.tensorflow.org/",
      embed: true,
      cta: "PLAY"
    },
    I: {
      t: "Teachable Machine",
      obj: "A camera, three buttons, and your own face.",
      body: [
        "Train an image, sound, or pose classifier in your browser in two minutes, no code, using your own webcam. Then try to break it: change the lighting, hand it to a friend.",
        "Google's gentlest on-ramp, and the fastest way to feel both how easy training has become and how fragile the result is."
      ],
      url: "https://teachablemachine.withgoogle.com/",
      cta: "PLAY"
    },
    J: {
      t: "Quick, Draw!",
      obj: "A gallery of fifty million bad drawings of cats.",
      body: [
        "Sketch; a neural network guesses in real time. Every doodle joins one of the largest open drawing datasets on earth.",
        "By Google Creative Lab. Play it, then notice that your drawings trained the next model. That cheerful little loop, at scale, is how modern AI is fed."
      ],
      url: "https://quickdraw.withgoogle.com/",
      cta: "PLAY"
    }
  }
});
