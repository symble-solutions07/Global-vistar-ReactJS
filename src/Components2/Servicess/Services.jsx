import React from './services.css'
import ManuImgS1 from './manufacturer-img.webp'
import DisImgS1 from './distributor-img.webp'

export default function Services() {
  return (
    <div className='services'>
      <h1 className="services-title">Conquer New Markets with Low-Cost Distribution</h1>
      <h1 className="services-title2">For All Your Distribution Operations & Growth</h1>
      <div className="services-flex">
        <div className="services-manufacturer">
          <img className='services-manufacturer-img' src={ManuImgS1} alt="" />
          <p className="services-manufacturer-p">High Growth Brands</p>
        </div>
        <div className="dotted-line2"></div>
        <div className="services-card">
          <h1 className="gv-logo-title"><span className="global">global</span><span className='vistar'>vistar.com</span></h1>
          <p className="services-card-p">Retail Insights</p>
          <p className="services-card-p">No Fraud Guarantee</p>
          <p className="services-card-p p3">Assured Quality Products</p>
          <div className="card-bg"></div>
        </div>
        <div className="dotted-line2"></div>
        <div className="services-distributor">
          <img className='services-distributor-img' src={DisImgS1} alt="" />
          <p className="services-distributor-p">Micro Distributors</p>
        </div>
      </div>
      
    </div>
  )
}
