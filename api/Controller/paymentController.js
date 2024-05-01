const Payment = require('../modules/payment');

const processPayment = async (req, res) => {
  try {
    const { amount, currency, cardNumber, expiry, cvv } = req.body;

    // Save payment details to the database
    const payment = new Payment({
      amount,
      currency,
      cardNumber,
      expiry,
      cvv,
    });
    await payment.save();

    res.status(200).json({ message: 'Payment processed successfully' });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};

module.exports = {
  processPayment,
};
