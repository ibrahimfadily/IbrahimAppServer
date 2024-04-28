const UserRouter = require("./UserRouter");
const AppointmenCarWashtRouter = require("./AppointmenCarWashtRouter");
const AppointmenTEZTtRouter = require("./AppointmenTEZTtRouter");
const userInformationroute = require("./userInformationroute");
const carWashRouter = require("./carWashRouter");

module.exports = [
    UserRouter,
    AppointmenCarWashtRouter,
    AppointmenTEZTtRouter,
    userInformationroute,
    carWashRouter
];
