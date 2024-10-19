const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String, 
  day: String, 
  isLoss: Boolean,
});

module.exports = HoldingsSchema; 
