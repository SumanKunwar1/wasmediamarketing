const express = require('express');
const path = require('path');
const router = express.Router();
const Page = require('../models/pageSchema');
const Info = require('../models/infoSchema');
const Faq = require('../models/faqSchema');
const Slider = require('../models/sliderSchema');

// Function to process navbar pages into mainPages, footerPages, and subPages
const processNavbarPages = (navbarPages) => {
  const mainPages = [];
  const subPages = {};
  const footerPages = [];

  navbarPages.forEach(page => {
    if (page.parentId === null && page.order === 0) {
      mainPages.push(page);
    } else if (page.parentId === null && page.order === 1) {
      footerPages.push(page);
    } else if (page.parentId !== null) {
      if (!subPages[page.parentId]) {
        subPages[page.parentId] = [];
      }
      subPages[page.parentId].push(page);
    }
  });

  // Assign subPages to each mainPage
  mainPages.forEach(mainPage => {
    mainPage.subPages = subPages[mainPage._id] || [];
  });

  mainPages.forEach(mainPage => {
    console.log('mainpage',mainPage);  // Log the current mainPage
    mainPage.subPages.forEach(subPage => {  // Iterate over subPages
      console.log('subpage' , subPage);  // Log each subPage
    });
  });
  

  return { mainPages, subPages, footerPages };
};

router.get('', async (req, res) => {
  try {
    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);

    const slider = await Slider.find({ visible: true });
    const slidersWithUrls = slider.map(slider => {
      return {
        ...slider.toObject(),  // Convert Mongoose document to plain object
        url: `/admin/image/slider/${slider._id}`, // Add the URL to each slider object
      };
    });
    const page = await Page.find(
      { 
        parentid: null, 
        order: 0, 
        isPublished: true, 
        urlSlug: { $in: ['about', 'service'] }
      },
      { content: 1 , urlSlug:1}
    );
    console.log(JSON.stringify(page, null, 2));
    const info = await Info.findOne();
    console.log(slidersWithUrls);
    res.render('index', { page: page, navbarPages: mainPages, footerPages: footerPages, slider: slidersWithUrls, info: info });
  } catch (error) {
    console.error('Error serving the admin login page:', error);
    res.status(500).send('Error serving the page');
  }
});

router.get('/about', (req, res) => servePage('about', res));

router.get('/service', (req, res) => servePage('service', res));

router.get('/portfolio', (req, res) => servePage('portfolio', res));

router.get('/team', (req, res) => servePage('team', res));

router.get('/career', (req, res) => servePage('career', res));

router.get('/blog', (req, res) => servePage('faq', res));

router.get('/gallery', async (req, res) => {
  try {
    console.log('Serving image page to user');
    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);
    const info = await Info.findOne();

    res.render('gallery', { navbarPages: mainPages, footerPages: footerPages, info: info });
  } catch (error) {
    console.error('Error serving the page:', error);
    res.status(500).send('Error serving the page');
  }
});

router.get('/blog-detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const page = await Page.findById(id);

    if (!page || page.urlSlug !== 'blog-detail' || !page.isPublished) {
      return res.status(404).send('Blog detail not found');
    }

    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);
    const info = await Info.findOne();

    res.render('blog-detail', { page: page, navbarPages: mainPages, footerPages: footerPages, info: info });
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    res.status(500).send('Error fetching blog detail');
  }
});

router.get('/faq', async (req, res) => {
  try {
    const faq = await Faq.findOne();

    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);
    const info = await Info.findOne();
    console.log(faq);

    res.render('faq', { faq: faq, navbarPages: mainPages, footerPages: footerPages, info: info });
  } catch (error) {
    console.error('Error serving the FAQ page:', error);
    res.status(500).send('Error serving the FAQ page');
  }
});

router.get('/contact', async (req, res) => {
  try {
    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);
    const info = await Info.findOne();

    res.render('contact', { navbarPages: mainPages, footerPages: footerPages, info: info });
  } catch (error) {
    console.error('Error serving the contact page:', error);
    res.status(500).send('Error serving the page');
  }
});

router.get('/:urlSlug', async (req, res) => {
  try {
    const { urlSlug } = req.params;
    const page = await Page.findOne({ urlSlug, isPublished: true });

    if (!page) {
      return res.status(404).send('Page not found');
    }

    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();

    const { mainPages, footerPages } = processNavbarPages(navbarPages);
    const info = await Info.findOne();

    res.render('layout', { page: page, navbarPages: mainPages, footerPages: footerPages, info: info });
  } catch (error) {
    console.error('Error fetching page data:', error);
    res.status(500).send('Error fetching the page');
  }
});

// Reusable function for serving pages
const servePage = async (urlSlug, res) => {
  try {
    console.log('Serving page with urlSlug:', urlSlug);

    const page = await Page.findOne({ urlSlug, isPublished: true });
    if (!page) {
      return res.status(404).send('Page not found');
    }

    console.log('Page found:', page);

    const navbarPages = await Page.find(
      { isPublished: true },
      { urlSlug: 1, title: 1, parentId: 1, order: 1 }
    ).sort({ order: 1 }).exec();
    console.log('Navbar pages fetched:', navbarPages);

    const { mainPages, footerPages } = processNavbarPages(navbarPages);

    const info = await Info.findOne();
    res.render(urlSlug, { page: page, navbarPages: mainPages, footerPages: footerPages, info: info });

  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send('Error serving the page');
  }
};

module.exports = router;
