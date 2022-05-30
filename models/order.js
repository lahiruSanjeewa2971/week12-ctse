const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    client_id: {
        type: String,
        trim: true,
    },
    product_id: {
        type: String,
        trim: true,
    },
    orderStatus: {
        type: String,
        trim: true,
        default: 'not-finished'
    },
    qty: {
        type: Number,
        trim: true,
    },
    totalPrice: {
        type: Number,
        trim: true,
    },
    deliveryAddress: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Orders", orderSchema)