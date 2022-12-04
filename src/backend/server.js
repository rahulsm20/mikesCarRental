const { json } = require('express')
const express = require('express')
const app= express()
const port = process.env.PORT || 5000
const connectDB= require('./db/connect')
const car = require('./routes/productPage')
const store = require('./routes/storePage')
const carByName=require('./routes/car')
const cors = require('cors')
const rent = require('./routes/rentalPost')
require('dotenv').config()

app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.json('Home')
})
// for routes looking like this `/products?page=1&pageSize=50`
app.get('/products', function(req, res) {
    const page = req.query.page;
    const pageSize = req.query.pageSize;
    res.send(`Filter with parameters ${page} and ${pageSize}`);
  });
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>console.log('Listening on port 5000'))
    }
    catch(e){
        console.log(e.message)
    }
}

start()

app.use('/stores',store)
app.use('/cars',car)
app.use('/car/:name',carByName)
app.use('/users',rent)
app.get('/test',(req,res)=>{
    res.json(req.body)
})
app.get('/names',(req,res)=>{
    res.json(req.query.name)
})