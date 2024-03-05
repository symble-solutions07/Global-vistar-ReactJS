import './simplesteps.css'
import Manuimg1 from './Images/manu-img1.webp'
import Manuimg2 from './Images/manu-img2.webp'
import Manuimg3 from './Images/manu-img3.webp'
import Disimg1 from './Images/1.webp'
import Disimg2 from './Images/2.webp'
import Disimg3 from './Images/3.webp'
import { useState } from 'react';

function Simplesteps() {

  const [manufacturers, setManufacturers] = useState(true);
  const [distributors, setDistributors] = useState(false);

  const handleManClick = () => {
    setManufacturers(true);
    setDistributors(false);
  }

  const handleDisClick = () => {
    setManufacturers(false);
    setDistributors(true);
  }

  return (
    <div className='simple-steps'>
      <h1 className='simple-steps-title'>Grow with Global Vistar in 3 Simple Steps.</h1>

      {/* For manufacturers */}
      { manufacturers &&
        <div className="simple-steps-manufacturers">
        <button onClick={handleManClick} className="for-manufacturers-m">For Brands</button>
        <button onClick={handleDisClick} className="for-distributors-m">For Microdistributors</button>
        <div className="simple-steps-flex">
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img manu-img1' src={Manuimg1} alt="" />
                <h2 className='simple-steps-flex-card-title'>Sign Up</h2>
            </div>
            <div className="dotted-line"></div>
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img' src={Manuimg2} alt="" />
                <h2 className='simple-steps-flex-card-title'>Fill in Your Brand Information</h2>
            </div>
            <div className="dotted-line"></div>
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img manu-img3' src={Manuimg3} alt="" />
                <h2 className='simple-steps-flex-card-title'>Grow Your Product Reach</h2>
            </div>
        </div>
      </div>
      }
      
      {/* For distributors */}
      {
        distributors && 
        <div className="simple-steps-distributors">
            <button onClick={handleManClick} className="for-manufacturers-d">For Brands</button>
            <button onClick={handleDisClick} className="for-distributors-d">For Microdistributors</button>
            <div className="simple-steps-flex">
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img' src={Disimg1} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Sign Up</h2>
                </div>
                <div className="dotted-line"></div>
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img disimg2' src={Disimg2} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Create Retail Reach for High-Growth Brands</h2>
                </div>
                <div className="dotted-line"></div>
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img disimg3' src={Disimg3} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Earn Great Commissions!</h2>
                </div>
            </div>
      </div>
      }
      

    </div>
  )
}

export default Simplesteps
