import './footer.css'
import GVlogo from "./Images/global-vistar-logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id='footer'>
        <div className="footer-flex">
            <div className="footer-1">
                <img className='footer-GVlogo' src={GVlogo} alt="" />
                <p className='footer-1-p'>Global Vistar makes it easy for Manufacturers to help expand their Distribution Network as well as for Distributors to find New Products and Suppliers.</p>
            </div>
            <div className="footer-2">
                <h1 className='footer-2-title'>Pages</h1>
                <Link to="/" className='navbar-links-text'><p className='footer-2-links'>Home</p></Link>
                <Link to="/aboutus" className='navbar-links-text'><p className='footer-2-links'>About Us</p></Link>
                <Link to="/ProductsPage" className='navbar-links-text'><p className='footer-2-links'>Products</p></Link>
                <Link to="/blogpage" className='navbar-links-text'><p className='footer-2-links'>Blogs</p></Link>
            </div>
            <div className="footer-3">
                <h1 className='footer-2-title'>Follow Us</h1>
                <a href="https://instagram.com/globalvistar?igshid=YmMyMTA2M2Y=" className="footer-2-links-a"><p className="footer-2-links">Instagram</p></a>
                <a href="https://www.facebook.com/profile.php?id=100090696241204&mibextid=ZbWKwL" className="footer-2-links-a"><p className="footer-2-links">Facebook</p></a>
                <a href="https://www.linkedin.com/company/global-vistar/" className="footer-2-links-a"><p className="footer-2-links">LinkedIn</p></a>
            </div>
            <div className="footer-5">
                <h1 className='footer-2-title'>Contact Us</h1>
                <p className="footer-2-links">info@globalvistar.com</p>
                <p className="footer-2-links">+91 7058967349</p>
                <p className="footer-2-links">+91 7350940448</p>
            </div>
            <div className="footer-4">
                <h1 className='footer-2-title'>Useful Links</h1>
                <Link to="/privacypolicy" className='navbar-links-text'><p className="footer-2-links">Privacy Policy</p></Link>
                <Link to="/termsandconditions" className='navbar-links-text'><p className="footer-2-links">Terms & Conditions</p></Link>
                <Link to="/contactus" className='navbar-links-text'><p className="footer-2-links">Contact Us</p></Link>
            </div>
            
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright-p">© 2023 Global Vistar - A Symble Solutions Pvt Ltd Company. All Rights Reserved</p>
        </div>
    </div>
  )
}
