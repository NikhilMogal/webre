
const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');


router.get('/', async (req, res) => {
  try {
    const achievements = await Achievement.find(); // Fetch all stored image URLs
    res.json(achievements);
  } catch (error) {
    res.status(500).send("Error fetching achievements: " + error.message);
  }
});


router.post('/', async (req, res) => {
  const { imageUrl } = req.body;
  if (!imageUrl) {
    return res.status(400).json({ message: 'Image URL is required' });
  }

  try {
    const newAchievement = new Achievement({ imageUrl });
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(500).send("Error saving achievement: " + error.message);
  }
});

module.exports = router;
