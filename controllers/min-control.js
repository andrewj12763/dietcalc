const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/resources', (req, res) => {
  res.render('resources');
});

router.get('/makemehealthy', (req, res) => {
  res.render('makemehealthy');
});

router.get('/helpmeloseweight', (req, res) => {
  res.render('helpmeloseweight');
});

router.get('/helpmegainweight', (req, res) => {
  res.render('helpmegainweight');
});

module.exports = router