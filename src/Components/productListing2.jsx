import "./productListing2.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ProductListing2() {
  const navigate = useNavigate();

  const [ltdError, setltdError] = useState("");
  const [ympError, setympError] = useState("");
  const [shipError, setshipError] = useState("");
  const [RRError, setRRError] = useState("");
  const [STError, setSTError] = useState("");
  const [SamplingError, setSamplingError] = useState("");
  const [TMPWError, setTMPWError] = useState("");
  const [pLifeError, setpLifeError] = useState("");
  const [manufacError, setmanufacError] = useState("");
  const [capaError, setcapaError] = useState("");
  const [pTypeError, setpTypeError] = useState("");
  const [pSizeError, setpSizeError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSendOTP = async () => {
    // setPopupVisible(true);
    const resp = await fetch(
      "https://gv-backend-production.up.railway.app/user/check",
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

    if (dat.message != "Exists") {
      setPopupVisible(true);
      const timeout = setTimeout(() => {
        // console.log("This text will be displayed after 2 seconds.");
        navigate("/register");
      }, 2000);
    }
  };
  function checkAllInputs(data) {
    var res = 1;
    console.log(!data.get("Lead-time-in-days"));
    if (!data.get("Lead-time-in-days")) {
      setltdError("*required");
      res = 0;
    }
    if (!data.get("year-market-presence")) {
      setympError("*required");
      res = 0;
    }
    if (!data.get("shipping")) {
      setshipError("*required");
      res = 0;
    }
    if (!data.get("RnR")) {
      setRRError("*required");
      res = 0;
    }
    if (!data.get("Storage")) {
      setSTError("*required");
      res = 0;
    }
    if (!data.get("Sampling")) {
      setSamplingError("*required");
      res = 0;
    }
    if (!data.get("TPMWhiteLabelling")) {
      setTMPWError("*required");
      res = 0;
    }
    // console.log(data.get("pLife").length );
    // console.log("d")
    // console.log(data.get("pLife").length === 0);
    // if (data.get("pLife").length === 0);
    // {
    //   console.log("inside");
    //   setpLifeError("*required");
    //   res = 0;
    // }
    // if (data.get("manufac").length);
    // {
    //   setmanufacError("*required");
    //   res = 0;
    // }
    // if (data.get("capa").length == 0);
    // {
    //   setcapaError("*required");
    //   res = 0;
    // }
    // if (data.get("pType").length == 0);
    // {
    //   setpTypeError("*required");
    //   res = 0;
    // }
    // if (data.get("pSize").length == 0);
    // {
    //   setpSizeError("*required");
    //   res = 0;
    // }
    return res;
  }
  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const toProceed = checkAllInputs(data);
    if (toProceed === 0) return;
    const LeadTimeInDays = data.get("Lead-time-in-days");
    const YearPresence = data.get("year-market-presence");
    const shipping = data.get("shipping");
    const RnR = data.get("RnR");
    const storage = data.get("Storage");
    const Sampling = data.get("Sampling");
    const TPM = data.get("TPMWhiteLabelling");
    const productLife = data.get("pLife");
    const manufacturingPlace = data.get("manufac");
    const capacity = data.get("capa");
    const productType = data.get("pType");
    const productSize = data.get("pSize");
    const phoneNumber = localStorage.getItem("pNumber");
    const Pname = localStorage.getItem("pName");

    const response = await fetch(
      "https://gv-backend-production.up.railway.app/user/ProductDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          Pname,
          LeadTimeInDays,
          YearPresence,
          shipping,
          RnR,
          storage,
          Sampling,
          TPM,
          productLife,
          manufacturingPlace,
          capacity,
          productType,
          productSize,
        }),
      }
    );
    const data1 = await response.json();
    navigate("/")
  };
  const leadClick = (str) => {
    // setleadTime(str);

    console.log("hello");
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="popUpWrapper">
          <div className="popup">
            Number Not registered.
            <br />
            Register first
          </div>
        </div>
      )}
      <div className="otp-login">
        <h2 className="gv-logo">
          <span className="global">Global</span>{" "}
          <span className="vistar">Vistar</span>
        </h2>
        <h4 className="otp-login-title">
          Product Information ( उत्पाद की जानकारी)
        </h4>
        <div className="otp-login-card">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmitButton}
          >
            <br />
            <br />
            <FormControl>
              <div className="error">{ltdError}</div>
              <b> Production Lead time in days</b>
              <RadioGroup
                aria-labelledby="Lead-time-in-days"
                name="Lead-time-in-days"
              >
                <FormControlLabel
                  value="l-10-days"
                  control={<Radio />}
                  label="< 10 days"
                  onChange={leadClick("l10days")}
                />
                <FormControlLabel
                  value="15 days"
                  control={<Radio />}
                  label="15 Days"
                />
                <FormControlLabel
                  value="g-15-days"
                  control={<Radio />}
                  label=">15 Days"
                />
                <FormControlLabel
                  value="30-days"
                  control={<Radio />}
                  label="30 Days"
                />
              </RadioGroup>
              <br />
              <br />
              <div className="error">{ympError}</div>
              <b> Years of Market presence</b>
              <RadioGroup
                aria-labelledby="year-market-presence"
                aria-required
                name="year-market-presence"
              >
                <FormControlLabel
                  value="1-2"
                  control={<Radio />}
                  label="1-2 Years"
                />
                <FormControlLabel
                  value="3-5"
                  control={<Radio />}
                  label="3-5 Years"
                />
                <FormControlLabel
                  value="6-10"
                  control={<Radio />}
                  label="6-10 Years"
                />
                <FormControlLabel
                  value="10-15"
                  control={<Radio />}
                  label="10-15 Years"
                />
              </RadioGroup>
              <br />
              <br />
              <div className="error">{shipError}</div>
              <b> Shipping</b>
              <RadioGroup
                aria-labelledby="shipping"
                aria-required
                name="shipping"
              >
                <FormControlLabel
                  value="Available"
                  control={<Radio />}
                  label="Available"
                />
                <FormControlLabel
                  value="NotAvailable"
                  control={<Radio />}
                  label="Not Available"
                />
              </RadioGroup>
              <br />
              <div className="error">{RRError}</div>
              <b> Refunds and Returns</b>
              <RadioGroup aria-labelledby="RnR" aria-required name="RnR">
                <FormControlLabel
                  value="onlyInParticularCase"
                  control={<Radio />}
                  label="Only in case of defective products and expiry date"
                />
                <FormControlLabel
                  value="NotAvailable"
                  control={<Radio />}
                  label="Not Available in any condition"
                />
              </RadioGroup>
              <br />
              <div className="error">{STError}</div>
              <b> Storage Type</b>
              <RadioGroup
                aria-labelledby="Storage"
                aria-required
                name="Storage"
              >
                <FormControlLabel
                  value="OutdoorTWP"
                  control={<Radio />}
                  label="Outdoor in Traditional Warehousing Practices"
                />
                <FormControlLabel
                  value="ColdStorage"
                  control={<Radio />}
                  label="Cold Storage"
                />
              </RadioGroup>
              <br />
              <div className="error">{pLifeError}</div>
              <b>Product Shelf life</b>
              <TextField
                margin="normal"
                fullWidth
                id="pLife"
                label="Shelf Life"
                name="pLife"
              />
              <br />
              <div className="error">{manufacError}</div>
              <b>Place of Manufacturing</b>
              <TextField
                margin="normal"
                fullWidth
                id="manufac"
                label="Place"
                name="manufac"
              />
              <br />
              <div className="error">{capaError}</div>
              <b>Suppy Capacity per month</b>
              Example: 10,000 Piece / month
              <TextField
                margin="normal"
                fullWidth
                id="capa"
                label="Supply capacity"
                name="capa"
              />
              <br />
              <div className="error">{SamplingError}</div>
              <b>Do you provide Sampling?</b>
              <RadioGroup
                aria-labelledby="Sampling"
                aria-required
                name="Sampling"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <br />
              <div className="error">{TMPWError}</div>
              <b>
                Are you open to Third party manufacturing or White Labelling?
              </b>
              <RadioGroup
                aria-labelledby="TPMWhiteLabelling"
                aria-required
                name="TPMWhiteLabelling"
              >
                <FormControlLabel
                  value="TPM"
                  control={<Radio />}
                  label="Third Party Manufacturing"
                />
                <FormControlLabel
                  value="WhiteLabelling"
                  control={<Radio />}
                  label="White Labelling"
                />
                <FormControlLabel
                  value="notInterested"
                  control={<Radio />}
                  label="No, I'm not interested"
                />
              </RadioGroup>
              <br />
              <div className="error">{pTypeError}</div>
              <b>Type of Product</b>
              (Ex.: Biscuit, Flour, Ready to eat snack, etc.)
              <TextField
                margin="normal"
                fullWidth
                id="pType"
                label="Type"
                name="pType"
              />
              <br />
              <div className="error">{pSizeError}</div>
              <b>Available Product Sizes ex. (50g, 100g)</b>
              <TextField
                margin="normal"
                fullWidth
                id="pSize"
                label="Size"
                name="pSize"
              />
              <br />
              <hr />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </FormControl>
            <br />
          </Box>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ProductListing2;
