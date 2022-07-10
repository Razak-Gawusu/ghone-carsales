import React from 'react'

function Testimonials(props) {
  return (
    <div className='testimonial'>
        <h3>{props.title}</h3>
        <h5>{props.customer}</h5>
        <p>{props.ratings}</p>
        {props.message.map((message) => (
            <p>
                {message}
            </p>
        ))}
    </div>
  )
}

export default Testimonials