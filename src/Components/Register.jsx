import React, { useState } from "react";
import signUpImg from "./sign-up-img2.png";
import "./otpsignup.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function OTPForm() {
  const [NameOfUser, setNameOfUser] = useState("");
  const [NameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberError, setnumberError] = useState("");
  const [otp, setOTP] = useState("");
  const [otpInfo, SetOTPInfo] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [registerAs, setRegisteras] = useState("");
  const [registerAsError, setRegisterAsError] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();

  const handleSendOTP = async () => {
    // setPopupVisible(true);
    const toProceed = checkAllInputs();
    if (toProceed == 0) {
      return;
    }
    const resp = await fetch(
      "https://globalvistarbackend-production.up.railway.app/user/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      }
    );
    const dat = await resp.json();
    console.log(dat);

    if (dat.message == "Exists") {
      setPopupVisible(true);
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      let response = await fetch(
        "https://globalvistarbackend-production.up.railway.app/auth/sendOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        }
      );
      let data = await response.json();
      SetOTPInfo(data);

      console.log(data);
    }
  };

  const handleVerifyOTP = async () => {
    let response = await fetch(
      "https://globalvistarbackend-production.up.railway.app/auth/verifyOTP",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, code: otp }),
      }
    );
    let data = await response.json();
    if (response.status === 200 && data.status === "approved") {
      setVerificationStatus("Verified");

      response = await fetch(
        "https://globalvistarbackend-production.up.railway.app/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
            name: NameOfUser,
            email,
            registerAs,
          }),
        }
      );
      data = await response.json();
      if (response.status === 200) {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("pNumber", phoneNumber);
        if (data.token) navigate("/");
        else {
          alert("invalid Username or password");
        }
      }
    } else {
      setVerificationStatus("Wrong OTP");
    }
  };
  const handleClick = (value) => {
    console.log(value);
    setRegisteras(value);
  };
  const logoClick = () => {
    navigate("/");
  };
  function checkAllInputs() {
    var res = 1;
    if (NameOfUser == "") {
      setNameError("*Please Enter Name");
      res = 0;
    }
    if (email == "") {
      setEmailError("*Please Enter Email address");
      res = 0;
    }
    if (phoneNumber == "" || parseInt(phoneNumber).toString().length != 10) {
      setnumberError("*Please Enter a 10 digit valid number");
      res = 0;
    }
    if (registerAs == "") {
      setRegisterAsError("*This is required");
      res = 0;
    }
    return res;
  }

  return (
    <>
      {isPopupVisible && (
        <div className="popUpWrapper">
          <div className="popup">
            <b>Number already Registered.</b>
            <div className="popupText">Please Login.</div>
            <hr />

            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
              sx={{ backgroundColor: "rgb(74,36,136)" }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
      <div className="TopDiv">
        <div className="otp-verification">
          <div className="otp-ver-left">
            <h1 className="otp-left-title">Badhaye Apke Business Ki Raftaar</h1>
            <h1 className="otp-left-title-2">
              Sign Up Now for Best Deals & Exclusive Offers with{" "}
              <span className="otp-global">Global</span>
              <span className="otp-vistar">Vistar</span>
            </h1>
            <img className="sign-up-img" src={signUpImg} alt="" />
          </div>
          <div className="otp-verification-card">
            <h1 className="otp-gv-logo" onClick={logoClick}>
              <span className="otp-global">Global</span>{" "}
              <span className="otp-vistar">Vistar</span>
            </h1>
            <h1 className="otp-ver-title">Sign Up</h1>
            <div className="otp-info">
              <div className="red">{NameError}</div>
              <div className="otp-input-field">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={NameOfUser}
                  onChange={(e) => setNameOfUser(e.target.value)}
                  className="otp-input-field-2"
                  required
                />
              </div>
              <div className="red">{emailError}</div>
              <div className="otp-input-field">
                {/* <i class="fa-solid fa-envelope"></i> */}
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="otp-input-field-2"
                />
              </div>

              <div className="red">{registerAsError}</div>

              <label class="dropdown">
                <div class="dd-button">Register As</div>

                <input type="checkbox" className="dd-input" id="test" />

                <ul className="dd-menu">
                  <li onClick={() => handleClick("Manufacturer")}>
                    Manufacturer
                  </li>
                  <li onClick={() => handleClick("Supplier")}>Supplier</li>
                  <li onClick={() => handleClick("Distributor")}>
                    Distributor
                  </li>
                  <li onClick={() => handleClick("Wholesaler")}>Wholesaler</li>
                  <li onClick={() => handleClick("Retailer")}>Retailer</li>
                  <li onClick={() => handleClick("Stockist")}>Stockist</li>
                  <li onClick={() => handleClick("Carrier & Forwarder (C&F)")}>
                    Carrier & Forwarder (C&F)
                  </li>
                  <li onClick={() => handleClick("Others")}>Others</li>
                </ul>
              </label>
              <div
                style={{
                  display: "inline",
                  marginLeft: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                {registerAs}
              </div>
            </div>

            <div className="red">{numberError}</div>
            <div className="otp-input-field">
              {/* <i class="fa-solid fa-phone"></i> */}
              <span>+91</span>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Mobile Number"
                value={phoneNumber}
                className="otp-input-field-2"
                required
                onChange={(e) => {
                  if (e.target.value.length > 10) {
                    setPhoneNumber(e.target.value.slice(0, 10));
                    setnumberError("10 digits only");
                  } else {
                    setPhoneNumber(e.target.value);
                    setnumberError("");
                  }
                }}
              />
            </div>

            <div className="sendOtpbtn">
              <button className="btnn" onClick={handleSendOTP}>
                Send OTP
              </button>
              <div class="otpinfo">{otpInfo}</div>
            </div>
            <div className="red">{verificationError}</div>
            <div className="otp-input-field">
              {/* <i class="fa-solid fa-shield-halved"></i> */}
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                className="otp-input-field-2"
                required
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <div className="VerifyFlex sendOtpbtn">
              {/* <button
                className=" btnn"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button> */}
              <div class="otpinfo">{verificationStatus}</div>
            </div>
            <div className="lastSubmit">
              <input
                class="btnn"
                type="submit"
                value="Submit"
                onClick={() => {
                  handleVerifyOTP();
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPForm;
