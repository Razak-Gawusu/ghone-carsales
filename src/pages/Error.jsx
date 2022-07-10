import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <div className="error--wrapper container">
      <div className='error__item'>
      <h1 className='mainTitle'>Oops! Page not found</h1>
      <p className='paragraph'>Accidents happen. <Link to='/' className='link'>Click here</Link> to go back to the home page.</p>
      </div>
      <div className='error__item'>
        <img src="./images/accident.png" alt="crashed car" />
      </div>
      </div>
    </div>
  )
}

export default Error