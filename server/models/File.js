const mongoose = require('mongoose');

// File Schema Definition
// Purpose: Store uploaded files shared inside rooms.
const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: [true, 'Please provide a file name'],
    trim: true,
  },
  fileUrl: {
    type: String,
    required: [true, 'Please provide the file URL'],
  },
  fileType: {
    type: String,
    required: [true, 'Please provide the file type'],
  },
  fileSize: {
    type: Number,
    required: [true, 'Please provide the file size in bytes'],
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'File must be associated with a user'],
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: [true, 'File must be associated with a room'],
  },
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
