import React from 'react'
import { useNavigate } from 'react-router-dom'

const Body = (props) => {
  
  let navigate = useNavigate()
  const handleClick= ()=>{
    let path='./rental'
    navigate(path)
  }
  return (
    <div className='row' id='product'>
        <img alt="car-image" 
        src={props.pic} className="image col-lg-6 col-md-6 col-sm-5"></img>
        <div className='description col-5  px-3 py-2 mx-5'>
          <h2 className='my-3'>{props.name}</h2>
        <ul className='d-flex flex-column p-2 my-3'>
        <div className='d-flex flex-row'>$<h4> {props.price} </h4> 
        <span className='mx-3'>
        Rent/day  
        </span> 
        </div>
        <li className='d-flex flex-row'>
        Mileage <span className='mx-5'> {props.mileage} </span> 
       </li> 
        <li className='d-flex flex-row'>
        Fuel Economy/Range <span className='mx-5'>{props.fuel}</span> 
        </li>
        <br/>
          <div className="dropdown">
          <button className='btn dropdown-toggle p-3 mx-3' data-bs-toggle='dropdown' >
          Check for availability  
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'>New Delhi</li>
            <li className='dropdown-item'>Mumbai</li>
            <li className='dropdown-item'>Bangalore</li>
          </ul>
          </div>
        <li>
        <button id='book-now' className='btn col-5 p-3 mx-3 m-4' onClick={handleClick} target="blank_">
            Book now </button>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default Body