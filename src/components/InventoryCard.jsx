import React from 'react'
import { Link } from 'react-router-dom'

function InventoryCard(props) {
  return (
    <Link to={`/inventory/${props.id}`}>
      <div className='inventoryCard'>
        <img className='inventoryCard__image' src="./images/inventory.jpg" alt="carImage" />
        
        <div className='inventoryCard__info'>
            <div>
                <h1 className='inventoryCard__info--name'>{props.name}</h1>
                <p className='inventoryCard__info--price'>$ {props.price}</p>
            </div>
            <div className='inventoryCard__info--type' >{props.type}</div>
            <div className='inventoryCard__kilometers' >{props.kilometers} km</div>
        </div>
      </div>
    </Link>
  )
}

export default InventoryCard