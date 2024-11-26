const mongoose = require('mongoose');

// Define the schema for the contact form
const contactFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
