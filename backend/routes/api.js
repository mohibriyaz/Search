const express = require ('express');
const { Ad } = require('../models/ad');
const { Company } = require('../models/company');
const router = express.Router();

/**
 * should show ads matching the keyword entered. 
 * Searching across the company name, primary text, 
 * headline, and description in a single query will be a good idea 
 * (Hint: aggregate & populate functions)
 */
router.get('/search', async function(req, res, next) {
  const query = req.query.query;
  console.log(query);


  const ads = await Ad.aggregate([
    {
      $match: {
        $text: {
          $search: query
        }
      }
    },
    {
      $lookup: {
        from: 'companies',
        localField: 'companyId',
        foreignField: '_id',
        as: 'company',
      }
    },
    {
      $unwind: '$company'
    }
  ]);
  res.json(ads);
});


module.exports= router;
