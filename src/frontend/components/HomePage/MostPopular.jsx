import React from 'react'

const MostPopular = () => {
  return (
    <div className='most-popular d-flex align-items-lg-center align-items-sm-left justify-content-sm-between'>
          Popular rentals in your area
        <div className="sort-filter dropdown">
          <button className='btn dropdown-toggle' data-bs-toggle='dropdown'>
          Filter 
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'>SUV</li>
            <li className='dropdown-item'>Sedan</li>
            <li className='dropdown-item'>Hatchback</li>
          </ul>
          </div>
          <div>
          <button className='btn dropdown-toggle' data-bs-toggle='dropdown'>
          Sort 
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'>$ Low to high</li>
            <li className='dropdown-item'>$ High to low</li>          </ul>
          </div>       
        
    </div>
  )
}

export default MostPopular
