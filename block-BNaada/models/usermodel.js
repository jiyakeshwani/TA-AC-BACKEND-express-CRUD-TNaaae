var mongoose = require('mongoose')



var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  password: { type: String, minlength: 5, maxlength: 18 },
  createdAt: { type: Number, default: Date.now() },
});

var user = mongoose.model("User", userSchema);

module.exports = user;
