const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
 Type: {
        type: String,
        required: true
      },
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  
  username: {
    type: String,
    required: true
  },
  password: {
    type: password,
    required: true
  },
 
}, { timestamps: true });

module.exports = mongoose.model('House', houseSchema);