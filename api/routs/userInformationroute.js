const express = require('express');
const router = express.Router();
const userInformationController = require('../controller/userInformation.controller');

// Route to handle user information submission
router.post('/UserInformation', userInformationController.submitUserInformation);

module.exports = router;
