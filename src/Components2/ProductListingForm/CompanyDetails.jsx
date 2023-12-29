import React, { useState, useEffect } from "react";
import "./companyDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const CompanyDetails = () => {
  const [AboutCompanyError, setAboutCompanyError] = useState("");
  const [ympError, setympError] = useState("");
  const [shipError, setshipError] = useState("");
  const [RRError, setRRError] = useState("");
  const [GSTError, setGSTError] = useState("");
  const [DistributionLocationsError, setDistributionLocationsError] =
    useState("");
  const [SamplingError, setSamplingError] = useState("");
  const [TMPWError, setTMPWError] = useState("");
  const [manufacError, setmanufacError] = useState("");
  const [imageError, setimageError] = useState("");

   useEffect(() => {
     if (localStorage.getItem("token") != null) {
       if (localStorage.getItem("token").length > 10) {
         fetch(
           "https://globalvistarbackend-production.up.railway.app/formCheck/company",
            // "http://localhost:3001/formCheck/company",
           {
             method: "GET",
             headers: {
               authorization: "Bearer " + localStorage.getItem("token"),
             },
           }
         ).then((res) => {
          // console.log(res)
           res
             .json()
             .then((data) => {
               console.log(data);
               if (data.msg == "Filled") navigate("/addProducts");
             })
             .catch((err) => {
               console.log(err);
               // navigate("/");
             });
         });
         
       }
     }
   }, []);
  function checkAllInputs(data) {
    var res = 1;

    if (!data.get("YearPresence")) {
      setympError("*required");
      res = 0;
    }
    if (!data.get("AboutCompany")) {
      setAboutCompanyError("*required");
      res = 0;
    }
    if (!data.get("GST")) {
      setGSTError("*required");
      res = 0;
    }
    if (!data.get("DistributionLocations")) {
      setDistributionLocationsError("*required");
      res = 0;
    }
    if (!data.get("shipping")) {
      setshipError("*required");
      res = 0;
    }
    if (!data.get("RnR")) {
      setRRError("*required");
      res = 0;
      console.log("Rnr");
    }

    if (!data.get("Sampling")) {
      setSamplingError("*required");
      res = 0;
      console.log("Sampling");
    }
    if (!data.get("TPMWhiteLabelling")) {
      setTMPWError("*required");
      res = 0;
      console.log("TPMWhiteLabelling");
    }

    if (!data.get("manufac")) {
      setmanufacError("*required");
      res = 0;
    }
    if (!file) {
      setimageError("*required");
      res = 0;
    }

    return res;
  }
  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("file", file);
    const toProceed = checkAllInputs(data);
    const AboutCompany = data.get("AboutCompany");
    const GST = data.get("GST");
    const DistributionLocations = data.get("DistributionLocations");
    const YearPresence = data.get("YearPresence");
    const shipping = data.get("shipping");
    const RnR = data.get("RnR");
    const Sampling = data.get("Sampling");
    const TPM = data.get("TPMWhiteLabelling");
    const manufacturingPlace = data.get("manufac");
    const phoneNumber = localStorage.getItem("pNumber");
    const Pname = localStorage.getItem("pName");
    console.log(
      phoneNumber,
      Pname,
      AboutCompany,
      GST,
      DistributionLocations,
      YearPresence,
      shipping,
      RnR,
      Sampling,
      TPM,
      manufacturingPlace
    );
    console.log(data);
    if (toProceed == 0) {
      console.log("incomplete");
      return;
    }
    axios
      .post(
        "https://globalvistarbackend-production.up.railway.app/form/uploadCompanyDetails",
        // "http://localhost:3001/form/uploadCompanyDetails",
        data,
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/addProducts");
      })
      .catch((err) => console.log(err));
    console.log("here");
    // if (toProceed === 0) return;
    // const LeadTimeInDays = data.get("Lead-time-in-days");
  };

  // old code
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [file, setFile] = useState();

  return (
    <>
      <div className="topDivider companyformDiv">
        <div className="RightSideForm companyform">
          <h4 className="otp-login-title">Company Details</h4>
          <div className="form-container">
            <br />

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmitButton}
              className="FormBox"
            >
              <br />
              <br />
              <FormControl sx={{"width":"80%"}}>
                <div className="error">{AboutCompanyError}</div>
                <TextField
                  id="AboutCompany"
                  name="AboutCompany"
                  label="About Company"
                  variant="outlined"
                />
                <br />
                <br />
                <div className="questionPL2">
                  <div className="error">{ympError}</div>
                  <b> Years of Market presence</b>
                  <RadioGroup
                    required
                    aria-labelledby="YearPresence"
                    aria-required
                    name="YearPresence"
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
                    <FormControlLabel
                      value="15+"
                      control={<Radio />}
                      label="15+ Years"
                    />
                  </RadioGroup>
                </div>
                <br />
                <br />
                <div className="error">{GSTError}</div>
                <TextField
                  id="GST"
                  name="GST"
                  label="GST no."
                  variant="outlined"
                />
                <br />
                <br />
                <div className="error">{DistributionLocationsError}</div>
                <TextField
                  id="DistributionLocations"
                  name="DistributionLocations"
                  label="Locations for Distribution(2-4 location)"
                  variant="outlined"
                />
                <br />
                <br />
                <div className="questionPL2">
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
                </div>
                <br />
                <div className="questionPL2">
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
                </div>
                <br />
                <div className="questionPL2">
                  <div className="error">{shipError}</div>
                  <b> Replacements (in case of defects)</b>
                  <RadioGroup
                    aria-labelledby="replacements"
                    aria-required
                    name="replacements"
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
                </div>
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

                <br />
                <div className="error">{SamplingError}</div>
                <b>Do you provide Sampling?</b>
                <RadioGroup
                  aria-labelledby="Sampling"
                  aria-required
                  name="Sampling"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
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

                <br />
                <div className="error">{imageError}</div>

                <div className="input1">
                  Fssai License (Fssai लाइसेंस) *
                  <input
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                  <div className="error">Only Images</div>
                  {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
                <hr />
                <div className="submit-button-wrapper">
                  <button
                    onClick={() => {
                      console.log(productList);
                    }}
                    className="submit-button"
                  >
                    Submit
                  </button>
                </div>
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button> */}
              </FormControl>
              <br />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
