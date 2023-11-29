import React from './services.css'
import ManuImgS1 from './manufacturer-img.png'
import DisImgS1 from './distributor-img.png'

export default function Services() {
  return (
    <div className='services'>
      <h1 className="services-title">All-In-One Distribution Platform</h1>
      <h1 className="services-title2">For All Your Distribution Operations & Growth</h1>
      <div className="services-flex">
        <div className="services-manufacturer">
          <img className='services-manufacturer-img' src={ManuImgS1} alt="" />
          <p className="services-manufacturer-p">FMCG Manufacturers & Suppliers</p>
        </div>
        <div className="dotted-line2"></div>
        <div className="services-card">
          <h1 className="gv-logo-title"><span className="global">global</span><span className='vistar'>vistar.com</span></h1>
          <p className="services-card-p">All India Distribution Network</p>
          <p className="services-card-p">No Fraud Guarantee</p>
          <p className="services-card-p p3">Assured Quality Products</p>
          <div className="card-bg"></div>
        </div>
        <div className="dotted-line2"></div>
        <div className="services-distributor">
          <img className='services-distributor-img' src={DisImgS1} alt="" />
          <p className="services-distributor-p">Distribution Partners</p>
        </div>
      </div>
      
    </div>
  )
}
