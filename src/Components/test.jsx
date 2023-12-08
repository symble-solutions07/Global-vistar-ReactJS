import React, { useState } from "react";

const Test = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      )}
      {/* <div className="error">{STError}</div>
      <b> Storage Type</b>
      <RadioGroup aria-labelledby="Storage" aria-required name="Storage">
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
                */}
    </div>
  );
};

export default Test;
