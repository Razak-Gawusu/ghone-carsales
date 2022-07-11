import React from 'react'

function Testimonials(props) {
  return (
    <div className='testimonial'>
        <h3 className='mainTitle'>{props.title}</h3>
        <h5 className='testimonial__customer'>{props.customer}</h5>
        <p className='paragraph'>{props.ratings}</p>
        {props.message.map((message) => (
            <p className='paragraph'>
                {message}
            </p>
        ))}
    </div>
  )
}

export default Testimonials