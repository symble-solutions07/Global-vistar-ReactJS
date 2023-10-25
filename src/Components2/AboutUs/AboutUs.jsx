import Navbar from '../Navbar/Navbar'
import React from './about-us.css'
import AboutUsImg from "./about-us-image-main.png"
import AboutUsImg1 from "./1.png"
import AboutUsImg2 from "./2.png"
import AboutUsImg3 from "./3.png"
import AboutUsImg4 from "./4.png"
import AboutUsImg5 from "./5.png"


function AboutUs() {
  return (
    <div className='about-us'>
        <Navbar />
        <div className="about-us-flex">
            <div className="about-us-flex-left">
            <h1 className="about-us-title">Badhaye Apke Business ki Raftaar</h1>
            <p className="about-us-p">Welcome to Global Vistar, the platform that connects manufacturers and distributors to expand their business and win together. At Global Vistar, we believe that every manufacturer and distributor deserves to achieve the their full potential. That's why we've created a platform that makes it easy for them to find each other, collaborate, and grow their business.</p>
            <p className="about-us-p-2">"Vistar" means expansion, and that's exactly what we're all about. We want to help our users expand their reach, expand their profits, and expand their impact on the world.</p>
            </div>
            <div className="about-us-flex-right">
            <img src={AboutUsImg} alt="" />
            </div>
        </div>
        <h1 className="about-us-title-2">Choosing Global Vistar means Choosing Expansion</h1>
        <div className="about-us-img-flex">
            <div className="about-us-flex-div">
            <img className='about-us-img ' src={AboutUsImg1} alt="" />
            <p className="about-us-img-p">All-in-one solution</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img' src={AboutUsImg2} alt="" />
            <p className="about-us-img-p">All-in-one solution</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img' src={AboutUsImg3} alt="" />
            <p className="about-us-img-p">All-in-one solution</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img' src={AboutUsImg4} alt="" />
            <p className="about-us-img-p">All-in-one solution</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img' src={AboutUsImg5} alt="" />
            <p className="about-us-img-p">All-in-one solution</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
