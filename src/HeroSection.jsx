import React from "react";
import "./style.css";
import pic from "./images/hero-banner.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./HeroSection.css";
import homePic from "./images/Untitled design 1.png";
import SearchIcon from "@mui/icons-material/Search";



function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            Connecting Manufacturers and Distributors <br />
            Faster and Better!
          </h2>
          <p className="hero-text">
            A Platform to Expand Your Product Market Reach with the Right
            Distributors.
          </p>
          <div style={{ display: "flex" }}>
            <button className="btn" style={{ marginRight: "5px" }}>
              For Manufacturers
            </button>
            <br />
            <button className="btn">For Distributors</button>
          </div>
        </div>
        <figure className="hero-banner">
          <img src={homePic} alt="Modern house model" className="w-100" />
        </figure>
      </div>
      <div
        className="search-item-section"
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          marginTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <FormControl sx={{ mt: -3, minWidth: 400 }} className="search-category">
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Food</MenuItem>
            <MenuItem value={20}>Toys</MenuItem>
            <MenuItem value={30}>Stationary</MenuItem>
            <MenuItem value={40}>Hardware</MenuItem>
            <MenuItem value={50}>Dairy</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
        <FormControl
          sx={{ mt: -3, minWidth: 400 }}
          style={{ marginLeft: "5px" }}
          className="search-2"
        >
          <InputLabel id="demo-simple-select-helper-label">
            Sub-Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Sub-Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Food</MenuItem>
            <MenuItem value={20}>Toys</MenuItem>
            <MenuItem value={30}>Stationary</MenuItem>
            <MenuItem value={40}>Hardware</MenuItem>
            <MenuItem value={50}>Dairy</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
        <SearchIcon
          className="search-icon"
          style={{
            fontSize: "45px",
            marginLeft: "1rem",
            marginTop: "-1.5rem",
            // border: "1px solid black",
            
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
