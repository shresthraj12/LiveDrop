const mongoose = require('mongoose');

// Snippet Schema Definition
// Purpose: Store shared code snippets or text snippets like CodeShare.
const snippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the snippet'],
    trim: true,
  },
  code: {
    type: String,
    required: [true, 'Please provide the snippet code/text'],
  },
  language: {
    type: String,
    default: 'javascript', // Default language for syntax highlighting
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A snippet must have an owner'],
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: [true, 'A snippet must be associated with a room'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Snippet', snippetSchema);
