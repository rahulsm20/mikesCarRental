const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    name: {type: String, required:true},
    mileage: String,
    fuel: String,
    price: String,
    pic: String,
    type: String,
    fueltype: String,
    transmission: String,
    engine: String,
    acceleration: String,
    topspeed: String,
    stock: {
      Mumbai: Number,
      Bangalore: Number,
      NewDelhi: Number,
    }
  });
  
 
  module.exports= mongoose.model('cars',carSchema);