const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Route to submit feedback
router.post('/submit', async (req, res) => {
  const { mentorId, userId, feedbackMessage, rating } = req.body;

  try {
    const feedback = new Feedback({
      mentorId,
      userId,
      feedbackMessage,
      rating,
    });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
