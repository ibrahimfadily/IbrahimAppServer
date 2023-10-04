const express = require("express");
const { Login, Register ,forgetpassword, updatepasswordByID } = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.post("/Login",Login)
UserRouter.post("/Register",Register)
UserRouter.patch("/updatepasswordByID",updatepasswordByID)

// UserRouter.post("/")
// update user 
//remove user
module.exports = UserRouter;