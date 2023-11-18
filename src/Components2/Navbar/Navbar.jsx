import './navbar.css'
import GVlogo from "./global-vistar-logo.png"
import { Link } from "react-router-dom";
import  LoginReg from "../../Components/loginReg";
import CTA from '../CTA/CTA';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="hamburger-menu">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="/" className='navbar-links-text'><a href="#"><li>Home</li></a></Link>
            <Link to="/aboutus" className='navbar-links-text'><a href="#"><li>About Us</li></a></Link>
            <Link to="/ProductsPage" className='navbar-links-text'><a href="#"><li>Products</li></a></Link>
            <Link to="/blogpage" className='navbar-links-text'><a href="#"><li>Blogs</li></a></Link>
            <a className='navbar-links-contact' href="#cta"><li>Contact</li></a>
            <LoginReg/>
          </ul>
        </div>
      </div>
      <div className="left-navbar">
        <Link to="/" className='navbar-links-text'><img className='navbar-GVlogo' src={GVlogo} alt="" /></Link>
      </div>
      <div className="center-navbar">
        <Link to="/" className='navbar-links-text'><p className='navbar-links'>Home</p></Link>
        <Link to="/aboutus" className='navbar-links-text'><p className='navbar-links'>About Us</p></Link>
        <Link to="/ProductsPage" className='navbar-links-text'><p className='navbar-links'>Products</p></Link>
        <Link to="/BlogPage" className='navbar-links-text'><p className='navbar-links'>Blogs</p></Link>
        <a className='navbar-links' href="#cta">Contact</a>
      </div>
      <div className="right-navbar-new">
        <LoginReg/>
      </div>
    </div>
  )
}

export default Navbar
