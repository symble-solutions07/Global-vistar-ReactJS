import './footer.css'
import GVlogo from "./Images/global-vistar-logo.png"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-flex">
            <div className="footer-1">
                <img className='footer-GVlogo' src={GVlogo} alt="" />
                <p className='footer-1-p'>Global Vistar makes it easy for Manufacturers to help expand their Distribution Network as well as for Distributors to find New Products and Supliers.</p>
            </div>
            <div className="footer-2">
                <h1 className='footer-2-title'>Pages</h1>
                <p className="footer-2-links">Home</p>
                <p className="footer-2-links">About Us</p>
                <p className="footer-2-links">Categories</p>
                <p className="footer-2-links">Blogs</p>
                <p className="footer-2-links">Contact</p>
            </div>
            <div className="footer-3">
                <h1 className='footer-2-title'>Follow Us</h1>
                <p className="footer-2-links">Instagram</p>
                <p className="footer-2-links">Facebook</p>
                <p className="footer-2-links">Linked In</p>
            </div>
            <div className="footer-4">
                <h1 className='footer-2-title'>Useful Links</h1>
                <p className="footer-2-links">Terms of Use</p>
                <p className="footer-2-links">Privacy Policy</p>
            </div>
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright-p">© 2023 Global Vistar - A Symble Solutions Pvt Ltd Company. All Rights Reserved</p>
        </div>
    </div>
  )
}
