import React, {useRef} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Navbar from './Navbar'
import {FaTimes, FaBars} from 'react-icons/fa'

function Header() {
  const mobileNav = useRef()
  function openNav() {
    mobileNav.current.style.width = '100vw';    
  }

  function closeNav(){
    mobileNav.current.style.width = '0';
  }
  return (
    <div className='header'>
      <div className="header--wrapper container">
        <Link to='/' className='brandName'>Car Sales GH</Link>
        <Navbar />

        <div className='mobile__nav' ref={mobileNav}>
          <FaTimes className='icon close' onClick={closeNav}/>
          <nav className='nav__list'>
            <NavLink onClick={closeNav} className='nav__link' to='/'>home</NavLink>
            <NavLink onClick={closeNav} className='nav__link' to='/inventory'>inventory</NavLink>
            <NavLink onClick={closeNav} className='nav__link' to='/customOrder'>custom order</NavLink>
            <NavLink onClick={closeNav} className='nav__link' to='/happyCustomers'>happy customers</NavLink>
            <NavLink onClick={closeNav} className='nav__link' to='/contact'>contact</NavLink>
          </nav>
        </div>

        <FaBars className='icon menu' onClick={openNav}/>
      </div>
    </div>
  )
}

export default Header