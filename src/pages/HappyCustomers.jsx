import React, {useState} from 'react'
import { testimonials as testimonialsData } from '../data'
import Testimonials from '../components/Testimonials'

function HappyCustomers() {
  const [testimonials, setTestimonials] = useState(testimonialsData)

  return (
    <div className='happyCustomers'>
    <div className="container">
      <section className="contact__heading">
        <h1 className='mainTitle'>Happy Customers</h1>
      </section>
      <section className="contact__mainContent">
        {testimonials.map((testimonial) => (
          <Testimonials 
            key={testimonial.id}
            title={testimonial.title}
            customer={testimonial.customer}
            ratings={testimonial.ratings}
            message={testimonial.message}
          />
        ))}
      </section>
    </div>
  </div>
  )
}

export default HappyCustomers