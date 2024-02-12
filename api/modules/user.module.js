const mongoose = require('mongoose');

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
    pass: { type: String, required: true }, // User password
    username: { type: String, unique: true }, // User username (must be unique)
    email: { type: String, required: true, unique: true }, // User email (required and unique)
    // phone: { type: String, unique: true }, // User phone number (unique)
    data: {} // Additional user data can be stored here
});

// Create and export the User model based on the schema
const User = mongoose.model('User', UserSchema);
module.exports = User;
