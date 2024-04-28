const express = require('express');
const router = express.Router();
const carWashController = require('../Controller/carWashController');

router.post('/carwash', carWashController.create);

module.exports = router;
