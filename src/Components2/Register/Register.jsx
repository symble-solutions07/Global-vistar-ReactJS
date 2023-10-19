import './register.css'
import RegisterImg from "./network.png"
import CommunityImg from "./community.png"
import GrowthImg from "./fast-growth.png"
import MagnetImg from "./magnet.png"
import SearchImg from "./search.png"


export default function Register() {
  return (
    <div className='register'>
        <h1 className='register-title'>Why Register With Us?</h1>
        <div className="register-flex">
            <div className="register-left">
                <img className='register-img' src={RegisterImg} alt="" />
            </div>
            <div className="register-right">
                <div className="register-right-card">
                    <img src={CommunityImg} alt="" className="register-right-card-img" />
                    <p className="register-right-card-p">Access to 1000+ Trusted Distributors Across India</p>
                </div>
                <div className="register-right-card">
                    <img src={SearchImg} alt="" className="register-right-card-img" />
                    <p className="register-right-card-p">Find Right Market for Your Product Potential</p>
                </div>
                <div className="register-right-card">
                    <img src={MagnetImg} alt="" className="register-right-card-img" />
                    <p className="register-right-card-p">Attract New Market Opportunities</p>
                </div>
                <div className="register-right-card">
                    <img src={GrowthImg} alt="" className="register-right-card-img" />
                    <p className="register-right-card-p">Faster and Greater Market Reach</p>
                </div>
            </div>
        </div>
    </div>
  )
}
