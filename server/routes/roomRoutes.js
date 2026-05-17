const express = require('express');
const router = express.Router();
const { createRoom, getRoom } = require('../controllers/roomController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/rooms/create
router.post('/create', protect, createRoom);

// @route   GET /api/rooms/:roomId
router.get('/:roomId', protect, getRoom);

module.exports = router;
