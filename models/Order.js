// models/Order.js

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  purchase: {
    type: String,
    required: true
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);