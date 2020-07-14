const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  googleId: { type: String, required: true },
  title: {type: String },
  description: { type: String },
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;