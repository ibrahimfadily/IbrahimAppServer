const express = require('express');
const router = express.Router();
const paymentController = require('../Controller/paymentController');

router.post('/processPayment', paymentController.processPayment);

module.exports = router;
