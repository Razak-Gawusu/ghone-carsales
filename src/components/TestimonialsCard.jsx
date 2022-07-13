import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'

function TestimonialsCard(props) {
  return (
    <div className='testimonialsCard'>
        <div className='testimonialsCard__image'>
            <img src={`./images/${props.img}`} alt={props.img} />
        </div>
        <div className='testimonialsCard__info'>
            <p className='paragraph'>{props.shortMessage}</p>
            <h5>{props.customer}</h5>
            <h6>{props.ratings}</h6>
        </div>

        <FaQuoteRight className='icon'/>

    </div>
  )
}

export default TestimonialsCard