const express = require('express');
const path = require('path');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
const validatePageRequest = require('../middleware/validatePageRequest');
const parseContent = require('../middleware/parseContent');
const Page = require('../models/pageSchema');

router.get('/:slug', isAuthenticated, async (req, res) => {
    try {
      const { slug } = req.params;
        const page = await Page.findOne({ urlSlug: slug }).populate('parentId', 'title');
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }
      res.status(200).json({
        message: 'Page fetched successfully',
        data: page,
      });
    } catch (error) {
      console.error('Error fetching page by slug:', error);
      res.status(500).json({ message: 'Error fetching page' });
    }
});


router.post('/', isAuthenticated, async (req, res) => {
  try {
    const {
      title,
      urlSlug,
      pageType,
      image,
      file,
      content,
      metaTitle,
      metaDescription,
      metaKeywords,
      author,
    } = req.body;

    console.log(content);
    const parsedContent = parseContent(content);
    console.log('Parsed content:', parsedContent);

    const existingPage = await Page.findOne({ urlSlug });

    if (existingPage) {
      return res.status(400).json({
        message: 'A page with this URL slug already exists.',
      });
    }

    const newPage = new Page({
      title,
      urlSlug,
      pageType,
      image,
      file,
      content: parsedContent,  // Store the parsed content
      metaTitle,
      metaDescription,
      metaKeywords,
      author: author || 'admin',
    });

    // Save the new page to the database
    const savedPage = await newPage.save();

    // Respond with the created page
    return res.status(200).json({ message: 'sucessfully created page' });
  } catch (error) {
    console.error('Error creating page:', error);
    return res.status(500).json({ message: 'Error creating page', error });
  }
});


router.patch('/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      urlSlug,
      pageType,
      parentId,
      order,
      isPublished,
      content,
      metaTitle,
      metaDescription,
      metaKeywords,
      author,
    } = req.body;

    // Find the page by ID
    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    // Only parse content if it's provided in the request body
    if (content) {
      const parsedContent = parseContent(content);  // Parse the content using your parseContent function
      page.content = parsedContent;  // Update the content field with the parsed content
    }

    // Update other fields if they are provided in the request
    if (title) page.title = title;
    if (urlSlug) page.urlSlug = urlSlug;
    if (pageType) page.pageType = pageType;
    if (parentId !== undefined) page.parentId = parentId;
    if (order !== undefined) page.order = order;
    if (isPublished !== undefined) page.isPublished = isPublished;
    if (metaTitle) page.metaTitle = metaTitle;
    if (metaDescription) page.metaDescription = metaDescription;
    if (metaKeywords) page.metaKeywords = metaKeywords;
    if (author !== undefined) page.author = author || 'admin';  

    const updatedPage = await page.save();

    return res.status(200).json({ message: 'sucessfully updated page' });
  } catch (error) {
    console.error('Error updating page:', error);
    return res.status(500).json({ message: 'Error updating page', error });
  }
});

router.patch('/status/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const { parentPage, pageType, isPublished } = req.body;
    const updateFields = {};

    if (parentPage && parentPage !== 'none') {
      updateFields.parentId = parentPage;
      updateFields.order = 2;
    } else {
      if (pageType === 'main') {
        updateFields.parentId = null;
        updateFields.order = 0;
      } else if (pageType === 'footer') {
        updateFields.parentId = null;
        updateFields.order = 1;
      }
    }

    updateFields.isPublished = isPublished;

    const updatedPage = await Page.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updatedPage) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.json(updatedPage);
  } catch (error) {
    console.error('Error updating page:', error);
    return res.status(500).json({ message: 'Error updating page', error });
  }
});

router.post('/:id', isAuthenticated, async (req, res) => {
    try {
      console.log('deleting the page');
      const { id } = req.params;
      console.log(id);
      const page = await Page.findById(id);
  
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }
      
      await Page.deleteOne({ _id: id });
  
      return res.redirect('/admin/page');
    } catch (error) {
      console.error('Error deleting page:', error);
      res.status(500).json({ message: 'Error deleting page' });
    }
});

module.exports = router;