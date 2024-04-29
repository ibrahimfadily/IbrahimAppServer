// Import necessary modules
const express = require('express');
const router = express.Router();
const { handleAppointmenTEZTRegistration } = require('../Controller/handleAppointmenTEZTRegistration');

// Handle appointment registration
router.post('/handleAppointmentTEZTRegistration', async (req, res) => {
    const { selectedDate, selectedTime } = req.body;
    try {
        // Call the handleAppointmentRegistration function passing selectedDate and selectedTime
        const appointment = await handleAppointmenTEZTRegistration(selectedDate, selectedTime);
        res.status(200).json({ appointment });
    } catch (error) {
        console.error('Error registering appointment:', error);
        res.status(500).json({ error: 'Failed to register appointment. Please try again.' });
    }
});

// Export the router
module.exports = router;
