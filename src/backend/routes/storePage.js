const Store = require('../models/stores.model')

const store = async(req,res)=>{
    const stores= await Store.find(req.body)
    res.status(201).json({stores})
}
module.exports = store