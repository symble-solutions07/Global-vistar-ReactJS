import React from "react";
// import pic from "./images/property-1.jpg";
import pic2 from "./images/property-2.jpg";
import pic3 from "./images/property-3.jpg";
import author from "./images/author.jpg";
import "./style.css";

function ProductCard(props) {
  return (
    <div>
      <div className="property-card " style={{ marginLeft: "auto" }}>
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

              <span>4</span>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="film"></ion-icon>

              <span>2</span>
            </button>
          </div>
        </figure>

        <div className="card-content">
          <div className="card-price">
            <strong>₹340</strong>/piece
          </div>

          <h3 className="h3 card-title">
            <a href="#">{props.Bname}</a>
          </h3>

          <p className="card-text">Write some info about them</p>

          <ul className="card-list">
            <li className="card-item">
              <strong>100 PCS</strong>

              <span>MOQ</span>
            </li>

            <li className="card-item">
              <strong>100GM, 200GM</strong>

              <span>Availble size</span>
            </li>

            <li className="card-item">
              <strong>PAN INDIA</strong>

              <span>Looking for locations</span>
            </li>
          </ul>
        </div>

        <div className="card-footer">
          <div className="card-author">
            <figure className="author-avatar">
              <img src={author} alt="William Seklo" className="w-100" />
            </figure>

            <div>
              <p className="author-name">
                <a href="#">{props.ownerName}</a>
              </p>

              <p className="author-title">{props.ownerLoc}</p>
            </div>
          </div>

          <div className="card-footer-actions">
            <button className="card-footer-actions-btn">
              <ion-icon name="resize-outline"></ion-icon>
            </button>

            <button className="card-footer-actions-btn">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button className="card-footer-actions-btn">
              <ion-icon name="add-circle-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
