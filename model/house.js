const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  addBy: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required: true
  },
  requestedBy: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('House', houseSchema);