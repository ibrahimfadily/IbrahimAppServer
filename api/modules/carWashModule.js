const mongoose = require('mongoose');

const carWashSchema = new mongoose.Schema({
  carType: String,
  washType: String,
  price: String,
});

const CarWash = mongoose.model('CarWash', carWashSchema);

module.exports = CarWash;
