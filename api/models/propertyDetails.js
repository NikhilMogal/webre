const mongoose = require('mongoose');


const propertyDetailsSchema = new mongoose.Schema({
  imageSrc: { type: String, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  location: { type: String, required: true },
  features: { type: [String] },
  qrCode: { type: String },
  reraNumber: { type: String },
  description: { type: String },
  amenities: { type: [String] }
});


const PropertyDetails = mongoose.model('PropertyDetails', propertyDetailsSchema);

module.exports = PropertyDetails;
