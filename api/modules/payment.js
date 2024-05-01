const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  // Add any other fields you need
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
