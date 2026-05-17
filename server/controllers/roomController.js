const Room = require('../models/Room');
const crypto = require('crypto');

// @desc    Create a new room
// @route   POST /api/rooms/create
// @access  Private
const createRoom = async (req, res) => {
  try {
    const { isPrivate } = req.body;
    
    // Generate a unique 8-character hex string for the room ID
    const roomId = crypto.randomBytes(4).toString('hex');

    const newRoom = await Room.create({
      roomId,
      owner: req.user._id,
      members: [req.user._id], // Owner is automatically a member
      isPrivate: isPrivate || false,
    });

    res.status(201).json({
      success: true,
      room: newRoom,
      message: 'Room created successfully',
    });
  } catch (error) {
    console.error('Create Room Error:', error);
    res.status(500).json({ message: 'Server error creating room' });
  }
};

// @desc    Get room by ID and join
// @route   GET /api/rooms/:roomId
// @access  Private
const getRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    // Find the room and populate owner and members
    const room = await Room.findOne({ roomId })
      .populate('owner', 'name email profilePic')
      .populate('members', 'name email profilePic');

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Check if the current user is already a member
    const isMember = room.members.some(
      (member) => member._id.toString() === req.user._id.toString()
    );

    // If not a member, add the user to the members list
    if (!isMember) {
      room.members.push(req.user._id);
      await room.save();
      
      // We need to re-populate after saving since we just pushed an ObjectId
      await room.populate('members', 'name email profilePic');
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    console.error('Get Room Error:', error);
    res.status(500).json({ message: 'Server error fetching room' });
  }
};

module.exports = {
  createRoom,
  getRoom,
};
