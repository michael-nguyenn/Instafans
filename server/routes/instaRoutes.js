const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const axios = require("axios");
const { text } = require("body-parser");

dotenv.config();

const url = "https://www.instagram.com/goucanhtn22/";

var options = {
  url: url,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4",
  },
};

request(options, function(error, response, html) {
    if (!error) {

        console.log('Scraper running on Instagram user page.');

        // Use Cheerio to load the page.
        var $ = cheerio.load(html);

        // Code to parse the DOM here

      }
}

// router.route("/").get((req, res) => {
//   axios(url).then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html, null, false);

//     const data = $.html();
//     let articles = [];

//     // $(".a-cardui-header").each(function () {
//     //   const title = $(this).text();

//     //   articles.push({
//     //     title,
//     //   });
//     // });

//     return res.status(200).send(data);
//   });
// });

// const $ = cheerio.load(
//   `<ul id="fruits">
// <li class="apple">Apple</li>
// <li class="orange">Orange</li>
// <li class="pear">Pear</li>
// </ul>`,
//   null,
//   false
// );

// $.html();

// console.log($.html());

// const appleHTML = $("#fruits").text();

// console.log(appleHTML);

module.exports = router;
