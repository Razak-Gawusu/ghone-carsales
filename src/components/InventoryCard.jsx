import React from 'react'

function InventoryCard(props) {
  return (
    <div className='inventoryCard'>
        <img className='inventoryCard__image' src="./images/inventory.jpg" alt="carImage" />
        
        <div className='inventoryCard__info'>
            <div>
                <h1>{props.name}</h1>
                <p>$ {props.price}</p>
            </div>
            <div className='inventoryCard__type' >{props.type}</div>
            <div className='inventoryCard__kilometers' >{props.kilometers} km</div>
        </div>
        
    </div>
  )
}

export default InventoryCard