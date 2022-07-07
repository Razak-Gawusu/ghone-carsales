import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>
      <div className="header--wrapper container">
        <h3 className='brandName'>Ghana 1 CarSales</h3>
        <Navbar />
      </div>
    </div>
  )
}

export default Header