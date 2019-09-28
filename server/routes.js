const path = require('path');
const router = require('express').Router();

const robotsController = require('./controllers/robots');
const cvController = require('./controllers/cv');
const statController = require('./controllers/stats');
const sitemapController = require('./controllers/sitemap');
const messageController = require('./controllers/contact');


router.route('/robots.txt', robotsController.showRobotsFile);
router.route('/cv').get(cvController.showCV).post(cvController.showCV);
router.route('/sitemap.xml').get(sitemapController.showSitemap);
router.route('/stats').get(statController.loadStats);
router.route('/contact').post(messageController.sendMessage);

module.exports = router;
