const mongoose = require('mongoose');

//connect vs connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Kai you got a error mate:'));
db.once('open', function() {
  console.log('Nice job connecting to the server Kai');
})

mongoose.connect(`mongodb://localhost/ChatBot`);

module.exports = db;