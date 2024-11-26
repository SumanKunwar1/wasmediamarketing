const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: { 
    type: String,   
    required: true 
  },
  contentType: { 
    type: String,   
    required: true 
  },
  imagePath: { 
    type: String,
    required: true
  },
  size: {
    type: Number,  
    required: true
  },
  islider: {
    type: Boolean,
    required: false
  }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
