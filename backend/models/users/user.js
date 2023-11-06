
const mongoose = require('mongoose');

const User = mongoose.model('user', {
    // name email password
    name : {
        type: String,
        trim: true,
        required: true
    },
    email : {
        type: String,
        trim: true,
        required: true
    },
    password : {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = {User};
