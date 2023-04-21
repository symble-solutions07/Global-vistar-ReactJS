import React from 'react'
import "./style.css"
import pic from "./images/Savouries.jpg";
import DesiRass from "./images/Desi Rass (1).png";
import ShivRatna from "./images/ShivRatna Jaggery.png";
import Anjani from "./images/alphonso aamras_mockup_500gm.jpg";
import TribeCook from "./images/Tribe-cook.png";
import author from "./images/author.jpg";
import ProductCard from './ProductCard';
import "./productsSection.css";

function ProductSection() {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Products</p>

        <h2 className="h2 section-title">Featured Products</h2>
        <div className="property-list-container">
          <ul
            className="property-list container row"
            // style={{

            //   display: "flex",
            //   justifyContent: "center",
            // }}
          >
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Pune"
                Bname="Mighty Millets"
                ownerName="Sahil Jain"
                ownerLoc="Pune"
                margin="20%-30%"
                MOQ="50 units"
              />
            </li>

            <li className="feature-card col-sm">
              <ProductCard
                pic={DesiRass}
                Blocation="Punjab"
                Bname="Desi Rass"
                ownerName="Ashish Bodake"
                ownerLoc="Nashik"
                margin="35%-45%"
                MOQ="100 boxes"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={ShivRatna}
                Blocation=", Nashik"
                Bname="ShivRatna Jaggery"
                ownerName="Naman Patil"
                ownerLoc="Sangli, Maharashtra"
                margin="20-30%"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={Anjani}
                Blocation="Belmont Garden, Chicago"
                Bname="Anjani Food Products"
                ownerName="Pinak Joshi"
                ownerLoc="Pune"
                MOQ="50kgs"
                margin="15%-20%"
              />
            </li>
          </ul>

          <ul className="property-list container row">
            <li className="feature-card col-sm">
              <ProductCard
                pic={TribeCook}
                Blocation="Aznec"
                Bname="Tribe Cook"
                ownerName="Satyajeet Bhillare"
                ownerLoc="Pune"
                locationLook="Mumbai,Pune"
                MOQ="50"
                margin="15-20%"
              />
            </li>

            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Punjab"
                Bname="Fresh Drinks"
                ownerName="Dilip Singh"
                ownerLoc="Punjab"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="SULA WINES, Nashik"
                Bname="SULA WINES"
                ownerName="SR NALAWADE"
                ownerLoc="Amravati"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Belmont Garden, Chicago"
                Bname="Luxury Villa in Rego Park"
                ownerName="William Seklo"
                ownerLoc="Estate Agents"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductSection