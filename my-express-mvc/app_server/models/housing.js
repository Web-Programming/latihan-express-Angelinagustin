const mongoose = require('mongoose');

const housingLocationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  photo: { type: String, required: true },
  availableUnits: { type: Number, required: true },
  wifi: { type: Boolean, required: true },
  laundry: { type: Boolean, required: true },
});

const HousingLocation = mongoose.model('HousingLocation', housingLocationSchema);

module.exports = HousingLocation;
