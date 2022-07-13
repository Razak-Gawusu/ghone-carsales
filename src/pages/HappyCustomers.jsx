import React, {useState} from 'react'
import { testimonials as testimonialsData, galleryData } from '../data'
import Testimonials from '../components/Testimonials'

function HappyCustomers() {
  const [testimonials, setTestimonials] = useState(testimonialsData)

  return (
    <div className='happyCustomers'>
      <section className="happyCustomers__heading">
        <div className="container">
          <h1 className='mainTitle'>Happy Customers</h1>
        </div>
      </section>
      <section className='divider'>
      </section>

      <section className="happyCustomers__mainContent container">
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

      <section className='happyCustomers__gallery'>
          <div className="container">
            <h1 className='mainTitle'>Image Gallery</h1>

            <div className="happyCustomers__gallery--item">
              {galleryData.map((image) => (
                <div>
                  <img key={image.id} src={`./images/gallery1.jpg`} alt={image.img} />
                </div>
              ))}
            </div>
          </div>
      </section>
  </div>
  )
}

export default HappyCustomers