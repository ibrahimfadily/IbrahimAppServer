let Appointment;
Appointment = require('../modules/appointmentTEZTModel');


const handleAppointmentTEZTRegistration = async (selectedDate, selectedTime) => {
    try {
        if (!Appointment) {
        }

        console.log('selectedTime:', selectedTime);
        console.log('typeof selectedTime:', typeof selectedTime);

        // Extract the time string from the object if necessary
        const timeString = typeof selectedTime === 'object' ? selectedTime.selectedTime : selectedTime;

        // Parse timeString into a Date object
        const parsedTime = new Date(timeString);

        // Validate if parsedTime is a valid Date object
        if (isNaN(parsedTime.getTime())) {
            throw new TypeError('selectedTime must be a valid Date object');
        }
 
        // Create a new appointment instance using the Mongoose model
        const newAppointment = new Appointment({
            date: selectedDate,
            time: parsedTime.toISOString(), // or use another method to format the time
        });

        // Save the appointment to the database
        const savedAppointment = await newAppointment.save();

        console.log('Appointment TEZT registered:', savedAppointment);
        // Additional logic for handling the appointment registration
        // ...

        return savedAppointment;
    } catch (error) {
        console.error('Error registering appointment TEZT:', error);
        throw error;
    }
};

module.exports = {
    handleAppointmentTEZTRegistration,
};
