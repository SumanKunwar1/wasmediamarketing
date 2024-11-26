const express = require('express');
const router = express.Router();

const contactRoutes = require('./contactRoutes');
const adminRoutes = require('./adminRoutes');
const userRoutes = require('./userRoutes');
const pageRoutes = require('./pageRoutes');
const imageRoutes = require('./imageRoutes');
const fileRoutes = require('./fileRoutes');
const infoRoutes = require('./infoRoutes');
const faqRoutes = require('./faqRoutes');
const newsLetterRoutes = require('./newsLetterRoutes');

router.use('/admin', adminRoutes);
router.use('/api/contact', contactRoutes);
router.use('/admin/pages', pageRoutes);
router.use('/admin/image', imageRoutes);
router.use('/admin/Files', fileRoutes);
router.use('/admin/info', infoRoutes);
router.use('/admin/faq', faqRoutes);
router.use('/subscribe', newsLetterRoutes);
router.use('/', userRoutes);

module.exports = router;