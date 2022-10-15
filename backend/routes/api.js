const express = require("express");
const { Ad } = require("../models/ad");
const { Company } = require("../models/company");
const router = express.Router();

router.get("/search", async function (req, res, next) {
  const query = req.query.query;

  const ads = await Ad.aggregate([
    {
      $match: {
        $text: {
          $search: query,
        },
      },
    },
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "company",
      },
    },
    {
      $unwind: "$company",
    },
  ]);
  res.json(ads);
});

module.exports = router;
