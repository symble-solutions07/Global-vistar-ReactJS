import "./herosection.css";
import CardImg1 from "./Images/fmcg-bg.png";
import CardImg2 from "./Images/fmcg-bg2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Button from "@mui/material/Button";
function HeroSection() {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const popupRedirect = () => {
    setPopupVisible(true);
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 4000);
  };

  const handleProductListing = () => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("https://globalvistarbackend-production.up.railway.app/user/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            if (data.user) {
              navigate("/addManufacturer")
              // openInNewTab(
              //   "https://docs.google.com/forms/d/e/1FAIpQLSciD5NwlybLK058JZyyC4TYjYhHt0-6-4AQarBsb0tt1CduDg/viewform?usp=sf_link"
              // );
            } else popupRedirect();
          });
        });
      } else popupRedirect();
    } else popupRedirect();
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popUpWrapper">
          <div className="popup">
            <b>Login Required.</b>
            <div className="popupText">
              You need to login to access this page.
            </div>
            <hr />
            <div className="popButtons">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ backgroundColor: "rgb(74,36,136)" }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="hero-section">
        <div className="hero-section-left">
          <h1 className="hero-title1">
            Badhaye Apke Business ki Raftaar
          </h1>
          <p className="hero-p1">
            Connecting FMCG Sellers and Distribution Partners. <br />
            Faster & Better.
          </p>

          <input
            type="text"
            placeholder="Search for a Product, Category or Service"
            className="search-bar"
          />
          <a href="#featured-products">
            <button className="magnifying-glass-btn">
              <SearchRoundedIcon className="magnifying-glass" />
            </button>
          </a>

          <div className="frequently-searched">
            <p className="frequently-searched-p1">Frequently Searched: </p>
            <button className="frequently-searched-btn">Mighty Millets</button>
            <button className="frequently-searched-btn">Desi Ras</button>
            <button className="frequently-searched-btn">Tribe Cook</button>
          </div>
        </div>

        <div className="hero-section-right">
          <div className="hero-section-card">
            <h1 className="hero-section-card-title">
              Looking to Expand your Product Market Reach?
            </h1>
            <button
              className="hero-section-card-btn"
              onClick={handleProductListing}
            >
              List your Product
            </button>
            <img src={CardImg1} alt="" className="card-img" />
          </div>

          <div className="hero-section-card">
            <h1 className="hero-section-card-title">Looking for Distribution Opportunities?</h1>
            <a href="#featured-products">
              <button className="hero-section-card-btn">Explore Now</button>
            </a>
            <img src={CardImg2} alt="" className="card-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
