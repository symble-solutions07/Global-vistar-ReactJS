import "./productListing.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import moqImg from "../images/MOQimg.jpeg";
import ricon from "../images/rupeeIcon.svg";

function ProductListing() {
  const navigate = useNavigate();

  const [nameOfProduct, setNameOfProduct] = useState("");
  const [nameOfProductError, setNameOfProductError] = useState("");
  const [moq1, setMoq1] = useState("");
  const [ppp1, setppp1] = useState("");
  const [moq2, setMoq2] = useState("");
  const [ppp2, setppp2] = useState("");
  const [moq3, setMoq3] = useState("");
  const [ppp3, setppp3] = useState("");
  const [moq1error, setMoq1error] = useState("");
  const [ppp1error, setppp1error] = useState("");
  const [moq2error, setMoq2error] = useState("");
  const [ppp2error, setppp2error] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const checkUser = async () => {
    // setPopupVisible(true);
    const phoneNumber = localStorage.getItem("pNumber");
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

    if (dat.message != "Exists") {
      setPopupVisible(true);
      const timeout = setTimeout(() => {
        // console.log("This text will be displayed after 2 seconds.");
        navigate("/login");
      }, 2000);
    }
    return;
  };
  useEffect(() => {
    checkUser();
  }, []);
  function checkAllInputs() {
    var res = 1;

    if (nameOfProduct == "") {
      setNameOfProductError("*required");
      res = 0;
    }
    if (moq1 == "") {
      setMoq1error("*required");
      res = 0;
    }
    if (ppp2 == "") {
      setppp1error("*required");
      res = 0;
    }
    if (moq2 == "") {
      setMoq2error("*required");
      res = 0;
    }
    if (ppp2 == "") {
      setppp2error("*required");
      res = 0;
    }
    if (ppp3 == "") {
      ppp3 = "0";
    }
    if (moq3 == "") {
      moq3 = "0";
    }

    return res;
  }
  const handleSubmitButton = async () => {
    const toProceed = checkAllInputs();
    if (toProceed == 0) return;
    // console.log(phoneNumber);
    const response = await fetch(
      "https://globalvistarbackend-production.up.railway.app/user/addProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameOfProduct,
          moq1,
          ppp2,
          moq2,
          ppp2,
          ppp3,
          moq3,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      navigate("/productListing/2");
    }
    localStorage.setItem("pName", nameOfProduct);
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="popUpWrapper">
          <div className="popup">
            user not logged in
            <br />
            Please log-in
          </div>
        </div>
      )}
      <div className="otp-login">
        <h2 className="gv-logo">
          <span className="global">Global</span>{" "}
          <span className="vistar">Vistar</span>
        </h2>
        <div className="error">{nameOfProductError}</div>
        <h4 className="otp-login-title">Add Product</h4>
        <div className="product-card">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              textAlign: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Name of Product"
              variant="outlined"
              value={nameOfProduct}
              sx={{
                minWidth: "95%",
              }}
              onChange={(e) => setNameOfProduct(e.target.value)}
            />
            <br />
            Add your 2-3 MOQs with the Respective Price for Per Piece. The image
            below is an example. (२-३ की जानकारी उनके प्रति पीस कीमत के साथ
            लिखिए. निचे दिए गए उदाहरण को देखे:)
            <img src={moqImg} alt="image of moq" width={"95%"} />
            <br />
            <div className="Moq123">
              <div className="moq1">
                <TextField
                  id="standard-basic"
                  label="MoQ 1"
                  variant="outlined"
                  value={moq1}
                  onChange={(e) => setMoq1(e.target.value)}
                />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
                  <img src={ricon} alt="" className="rupeeIcon" />
                  <TextField
                    id="input-with-sx"
                    label="Price Per piece- MoQ 1"
                    value={ppp1}
                    onChange={(e) => setppp1(e.target.value)}
                    variant="standard"
                  />
                </Box>
              </div>
              <br />
              <br />
              <div className="moq2">
                <span className="errorMsg">{moq2error}</span>
                <TextField
                  id="outlined-basic"
                  label="MoQ 2"
                  variant="outlined"
                  value={moq2}
                  onChange={(e) => setMoq2(e.target.value)}
                />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <span className="errorMsg">{ppp2error}</span>
                  <img src={ricon} alt="" className="rupeeIcon" />
                  <TextField
                    id="input-with-sx"
                    label="Price Per piece- MoQ 2"
                    value={ppp2}
                    onChange={(e) => setppp2(e.target.value)}
                    variant="standard"
                  />
                </Box>
              </div>
              <br />
              <br />
              <div className="moq3">
                <TextField
                  id="outlined-basic"
                  label="MoQ 3"
                  variant="outlined"
                  value={moq3}
                  onChange={(e) => setMoq3(e.target.value)}
                />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
                  <img src={ricon} alt="" className="rupeeIcon" />
                  <TextField
                    id="input-with-sx"
                    label="Price Per piece- MoQ 3"
                    value={ppp3}
                    onChange={(e) => setppp3(e.target.value)}
                    variant="standard"
                  />
                </Box>
              </div>
            </div>
          </Box>
          <hr />
          <div className="lastSubmit">
            <input
              class="btnn btn-primary StandardButtonSubmit"
              type="submit"
              value="Next"
              onClick={handleSubmitButton}
            ></input>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ProductListing;
