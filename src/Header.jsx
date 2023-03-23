import React from "react";
import pic from "./images/Global-vistar.png";
import "./style.css";
import Button from "react-bootstrap/Button";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/PermIdentity";
import "./header.css";

function Header() {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a
                href="mailto:info@globalvsitar.com"
                className="header-top-link"
              >
                {/* <ion-icon name="mail-outline"></ion-icon> */}
                <span> | Build a D2C Website | </span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <address> | Build Your Brand | </address>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                {/* <ion-icon name="location-outline"></ion-icon> */}
                <address> | Expand Your Business | </address>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                {/* <ion-icon name="location-outline"></ion-icon> */}
                <address> | Distributor Registration | </address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
            </ul>
            <button className="header-top-btn">List your Products</button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="logo-website">
            <h1 className="logo-part-one">global</h1>
            <h1 className="logo-part-two">vistar.com</h1>
          </div>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="./images/Global-vistar.png" alt="GlobalVistar logo" />
              </a>
              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
              >
                <ion-icon name="close-outline"></ion-icon>
                {/* <Button variant="primary">Primary</Button> */}
              </button>
            </div>
            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Product Categories
                  </a>
                </li>
                <li>
                  <a href="#blog" class="navbar-link" data-nav-link>
                    Blogs
                  </a>
                </li>

                <li>
                  <a href="#contact" class="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="header-bottom-actions">
            <button class="header-bottom-actions-btn" aria-label="Search">
              {/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" /> */}
              <SearchIcon className="btn-search" />

              <span>Search</span>
            </button>

            <button class="header-bottom-actions-btn" aria-label="Profile">
              <ProfileIcon className="btn-profile" />

              <span>Profile</span>
            </button>

            {/* <button class="header-bottom-actions-btn" aria-label="Cart">
              <ion-icon name="cart-outline"></ion-icon>

              <span>Cart</span>
            </button> */}

            <button
              class="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <ion-icon name="menu-outline"></ion-icon>

              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
