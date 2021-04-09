const path = require('path');
const router = require('express').Router();
const authRequest = require('./requests/auth');
const authMiddleware = require('./middleware/auth');

const robotsController = require('./controllers/robots');
const cvController = require('./controllers/cv');
const statController = require('./controllers/stats');
const sitemapController = require('./controllers/sitemap');
const messageController = require('./controllers/contact');
const authController = require('./controllers/auth');

const AUTH_URL = '/api/login';

router.route('/robots.txt', robotsController.showRobotsFile);
router.route('/cv').get(cvController.showCV).post(cvController.showCV);
router.route('/sitemap.xml').get(sitemapController.showSitemap);
router.route('/api/contact').post(messageController.sendMessage);

router.get('/api/stats', authMiddleware.verify, statController.loadStats);
router.post(AUTH_URL, authRequest.validate('login'), authController.login);

module.exports = router;
