const { ApifyClient } = require("apify-client");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

// Initialize the ApifyClient with API token
const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

const url = "https://www.instagram.com/";

router.route("/").post((req, res) => {
  const input = {
    directUrls: [`${url}${req.body.username}/`],
    resultsLimit: 5,
  };

  // Run the actor and wait for it to finish
  (async () => {
    console.log(input);
    const run = await client
      .actor("zuzka/instagram-comment-scraper")
      .call(input);

    // Fetch and print actor results from the run's dataset (if any)
    //console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    // const alteredItems = items.filter((item) => {

    //   let itemArray = [];

    //   return itemArray;
    // });

    let itemArray = [];

    for (const item of items) {
      itemArray.push(item.latestComments);
    }

    return res.status(200).send(JSON.stringify(itemArray));
  })();
});

module.exports = router;
