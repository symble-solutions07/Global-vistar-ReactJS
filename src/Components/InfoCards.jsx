import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "../InfoCard.css";

function InfoCards() {
  return (
    <div>
      <div className="card-container">
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
