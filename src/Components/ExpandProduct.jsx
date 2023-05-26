import { React, useState } from "react";
import Header from "../Header";
import "../expandProduct.css";
import Enquiry from "./Enquiry";
import Footer from "../Footer";

function ExpandProduct(props) {
  const [showEnquiry, setShowEnquiry] = useState(false);
    window.scrollTo(0, 0);
    
  return (
    <div>
      <Header></Header>
      <div className="expandproduct-container">
        <div className="product-images">
          <img src="https://picsum.photos/300/200" alt="" />
          <img src="https://picsum.photos/300/200" alt="" />
          <img src="https://picsum.photos/300/200" alt="" />
        </div>
        <div className="product-figures">
          <div className="section">
            <h1>Margin</h1>
            <h4>20%-30%</h4>
          </div>
          <hr />
          <div className="section">
            <h1>MOQ</h1>
            <h4>100 Units</h4>
          </div>
          <hr />
          <div className="section">
            <h1>Location</h1>
            <h4>Pune, Mumbai, Nashik, Nagpur</h4>
          </div>
        </div>
        <div className="product-info">
          <div className="product-about-us">
            <h2>ABOUT US</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              quibusdam nisi rerum ex vitae quisquam molestias neque officia
              assumenda, cum, rem blanditiis inventore optio animi! Perferendis
              ipsam tempora expedita totam dolor, et libero saepe iure eius
              accusamus non, vitae fugit aut voluptate at voluptates autem?
              Officia harum quos nobis obcaecati. Lorem ipsum dolor sit amet
              <p>
                consectetur, adipisicing elit. Esse quos earum suscipit
                molestias, iure ipsa dolor quas perferendis, dignissimos illum,
                repellendus eligendi repudiandae minus! Numquam delectus
                consequatur expedita, nobis fugiat a praesentium exercitationem
                tenetur veniam impedit deserunt aliquam explicabo? Voluptates
                tempora, blanditiis minus vitae dicta reprehenderit debitis
                cumque sequi ea?
              </p>
            </p>
          </div>
          <div className="location-info ">
            <h2>Looking For Locations</h2>
            <hr />
            <div className="location-info-list">
              <ul>
                <li className="list-item-location">Pune</li>
                <li className="list-item-location">Mumbai</li>
                <li className="list-item-location">Nashik</li>
                <li className="list-item-location">Nagpur</li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className="card-footer-actions-btn send-enquiry-btn"
              onClick={() => {
                setShowEnquiry(!showEnquiry);
                console.log(showEnquiry);
              }}
              style={{ width: "7.5rem", padding: "2px" }}
            >
              Send Enquiry
            </button>
          </div>
          {showEnquiry ? (
            <Enquiry
              showEnquiry={showEnquiry}
              setShowEnquiry={setShowEnquiry}
              Bname={props.Bname}
            ></Enquiry>
          ) : null}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ExpandProduct;
