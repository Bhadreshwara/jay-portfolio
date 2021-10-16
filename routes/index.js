var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
