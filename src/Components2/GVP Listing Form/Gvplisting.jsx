import './gvplisting.css'
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


function Gvplisting() {
  return (
    <>
      <div className="gvplisting">
        <div className="gvplisting-form">
          <h4 className='gvplisting-title'>Microdistributor Details</h4>
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
          <br />
          <button className="submit-button">
            Submit
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  )
}

export default Gvplisting
