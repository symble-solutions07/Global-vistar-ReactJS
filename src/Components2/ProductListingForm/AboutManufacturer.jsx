import React, { useState, useEffect } from "react";
import "./PlistingForm.css";
import manImage from "./manImage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const AboutManufacturer = () => {
  const [UserNumber, setUserNumber] = useState();
  const [UserName, setUserName] = useState();
  const [UserEmail, setUserEmail] = useState();
  const [brandName, setBrandName] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [BusinessType, setBusinessType] = useState("");
  //errors
  const [brandNameError, setbrandNameError] = useState("");
  const [BusinessNameError, setBusinessNameError] = useState("");
  const [BusinessTypeError, setBusinessTypeError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch(
          "https://globalvistarbackend-production.up.railway.app/formCheck/manufacturer",
          // "http://localhost:3001/formCheck/manufacturer",
          {
            method: "GET",
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        ).then((res) => {
          res
            .json()
            .then((data) => {
              console.log(data.msg);
              if (data.msg=="Filled") navigate("/CompanyDetails");
            })
            .catch((err) => {
              console.log(err);
              // navigate("/");
            });
        });
        fetch("https://globalvistarbackend-production.up.railway.app/user/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res
            .json()
            .then((data) => {
              if (data.user) {
                setUserNumber(data.user.phoneNumber);
                setUserName(data.user.name);
                setUserEmail(data.user.email);
                console.log(data.user.phoneNumber);
              }
            })
            .catch((err) => {
              console.log(err);
              localStorage.removeItem("token");
              navigate("/");
            });
        });
      }
    }
  }, []);
  function checkData() {
    let res = 1;
    if (brandName.length < 1) {
      setbrandNameError("Invalid Input");
      res = 0;
    }
    if (BusinessName.length < 1) {
      setBusinessNameError("Invalid Input");
      res = 0;
    }
    if (BusinessType.length < 1) {
      setBusinessTypeError("Invalid Input");
      res = 0;
    }
    return res;
  }
  const handleUpload = (e) => {
    const formdata = {
      UserNumber,
      UserName,
      UserEmail,
      brandName,
      BusinessName,
      BusinessType,
    };
    console.log(formdata);
    let res = checkData();
    if (res == 0) return;
    axios
      .post(
        "https://globalvistarbackend-production.up.railway.app/form/addManufacturer",
        formdata,
        {
          // .post("http://localhost:3001/form/addManufacturer", formdata, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        navigate("/CompanyDetails");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const logoClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="topDivider">
        <div className="leftManDiv">
          <h2 className="gv-logo" onClick={logoClick}>
            <span className="global">Global</span>{" "}
            <span className="vistar">Vistar</span>
          </h2>
          <img className="manImage" src={manImage} alt="" />
        </div>
        <div className="RightSideForm">
          <h4 className="otp-login-title">About Manufacturer</h4>
          <div className="Manuform-container">
            <br />
            <Stack direction="column" spacing={3}>
              <div
                className="errormsg"
                style={{
                  color: "red",
                  display: "flex",
                  margin: "0  0 -1rem 1rem",
                }}
              >
                {brandNameError}
              </div>
              <TextField
                className="Form-input"
                id="outlined-basic"
                label="Brand Name"
                variant="outlined"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
              <div
                className="errormsg"
                style={{
                  color: "red",
                  display: "flex",
                  margin: "1rem  0 -1rem 1rem",
                }}
              >
                {BusinessNameError}
              </div>
              <TextField
                id="outlined-basic"
                label="Business Name"
                variant="outlined"
                value={BusinessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Business Owner Name"
                variant="outlined"
                value={UserName || ""}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Phone Number"
                value={UserNumber || ""}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email ID"
                value={UserEmail || ""}
                InputProps={{
                  readOnly: true,
                }}
              />
              <div
                className="errormsg"
                style={{
                  color: "red",
                  display: "flex",
                  margin: "1rem  0 -1rem 1rem",
                }}
              >
                {BusinessTypeError}
              </div>
              <div className="BTypeInput">
                <span>Business Type</span>

                <Select
                  sx={{ width: "60%" }}
                  id="business-type-select"
                  value={BusinessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <MenuItem value="Private Limited">Private Limited</MenuItem>
                  <MenuItem value="Public Limited">Public Limited</MenuItem>
                  <MenuItem value="Limited Liability Partnership (LLP)">
                    Limited Liability Partnership (LLP)
                  </MenuItem>
                  <MenuItem value="Sole Proprietorship">
                    Sole Proprietorship
                  </MenuItem>
                  <MenuItem value="Partnership Firm">Partnership Firm</MenuItem>
                  <MenuItem value="One Person Company">
                    One Person Company
                  </MenuItem>
                </Select>
              </div>
              <div className="submit-button-wrapper">
                <button
                  onClick={() => {
                    handleUpload();
                  }}
                  className="submit-button"
                >
                  Next
                </button>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutManufacturer;
