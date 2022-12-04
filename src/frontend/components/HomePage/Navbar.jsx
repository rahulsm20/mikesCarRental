import React from 'react'
  const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg p-4'>
        <ul className='navbar-nav align-items-lg-center p-2'>
            <li className='nav-item'><a href="./"> Home </a></li>
            <li className='nav-item'><a href="#footer"> Contact Us </a></li>
            <li className='nav-item'><a href='./stores'> Stores </a></li>
            <li id="Logo" className='nav-item '><a>Mike's Car Rental</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
