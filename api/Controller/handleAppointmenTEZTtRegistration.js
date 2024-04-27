const AppointmentTEZT = require('../modules/appointment.TEZT.Model');

const handleAppointmenTEZTtRegistration = async (selectedDate, selectedTime) => {
    try {
        console.log('selectedTime:', selectedTime);
        console.log('typeof selectedTime:', typeof selectedTime);

        // Extract the time string from the object if necessary
        const timeString = selectedTime.selectedTime || selectedTime;

        // Parse timeString into a Date object
        const parsedTime = new Date(timeString);

        // Validate if parsedTime is a valid Date object
        if (isNaN(parsedTime.getTime())) {
            throw new TypeError('selectedTime must be a valid Date object');
        }
 
        // Create a new appointment instance using the Mongoose model
        const newAppointment = new AppointmentTEZT({
            date: selectedDate,
            time: parsedTime.toLocaleTimeString(),
        });

        // Save the appointment to the database
        const savedAppointment = await newAppointment.save();

        console.log('Appointment registered:', savedAppointment);
        // Additional logic for handling the appointment registration
        // ...

        return savedAppointment;
    } catch (error) {
        console.error('Error registering appointment:', error);
        throw error;
    }
};

module.exports = {
    handleAppointmenTEZTtRegistration,
};
