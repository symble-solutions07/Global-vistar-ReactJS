import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import ProfileIcon from "./profile-icon.png";
import Listings from "./Listings";
import RightArrow from "./arrow-right.svg";
import Cross from "./cross.svg";
import { useState } from "react";

function Dashboard() {
  const [dashOpen, setDashOpen] = useState(false);

  const handleDashOpen = () => {
    setDashOpen(!dashOpen);
    console.log("clicked");
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-flex">
        {dashOpen && (
          <div className="mobile-sidebar">
            <div className="dashboard-profile">
              <img
                className="dashboard-profile-icon"
                src={ProfileIcon}
                alt=""
              />
              <p className="user-name">User Name</p>
              <p className="user-info">+91 7888010146</p>
              <p className="user-info">Maharashtra, India</p>
              <p className="user-info">Manufacturer</p>
            </div>

            <div className="dashboard-features">
              <button className="dashboard-btn btn-active">
                Your Listings
              </button>
              <button className="dashboard-btn">Enquiries</button>
              <button className="dashboard-btn">Featured Products</button>
              <button className="dashboard-btn">Warehousing</button>
              <button className="dashboard-btn">Business Loans</button>
              <button className="dashboard-btn">Logistics</button>
            </div>
          </div>
        )}

        <div className="dashboard-sidebar">
          <div className="dashboard-profile">
            <img className="dashboard-profile-icon" src={ProfileIcon} alt="" />
            <p className="user-name">User Name</p>
            <p className="user-info">+91 7888010146</p>
            <p className="user-info">Maharashtra, India</p>
            <p className="user-info">Manufacturer</p>
          </div>

          <div className="dashboard-features">
            <button className="dashboard-btn btn-active">Your Listings</button>
            <button className="dashboard-btn">Enquiries</button>
            <button className="dashboard-btn">Featured Products</button>
            <button className="dashboard-btn">Warehousing</button>
            <button className="dashboard-btn">Business Loans</button>
            <button className="dashboard-btn">Logistics</button>
          </div>
        </div>

        <div className="dashboard-body">
          <div className="dashboard-title-flex">
            {dashOpen ? (
              <img
                className="mobile-arrow"
                onClick={handleDashOpen}
                src={Cross}
                alt=""
              />
            ) : (
              <img
                className="mobile-arrow"
                onClick={handleDashOpen}
                src={RightArrow}
                alt=""
              />
            )}

            <h1 className="dashboard-title">Dashboard</h1>
          </div>

          <div className="profile-strength">
            <div className="profile-str-flex">
              <p className="profile-strength-title">Profile Strength</p>
              <p className="profile-str-percentage">35%</p>
            </div>
            <p className="profile-str-links">Please fill Company Details</p>
            <p className="profile-str-links">Please fill Profile Details</p>
          </div>

          <div className="your-listings">
            <p className="listings-title">Your Listings</p>
            <Listings />
          </div>

          <div className="dashboard-footer">
            <p className="dashboard-footer-p">
              © 2023 Global Vistar - A Symble Solutions Pvt Ltd Company. All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
