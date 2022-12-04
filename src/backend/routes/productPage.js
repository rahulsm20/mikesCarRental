const Car = require("../models/cars.model");

const car = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = car;
