var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName  : { type: String, required: true },
  lastName   : { type: String, required: true },
  age        : { type: Number, required: false },
  updated_on : { type: Date, default: Date() }
});

module.exports = mongoose.model('user', UserSchema)