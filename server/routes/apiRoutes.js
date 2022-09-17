const express = require("express");
const router = express.Router();
const cohere = require("cohere-ai");
const dotenv = require("dotenv");
dotenv.config();

cohere.init(process.env.COHERE_KEY);

router.route("/").get((req, res) => {
  (async () => {
    const response = await cohere.classify({
      inputs: [
        "Wonderful scenes, great design.",
        "THIS IS LIT EVERYTHING EVERYWHERE ALL AT ONCE",
        "Put in Dan Reynolds hot 🥵",
      ],
      examples: [
        { text: "You look so pretty!!", label: "Hype" },
        { text: "babe", label: "Not hype" },
        { text: "Fire!! :fire:", label: "Hype" },
        { text: "cool!", label: "Not hype" },
        { text: "girlll you look amazing!!", label: "Hype" },
        { text: "wow werk it girl!!!", label: "Hype" },
        { text: "congrats on your show last night!", label: "Not hype" },
        { text: "dude", label: "Not hype" },
        { text: "DUDE", label: "Hype" },
        { text: "bro", label: "Not hype" },
        { text: "BRO", label: "Hype" },
        {
          text: "Omg I saw you live in concert in Toronto last night and you were so amazing! I honestly think it was the best performance I’ve ever seen! You are so talented and I love you!",
          label: "Hype",
        },
        {
          text: "I can’t believe how amazing of an artist you are! We are so blessed to have you on this earth with us. I am in awe of your vocal abilities and talent.",
          label: "Hype",
        },
        { text: "your are so hot", label: "Not hype" },
        { text: ":fire:", label: "Not hype" },
        { text: ":fire::fire:", label: "Hype" },
        { text: ":grinning:", label: "Not hype" },
        { text: ":grinning::grinning:", label: "Hype" },
        {
          text: ":heart:",
          label: "Not hype”}, {“text”: “:heart::heart:",
          label: "Hype",
        },
        { text: ":slightly_smiling_face:", label: "Not hype" },
        {
          text: ":slightly_smiling_face::slightly_smiling_face:",
          label: "Hype",
        },
        { text: ":partying_face:", label: "Not hype" },
        { text: ":partying_face::partying_face:", label: "Hype" },
        { text: "wow", label: "Not hype" },
        { text: "wow!!!!", label: "Hype" },
        { text: "WOW", label: "Hype" },
        { text: "shit", label: "Not hype" },
        { text: "SHIT!!!", label: "Hype" },
        { text: "amazing", label: "Not hype" },
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
