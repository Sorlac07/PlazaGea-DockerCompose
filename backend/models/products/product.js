
const mongoose = require('mongoose');

const Product = mongoose.model('product', {
    nombre : {
        type: String,
        trim: true,
        required: true
    },
    description : {
        type: String,
        trim: true,
        required: true
    },
    imgURL : {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = {Product};
