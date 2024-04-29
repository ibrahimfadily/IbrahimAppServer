// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const appointmentTEZTSchema = new Schema({
//     date: {
//         type: Date,
//         required: true,
//     },
//     time: {
//         type: String,
//         required: true,
//     },});

// const AppointmentTEZT = mongoose.model('AppointmentTEZT', appointmentTEZTSchema);

// module.exports = AppointmentTEZT;

// appointmentTEZTModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentTEZTSchema = new Schema({
    // Define schema fields
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },});

const AppointmentTEZT = mongoose.model('AppointmentTEZT', appointmentTEZTSchema);

module.exports = AppointmentTEZT;
