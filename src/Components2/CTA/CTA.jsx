import './cta.css'
import GVlogo from "./Images/global-vistar-logo.png"
import RegisterImg from "./Images/register-img.png"
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div id='cta'>
        <div className="cta-child">
            <h1 className='cta-title'>Ready to get started?</h1>
            <p className="cta-p">Badhaye Aapke Business Ki Raftaar by Signing Up Today!</p>
            <Link to="/register"><button className="cta-btn">Register Now</button></Link>
            
            <img className='cta-child-img' src={RegisterImg} alt="" />
        </div>
    </div>
  )
}
