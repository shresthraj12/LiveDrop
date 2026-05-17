const mongoose = require('mongoose');

// Message Schema Definition
// Purpose: Store real-time chat messages inside rooms.
const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A message must have a sender'],
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: [true, 'A message must be associated with a room'],
  },
  message: {
    type: String,
    required: [true, 'Please provide the message content'],
    trim: true,
  },
  messageType: {
    type: String,
    enum: ['text', 'file'],
    default: 'text',
  },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
