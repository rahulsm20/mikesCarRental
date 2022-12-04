import React, { useState,useEffect } from 'react'
import Navbar from '../HomePage/Navbar'
import Body from './Body'
import Specification from './Specification'
import Footer from '../HomePage/Footer'
import { useParams } from 'react-router-dom'
const Product = () => {
  const {model} = useParams()
const [state,setState]=useState([
  {
    id: "",
    name: "",
    fuel: "",
    mileage: "",
    price: "",
    pic: "",
    fueltype:"",
  },
]);
useEffect(()=>{
  fetch(`http://localhost:5000/car/${model}`)
  .then((res)=>res.json())
  .then((jsonRes)=>setState(jsonRes))
  .catch((error)=>console.log(error))
},[]);
  return (
    <div>
      <Navbar/>
      <Body name={state.name}
      mileage={state.mileage}
      fuel={state.fuel}
      price={state.price}
      pic={state.pic}/>
      <nav className='align-items-center'><h5> 
      Specifications
      </h5> 
      </nav>
      <Specification props={state}/>
      <Footer/>
    </div>
  )
}

export default Product
