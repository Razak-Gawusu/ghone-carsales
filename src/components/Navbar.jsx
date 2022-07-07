import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <NavLink className='nav__link' to='/'>home</NavLink>
        <NavLink className='nav__link' to='/inventory'>inventory</NavLink>
        <NavLink className='nav__link' to='/customOrder'>custom order</NavLink>
        <NavLink className='nav__link' to='/happyCustomers'>happy customers</NavLink>
        <NavLink className='nav__link' to='/contact'>contact</NavLink>
      </nav>
    </>
  )
}

export default Navbar