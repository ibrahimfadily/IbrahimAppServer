const express = require('express');
const router = express.Router();
const { handleAppointmentRegistration } = require("../Controller/handleAppointmentRegistration");

// Handle appointment registration
router.post('/handleAppointmentRegistration', async (req, res) => {
    const { selectedDate, selectedTime } = req.body;
    try {
        const appointment = await handleAppointmentRegistration(selectedDate, selectedTime);
        res.status(200).json({ appointment });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register appointment' });
    }
});

module.exports = router;
