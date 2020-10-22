const mongoose = require('mongoose');

const userModel = new mongoose.Schema( {
    name: {type: String},
    email: {type: String},
    role: {type: String},
    createdAt: {type: Date},
} );

module.exports = mongoose.model('User', userModel);