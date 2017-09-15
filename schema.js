const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
  username : { type: String, required: true },
  message : { type: String, required: true }
})

var chat = mongoose.model('chat', chatSchema);

//chat.create will input it into w.e server it is;
module.exports.Schema = chatSchema;
module.exports.model = chat;