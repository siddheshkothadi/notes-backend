const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  name : {
    type: String
  },
  picture:{
    type: String
  }
});
  
const User = mongoose.model('User', userSchema);

module.exports = User;