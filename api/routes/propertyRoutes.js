const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const PropertyDetails = require('../models/propertyDetails');


router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/details/:propertyName', async (req, res) => {
    try {
      const propertyName = req.params.propertyName;
      const propertyDetail = await PropertyDetails.findOne({ name: propertyName });
  
      if (!propertyDetail) {
        return res.status(404).json({ message: 'Property details not found' });
      }
  
      res.json(propertyDetail);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching property details', error: err });
    }
  });

  
  

module.exports = router;
