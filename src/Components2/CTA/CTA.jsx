import './cta.css'
import GVlogo from "./Images/global-vistar-logo.png"
import RegisterImg from "./Images/register-img.png"

export default function CTA() {
  return (
    <div className='cta'>
        <div className="cta-child">
            <h1 className='cta-title'>Ready to get started?</h1>
            <p className="cta-p">Badhaye Aapke Business Ki Raftaar by Signing Up Today!</p>
            <button className="cta-btn">Register Now</button>
            <img className='cta-child-img' src={RegisterImg} alt="" />
        </div>
        <div className="contact-info">
            <div className="contact-info-left">
                <img className='GVlogo' src={GVlogo} alt="" />
                <p className='contact-info-p'>Global Vistar is everything an FMCG Manufacturer
                and FMCG Distribution Partner needs!</p>
            </div>
            <div className="contact-info-right">
                <div className="contact-info-card">
                    <p className="contact-info-card-title">Send us an email</p>
                    <p className='contact-info-card-mail'>info@globalvistar.com</p>
                </div>
                <div className="contact-info-card">
                    <p className="contact-info-card-title">Give us a call</p>
                    <p className='contact-info-card-mail'>+91 7058967349</p>
                    <p className='contact-info-card-mail'>+91 7350940448</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
