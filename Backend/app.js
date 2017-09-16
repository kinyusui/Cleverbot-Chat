const express = require('express');
const router = require('./router.js');
const db = require('./database.js');
const bodyparser = require('body-parser');

//so is app like the server or what?

let app = express();
//app.use( `/ChatBot`, bodyparser.urlencoded({ extended: true }));
app.use('/ChatBot', bodyparser.json());
app.use('/', router);
app.listen(3000);
