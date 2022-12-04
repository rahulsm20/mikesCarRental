const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    id:{type: Number, require:[true,'must provide name']},
    city:String,
    address:String,
    phone:String,
    timings:String
})

module.exports = mongoose.model('stores',storeSchema)
