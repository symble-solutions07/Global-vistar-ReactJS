import React from './services.css'

export default function Services() {
  return (
    <div className='services'>
      <div className="service-card">
        <h1 className="service-card-title">Unified FMCG Distribution Platform</h1>
        <p className='service-card-p'>Find distribution partners, make payments,
        logistics, warehousing and get financial
        lending all from one place.
        </p>
        <button className='service-card-btn'>Learn More</button>
      </div>
      <div className="service-card">
        <h1 className="service-card-title">Access to Global Vistar Partners</h1>
        <p className='service-card-p'>The Freelancer Distributors will help
        manufacturers get product reach in the
        remotest parts of India.</p>
        <button className='service-card-btn'>Learn More</button>
      </div>
      <div className="service-card">
        <h1 className="service-card-title">Secured Payments & Quality Assurance</h1>
        <p className='service-card-p'>Manufacturers receive their full payment
        only after complete product delivery and
        Quality Assurance.</p>
        <button className='service-card-btn'>Learn More</button>
      </div>
      <div className="service-card service-card-4">
        <h1 className="service-card-title">Choose Your Distribution Type</h1>
        <p className='service-card-p'>Choose according to geography and type
        of distribution partner( i.e Stockists,
        Distributors, Wholesalers, Retailers).</p>
        <button className='service-card-btn'>Learn More</button> 
      </div>
    </div>
  )
}
