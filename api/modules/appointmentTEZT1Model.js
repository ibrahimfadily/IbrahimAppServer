const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentTEZT1Schema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

const appointmentTEZT1Model = mongoose.model('appointmentTEZT1Model', appointmentTEZTSchema);

module.exports = appointmentTEZT1Model;
