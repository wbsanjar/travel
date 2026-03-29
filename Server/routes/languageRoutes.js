const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { verifyJWT } = require('../middleware/auth');

// Get user's language preference
router.get('/preference', verifyJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('language');
    res.json({ language: user.language || 'en' });
  } catch (error) {
    console.error('Error fetching language preference:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user's language preference
router.put('/preference', verifyJWT, async (req, res) => {
  try {
    const { language } = req.body;

    // Validate language
    const supportedLanguages = ['en', 'hi', 'es', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'de'];
    if (!supportedLanguages.includes(language)) {
      return res.status(400).json({ message: 'Unsupported language' });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { language },
      { new: true }
    ).select('language');

    res.json({ language: user.language });
  } catch (error) {
    console.error('Error updating language preference:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get supported languages
router.get('/supported', (req, res) => {
  const supportedLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  res.json(supportedLanguages);
});

module.exports = router;