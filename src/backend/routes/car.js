const Car = require('../models/cars.model')

const carByName = async(req,res)=>{
  try{
    const cars = await Car.findOne({name: req.params.name})
    res.status(200).json(cars)
    }
    catch(error){
      res.status(500).json({msg:error})
    }
}

module.exports=carByName


