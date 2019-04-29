const path = require('path');

const robotsController = require('./controllers/robots');
const cvController = require('./controllers/cv');
const statController = require('./controllers/stats');
const sitemapController = require('./controllers/sitemap');
const messageController = require('./controllers/contact');

const router = require('express').Router();


router.route('/robots.txt', robotsController.showRobotsFile);
router.route('/cv').get(cvController.showCV).post(cvController.showCV);
router.route('/sitemap.xml').get(sitemapController.showSitemap);
router.route('/stats').post(statController.loadStats);
router.route('/contact').post(messageController.sendMessage);

module.exports = router;
