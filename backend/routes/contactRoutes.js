const express = require("express");
const ContactForm = require("../models/contact");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");

router.post("/", async (req, res) => {
  try {
    console.log("in the contact form api");
    const { name, phone, email, message } = req.body;
    const newContact = new ContactForm({
      fullName: name,
      phoneNumber: phone,
      email: email,
      message: message,
    });
    await newContact.save();
    res.status(201).json({ message: "Message received and saved." });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "There was an issue saving your message." });
  }
});

module.exports = router;
