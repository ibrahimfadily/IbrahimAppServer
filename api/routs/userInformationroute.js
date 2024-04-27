const express = require('express');
const router = express.Router();
const userInformationController = require('../Controller/userInformation.controller');
// Route to handle user information submission
router.post('/user-information', userInformationController.submitUserInformation);

module.exports = router;
