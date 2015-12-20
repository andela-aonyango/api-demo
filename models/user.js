var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName  : String,
  lastName   : String,
  age        : Number,
  updated_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema)