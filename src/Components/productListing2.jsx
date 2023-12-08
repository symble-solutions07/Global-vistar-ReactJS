
import React, { useState, useEffect } from "react";
import "./productListing2.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductListingFormFinal = () => {
  const [numProducts, setNumProducts] = useState(1);
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [file, setFile] = useState();
  useEffect(() => {
    let value = 1;
    setProductList(Array.from({ length: value }, () => ({})));
  }, []);
  const handleUpload = (e) => {
    productList.map((product) => {
      const formdata = new FormData();
      for (const key in product) {
        formdata.append(key, product[key]);
      }
      formdata.append("userNumber", localStorage.getItem("pNumber"));
      formdata.append("file", file);
      axios
        .post(
          "https://globalvistarbackend-production.up.railway.app/form/upload",
          formdata
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };
  const handleNumProductsChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 5) value = 5;
    if (value < 1) value = 1;
    setNumProducts(value);
    setProductList(Array.from({ length: value }, () => ({})));
  };

  const handleProductNameChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = { ...newProductList[index], name: e.target.value };
    setProductList(newProductList);
  };

  const handleMinOrderQuantityChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      minOrderQuantity: e.target.value,
    };
    setProductList(newProductList);
  };

  const handlePriceChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = { ...newProductList[index], price: e.target.value };
    setProductList(newProductList);
  };

  const handleExpectedMarginChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      expectedMargin: e.target.value,
    };
    setProductList(newProductList);
  };

  const handleImageUpload = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      image: e.target.files[0]?.name,
    };
    setProductList(newProductList);
  };

  const renderProductForms = () => {
    return productList.map((product, index) => (
      <div key={index} className="product-card">
        <h2 className="card-title">Product {index + 1}</h2>
        <div className="card-input">
          <label className="input-label">Product Name:</label>
          <input
            type="text"
            value={product.name || ""}
            onChange={(e) => handleProductNameChange(e, index)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <label className="input-label">Minimum Order Quantity:</label>
          <input
            type="text"
            value={product.minOrderQuantity || ""}
            onChange={(e) => handleMinOrderQuantityChange(e, index)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <label className="input-label">Price:</label>
          <input
            type="text"
            value={product.price || ""}
            onChange={(e) => handlePriceChange(e, index)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <label className="input-label">Expected Margin:</label>
          <input
            type="text"
            value={product.expectedMargin || ""}
            onChange={(e) => handleExpectedMarginChange(e, index)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <label className="input-label">Product Image:</label>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
              handleImageUpload(e, index);
            }}
            className="input-field"
          />
        </div>
        <hr className="card-divider" />
      </div>
    ));
  };
  const decreaseValue = () => {
    let value = numProducts - 1;
    if (value < 1) value = 1;
    setNumProducts(value);
    setProductList(Array.from({ length: value }, () => ({})));
  };
  const increaseValue = () => {
    let value = numProducts + 1;
    if (value > 5) value = 5;
    setNumProducts(value);
    setProductList(Array.from({ length: value }, () => ({})));
  };
  const logoClick = () => {
    navigate("/");
  };
  return (
    <>
      
        <div className="RightSideForm">
          <h4 className="otp-login-title">Add Products</h4>
          <div className="form-container">
            <label className="form-label">
              Number of Products to List (max 5):
            </label>
            <br />
            <br />
            <div
              class="valuee-button"
              id="decrease"
              onClick={() => {
                decreaseValue();
              }}
            >
              <span className="plusminus">-</span>
            </div>
            <input
              type="number"
              min="0"
              max="5"
              value={numProducts}
              onChange={handleNumProductsChange}
              className="products-number-input"
            />
            <div
              className="valuee-button"
              id="increase"
              onClick={() => {
                increaseValue();
              }}
            >
              <span className="plusminus">+</span>
            </div>
            {numProducts > 0 && renderProductForms()}
            <br />
            <button
              onClick={() => {
                console.log(productList);
                handleUpload();
              }}
              className="submit-button"
            >
              Submit
            </button>
          </div>
        </div>
    </>
  );
};

export default ProductListingFormFinal;
