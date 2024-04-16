import "./Enquiry.css";
import {
  Typography,
  TextField,
  Button,
  Modal,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import StatusPage from "./Status";
import { toast } from "react-toastify";
const Enquiry = ({ open, handleClose }) => {
  var ProductToEnquire = localStorage.getItem("ProductToEnquire");
  var UserNumber = "8600099959";
  var manufacturerNumber = localStorage.getItem("SendMessageTo");
  const [Quantity, setQuantity] = useState(20);
  const [unit, setUnit] = React.useState("kg");
  const [submitResponse, setSubmitResponse] = useState(0); //0 - not submitted , 1- submitted, waiting, 2- sucess, 3- Error.
  var [formData, setFormData] = React.useState({
    ProductName: ProductToEnquire,
    userName: UserNumber,
    PhoneNumber: UserNumber,
    quantity: Quantity,
    unit,
  });
  // const [Quantity, setQuantity] = React.useState("");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    ProductToEnquire = localStorage.getItem("ProductToEnquire");
    formData["ProductName"] = ProductToEnquire;
    formData["quantity"] = Quantity;
    console.log(formData);
    setSubmitResponse(1);
    fetch(
      "https://globalvistarbackend.onrender.com/enquire/product",
      // "http://localhost:3001/enquire/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSubmitResponse(2);
        console.log("Successhellooo:", data);
        toast.success(" Product Submitted Successfully!");
        setTimeout(handleClose, 2000); // close the modal after successful submission
        // let Message = `https://wa.me/91${manufacturerNumber}?text=Hello%2C%20I%20found%20you%20on%20Global%20Vistar%2C%0AI%20want%20to%20enquire%20for%20the%20${ProductToEnquire}%20%0ACan%20we%20have%20a%20chat%3F`;
        // console.log(Message);
        // window.open(Message, "_blank");
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitResponse(3);
      });
  };

  return (
    <div className="topWrapper">
      <div className="App">
        <Modal open={open} onClose={handleClose}>
          <div
            className="enquiryFormWrapper"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
            }}
          >
            <Typography variant="h5">Enquiry Form</Typography>
            <form onSubmit={handleSubmit} className="EnquiryPop-upForm">
              <TextField
                id="outlined-read-only-input"
                label="Product"
                defaultValue={ProductToEnquire}
                InputProps={{
                  readOnly: true,
                }}
                name="userName"
              />

              <br />
              <TextField
                id="outlined-read-only-input"
                label="User Contact Number"
                defaultValue="8600099959"
                InputProps={{
                  readOnly: true,
                }}
                name="PhoneNumber"
              />
              <br />
              <div className="QuantityUnit">
                <TextField
                  value={Quantity}
                  type="number"
                  label="Required Quantity"
                  variant="outlined"
                  name="quantity"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <br />
                <Select label="unit" value={unit} onChange={handleUnitChange}>
                  <MenuItem value={"kg"}>kg</MenuItem>
                  <MenuItem value={"boxes"}>boxes</MenuItem>
                  <MenuItem value={"Litres"}>Litres</MenuItem>
                </Select>
              </div>
              <Slider
                aria-label="Quantity"
                value={Quantity}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                Send
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Enquiry;
