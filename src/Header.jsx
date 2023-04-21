import React, { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import pic from "./images/Global vistar TB.svg";
import "./style.css";
// import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProfileIcon from "@mui/icons-material/PermIdentity";
import "./header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import WarehouseIcon from "@mui/icons-material/Warehouse";
// import StorefrontIcon from "@mui/icons-material/Storefront";
import { signOut, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";
import MenuIcon from "@mui/icons-material/Menu";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, Avatar } from "@mantine/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { Modal} from "@mantine/core";

function Header(props) {
  // const [showMenu, setShowMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
    console.log(email);
    
  }, [email])
  

  const auth = getAuth();

  const signOutUser = () => {
    signOut(auth).then(() => {
      sessionStorage.removeItem("email");
      navigate("/");
    })
  };  

  const handleLoginForm = () => {
    setShowLoginForm((prev) => !prev);
    
  }

  // const [openedModal, { openModal, closeModal }] = useDisclosure(false);

  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <Drawer opened={opened} onClose={close}>
        <ul className="navbar-list">
          <li>
            <a href="#home" className="navbar-link" data-nav-link>
              Home
            </a>
          </li>
          <li>
            {/* <a href="#about" className="navbar-link" data-nav-link>
                      About
                    </a> */}
            <Link to="/AboutUsPage" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            {/* <a href="#service" className="navbar-link" data-nav-link>
                      Product Categories
                    </a> */}
            <Link to="/ProductCategories" className="navbar-link">
              Product Categories
            </Link>
          </li>
          <li>
            {/* <a href="#blog" class="navbar-link" data-nav-link>
                      Blogs
                    </a> */}
            <Link to="/BlogPage" className="navbar-link">
              Blogs
            </Link>
          </li>

          <li>
            <a href="#footer" class="navbar-link" data-nav-link>
              Contact
            </a>
          </li>
        </ul>
      </Drawer>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="#our-services" className="header-top-link">
                {/* <ion-icon name="mail-outline"></ion-icon> */}
                <span> | Build a D2C Website | </span>
              </a>
            </li>
            <li>
              <a href="#our-services" className="header-top-link">
                <address> | Build Your Brand | </address>
              </a>
            </li>
            <li>
              <a href="#our-servives" className="header-top-link">
                {/* <ion-icon name="location-outline"></ion-icon> */}
                <address> | Expand Your Business | </address>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link" onClick={handleLoginForm}>
                {/* <ion-icon name="location-outline"></ion-icon> */}
                <address> | Distributor Registration | </address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100090696241204&mibextid=ZbWKwL"
                  className="header-top-social-link"
                >
                  <FacebookIcon></FacebookIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/globalvistar?igshid=YmMyMTA2M2Y="
                  className="header-top-social-link"
                >
                  <InstagramIcon></InstagramIcon>
                </a>
              </li>
              {/* <li>
                <a href="#" className="header-top-social-link">
                  <TwitterIcon></TwitterIcon>
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/company/global-vistar/"
                  className="header-top-social-link"
                >
                  <LinkedInIcon></LinkedInIcon>
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
            <a href="/">
              <img src={pic} alt="" />
            </a>
          </div>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="/" className="logo">
                <img
                  src="./images/Global-vistar.png"
                  alt="GlobalVistar logo"
                  href="/"
                />
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
                  {/* <a href="#about" className="navbar-link" data-nav-link>
                      About
                    </a> */}
                  <Link to="/AboutUsPage" className="navbar-link">
                    About
                  </Link>
                </li>
                <li>
                  {/* <a href="#service" className="navbar-link" data-nav-link>
                      Product Categories
                    </a> */}
                  <Link to="/ProductCategories" className="navbar-link">
                    Product Categories
                  </Link>
                </li>
                <li>
                  {/* <a href="#blog" class="navbar-link" data-nav-link>
                      Blogs
                    </a> */}
                  <Link to="/BlogPage" className="navbar-link">
                    Blogs
                  </Link>
                </li>

                <li>
                  <a href="#footer" class="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="header-bottom-actions">
            {/* <Avatar radius="xl" color="black" />
             */}

            {id !== undefined ? (
              <>
                <p>{id}</p>
                <Button
                  onClick={() => {
                    signOutUser();
                  }}
                >
                  LogOut
                </Button>
              </>
            ) : (
              <Button
                className="register-button"
                onClick={handleLoginForm}
                style={{
                  fontSize: "medium",

                  // onClick={() => setShowMenu((prev) => !prev)}
                }}
              >
                <AccountCircleIcon
                  style={{ fontSize: "30px", paddingRight: "4px" }}
                  className="profile-icon-register"
                ></AccountCircleIcon>
                Register / Login{" "}
              </Button>
            )}

            {/* <button class="header-bottom-actions-btn" aria-label="Profile">
                  <ProfileIcon
                    className="btn-profile"
                    onClick={() => setShowMenu((prev) => !prev)}
                    // onClick={() => setShowLoginForm((prev) => !prev)}
                  />

                  <span>Profile</span>
                </button> */}
            {/* {showMenu ? (
                  <ul className="list-menu">
                    <li onClick={() => setShowLoginForm((prev) => !prev)}>
                      Sign In as Manufacturer
                    </li>
                    <li onClick={() => setShowLoginForm((prev) => !prev)}>
                      Sign In as Distributor
                    </li>
                  </ul>
                ) : (
                  ""
                )} */}
            {/* <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                
              </Button> */}
            {/* <button class="header-bottom-actions-btn" aria-label="Cart">
              <ion-icon name="cart-outline"></ion-icon>

              <span>Cart</span>
            </button> */}
            <button
              class="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
              onClick={open}
            >
              {/* <ion-icon name="menu-outline"></ion-icon> */}
              <MenuIcon></MenuIcon>

              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
      <div className="authentication-section">
        {showLoginForm ? (
          <AuthenticationForm showLoginForm={showLoginForm} />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
