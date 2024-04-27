const UserRouter = require("./UserRouter");
const AppointmenCarWashtRouter = require("./AppointmenCarWashtRouter");
const AppointmenTEZTtRouter = require("./AppointmenTEZTtRouter");
const userInformationroute = require("./userInformationroute");

module.exports = [
    UserRouter,
    AppointmenCarWashtRouter,
    AppointmenTEZTtRouter,
    userInformationroute
];
