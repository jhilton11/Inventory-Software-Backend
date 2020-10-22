const mongoose = require('mongoose');

const saleItemSchema = new mongoose.Schema( {
    name: {type: String},
    description: {type: String},
    amount: {type: Number},
    fullyPaid: {type: Boolean},
    createdAt: {type:Date, default: Date.now}
} );

module.exports = mongoose.model('Sale', saleItemSchema);