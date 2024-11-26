const mongoose = require('mongoose');

// Define the schema for the contact form
const infoSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  twitter: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  google_plus: {
    type: String,
    required: false,
  },
  youtube: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  }
});

const Info = mongoose.model('info', infoSchema);

module.exports = Info;
