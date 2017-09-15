const express = require('express');
const router = require('./router.js');
const db = require('./database.js');
//so is app like the server or what?

let app = express();
app.use('/', router);

app.listen(3000);
