const express = require('express');
const router = express.Router();
const userInformationcontroller = require('../controller/userInformation.controller');

// Route to handle user information submission
router.post('/UserInformation', userInformationcontroller.submitUserInformation);

module.exports = router;
