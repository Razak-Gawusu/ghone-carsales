import React, {useEffect, useState} from 'react'
import {inventoryData} from '../data'
import InventoryCard from '../components/InventoryCard'

function Inventory() {
  const [inventory, setInventory] = useState(inventoryData)

  console.log(inventory)
  useEffect(() => {
    console.log('refreshed')
  }, [inventory])

  function sortByKilometers (){
    console.log('clicked on sort by kilometers')
    setInventory(prev => inventory.sort((a, b) => a.kilometers > b.kilometers ? 1 : -1))
    console.log(inventory)
  }
  
  function sortByPrices (){
    console.log('clicked on sort by price')
    setInventory(prev => inventory.sort((a, b) => a.price > b.price ? 1 : -1))
    console.log(inventory)
  }
  

  return (
    <div className='inventory'>
      <div className="container">
      <h1 className='mainTitle'>Inventory</h1>
      <div className='inventoryMain'>
        <div className='inventory__sort'>
          <h4>Sort by</h4>
          <button className='btn--inventory' onClick={sortByKilometers}>kilometers</button>
          <button className='btn--inventory' onClick={sortByPrices}>price</button>
        </div>

        <div className='inventory--wrapper'>
          {inventory.map((inventory) => (
            <InventoryCard 
              key={inventory.id}
              name={inventory.name}
              price={inventory.price}
              type={inventory.type}
              kilometers={inventory.kilometers}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Inventory