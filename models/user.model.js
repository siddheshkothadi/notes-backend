const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,  
  //   minlength: 3
  // },
  googleId: {
    type: String
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