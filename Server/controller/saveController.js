const User = require('../models/user');
const { asyncHandler } = require('../utils/asyncHandler');

const savePlace = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { placeId, name, description, image } = req.body;

  const user = await User.findById(userId);

  const alreadySaved = user.savedPlaces.some(
    (place) => place.placeId.toString() === placeId
  );

  if (alreadySaved) {
    return res.status(400).json({ message: 'Place already saved' });
  }

  user.savedPlaces.push({ placeId, name, description, image });
  await user.save();

  res.status(200).json({ message: 'Place saved successfully' });
});

const getSavedPlaces = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ savedPlaces: user.savedPlaces });
});

const deleteSavedPlace = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const placeId = req.params.placeId;

  await User.findByIdAndUpdate(userId, {
    $pull: { savedPlaces: { placeId } },
  });

  res.status(200).json({ message: 'Saved place removed successfully' });
});

module.exports = { savePlace, getSavedPlaces, deleteSavedPlace };