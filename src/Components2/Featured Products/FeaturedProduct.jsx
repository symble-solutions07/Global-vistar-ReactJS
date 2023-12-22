import "./featured-products.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MightyMillets from "./Images/Mighty-Millets.webp";
import DesiRass from "./Images/Desi-Rass.webp";
import ShivratnaJaggery from "./Images/ShivRatna-Jaggery.webp";
import TribeCook from "./Images/Tribe-cook.webp";
import Button from "@mui/material/Button";
import Enquiry from "../../Components/enquiry";

export default function FeaturedProduct() {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isEnquiryPopupVisible, setEnquiryPopupVisible] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
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
              //   setUser(data.user.name);
              console.log(data.user.name + " enquired");
              // openInNewTab(
              //   // "https://docs.google.com/forms/d/e/1FAIpQLSciD5NwlybLK058JZyyC4TYjYhHt0-6-4AQarBsb0tt1CduDg/viewform?usp=sf_link"
              //   "https://globalvistar.com"
              // );
              handleOpen();
              // setEnquiryPopupVisible(true);
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
      {/* <Enquiry /> */}
      {/* {isEnquiryPopupVisible && <Enquiry />} */}
      {/* <button onClick={handleOpen}>Open Form</button> */}
      <Enquiry open={open} handleClose={handleClose} />

      {isPopupVisible && <div className="popUpWrapper"></div>}
      <div id="featured-products">
        <h1 className="featured-products-title">Featured Products</h1>
        <div className="featured-products-flex">
          <div className="featured-products-card">
            <img
              className="featured-products-card-img"
              src={MightyMillets}
              alt=""
            />
            <div className="featured-products-card-description">
              <p className="featured-products-card-verified">
                Global Vistar Verified
              </p>
              <h1 className="featured-products-card-title">Mighty Millets</h1>
              <p className="featured-products-card-price">Price: ₹7200</p>
              <p className="featured-products-card-price">
                MOQ: 1 Box - 120 nos
              </p>
              <p className="featured-products-card-margin">
                Expected Margin: 20%-30%
              </p>
              <button
                className="featured-products-card-btn"
                onClick={() => {
                  handleSendEnquiry();
                  localStorage.setItem("ProductToEnquire", "Mighty Millets");
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
          <div className="featured-products-card">
            <img className="featured-products-card-img" src={DesiRass} alt="" />
            <div className="featured-products-card-description">
              <p className="featured-products-card-verified">
                Global Vistar Verified
              </p>
              <h1 className="featured-products-card-title">Desi Ras</h1>
              <p className="featured-products-card-price">Price: ₹50000</p>
              <p className="featured-products-card-price">MOQ: 100 boxes</p>
              <p className="featured-products-card-margin">
                Expected Margin: 15%-25%
              </p>
              <button
                className="featured-products-card-btn"
                onClick={() => {
                  handleSendEnquiry();
                  localStorage.setItem("ProductToEnquire", "Desi Ras");
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
          <div className="featured-products-card">
            <img
              className="featured-products-card-img"
              src={ShivratnaJaggery}
              alt=""
            />
            <div className="featured-products-card-description">
              <p className="featured-products-card-verified">
                Global Vistar Verified
              </p>
              <h1 className="featured-products-card-title">
                Shivratna Jaggery
              </h1>
              <p className="featured-products-card-price">Price: ₹48000</p>
              <p className="featured-products-card-price">MOQ: 1000kg</p>
              <p className="featured-products-card-margin">
                Expected Margin: 10%-20%
              </p>
              <button
                className="featured-products-card-btn"
                onClick={() => {
                  handleSendEnquiry();
                  localStorage.setItem("ProductToEnquire", "Shivratna Jaggery");
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
          <div className="featured-products-card">
            <img
              className="featured-products-card-img"
              src={TribeCook}
              alt=""
            />
            <div className="featured-products-card-description">
              <p className="featured-products-card-verified">
                Global Vistar Verified
              </p>
              <h1 className="featured-products-card-title">Tribe Cook</h1>
              <p className="featured-products-card-price">Price: ₹6000</p>
              <p className="featured-products-card-price">
                MOQ: 1 Box - 120 nos
              </p>
              <p className="featured-products-card-margin">
                Expected Margin: 25%-35%
              </p>
              <button
                className="featured-products-card-btn"
                onClick={() => {
                  handleSendEnquiry();
                  localStorage.setItem("ProductToEnquire", "Tribe Cook");
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
