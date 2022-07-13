import React from 'react'

function CustomOrder() {
  return (
    <div className='customOrder'>
      <div className="">
        <section className="customOrder__heading">
          <div className="container">
            <h1 className='mainTitle'>Custom Order</h1>
            <p className='paragraph'>Personalized service has been our trademark for 20 years. Whether you need advice on the best new or used car to buy, or you want the ideal experience in locating and purchasing your selected vehicle, trust us to handle all your needs with expert care and discretion.</p>
          </div>
        </section>

        <section className='divider'>
        </section>

        <section className="customOrder__mainContent container">
          <article className='customOrder__mainContent--item'>
            <h2 className='mainTitle'>New Cars</h2>
            <p className='paragraph'>Time for a new car? We have experience with all makes and models, from rare high-end imports to budget student vehicles. Contact us to let our team help you decide on the best fit for your needs and budget.</p>
            <p className='paragraph'>With our network of connections within dealerships and brokerages across the province, we can ensure you get the best value and the best experience in buying your vehicle. Don't haggle, let the Canada1 team secure your best options.</p>
          </article>
          <article className='customOrder__mainContent--item'>
            <h2 className='mainTitle'>Used Cars</h2>
            <p className='paragraph'>Our personal shopper service doesn't stop with new cars. Whether you have a budget in mind and you're seeking the best value, or you have a specific make and model in your sights, we have a number of sources for quality used vehicles of all types. Contact us today and let us track down your next car, at the right price - and backed by the Canada1 Car Sales service experience.</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default CustomOrder