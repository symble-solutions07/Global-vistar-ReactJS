import { React, useState } from "react";
// import pic from "./images/property-1.jpg";
import pic2 from "./images/property-2.jpg";
import pic3 from "./images/property-3.jpg";
import author from "./images/author.jpg";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Enquiry from "./Components/Enquiry";
import { Link } from "react-router-dom";
// import { useState } from "react";

function ProductCard(props) {
  
  const [showEnquiry, setShowEnquiry] = useState(false);
  

  return (
    <div>
      <div
        className="property-card "
        style={{ marginLeft: "auto", maxHeight: "40rem", width: "22rem" }}
      >
        <figure className="card-banner">
          <a href="#">
            <img
              src={props.pic}
              alt="New Apartment Nice View"
              className="w-100"
            />
          </a>

          <div className="card-badge green">Assured By Global Vistar</div>

          <div className="banner-actions">
            <button className="banner-actions-btn">
              <ion-icon name="location"></ion-icon>

              <address>{props.Bname}</address>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              {/* <span>4</span> */}
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="film"></ion-icon>

              {/* <span>2</span> */}
            </button>
          </div>
        </figure>

        <div className="card-content">
          <div
            className="card-price"
            style={{ display: "flex", color: "#bc1823" }}
          >
            <strong>{props.margin}</strong>{" "}
            <span style={{ fontSize: "20px", paddingLeft: "0.5rem" }}>
              Margin
            </span>
          </div>

          <h3 className="h3 card-title" style={{ maxHeight: "1rem" }}>
            <a href="#">{props.Bname}</a>
          </h3>
          <br />
          <br />

          {/* <p className="card-text">Write some info about them</p> */}

          <ul className="card-list">
            <li className="card-item">
              <strong>{props.MOQ}</strong>

              <span>MOQ</span>
            </li>

            {/* <li className="card-item">
              <strong>100GM, 200GM</strong>

              <span>Availble size</span>
            </li> */}

            <li className="card-item">
              <strong>{props.locationLook}</strong>

              <span>Looking for locations</span>
            </li>
          </ul>
        </div>

        <div
          className="card-footer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="card-author">
            <figure className="author-avatar">
              {/* <img src={author} alt="William Seklo" className="w-100" /> */}
              <AccountCircleIcon className="avatar"></AccountCircleIcon>
            </figure>

            <div>
              <p className="author-name">
                <a href="#">{props.ownerName}</a>
              </p>

              <p className="author-title" style={{ fontSize: "15px" }}>
                {props.ownerLoc}
              </p>
            </div>
          </div>

          <div
            className="card-footer-actions"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <div style={{ display: "flex" }}>
              <button className="card-footer-actions-btn" style={{ marginRight:"10px" }}>
                <FavoriteIcon />
              </button>

              <button className="card-footer-actions-btn">
                <OpenInFullIcon />
              </button>
            </div> */}
            <div>
              {/* <Link to="/enquiry"> */}
                <button
                  className="card-footer-actions-btn"
                onClick={() => {
                  setShowEnquiry(!showEnquiry);
                  console.log(showEnquiry);
                  }}
                  style={{ width: "7.5rem", padding: "2px" }}
                >
                  Send Enquiry
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      {showEnquiry ? <Enquiry showEnquiry={showEnquiry} setShowEnquiry={setShowEnquiry} Bname={props.Bname}></Enquiry> : null}
    </div>
  );
}

export default ProductCard;
