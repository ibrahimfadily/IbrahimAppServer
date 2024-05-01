const UserRouter = require("./UserRouter");
const AppointmenCarWashtRouter = require("./AppointmenCarWashtRouter");
const AppointmenTEZTtRouter = require("./AppointmenTEZTtRouter");
const userInformationroute = require("./userInformationroute");
const carWashRouter = require("./carWashRouter");
const paymentRoute = require("./paymentRoute");

module.exports = [
    UserRouter,
    AppointmenCarWashtRouter,
    AppointmenTEZTtRouter,
    userInformationroute,
    carWashRouter,
    paymentRoute
];
