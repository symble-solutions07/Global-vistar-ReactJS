import React, { useState, useEffect } from "react";

const SendOTPButton = ({ handleSendOTP }) => {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  const startTimer = () => {
    setDisabled(true);

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      setDisabled(false);
      clearInterval(intervalId);
      setTimer(60);
    }, 60000);
  };

  const handleClick = async () => {
    let res = await handleSendOTP();
    console.log("Sending OTP...");
    if (res == 1) startTimer();
  };

  useEffect(() => {
    // Cleanup interval when component unmounts
    return () => clearInterval();
  }, []);

  return (
    <div className="flex items-center  gap-6 justify-center h-screen">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`btnn ${
          disabled ? "opacity-50 cursor-not-allowed btnn-disabled" : ""
        }`}
      >
        {disabled ? `  ${timer}  ` : "Send OTP"}
      </button>

      {/* <div> {`${timer} seconds`}</div> */}
    </div>
  );
};

export default SendOTPButton;
