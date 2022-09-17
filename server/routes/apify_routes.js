const { ApifyClient } = require('apify-client');
const express = require("express");
const router = express.Router();

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'apify_api_CO6Gmc3rRT2mtH9ggWI35wQ4QJ1lYO1u50DD',
});

// Prepare actor input
const input = {
    "directUrls": [
        "https://www.instagram.com/p/CGdl6M_Jh1l/",
    ],
    "resultsLimit": 5
};

router.route("/").get((req, res) => {
    (async () => {
        // Run the actor and wait for it to finish

        const run = await client.actor("zuzka/instagram-comment-scraper").call(input);

        // Fetch and print actor results from the run's dataset (if any)
        //console.log('Results from dataset');
        const { items } = await client.dataset(run.defaultDatasetId).listItems();
        //console.log(items)
        return res.status(200).send(JSON.stringify(items));
        items.forEach((item) => {
            console.log(item);
        });
    })();
})

module.exports = router;