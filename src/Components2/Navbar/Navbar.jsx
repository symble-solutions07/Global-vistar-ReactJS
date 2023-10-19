import './navbar.css'
import GVlogo from "./global-vistar-logo.png"
import { Link } from "react-router-dom";

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
            <a href="#"><li>Home</li></a>
            <Link to="/AboutUsPage" className='navbar-links-text'><a href="#"><li>About Us</li></a></Link>
            <a href="#"><li>Categories</li></a>
            <a href="#"><li>Blogs</li></a>
            <a href="#"><li>Contact</li></a>
            <Link to="/login" className="btn2 login-btn">Login</Link>
            <Link to="/register" className="btn2 register-btn">Sign Up</Link>
          </ul>
        </div>
      </div>
      <div className="left-navbar">
        <img className='navbar-GVlogo' src={GVlogo} alt="" />
      </div>
      <div className="center-navbar">
        <Link to="/" className='navbar-links-text'><p className='navbar-links'>Home</p></Link>
        <Link to="/AboutUsPage" className='navbar-links-text'><p className='navbar-links'>About Us</p></Link>
        <Link to="/" className='navbar-links-text'><p className='navbar-links'>Categories</p></Link>
        <Link to="/BlogPage" className='navbar-links-text'><p className='navbar-links'>Blogs</p></Link>
        <Link to="/" className='navbar-links-text'><p className='navbar-links'>Contact</p></Link>
        {/* <p className='navbar-links'>Categories</p>
        <p className='navbar-links'>Blogs</p>
        <p className='navbar-links'>Contact</p> */}
      </div>
      <div className="right-navbar-new">
        <Link to="/login" className="btn2 login-btn">Login</Link>
        <Link to="/register" className="btn2 register-btn">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
