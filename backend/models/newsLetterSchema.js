const mongoose = require('mongoose');

// Define the schema for the contact form
const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const NewsLetter = mongoose.model('newsletter', newsLetterSchema);

module.exports = NewsLetter;
