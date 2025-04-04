const express = require('express');
const router = express.Router();
const { auth, isMentor } = require('../middleware/auth');
const Hackathon = require('../models/Hackathon');

// Get all hackathons
router.get('/', async (req, res) => {
  try {
    const hackathons = await Hackathon.find()
      .populate('organizer', 'name')
      .populate('mentors', 'name expertise')
      .sort({ date: 1 });
    res.json(hackathons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get hackathon by id
router.get('/:id', async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id)
      .populate('organizer', 'name')
      .populate('mentors', 'name expertise')
      .populate('participants', 'name');
    
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }
    
    res.json(hackathon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create hackathon
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, date, location } = req.body;
    
    const hackathon = new Hackathon({
      name,
      description,
      date,
      location,
      organizer: req.user._id
    });

    await hackathon.save();
    res.json(hackathon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Join hackathon as mentor
router.post('/:id/join-mentor', [auth, isMentor], async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }

    if (hackathon.mentors.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already joined as mentor' });
    }

    hackathon.mentors.push(req.user._id);
    await hackathon.save();

    res.json(hackathon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Join hackathon as participant
router.post('/:id/join', auth, async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }

    if (hackathon.participants.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already joined as participant' });
    }

    hackathon.participants.push(req.user._id);
    await hackathon.save();

    res.json(hackathon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
