const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const apiRoutes = require("./routes/apify_routes");

dotenv.config();
const PORT = process.env.PORT || 8080;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});