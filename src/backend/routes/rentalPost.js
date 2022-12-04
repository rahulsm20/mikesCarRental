const customer = require("../models/rentals.model");

const rent = async (req, res) => {
  try {
    const cust = await customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      pincode: req.body.pincode,
      car: req.body.car,
    });
    res.status(200).json(cust);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = rent;
