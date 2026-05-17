const mongoose = require('mongoose');

// Room Schema Definition
// Purpose: A real-time sharing room where users can share files, text, PDFs, and messages.
const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: [true, 'Please provide a unique room ID'],
    unique: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A room must have an owner'],
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  isPrivate: {
    type: Boolean,
    default: false,
  },
  expiresAt: {
    type: Date,
    // Optional: Set a default expiration if needed, e.g., 24 hours from creation
    // default: () => Date.now() + 24*60*60*1000
  },
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
