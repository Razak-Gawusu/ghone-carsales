import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaCalendarAlt, FaCar, FaThumbsUp, FaLongArrowAltRight} from 'react-icons/fa'
import {inventoryData , testimonials} from '../data'
import InventoryCard from '../components/InventoryCard'
import TestimonialsCard from '../components/TestimonialsCard'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'

function Home() {
  const [inventory, setInventory] = useState(inventoryData)
  const [testimonialsData, setTestimonialsData] = useState(testimonials)
  
  return (
    <>
    <div className="home">
      <section className='hero container'>
        <div className="hero__text">
          <h1 className="mainTitle">Looking to buy a quality used vehicle?</h1>
          <img src="./images/car.webp" alt="car" className='hero__text--image' />
          <p className='paragraph'>
          Our team has over 20 years of experience with buying, selling and servicing everyday and premium high-end vehicles.          </p>
          <div className='hero__links'>
          <Link to='/inventory' className='btn'> view inventory</Link> 
          <Link to='/contact' className='btn callToAction'> get in touch</Link> 
          </div>
        </div>
        <img className='hero__image' src="./images/car.webp" alt="car" />
      </section>

      <section className='experiences'>
        <div className="container">
          <div className='experiences__item'>
            <FaCalendarAlt className='icon'/>
            <h5>Over 30 years experience</h5>
          </div>
          <div className='experiences__item'>
            <FaCar className='icon'/>
            <h5>Over 500 cars sold</h5>
          </div>
          <div className='experiences__item'>
            <FaThumbsUp className='icon'/>
            <h5>Over 500 happy customers</h5>
          </div>
        </div>
      </section>

      <section className='latestVehicles container'>
        <div className="latestVehicles__item">
          <div className='latestVehicles__item--info'>
            <h2 className='mainTitle'>Latest Vehicles</h2>
            <p className='paragraph'>All of our vehicles are inspected by a team of certified mechanics before we sell them. We put them through rigorous tests so that you can feel confident about your purchase.</p>
          </div>

          <div className='latestVehicles__item--cards'>
            {inventory.slice(0, 3).map((inventory) => (
            <InventoryCard 
            key={inventory.id}
            id={inventory.id}
            name={inventory.name}
            price={inventory.price}
            type={inventory.type}
            kilometers={inventory.kilometers}
            />
          ))}
          </div>
        </div>

        <div className="latestVehicles__item">
        <Link to='/inventory' className='btn'>View all inventory <FaLongArrowAltRight /></Link>
        
        </div>
      </section>

      <section className='aboutUs'>
        <div className="container">
          <div className='aboutUs__item'>
              <h2 className='mainTitle'>About Us</h2>
              <p className='paragraph'>
              Driven by the passion of owner Darren Nickerson, Canada 1 Car Sales is all about the love and enjoyment of automobiles. We love cars, and we love seeing people enjoy their car.
              </p>

              <p className='paragraph'>
              To properly enjoy your vehicle, you need to be sure you get the right car at the right price. When the vehicle fits your needs and budget, that's real value. We have been serving customers in Woodbridge, Vaughan and Toronto for over 20 years.
              </p>
          </div>

          <div className='aboutUs__item' id='map'>
              {/* <img src="./images/map.png" alt="" /> */}
              <MapContainer id='map' center={[51.505, -0.09]} zoom={15 } scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}></Marker>
              </MapContainer>
          </div>
        </div>
      </section>

      <section className='happyCustomers'>
        <div className='container'>
          <h1 className='mainTitle'>Happy Customer</h1>
          <p className="paragraph">Don't take our word for it, see what some of our loyal customers have to say! </p>

          <div className="happyCustomers__item">
              {testimonialsData.map((testimonial) => (
                <TestimonialsCard 
                  key={testimonial.id}
                  title={testimonial.title}
                  customer={testimonial.customer}
                  ratings={testimonial.ratings}
                  shortMessage={testimonial.shortMessage}
                  img={testimonial.img}
                />
              ))}
          </div>
          <div className='happyCustomers__item'>
              <Link to='/happyCustomers' className='btn'>See More! <FaLongArrowAltRight /></Link>
          </div>
        </div>
      </section>

      <section className='readyToConnect'>
        <div className="container">
          <div className="readyToConnect__info">
            <h1>
              Ready to connect? <br /> Call us now at <br /> 
              <span>054 711 6444</span>
            </h1>
          </div>

          <div className="readyToConnect__image">
            <img src="./images/connect.webp" alt="van" />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home