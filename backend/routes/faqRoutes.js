const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
const Faq = require('../models/faqSchema'); 

router.put('/', isAuthenticated, async (req, res) => {
  try {
    const {
      title,
      metaDescription,
      metaKeywords,
      sectionTitle,
      sectionDescription,
      tabs,
    } = req.body;

    let faq = await Faq.findOne();

    if (faq) {
      faq.title = title;
      faq.metaDescription = metaDescription;
      faq.metaKeywords = metaKeywords;
      
      if (faq.content.length === 0) {
        faq.content.push({
          sectionTitle,
          Description: sectionDescription,
          tabs: tabs, 
        });
      } else {
        let contentSection = faq.content.find(content => content.sectionTitle === sectionTitle);
        if (contentSection) {
          contentSection.Description = sectionDescription;
          contentSection.tabs = [...contentSection.tabs, ...tabs]; 
        } else {
          faq.content.push({
            sectionTitle,
            Description: sectionDescription,
            tabs: tabs,
          });
        }
      }

      // Save the updated FAQ
      await faq.save();

      return res.status(200).json({ message: 'FAQ updated successfully!' });
    } else {
      // If no FAQ exists, create a new one
      faq = new Faq({
        title,
        metaDescription,
        metaKeywords,
        content: [
          {
            sectionTitle,
            Description: sectionDescription,
            tabs: tabs,
          }
        ],
      });

      await faq.save();

      return res.status(201).json({ message: 'FAQ created successfully!' });
    }
  } catch (error) {
    console.error('Error handling FAQ:', error);
    res.status(500).send('Error saving the FAQ');
  }
});

router.delete('/:tabId', async (req, res) => {
  const { tabId } = req.params;

  try {
    const faq = await Faq.findOne();

    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    let tabDeleted = false;

    faq.content.forEach(section => {
      const tabIndex = section.tabs.findIndex(tab => tab._id.toString() === tabId);

      if (tabIndex !== -1) {
        section.tabs.splice(tabIndex, 1);
        tabDeleted = true;
      }
    });

    if (!tabDeleted) {
      return res.status(404).json({ message: 'Tab not found' });
    }
    await faq.save();

    res.status(200).json({ message: 'Tab deleted successfully' });
  } catch (error) {
    console.error('Error deleting tab:', error);
    res.status(500).json({ message: 'Error deleting tab', error });
  }
});
module.exports = router;
