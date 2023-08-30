const express = require("express");
const { Login, Register } = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.post("/Login",Login)
UserRouter.post("/Register",Register)
// update user 
//remove user
module.exports = UserRouter;