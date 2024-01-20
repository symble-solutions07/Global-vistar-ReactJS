import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Enquiry from "../../Components/enquiry";

const FeaturedProductCard = (props) => {
  const { title, price, moq, imageLink, margin, keyy } = props;
  console.log(keyy)
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRedirect = () => {
    setPopupVisible(true);
    console.log("log in bro", isPopupVisible);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const handleSendEnquiry = () => {
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
              // console.log(data.user.name + " enquired");
              handleOpen();
            } else popupRedirect();
          });
        });
      } else popupRedirect();
    } else popupRedirect();
  };

  //pop-up
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popWrapper">
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
      <Enquiry open={open} handleClose={handleClose} />

      <div className="featured-products-card">
        <img
          className="featured-products-card-img"
          src={imageLink}
          onClick={() => {
            navigate(keyy)
          }}
          alt={"image of " + title}
        />
        <div className="featured-products-card-description">
          <p className="featured-products-card-verified">
            Global Vistar Verified
          </p>
          <h1
            onClick={() => {
              navigate(keyy)
            }}
            className="featured-products-card-title"
          >
            {title}
          </h1>
          <p className="featured-products-card-price">Price: ₹{price}</p>
          <p className="featured-products-card-price">MOQ: {moq}</p>
          <p className="featured-products-card-margin">Expected Margin: {margin}</p>
          <button
            className="featured-products-card-btn"
            onClick={() => {
              handleSendEnquiry();
              localStorage.setItem("ProductToEnquire", title);
            }}
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCard;
