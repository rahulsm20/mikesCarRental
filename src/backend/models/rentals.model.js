const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  car: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
});

module.exports = mongoose.model('customer',customerSchema)
