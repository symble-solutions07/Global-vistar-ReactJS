import './footer.css'
import GVlogo from "./Images/global-vistar-logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-flex">
            <div className="footer-1">
                <img className='footer-GVlogo' src={GVlogo} alt="" />
                <p className='footer-1-p'>Global Vistar makes it easy for Manufacturers to help expand their Distribution Network as well as for Distributors to find New Products and Suppliers.</p>
            </div>
            <div className="footer-2">
                <h1 className='footer-2-title'>Pages</h1>
                <Link to="/" className='navbar-links-text'><p className='footer-2-links'>Home</p></Link>
                <Link to="/AboutUsPage" className='navbar-links-text'><p className='footer-2-links'>About Us</p></Link>
                <Link to="/" className='navbar-links-text'><p className='footer-2-links'>Categories</p></Link>
                <Link to="/blogpage" className='navbar-links-text'><p className='footer-2-links'>Blogs</p></Link>
                <Link to="/" className='navbar-links-text'><p className='footer-2-links'>Contact</p></Link>
            </div>
            <div className="footer-3">
                <h1 className='footer-2-title'>Follow Us</h1>
                <a href="https://instagram.com/globalvistar?igshid=YmMyMTA2M2Y=" className="footer-2-links-a"><p className="footer-2-links">Instagram</p></a>
                <a href="https://www.facebook.com/profile.php?id=100090696241204&mibextid=ZbWKwL" className="footer-2-links-a"><p className="footer-2-links">Facebook</p></a>
                <a href="https://www.linkedin.com/company/global-vistar/" className="footer-2-links-a"><p className="footer-2-links">Linked In</p></a>
            </div>
            <div className="footer-4">
                <h1 className='footer-2-title'>Useful Links</h1>
                <Link to="/terms&cond" className='navbar-links-text'><p className="footer-2-links">Terms of Use</p></Link>
                <Link to="/terms&cond" className='navbar-links-text'><p className="footer-2-links">Privacy Policy</p></Link>
            </div>
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright-p">© 2023 Global Vistar - A Symble Solutions Pvt Ltd Company. All Rights Reserved</p>
        </div>
    </div>
  )
}
