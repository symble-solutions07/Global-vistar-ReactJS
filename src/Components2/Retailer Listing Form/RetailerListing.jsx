import React from 'react'
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from '@mui/material';

function RetailerListing() {
  return (
    <div className="gvplisting">
        <div className="gvplisting-form">
          <h4 className='gvplisting-title'>Retailer Details</h4>
          <TextField
            id="gvp-textfields"
            name="GVPname"
            label="Full Name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="gvp-textfields"
            name="GVPage"
            label="Age"
            variant="outlined"
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>Gender</b>
          <RadioGroup
            required
            aria-labelledby="Gender"
            aria-required
            name="Gender"
            >
            <FormControlLabel
                value="1-2"
                control={<Radio />}
                label="Male"
            />
            <FormControlLabel
                value="3-5"
                control={<Radio />}
                label="Female"
            />
            <FormControlLabel
                value="6-10"
                control={<Radio />}
                label="Others"
            />
          </RadioGroup>
          <br />
          <br />
          <TextField
            id="gvp-textfields"
            name="GVPdob"
            label="Date of Birth"
            variant="outlined"
            helperText="DD/MM/YYYY"
          />
          <br />
          <TextField
            id="gvp-textfields"
            name="GVPaddress"
            label="Shop Address"
            variant="outlined"
            multiline
          />
          <br />
          <br />
          <TextField
            id="gvp-textfields"
            name="GVPaddress"
            label="Current Address"
            variant="outlined"
            multiline
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>Aadhar Card</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>PAN Card</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>Self Photo</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <h4 className='gvplisting-title'>Upload Any One Document</h4>
          <b style={{textAlign: "left"}}>Udyam Aadhar</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>GST Certificate</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <br />
          <br />
          <b style={{textAlign: "left"}}>FSSAI Registration</b>
          <br />
          <input
            accept="image/*"
            type="file"
          />
          <br />
          <button className="submit-button">
            Submit
          </button>
          <br />
          <br />
        </div>
    </div>
  )
}

export default RetailerListing
