const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    phone: {type: String , uniqe:true},
    cars: { type: [String], default: [] },
    card: { type: String, default: '' },
    pass: { type: String, required: true },
    username: String,
    email: String,
});

const userModule = mongoose.model('User', UserSchema);

module.exports = userModule
