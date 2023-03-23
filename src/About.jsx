import React from "react";
import "./style.css";
import pic from "./images/about-banner-1.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src={pic}
            alt="House interior"
          />

          {/* <img src="./assets/images/about-banner-2.jpg" alt="House interior" class="abs-img"> */}
        </figure>

        <div className="about-content">
          {/* <p class="section-subtitle">About Us</p> */}
          <h2 className="h2 section-title">Why Register with Us?</h2> <br />
          <br />
          {/* <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s
          </p> */}
          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="people"></ion-icon>
              </div>

              <p className="about-item-text">
                <strong>
                  Access to 1000+ Trusted Distributors Across India
                </strong>
              </p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="search"></ion-icon>
              </div>

              <p className="about-item-text">
                <strong>Find Right Market for Your Product Potential</strong>
              </p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="magnet"></ion-icon>
              </div>

              <p className="about-item-text">
                {" "}
                <strong>Attract New Market Opportunities</strong>
              </p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="flash"></ion-icon>
              </div>

              <p className="about-item-text">
                <strong>Faster and Greater Market Reach</strong>
              </p>
            </li>
          </ul>
          <p className="market-reach-1">
            Register with us today <br />{" "}
          </p>
          <p className="market-reach-2">
            and take your market reach to the next level!{" "}
          </p>
          {/* <p class="callout"> <strong>
            Register with us today and take your market reach to the next level! (red)</strong>
          </p> */}
          <a href="#service" className="btn">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
