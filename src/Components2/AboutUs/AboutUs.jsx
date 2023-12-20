import Navbar from '../Navbar/Navbar'
import React from './about-us.css'
import AboutUsImg from "./Images/about-us-image-main.png"
import AboutUsImg1 from "./Images/1.png"
import AboutUsImg2 from "./Images/2.png"
import AboutUsImg3 from "./Images/3.png"
import AboutUsImg4 from "./Images/4.png"
import AboutUsImg5 from "./Images/5.png"
import ProfileIcon from "./Images/profile-icon.png"
import PranavImg from "./Images/Photo Pranav.svg"
import KiranImg from "./Images/Photo Kiran.svg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../Footer/Footer'


function AboutUs() {
  window.scrollTo(0, 0);
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
            <img className="about-us-flex-right-img" src={AboutUsImg} alt="" />
            </div>
        </div>
        <h1 className="about-us-title-2">Choosing Global Vistar means Choosing Expansion</h1>
        <div className="about-us-img-flex">
            <div className="about-us-flex-div">
            <img className='about-us-img auimg1' src={AboutUsImg1} alt="" />
            <p className="about-us-img-p">All-In-One Solution</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img auimg2' src={AboutUsImg2} alt="" />
            <p className="about-us-img-p">Product-Market Fit</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img auimg3' src={AboutUsImg3} alt="" />
            <p className="about-us-img-p trusted-net-p">Trusted Network</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img auimg4' src={AboutUsImg4} alt="" />
            <p className="about-us-img-p innovation-p">Innovation</p>
            </div>
            <div className="about-us-flex-div">
            <img className='about-us-img auimg5' src={AboutUsImg5} alt="" />
            <p className="about-us-img-p">Customer Centric</p>
            </div>
        </div>
        <div className="abt-us-vission-mission">
          <div className="abt-us-vission">
            <h1 className="vission-title">Our Vision</h1>
            <hr />
            <p className="vission-mission-p">Deliver innovative solutions and best-in-class technology and sales support that enables manufacturers and distributors to succeed in today's rapidly evolving retail landscape</p>
          </div>
          <div className="abt-us-mission">
            <h1 className="vission-title">Our Mission</h1>
            <hr />
            <p className="vission-mission-p">We envision to be the most trusted ecosystem where manufacturers and distributors have the tools, technology, and support they need to reach their customers, sell their products, and achieve their business goals.</p>
          </div>
        </div>

        <h1 className="our-team-title">Our Team</h1>
        <div className="abt-us-team">
          <a href="https://www.linkedin.com/in/pranav-bankar-6aa451177/" target="_blank">
          <div className="team-card">
            <div className="team-card-header">
              <img className='team-profile-icon' src={PranavImg} alt="" />
              <p className="team-card-title">
                Pranav Bankar
                <br />
                <span className='team-card-desg'>Co-founder</span>
              </p>
              <LinkedInIcon></LinkedInIcon>
              {/* <p className="team-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quos.</p> */}
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/kiran-patil-28b64917a/" target="_blank">
          <div className="team-card">
            <div className="team-card-header">
              <img className='team-profile-icon' src={KiranImg} alt="" />
              <p className="team-card-title">
                Kiran Patil
                <br />
                <span className='team-card-desg'>Co-founder</span>
              </p>
              <LinkedInIcon></LinkedInIcon>
              {/* <p className="team-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quos.</p> */}
            </div>
          </div>
          </a>
          <a href="" target="_blank">
          <div className="team-card">
            <div className="team-card-header">
              <img className='team-profile-icon icon-default' src={ProfileIcon} alt="" />
              <p className="team-card-title">
                Yash
                <br />
                <span className='team-card-desg'>Sales & Operations</span>
              </p>
              <LinkedInIcon></LinkedInIcon>
              {/* <p className="team-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quos.</p> */}
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/rohan-vaidya-359680190/" target="_blank">
          <div className="team-card">
            <div className="team-card-header">
              <img className='team-profile-icon icon-default' src={ProfileIcon} alt="" />
              <p className="team-card-title">
                Rohan Vaidya
                <br />
                <span className='team-card-desg'>Web Developement</span>
              </p>
              <LinkedInIcon></LinkedInIcon>
              {/* <p className="team-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quos.</p> */}
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/amey-kisan-gaikwad/" target="_blank">
          <div className="team-card">
            <div className="team-card-header">
              <img className='team-profile-icon icon-default' src={ProfileIcon} alt="" />
              <p className="team-card-title">
                Amey Gaikwad
                <br />
                <span className='team-card-desg'>Web Developement</span>
              </p>
              <LinkedInIcon></LinkedInIcon>
              {/* <p className="team-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quos.</p> */}
            </div>
          </div>
          </a>
        </div>

        <Footer />
    </div>
  )
}

export default AboutUs
