const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated')
const Info = require('../models/infoSchema'); // Import the Info model

router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { 
      name, 
      phoneNumber, 
      location, 
      email, 
      twitter, 
      facebook, 
      google_plus, 
      youtube, 
      linkedin, 
      instagram 
    } = req.body;

    console.log('Updating the contact with data:', req.body);

    // Find the existing contact info in the database
    let info = await Info.findOne();
    console.log('Existing Info:', info); 

    if (info) {
      // If the info exists, update it
      info.Name = name || info.Name;
      info.phoneNumber = phoneNumber || info.phoneNumber;
      info.location = location || info.location;
      info.email = email || info.email;
      info.twitter = twitter || info.twitter;
      info.facebook = facebook || info.facebook;
      info.google_plus = google_plus || info.google_plus;
      info.youtube = youtube || info.youtube;
      info.linkedin = linkedin || info.linkedin;
      info.instagram = instagram || info.instagram;

      // Save the updated info
      await info.save();
      console.log('Updated contact info:', info);

      // Send a success response after updating
      res.status(200).json({ message: 'Updated info successfully' });
    } else {
      // If no contact info exists, create a new one
      const newInfo = new Info({
        Name: name,
        phoneNumber: phoneNumber,
        location: location,
        email: email,
        twitter: twitter,
        facebook: facebook,
        google_plus: google_plus,
        youtube: youtube,
        linkedin: linkedin,
        instagram: instagram
      });

      // Save the new info
      await newInfo.save();
      console.log('Created new contact info:', newInfo);

      // Send a success response after creation
      res.status(200).json({ message: 'created info successfully' });
    }
  } catch (error) {
    console.error('Error updating the contact info:', error);
    res.status(500).send('Error saving the contact info');
  }
});


module.exports = router;
