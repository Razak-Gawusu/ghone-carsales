import React, {useEffect, useState} from 'react'
import {inventoryData} from '../data'
import InventoryCard from '../components/InventoryCard'

function Inventory() {
  const [inventory, setInventory] = useState(inventoryData)

  function sortByKilometers (){
    setInventory(prev => (
      prev.slice(0).sort((a, b) => a.kilometers - b.kilometers) 
    ))
  }
  
  function sortByPrices (){
    setInventory(prev => (
      prev.slice(0).sort((a, b) => a.price - b.price) 
    ))
  }

  useEffect(() => {
    console.log('refreshed')
  }, [inventory])
  

  return (
    <div className='inventory'>

      <section className="inventory__heading">
        <div className="container">
          <h1 className='mainTitle'>Inventory</h1>
        </div>
      </section>

      <section className='divider'>
      </section>

      <section className='inventoryMain container'>
        <div className='inventory__sort'>
          <h4>Sort by</h4>
          <button className='btn' onClick={sortByKilometers}>kilometers</button>
          <button className='btn' onClick={sortByPrices}>price</button>
        </div>

        <div className='inventory--wrapper'>
          {inventory.map((inventory) => (
            <InventoryCard 
              key={inventory.id}
              id={inventory.id}
              name={inventory.name}
              price={inventory.price}
              type={inventory.type}
              kilometers={inventory.kilometers}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Inventory