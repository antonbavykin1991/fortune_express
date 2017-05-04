var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },

  author: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  },

  modified: {
    type: Date,
    default: Date.now
  }
});