const express = require("express");
const router = express.Router();
const cohere = require("cohere-ai");
const dotenv = require("dotenv");
dotenv.config();

cohere.init(process.env.COHERE_KEY);

router.route("/").post((req, res) => {
  (async () => {
    const response = await cohere.classify({
      model: "xlarge",
      inputs: req.body.text,
      examples: [
        { text: "Looking Sharp!!!!", label: "Hypeman" },
        { text: "🔥🔥🔥", label: "Hypeman" },
        { text: "💯🔥👀", label: "Hypeman" },
        { text: "Wow!!!", label: "Hypeman" },
        { text: "HES COOL", label: "Hypeman" },
        { text: "Pretty lady ❤️ ", label: "Secret Admirer" },
        { text: "So cute 🙂", label: "Secret Admirer" },
        { text: "Best study buddy 😘", label: "Secret Admirer" },
        { text: "why is my ducky so cute 💕", label: "Secret Admirer" },
        { text: "you are very adorable 💕💕", label: "Secret Admirer" },
        {
          text: "I'm paying debts of first 5 people to DM Me DEPRESSED REPLY NOW💰",
          label: "Bot",
        },
        {
          text: "Let’s end inhumanity!! Paying $3000 to the first 10 people to message me “HARD TIMES” Now… GOD Bless 🏅",
          label: "Bot",
        },
        {
          text: "❗️❗️ REPOST/URGENT/ATTENTION ❗️❗️ “AMERICA IS UNDER ATTACK” 💔",
          label: "Bot",
        },
        {
          text: "Nice #unit45 #nike #justdoit #mixa #bigfm #autryactionshoes #mx24 #project2 #kibek #teppiche #carpets #nicosantos #abeltesfaye #dualipa",
          label: "Bot",
        },
        {
          text: "I’m 🅿️aying 💲6,500 to the first 5 🅿️eople to hit me up now with (STRUGGLING) God bless y’all ✝️❤️🤑",
          label: "Bot",
        },
        {
          text: "Your beak is a little crooked it not that good",
          label: "Low key hater",
        },
        {
          text: "That blanket doesn’t suit you, should get a new one",
          label: "Low key hater",
        },
        {
          text: "Personally I like swans better than geese, but that’s just me",
          label: "Low key hater",
        },
        {
          text: "I would find a different table to sit at if I saw you",
          label: "Low key hater",
        },
        {
          text: "The guy looks better than you in this picture, time to get a new friend",
          label: "Low key hater",
        },
      ],
    });

    console.log("are we here?");

    return res.status(200).send(JSON.stringify(response.body.classifications));
    console.log(
      `The confidence levels of the labels are ${JSON.stringify(
        response.body.classifications
      )}`
    );
  })();
});

module.exports = router;
