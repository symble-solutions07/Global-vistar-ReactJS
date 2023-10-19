import './featured-products.css'
import MightyMillets from "./Images/Mighty-Millets.jpg"
import DesiRass from "./Images/Desi-Rass.png"
import ShivratnaJaggery from "./Images/ShivRatna-Jaggery.png"
import TribeCook from "./Images/Tribe-cook.png"


export default function FeaturedProduct() {
  return (
    <div className='featured-products'>
      <h1 className="featured-products-title">Featured Products</h1>
      <div className="featured-products-flex">
        <div className="featured-products-card">
          <img className='featured-products-card-img' src={MightyMillets} alt="" />
          <div className="featured-products-card-description">
            <p className="featured-products-card-verified">Global Vistar Verified</p>
            <h1 className="featured-products-card-title">Mighty Millets</h1>
            <p className="featured-products-card-price">Price: ₹7200</p>
            <p className="featured-products-card-price">MOQ: 1 Box - 120 nos</p>
            <p className="featured-products-card-margin">Margin: 20%-30%</p>
            <button className="featured-products-card-btn">Send Enquiry</button>
          </div>
        </div>
        <div className="featured-products-card">
          <img className='featured-products-card-img' src={DesiRass} alt="" />
          <div className="featured-products-card-description">
            <p className="featured-products-card-verified">Global Vistar Verified</p>
            <h1 className="featured-products-card-title">Desi Rass</h1>
            <p className="featured-products-card-price">Price: ₹---</p>
            <p className="featured-products-card-price">MOQ: 100 boxes</p>
            <p className="featured-products-card-margin">Margin: 35%-45%</p>
            <button className="featured-products-card-btn">Send Enquiry</button>
          </div>
        </div>
        <div className="featured-products-card">
          <img className='featured-products-card-img' src={ShivratnaJaggery} alt="" />
          <div className="featured-products-card-description">
            <p className="featured-products-card-verified">Global Vistar Verified</p>
            <h1 className="featured-products-card-title">Shivratna Jaggery</h1>
            <p className="featured-products-card-price">Price: ₹48000</p>
            <p className="featured-products-card-price">MOQ: 1000kg</p>
            <p className="featured-products-card-margin">Margin: 20%-30%</p>
            <button className="featured-products-card-btn">Send Enquiry</button>
          </div>
        </div>
        <div className="featured-products-card">
          <img className='featured-products-card-img' src={TribeCook} alt="" />
          <div className="featured-products-card-description">
            <p className="featured-products-card-verified">Global Vistar Verified</p>
            <h1 className="featured-products-card-title">Tribe Cook</h1>
            <p className="featured-products-card-price">Price: ₹---</p>
            <p className="featured-products-card-price">MOQ: 1 Box - 120 nos</p>
            <p className="featured-products-card-margin">Margin: 20%-30%</p>
          <button className="featured-products-card-btn">Send Enquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}
