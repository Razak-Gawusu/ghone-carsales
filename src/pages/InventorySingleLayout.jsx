import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { inventoryData } from '../data'
import { FaLongArrowAltLeft } from 'react-icons/fa'


function InventorySingleLayout() {
    const { id } = useParams()
    
    const inventory = inventoryData.filter((inventory) => inventory.id === Number(id)) 

    return (
    <div className='inventorySingle'>
        <div className="container">
            {inventory.map((inventory) => (
                <>
                <div className='inventorySingle--wrapper'>
                    <Link className='link' to='/inventory'> <FaLongArrowAltLeft />  Back to Inventory </Link>
                    
                    <div className='inventorySingle__item top'>
                        <div className='inventorySingle__item--text'>
                            <h1 className='mainTitle'>{inventory.name}</h1>
                            <h3 className='accentColor'>₵ {inventory.price}</h3>
                            <p>{inventory.description}</p>
                            <h3>Interested? Call us now at <span className='accentColor'>+233 54 711 6444</span></h3> 
                        </div>

                        <div className='inventorySingle__item--img'>
                            <img src={require(`../images/${inventory.img}`)} alt={inventory.img} />
                        </div>
                    </div>

                    <div className='inventorySingle__item'>
                        <h2 className='mainTitle'>Specs & Features</h2>

                        <div>
                            {inventory.specs.map((spec) => (
                                <div className='inventorySingle__item--spec'>
                                    <div className='spec--item'><div> <img src="../images/spec/km.svg" alt="" /> Odometer</div>{spec.odometer}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/condition.svg" alt="" /> Condition</div>{spec.condition}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/engine.svg" alt="" /> Engine</div>{spec.engine}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/gas.svg" alt="" /> Fuel Type</div>{spec.fuelType}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/transmission.svg" alt="" /> Transmission</div>{spec.transmission}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/drive-train.svg" alt="" /> Drive Train</div>{spec.driveTrain}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/cylinders.svg" alt="" /> Cylinders</div>{spec.cylinders}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/doors.svg" alt="" /> Doors</div>{spec.doors}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/body.svg" alt="" /> Body Type</div>{spec.bodyType}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/trim.svg" alt="" /> Trim</div>{spec.trim}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/exterior-color.svg" alt="" /> Exterior Color</div>{spec.exteriorColor}</div>
                                    <div className='spec--item'><div> <img src="../images/spec/interior-color.svg" alt="" /> Interior Color</div>{spec.interiorColor}</div>
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