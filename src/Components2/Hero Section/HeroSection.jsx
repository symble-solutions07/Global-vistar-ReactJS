import "./herosection.css";
import CardImg1 from "./fmcg-bg.png";
import CardImg2 from "./fmcg-bg2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }, 3000);
  };
  const handleProductListing = () => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("https://gv-backend-production.up.railway.app/user/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            if (data.user) {
              //   setUser(data.user.name);
              //   console.log(data.user.name + " signed in");
              openInNewTab(
                "https://docs.google.com/forms/d/e/1FAIpQLSciD5NwlybLK058JZyyC4TYjYhHt0-6-4AQarBsb0tt1CduDg/viewform?usp=sf_link"
              );
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
            User not Logged in.
            <hr />
            <h2>Please log-in</h2>
          </div>
        </div>
      )}
      <div className="hero-section">
        <div className="hero-section-left">
          <h1 className="hero-title1">
            Connecting FMCG Sellers and Distributors.
          </h1>
          <p className="hero-p1">
            We provide a cutting-edge platform that facilitates efficient
            connections between FMCG sellers and distributors. Our technology
            streamlines the entire supply chain process, enabling sellers to
            reach a wider market and distributors to source products seamlessly.
          </p>
          <p className="search-bar-p">Search from a Wide Variety of Products</p>
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
          <input
            type="text"
            placeholder="Search for a Product, Category or Service"
            className="search-bar"
          />
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
            <h1 className="hero-section-card-title">Looking for Products?</h1>
            <a href="#featured-products"><button className="hero-section-card-btn">Explore Now</button></a>
            <img src={CardImg2} alt="" className="card-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
