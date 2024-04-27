const express = require("express");
const mongoose = require("mongoose");
const Routs = require("./api/routs/Routs");
const app = express();
app.use(express.json());
app.use('/', Routs)

const mongooseLink = "mongodb+srv://ibrahim1233:ypPCKsXu6OQreC5m@cluster0.xkd8ebr.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

module.exports = app;