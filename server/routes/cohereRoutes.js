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
        { text: "You look so pretty!!", label: "Hypeman" },
        { text: "babe", label: "Secret Admirer" },
        { text: "Fire!! 🔥", label: "Secret Admirer" },
        { text: "cool!", label: "Secret Admirer" },
        { text: "girlll you look amazing!!", label: "Hypeman" },
        { text: "wow werk it girl!!!", label: "Hypeman" },
        { text: "congrats on your show last night!", label: "Secret Admirer" },
        { text: "dude", label: "Secret Admirer" },
        { text: "DUDE", label: "Hypeman" },
        { text: "bro", label: "Secret Admirer" },
        { text: "BRO", label: "Hypeman" },
        {
          text: "Omg I saw you live in concert in Toronto last night and you were so amazing! I honestly think it was the best performance I've ever seen! You are so talented and I love you!",
          label: "Hypeman",
        },
        {
          text: "I can't believe how amazing of an artist you are! We are so blessed to have you on this earth with us. I am in awe of your vocal abilities and talent.",
          label: "Hypeman",
        },
        { text: "you're are so hot", label: "Secret Admirer" },
        { text: "🔥", label: "Hypeman" },
        { text: "🔥🔥", label: "Hypeman" },
        { text: "😀", label: "Secret Admirer" },
        { text: "😀😀", label: "Hypeman" },
        { text: "❤️", label: "Secret Admirer" },
        { text: "❤️❤️", label: "Hypeman" },
        { text: "🙂", label: "Secret Admirer" },
        { text: "🙂🙂", label: "Hypeman" },
        { text: "🥳", label: "Secret Admirer" },
        { text: "🥳🥳", label: "Hypeman" },
        { text: "wow", label: "Hypeman" },
        { text: "wow!!", label: "Hypeman" },
        { text: "WOW", label: "Hypeman" },
        { text: "amazing", label: "Hypeman" },
        { text: "download this app", label: "Bot" },
        { text: "click this link", label: "Bot" },
        { text: "win a free handbag", label: "Bot" },
        { text: "lblblb", label: "Bot" },
        { text: "FIRST", label: "Bot" },
        { text: "URGENT!!/ATENTTION", label: "Bot" },
        { text: "like back!", label: "Bot" },
        { text: "like back", label: "Bot" },
        { text: "you look so skinny now", label: "Low key hater" },
        { text: "wow you look so pretty today", label: "Low key hater" },
        { text: "wow you lost weight", label: "Low key hater" },
        { text: "you look great for your age!", label: "Low key hater" },
        { text: "you don't look that old!", label: "Low key hater" },
        { text: "Buy this stock now", label: "Bot" },
        { text: "Amazing work!, buy this stock now", label: "Bot" },
        { text: "Click this", label: "Bot" },
        { text: "Wow that's really cool... click this now", label: "Bot" },
      ],
    });

    return res.status(200).send(JSON.stringify(response.body.classifications));
    console.log(
      `The confidence levels of the labels are ${JSON.stringify(
        response.body.classifications
      )}`
    );
  })();
});

module.exports = router;
