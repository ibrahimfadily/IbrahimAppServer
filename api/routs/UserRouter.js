
const express = require("express");
const { Login, SignUp, forgetpassword, updatepasswordByID } = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.post("/Login", Login);
UserRouter.post("/SignUp", SignUp);
UserRouter.patch("/updatepasswordByID", updatepasswordByID);

module.exports = UserRouter;
