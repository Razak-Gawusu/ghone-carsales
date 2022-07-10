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
            <h2>Ghana 1 Car Sales</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
              <FaFacebook className='contact--icon'/> Facebook
            </div>

            <div>
              <FaInstagram className='contact--icon'/> Instagram
            </div>

          </article>
          <article className='contact__mainContent--item'>
            <h1>map will be here.</h1>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Contact