import React from 'react'
import Navbar from './Navbar'
import { FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer--wrapper container">
      <div className='footer__primary'>
        <h3>Brand name</h3>
        <ul>
          <li>Ghana 1 Car Sales</li>
          <li>250 Regina Rd Suite 1</li>
          <li>Vaughan, ON, L4L 8N2 Canada</li>
          <li>647-221-318</li>
        </ul>
      </div>

      <div className='footer__secondary'>
        <h3>hours</h3>
        <ul>
          <li>Monday 9:30 -5PM</li>
          <li>Tuesday 9:30 -5PM</li>
          <li>Wednesday 9:30 -5PM</li>
          <li>Thursday 9:30 -5PM</li>
          <li>Friday 9:30 -5PM</li>
        </ul>
      </div>

      <div className='footer__secondary'>
        <h3>navigation</h3>
        <Navbar />
      </div>

      <div className='footer__secondary'>
        <h3>social links</h3>
        <FaFacebook className='footer--icon'/>
        <FaInstagram className='footer--icon'/>
      </div>
      </div>
    </footer>
  )
}

export default Footer