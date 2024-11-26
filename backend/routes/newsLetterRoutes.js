const express = require('express');
const NewsLetter = require('../models/newsLetterSchema');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated')

router.post('/', async (req, res) => {
  try {
    console.log("subscriber has arrived");
    const { email} = req.body;
    const newNewsLetter = new NewsLetter({
      email: email
    });
    await newNewsLetter.save();
    res.redirect('/');
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'There was an issue saving your message.' });
  }
});

router.post('/:id', isAuthenticated, async (req, res) => {
  try {
    console.log('deleteing the newsletter');
    const newsletterId = req.params.id;
    const newsletter = await NewsLetter.findById(newsletterId);

    if (!newsletter) {
      return res.status(404).json({ message: ' newsletter not found' });
    }
    await NewsLetter.findByIdAndDelete(newsletterId);
    return res.redirect('/admin/subscriber');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error deletiing file', error: err });
  }
});



module.exports = router;