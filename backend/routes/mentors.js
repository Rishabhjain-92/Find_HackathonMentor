const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const User = require('../models/User');

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await User.find({ role: 'mentor' })
      .select('-password')
      .sort({ createdAt: -1 });
    res.json(mentors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get mentor by id
router.get('/:id', async (req, res) => {
  try {
    const mentor = await User.findOne({ _id: req.params.id, role: 'mentor' })
      .select('-password');
    
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    
    res.json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update mentor profile
router.put('/profile', auth, async (req, res) => {
  try {
    if (req.user.role !== 'mentor') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { expertise, experience, bio } = req.body;
    
    const mentor = await User.findById(req.user._id);
    if (expertise) mentor.expertise = expertise;
    if (experience) mentor.experience = experience;
    if (bio) mentor.bio = bio;

    await mentor.save();
    res.json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search mentors
router.get('/search/:query', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const mentors = await User.find({
      role: 'mentor',
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { expertise: { $in: [new RegExp(searchQuery, 'i')] } }
      ]
    }).select('-password');
    
    res.json(mentors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
