const express = require('express');
const router = express.Router();
const schema = require('./schema.js');
const request = require('request');

router.use(function(req, res, next) {
    console.log('new log from use', req.method, req.url);// log each request to the console
    next(); // continue doing what we were doing and go to the route
});

router.get('/ChatBot', function(req, res) {

  res.status(200).send(`Oi mate good job getting that shit mate`);
})

router.post('/ChatBot', function(req, res) {
  
  res.status(201).send(`BAHAHA you even got the post, good going lad`);
})

module.exports = router;
//res.status(201).send()