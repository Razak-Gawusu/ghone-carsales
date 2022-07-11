import React from 'react'
import {FaEnvelope, FaMarker, FaPhone, FaFacebook, FaInstagram} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact'>
      <div className="container">
        <section className="contact__heading">
          <h1 className='mainTitle'>Contact</h1>
        </section>
        <section className="contact__mainContent">
          <article className='contact__mainContent--item'>
            <h2 className='mainTitle'>Ghana 1 Car Sales</h2>
            <p className='paragraph'>Ready to move forward with securing your next vehicle? Contact us now!</p>
            <h5>By appointment only.</h5>
            <div>
              <FaMarker className='contact--icon' />
              250 Regin Rd Suite 1. Voughan, ON L4L BN2
            </div>

            <div>
              <FaPhone className='contact--icon'/> +233 54 711 6444
            </div>

            <div>
              <FaEnvelope className='contact--icon'/> sale@ghanaonecarsales.org
            </div>

            <div>
              <FaFacebook className='contact--icon facebook'/> Facebook
            </div>

            <div>
              <FaInstagram className='contact--icon instagram'/> Instagram
            </div>

          </article>
          <article className='contact__mainContent--item'>
            <img src="./images/map.png" alt="map" />
          </article>
        </section>
      </div>
    </div>
  )
}

export default Contact