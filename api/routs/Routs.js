// const productRouter = require("./Product.route");
const UserRouter = require("./UserRouter");
const AppointmenCarWashtRouter = require("./AppointmenCarWashtRouter");
const AppointmenTEZTtRouter = require("./AppointmenTEZTtRouter");
const  userInformationroute = require("./userInformationroute");

module.exports = [
    // productRouter,
    UserRouter,
    AppointmenCarWashtRouter,
    AppointmenTEZTtRouter,
    userInformationroute
];
