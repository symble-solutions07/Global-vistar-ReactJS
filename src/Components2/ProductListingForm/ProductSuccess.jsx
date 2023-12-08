import React, { useState, useEffect } from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";

export default function ProductSuccess() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      navigate("/");
    }
  }, [timer]);

  return (
    <>
      <div className="sWrapper">
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <div className="SuccessText">Thank You</div>
        <div className="SuccessParagraph">
          Your Products are under Verification
        </div>
        <div className="SuccessParagraph">
          We will get back to you in 2 Working days
        </div>
        <br />
        <div className="timerText">
          Taking to homepage in {timer}
        </div>
      </div>
    </>
  );
}
