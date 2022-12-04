import React from 'react'
import { Mongoose } from 'mongoose'
const Card = (props) => {

  return (
      <a className="card col-xs-4 col-sm-6 col-md-10 col-lg-3 m-5 align-items-center justify-content-center" href={"/"+ props.name} target="blank_">
      <img className="image" src={props.pic}></img>
      <div className="card-body text-white">
      {props.name}
      <hr/>
      </div>
      <div className='card-caption text-white'>
        <li> 
        Mileage &nbsp; <span> {props.mileage} </span> <br/>
       </li> 
        <li>
        Fuel Economy/Range &nbsp; <span>{props.fuel}</span> <br/>
        </li>
        <li>
        Price/Day &nbsp; <span>{props.price}</span> <br/>
        </li>
      </div>
    </a>
    
  ) 
}

export default Card
