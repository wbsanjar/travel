const Trip = require('../models/trips.js');
const User = require('../models/user');
const { asyncHandler } = require('../utils/asyncHandler');

// POST /api/trips - Save a trip
exports.createTrip = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const trip = new Trip({
    ...req.body,
    userId,
  });

  await trip.save();

  // ✅ Link trip to the user's plannedTrips array
  await User.findByIdAndUpdate(userId, {
    $push: { plannedTrips: trip._id },
  });

  res.status(201).json({ message: 'Trip saved successfully', trip });
});

// GET /api/trips - Get trips only for logged-in user
exports.getAllTrips = asyncHandler(async (req, res) => {
  const userId = req.user._id; // ✅ Logged-in user
  const trips = await Trip.find({ userId }).sort({ _id: -1 }); // ✅ Only this user's trips
  res.status(200).json(trips);
});

// DELETE /api/trips/:id - Delete only if user owns the trip
exports.deleteTrip = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const tripId = req.params.id;

  const deletedTrip = await Trip.findOneAndDelete({ _id: tripId, userId });

  if (!deletedTrip) {
    return res.status(404).json({ message: 'Trip not found or not authorized' });
  }

  // ✅ Remove reference from User
  await User.findByIdAndUpdate(userId, {
    $pull: { plannedTrips: tripId },
  });

  res.status(200).json({ message: 'Trip deleted successfully' });
});