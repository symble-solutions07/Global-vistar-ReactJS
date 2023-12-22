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
      <h1 className='simple-steps-title'>Start Trading in 3 Simple Steps</h1>

      {/* For manufacturers */}
      { manufacturers &&
        <div className="simple-steps-manufacturers">
        <button onClick={handleManClick} className="for-manufacturers-m">For Manufacturers</button>
        <button onClick={handleDisClick} className="for-distributors-m">For Distributors</button>
        <div className="simple-steps-flex">
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img manu-img1' src={Manuimg1} alt="" />
                <h2 className='simple-steps-flex-card-title'>Create an Account</h2>
            </div>
            <div className="dotted-line"></div>
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img' src={Manuimg2} alt="" />
                <h2 className='simple-steps-flex-card-title'>List Your Product</h2>
            </div>
            <div className="dotted-line"></div>
            <div className="simple-steps-flex-card">
                <img className='simple-steps-flex-card-img manu-img3' src={Manuimg3} alt="" />
                <h2 className='simple-steps-flex-card-title'>Engage With Distributors</h2>
            </div>
        </div>
      </div>
      }
      
      {/* For distributors */}
      {
        distributors && 
        <div className="simple-steps-distributors">
            <button onClick={handleManClick} className="for-manufacturers-d">For Manufacturers</button>
            <button onClick={handleDisClick} className="for-distributors-d">For Distributors</button>
            <div className="simple-steps-flex">
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img' src={Disimg1} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Create a Profile</h2>
                </div>
                <div className="dotted-line"></div>
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img disimg2' src={Disimg2} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Search For Right Product</h2>
                </div>
                <div className="dotted-line"></div>
                <div className="simple-steps-flex-card">
                    <img className='simple-steps-flex-card-img disimg3' src={Disimg3} alt="" />
                    <h2 className='simple-steps-flex-card-title'>Send Enquiry & Order</h2>
                </div>
            </div>
      </div>
      }
      

    </div>
  )
}

export default Simplesteps
