import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "../InfoCard.css";
import Beverages from "../images/Beverage .svg";
import DairyAndFrozen from "../images/Dairy and Frozen .svg";

function InfoCards() {
  return (
    <div>
      <div className="card-container">
        <div className="card-info">
          <img src={Beverages} alt="" />
          {/* <Beverages></Beverages> */}
        </div>
        <div className="card-info">
          <img src={DairyAndFrozen} alt="" />
        </div>

        <div className="card-info">
          <OpenInFullIcon />
        </div>
        <div className="card-info">
          <OpenInFullIcon />
        </div>
        <div className="card-info">
          <OpenInFullIcon />
        </div>
        <div className="card-info">
          <OpenInFullIcon />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
