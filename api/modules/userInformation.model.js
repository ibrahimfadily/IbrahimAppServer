const mongoose = require('mongoose');

const userInformationSchema = new mongoose.Schema({
  idNumber: {
    type: String,
    required: true,
  },
  carNumber: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const UserInformation = mongoose.model('UserInformation', userInformationSchema);

module.exports = UserInformation;
