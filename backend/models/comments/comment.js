
const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', {
    text : {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = {Comment};
