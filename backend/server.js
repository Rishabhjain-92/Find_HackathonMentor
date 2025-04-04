require('dotenv').config();
const bcrypt = require('bcrypt'); // Import bcrypt
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express(); // Initialize app here
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Feedback schema
const Feedback = require('./models/Feedback'); // Import the Feedback model

// POST endpoint for submitting feedback
app.post('/api/feedback', async (req, res) => {
    const { mentorId, mentorName, userId, userName, rating, message } = req.body;
    try {
        const feedback = new Feedback({ mentorId, mentorName, userId, userName, rating, message });
        await feedback.save();
        res.status(201).json({ message: 'Feedback is submitted' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
});

// New POST endpoint to submit feedback
app.post('/api/submit-feedback', async (req, res) => {
    const { name, message } = req.body;
    try {
        const feedback = new Feedback({ name, message });
        await feedback.save();
        res.status(201).send({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to submit feedback.' });
    }
});

// New POST endpoint to submit feedback
app.post('/api/feedback', async (req, res) => {
    const { name, message } = req.body;
    try {
        const feedback = new Feedback({ name, message });
        await feedback.save();
        res.status(201).send({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to submit feedback.' });
    }
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the Hackathon Mentor API');
});

// Sign-up endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
  }

  // If email does not exist, create a new user with plain text password
  const newUser = new User({ name, email, password }); // Store password in plain text
  try {
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'Failed to register user.' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
      return res.status(400).json({ message: 'Email is not registered.' });
  }

  // Check if the password matches (without hashing)
  if (existingUser.password !== password) {
      return res.status(400).json({ message: 'Invalid password.' });
  }

  res.status(200).json({ message: 'Login successful.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
