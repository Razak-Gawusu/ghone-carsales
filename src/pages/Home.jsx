import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <section className='hero container'>
      <div className="hero__text">
        <h1 className="mainTitle">Looking to buy a quality used vehicle?</h1>
        <img src="./images/car.webp" alt="car" className='hero__text--image' />
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla ducimus error consequatur cumque expedita, illum facilis ipsam quas velit.
        </p>
        <div className='hero__links'>
         <Link to='/inventory' className='btn'> view inventory</Link> 
         <Link to='/contact' className='btn callToAction'> get in touch</Link> 
        </div>
      </div>

      <img className='hero__image' src="./images/car.webp" alt="car" />
    </section>
    </>
  )
}

export default Home