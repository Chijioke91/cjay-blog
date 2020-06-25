const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Blog', BlogSchema);
