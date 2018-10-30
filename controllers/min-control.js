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

router.get('/mmh2', (req, res) => {
  res.render('mmh2');
});

router.get('/hlw2', (req, res) => {
  res.render('hlw2');
});

router.get('/hgw2', (req, res) => {
  res.render('hgw2');
});

module.exports = router