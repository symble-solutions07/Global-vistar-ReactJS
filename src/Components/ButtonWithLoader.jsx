import React from "react";
import "./ButtonWithLoader.css";
const ButtonWithLoader = ({ onClick, isLoading, textOnButton }) => {
  console.log(isLoading);
  return (
    <button
      onClick={() => {
        if (!isLoading) onClick();
      }}
      disabled={isLoading}
      className={isLoading ? "Lbutton loading" : "Lbutton"}
    >
      {isLoading && <div className="spinner"></div>}
      {!isLoading && textOnButton}
    </button>
  );
};

export default ButtonWithLoader;
