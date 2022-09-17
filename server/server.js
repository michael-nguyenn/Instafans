const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const apiRoutes = require("./routes/apiRoutes");
const cohereRoutes = require("./routes/cohereRoutes");
const resultRoutes = require("./routes/resultRoutes");

dotenv.config();
const PORT = process.env.PORT ?? 8080;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);
app.use("/cohere", cohereRoutes);
app.use("/result", resultRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
