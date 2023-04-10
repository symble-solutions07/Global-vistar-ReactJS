import React from "react";
import "./style.css";
import pic from "./images/hero-banner.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import "./HeroSection.css";
// import homePic from "./images/Untitled design 1.png";
import HeroBackGround from "./images/Website Image.png";
import SearchIcon from "@mui/icons-material/Search";

import { createStyles, rem, Select, TextInput } from "@mantine/core";



  const useStyles = createStyles((theme) => ({
    root: {
      position: "relative",
    },

    input: {
      height: rem(54),
      paddingTop: rem(18),
      border: "1px solid black",
      width: "250px",
      
    },

    label: {
      // position: "absolute",
      pointerEvents: "none",
      fontSize: theme.fontSizes.xm,
      paddingLeft: theme.spacing.sm,
      paddingTop: `calc(${theme.spacing.sl} / 2)`,
      zIndex: 1,
    },
  }));



function HeroSection() {

  const { classes } = useStyles();

  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container">
        <div className="hero-content">
          
          <h2 className="h1 hero-title" style={{ color:"red"}}>
            Connecting Manufacturers and Distributors <br />
            <span className="header-text">Faster and Better!</span>
          </h2>
          <p className="hero-text" style={{ }}>
            A Platform to Expand Your Product Market Reach with the Right
            Distributors.
          </p>
        </div>
        {/* <figure className="hero-banner">
          <img src={homePic} alt="Modern house model" className="w-100" />
          
        </figure> */}
        <div className="search-item-section">
          <Select
            mt="md"
            withinPortal
            data={["Food", "Groceries", "Toys", "Agro"]}
            // placeholder="Pick one"
            label="Categories"
            classNames={classes}
          />
          <Select
            mt="md"
            withinPortal
            data={["Food", "Groceries", "Toys", "Agro"]}
            // placeholder="Pick one"
            label="Sub-Categories"
            classNames={classes}
          />
          <SearchIcon
            className="search-icon"
            style={{
              fontSize: "45px",
              // marginLeft: "1rem",
              // marginTop: "-1.5rem",
              // marginTop:"2rem",
              // border: "1px solid black",
            }}
          />
        </div>
      </div>
      <div className="buttons-hero-section">
        <button className="btn" style={{ marginRight: "5px" }}>
          For Manufacturers
        </button>
        <br />
        <button className="btn">For Distributors</button>
      </div>
    </section>
  );
}

export default HeroSection;
