const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentTEZT1Schema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

const AppointmentTEZT1 = mongoose.model('AppointmentTEZT1', appointmentTEZT1Schema);

module.exports = AppointmentTEZT1;
