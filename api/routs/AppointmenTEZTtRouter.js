const express = require('express');
const router = express.Router();
const { handleAppointmenTEZTtRegistration } = require('../Controller/handleAppointmenTEZTtRegistration');

// Handle appointment registration
router.post('/handleAppointmenTEZTtRegistration', async (req, res) => {
    const { selectedDate, selectedTime } = req.body;
    try {
        // Call the handleAppointmentRegistration function passing selectedDate and selectedTime
        const appointment = await handleAppointmenTEZTtRegistration(selectedDate, selectedTime);
        res.status(200).json({ appointment });
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error response
        res.status(500).json({ error: 'Failed to register appointment TEZT' });
    }
});

module.exports = router;
