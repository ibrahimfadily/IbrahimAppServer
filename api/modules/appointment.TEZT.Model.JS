const mongoose = require('mongoose');

const appointmentTeztSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const AppointmentTezt = mongoose.model('AppointmentTezt', appointmentTeztSchema);

module.exports = AppointmentTezt;
