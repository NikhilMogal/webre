const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  imageSrc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  features: [String]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
