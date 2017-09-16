const express = require('express');
const db = require('./database.js');
const schema = require('./schema.js');
const key = require('./config.js');
//const bodyparser = require('body-parser');
const request = require('request');
const router = express.Router();


router.use(function(req, res, next) {
    //console.log('new log from router.use', req.method, req.body);// log each request to the console
    next(); // continue doing what we were doing and go to the route
});
//router.use(bodyparser.json());


router.get('/ChatBot', function(req, res) {
  //get from mongoose database
  schema.model.find({})
  .then(function(messages) {
    let formatted = messages.map((obj) => {
      return ['User: ' + obj.user, 'Cleverbot: ' + obj.cleverbot];
    })
    res.send(formatted);
  });   //note to self don't forget to use find({}) not 
  //find() and use promises to get the data, otherwise you can't get it

  //res.status(200).send(`Oi mate good job getting that shit mate`);
})

// let option = {                       //refactor to use option when you have time
//   url: `http://www.cleverbot.com/getreply`,
//   key: key,
//   input: `SUP MAN`
// }

//`http://www.cleverbot.com/getreply?key=${key}&input=Hello`
function requestwithcb (input,cb) {
  request(`http://www.cleverbot.com/getreply?key=${key}&input=${input}`, function(error, botres, body) {
    if (error) {
      throw error;
      return;
    }
    cb(botres);  
  });
}


router.post('/ChatBot', function(req, res) {

  let input = req.body.message;
  //console.log(req);
  requestwithcb(input,function(botres){
    let data = JSON.parse(botres.body);
    //console.log(data.input,'NEXT IS OUTPUT',data.output);
    schema.save(data);
    res.status(res.statusCode).send(`BAHAHA you even got the post, good going lad`)    
  })
})

// let option = {
//   url: "https://www.cleverbot.com/getreply",
//   data: {"input": ``, "key": key},
//   dataType: "jsonp"
// }
// let option = {
//   url: "https://www.cleverbot.com/getreply",
//   headers: {
//     'User-Agent': 'request',
//     'Authorization': `token ${key}`
//   }
// }

module.exports = router;
//res.status(201).send()