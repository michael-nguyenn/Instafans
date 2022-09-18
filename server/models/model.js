const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  comment: {
    type: String,
  },
  confidenceLevel: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Results = mongoose.model("Results", ResultSchema);

module.exports = { Results };
