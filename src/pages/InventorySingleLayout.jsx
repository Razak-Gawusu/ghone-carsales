import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { inventoryData } from '../data'
import { FaLongArrowAltLeft } from 'react-icons/fa'

function InventorySingleLayout() {
    const { id } = useParams()
    
    const inventory = inventoryData.filter((inventory) => inventory.id == id) 

    console.log(inventory)

    return (
    <div className='inventorySingle'>

        <div className="container">
            {inventory.map((inventory) => (
                <>
                <div className='inventorySingle--wrapper'>
                <Link className='link' to='/inventory'> <FaLongArrowAltLeft />  Back to Inventory </Link>

                    <div className='inventorySingle__item'>
                        <div>
                            <h1 className='mainTitle'>{inventory.name}</h1>
                            <h3 className='accentColor'>₵ {inventory.price}</h3>
                            <p>{inventory.description}</p>
                            <h3>Interested? Call us now at <span className='accentColor'>+233 54 711 6444</span></h3> 
                        </div>

                        <div>
                        <img src={`./images/${inventory.img}`} alt={inventory.img} />
                        <img src="./images/accident.png" alt="crashed car" />
                        </div>
                    </div>

                    <div className='inventorySingle__item'>
                        <h2 className='mainTitle'>Specs & Features</h2>

                        <div>
                            {inventory.specs.map((spec) => (
                                <div className='inventorySingle__item--spec'>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Odometer</div>{spec.odometer}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Condition</div>{spec.condition}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Engine</div>{spec.engine}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Fuel Type</div>{spec.fuelType}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Transmission</div>{spec.transmission}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Drive Train</div>{spec.driveTrain}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Cylinders</div>{spec.cylinders}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Doors</div>{spec.doors}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Body Type</div>{spec.bodyType}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Trim</div>{spec.trim}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Exterior Color</div>{spec.exteriorColor}</div>
                                    <div className='spec--item'><div> <img src="./images/spec/km.svg" alt="" /> Interior Color</div>{spec.interiorColor}</div>
                                </div>
                            ))}
                        </div>

                        <Link className='link' to='/inventory'> <FaLongArrowAltLeft />  Back to Inventory </Link>

                    </div>
                </div>
                </>
            ))}
        </div>

    </div>
  )
}

export default InventorySingleLayout