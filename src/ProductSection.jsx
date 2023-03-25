import React from 'react'
import "./style.css"
import pic from "./images/property-1.jpg";
import pic2 from "./images/property-2.jpg";
import pic3 from "./images/property-3.jpg";
import author from "./images/author.jpg";
import ProductCard from './ProductCard';
import "./productsSection.css";

function ProductSection() {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Products</p>

        <h2 className="h2 section-title">Featured Products</h2>
        <div style={{ width: "100rem" }}>
          <ul
            className="property-list container row"
            style={{
              
              display: "flex",
              justifyContent: "center",
            }}
          >
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Aznec"
                Bname="Aznac Biscuits"
                ownerName="Pravin Kumar"
                ownerLoc="Kolhapur"
              />
            </li>

            <li className="feature-card col-sm">
              <ProductCard
                pic={pic2}
                Blocation="Punjab"
                Bname="Fresh Drinks"
                ownerName="Dilip Singh"
                ownerLoc="Punjab"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic3}
                Blocation="SULA WINES, Nashik"
                Bname="SULA WINES"
                ownerName="SR NALAWADE"
                ownerLoc="Amravati"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic3}
                Blocation="Belmont Garden, Chicago"
                Bname="Luxury Villa in Rego Park"
                ownerName="William Seklo"
                ownerLoc="Estate Agents"
              />
            </li>
          </ul>

          <ul
            className="property-list container row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Aznec"
                Bname="Aznac Biscuits"
                ownerName="Pravin Kumar"
                ownerLoc="Kolhapur"
              />
            </li>

            <li className="feature-card col-sm">
              <ProductCard
                pic={pic2}
                Blocation="Punjab"
                Bname="Fresh Drinks"
                ownerName="Dilip Singh"
                ownerLoc="Punjab"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic3}
                Blocation="SULA WINES, Nashik"
                Bname="SULA WINES"
                ownerName="SR NALAWADE"
                ownerLoc="Amravati"
              />
            </li>
            <li className="feature-card col-sm">
              <ProductCard
                pic={pic3}
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