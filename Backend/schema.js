const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
  user : { type: String, required: true },
  cleverbot : { type: String, required: true }
})

var chat = mongoose.model('chat', chatSchema);

//note that after invoking save the table and values are made;
//use db.chat.find() to see inside chat table;
var save = (data) => {
  chat.create({user: data.input, cleverbot: data.output});
}
//chat.create will input it into w.e server it is;
module.exports.Schema = chatSchema;
module.exports.model = chat;
module.exports.save = save;