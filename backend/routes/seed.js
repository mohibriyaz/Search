const { Ad } = require('../models/ad');
const express = require ('express');
const { Company } = require('../models/company');
const router = express.Router();

router.get('/ads', async function(req, res, next) {
  const data = await Ad.find();
  res.status(200).json({data});
});

router.post('/ads', async function(req, res, next) {
  
 try {
  const isThere = await Company.findOne({_id: req.body.companyId});
  if(!isThere) throw new Error('Company not found');

  const data = await Ad.create(req.body);
  res.status(200).json({data});
 
} catch (error) {
   return res.status(401).json({error});
 }
});


// Companies
router.get('/companies', async function(req, res, next) {
  const data = await Company.find();
  res.status(200).json({data});
});

router.post('/companies', async function(req, res, next) {
  const data = await Company.create(req.body);
  res.status(200).json({data});
});

module.exports= router;
