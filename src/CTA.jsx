import React from "react";
import "./style.css";
import AuthenticationForm from "./AuthenticationForm";

import { useState } from "react";

function CTA(props) {
  // const [showLoginPage, setShowLoginPage] = useState(false);
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">Looking for a Distributors?</h2>

            <p className="card-text">We can help you to find them</p>
          </div>

          <button
            className="btn cta-btn"
            
          >
            <span>Explore Oppurtunities</span>

            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
