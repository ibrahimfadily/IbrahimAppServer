const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    pass: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },

    data: {}
});

const userModule = mongoose.model('User', UserSchema);

module.exports = userModule
