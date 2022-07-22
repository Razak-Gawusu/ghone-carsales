import React from 'react'
import {FaEnvelope, FaMarker, FaPhone, FaFacebook, FaInstagram} from 'react-icons/fa'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'

function Contact() {
  return (
    <div className='contact'>
        <section className="contact__heading">
          <div className="container">
          <h1 className='mainTitle'>Contact</h1>            
          </div>
        </section>

        <section className='divider'>
        </section>
        <section className="contact__mainContent container">
          <article className='contact__mainContent--item'>
            <h2 className='mainTitle'>Car Sales GH</h2>
            <p className='paragraph'>Ready to move forward with securing your next vehicle? Contact us now!</p>
            <h5>By appointment only.</h5>
            <div>
              <FaMarker className='contact--icon' />
              Near Special Plaza, Lagos Avenue, East Legon, Accra, Ghana
            </div>

            <div>
              <FaPhone className='contact--icon'/> +233 54 711 6444
            </div>

            <div>
              <a href="mailto:sale@carsalesgh.org"><FaEnvelope className='contact--icon'/> sale@carsalesgh.org</a>
            </div>

            <div>
              <FaFacebook className='contact--icon facebook'/> Facebook
            </div>

            <div>
              <FaInstagram className='contact--icon instagram'/> Instagram
            </div>

          </article>
          <article className='contact__mainContent--item' id='contactMap'>
            {/* <img src="./images/map.png" alt="" /> */}
              <MapContainer id='map' center={[5.6314084, -0.1729938]} zoom={15 } scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[5.6314084, -0.1729938]}></Marker>
              </MapContainer>
          </article>
        </section>
    </div>
  )
}

export default Contact