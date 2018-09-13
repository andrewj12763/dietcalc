const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/resources', (req, res) => {
  res.render('resources');
});



router.get('/page3', (req, res) => {
  res.render('page3');
});

module.exports = router