const Destination = require("../models/destinations.js");

const { asyncHandler } = require("../utils/asyncHandler");

const estimateBudget = asyncHandler(async (req, res) => {
  const { destination, days, travelers } = req.body;
  const dest = await Destination.findOne({ destination });

  if (!dest) {
    return res.status(404).json({ error: "Destination not found in dataset" });
  }

  const total =
    dest.avgFlight * travelers +
    dest.avgHotelPerNight * days * travelers +
    dest.avgFoodPerDay * days * travelers +
    dest.avgTransportPerDay * days * travelers;

  res.json({
    destination,
    days,
    travelers,
    total,
    perPerson: (total / travelers).toFixed(2),
  });
});

module.exports = { estimateBudget };