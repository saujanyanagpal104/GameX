const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    games: {
        type: Array,
        default: [],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
