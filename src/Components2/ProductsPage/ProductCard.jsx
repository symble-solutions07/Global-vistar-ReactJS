import React from "react";
import MightyMillets from "./Images/Mighty-Millets.jpg";
import DesiRass from "./Images/Desi-Rass.png";
import ShivratnaJaggery from "./Images/ShivRatna-Jaggery.png";
import TribeCook from "./Images/Tribe-cook.png";
import Button from "@mui/material/Button";

const FeaturedProductCard = (props) => {
  const { title, price, moq, handleSendEnquiry } = props;
  window.scrollTo(0, 0);
  return (
    <div className="featured-products-card">
      <img className="featured-products-card-img" src={MightyMillets} alt="" />
      <div className="featured-products-card-description">
        <p className="featured-products-card-verified">
          Global Vistar Verified
        </p>
        <h1 className="featured-products-card-title">{title}</h1>
        <p className="featured-products-card-price">Price: ₹{price}</p>
        <p className="featured-products-card-price">MOQ: {moq}</p>
        <p className="featured-products-card-margin">Margin: 35%-45%</p>
        <button
          className="featured-products-card-btn"
          onClick={handleSendEnquiry}
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
