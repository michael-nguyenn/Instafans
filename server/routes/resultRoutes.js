const express = require("express");
const router = express.Router();

const { Results } = require("../models/model");

router
  .route("/")
  .get(async (req, res) => {
    const allResults = await Results.find();
    return res.status(200).json(allResults);
  })
  .post(async (req, res) => {
    const newResult = new Results({ ...req.body });
    const insertedResult = await newResult.save();
    return res.status(201).json(insertedResult);
  });

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const result = await Results.findById(id);
  return res.status(200).json(result);
});

module.exports = router;
