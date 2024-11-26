const mongoose = require('mongoose');

const cssSchema = new mongoose.Schema({
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
});

const File = mongoose.model('File', cssSchema);

module.exports = File;
