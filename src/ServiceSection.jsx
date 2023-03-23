import React from "react";
import "./style.css";

function ServiceSection() {
  return (
    <section className="service" id="service">
      <div className="container">
        {/* <p className="section-subtitle">Our Services</p> */}

        <h2 className="h2 section-title">
          Expand Your Product Distribution in 3 Simple Steps!
        </h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="C:\Users\Pranav\Downloads\Step 1 Icon.svg"
                  alt="Service icon"
                />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Step 1</a>
              </h3>

              <p className="card-text">
                Create an Account <br />
                Register using your mobile number. Enter business details and
                requirements
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="C:\Users\Pranav\Downloads\Step 1 Icon (1).svg"
                  alt="Service icon"
                />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Step 2</a>
              </h3>

              <p className="card-text">
                Verification <br />
                Complete Compliance and Quality Checks by uploading Documents
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="C:\Users\Pranav\Downloads\Step 1 Icon (2).svg"
                  alt="Service icon"
                />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Step 3</a>
              </h3>

              <p className="card-text">
                Start Your Product Distribution <br />
                Connect with the Best Distributors from all over India!.
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;
