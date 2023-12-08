import React, { useState, useEffect } from "react";
import "./addProducts.css";
import { useNavigate } from "react-router-dom";
import Loading from "../loadingScreen";
import axios from "axios";

const ProductListingFormFinal = () => {
  const [numProducts, setNumProducts] = useState(1);
  const [productList, setProductList] = useState([{}]);
  const [ErrorList, setErrorList] = useState([{}]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successfulUploads, setSuccessfulUploads] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (successfulUploads == productList.length) navigate("/");
  }, [successfulUploads]);
  useEffect(() => {
    let value = 1;
    setProductList(Array.from({ length: value }, () => ({})));
    setErrorList(Array.from({ length: 5 }, () => ({})));
    // console.log(productList)
    renderProductForm();
  }, []);
  const handleUpload = (e) => {
    const res = validateProduct(currentIndex);
    if (res == 0) return;
    setIsLoading(true);
    productList.map((product, index) => {
      const formdata = new FormData();
      for (const key in product) {
        formdata.append(key, product[key]);
      }
      formdata.append("userNumber", localStorage.getItem("pNumber"));

      const phoneNumber = localStorage.getItem("pNumber");
      console.log(formdata);
      // formdata.append("file", file);
      formdata.append("phoneNumber", phoneNumber);
      axios
        .post(
          // "https://globalvistarbackend-production.up.railway.app/form/upload",
          "https://globalvistarbackend-production.up.railway.app/form/addProduct",
          formdata,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setSuccessfulUploads((prevCount) => prevCount + 1);
            if (successfulUploads == productList.length) {
              console.log("all products uploaded");
              navigate("/ProductSuccess");
            }
          }
          // navigate("Successfully")
        })
        .catch((err) => console.log(err));
    });
  };
  const handleNumProductsChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 5) value = 5;
    if (value < 1) value = 1;
    setNumProducts(value);
    setProductList(Array.from({ length: value }, () => ({})));
    setErrorList(Array.from({ length: value }, () => ({})));
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
  const handleMinOrderQuantity2Change = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      minOrderQuantity2: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleMinOrderQuantity3Change = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      minOrderQuantity3: e.target.value,
    };
    setProductList(newProductList);
  };

  const handlePriceChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = { ...newProductList[index], price: e.target.value };
    setProductList(newProductList);
  };
  const handlePrice2Change = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      price2: e.target.value,
    };
    setProductList(newProductList);
  };
  const handlePrice3Change = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      price3: e.target.value,
    };
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
  const handleTypeChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      Type: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleProductionLeadChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      ProductionLead: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleProductSizesChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      ProductSizes: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleStorageTypeChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      StorageType: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleProductShelfLifeChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      ProductShelfLife: e.target.value,
    };
    setProductList(newProductList);
  };
  const handleSupplyCapacityPerMonthChange = (e, index) => {
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      SupplyCapacityPerMonth: e.target.value,
    };
    setProductList(newProductList);
  };

  const handleImageUpload = (e, index) => {
    console.log("image got");
    const newProductList = [...productList];
    newProductList[index] = {
      ...newProductList[index],
      image: e.target.files[0],
    };
    setProductList(newProductList);
  };

  const handleNextClick = () => {
    const res = validateProduct(currentIndex);
    if (res == 0) return;
    if (currentIndex < numProducts - 1) {
      window.scrollTo({ top: 0, left: 0 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentIndex > 0) {
      window.scrollTo({ top: 0, left: 0 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  function validateProduct(index) {
    let isValid = true;
    const newErrorList = [...ErrorList];

    const product = productList[index];

    if (!product.name || product.name.trim() === "") {
      isValid = false;
      newErrorList[index].Productname = "Product Name is required.";
    }

    if (!product.image) {
      isValid = false;
      newErrorList[index].image = "Product Image is required.";
    }

    if (!product.Type || product.Type.trim() === "") {
      isValid = false;
      newErrorList[index].Type = "required.";
    }

    if (
      !product.ProductionLead ||
      isNaN(parseInt(product.ProductionLead, 10))
    ) {
      isValid = false;
      newErrorList[index].ProductionLead = "Must be a valid number.";
    }

    if (
      !product.minOrderQuantity ||
      isNaN(parseInt(product.minOrderQuantity, 10))
    ) {
      isValid = false;
      newErrorList[index].minOrderQuantity = "Must be a valid number.";
    }

    if (!product.price || isNaN(parseFloat(product.price))) {
      isValid = false;
      newErrorList[index].price = "Must be a valid number.";
    }

    if (
      !product.minOrderQuantity2 ||
      isNaN(parseInt(product.minOrderQuantity2, 10))
    ) {
      isValid = false;
      newErrorList[index].minOrderQuantity2 = "Must be a valid number.";
    }

    if (!product.price2 || isNaN(parseFloat(product.price2))) {
      isValid = false;
      newErrorList[index].price2 = "Must be a valid number.";
    }

    if (
      !product.minOrderQuantity3 ||
      isNaN(parseInt(product.minOrderQuantity3, 10))
    ) {
      isValid = false;
      newErrorList[index].minOrderQuantity3 = "Must be a valid number.";
    }

    if (!product.price3 || isNaN(parseFloat(product.price3))) {
      isValid = false;
      newErrorList[index].price3 = "Must be a valid number.";
    }

    if (!product.expectedMargin || isNaN(parseFloat(product.expectedMargin))) {
      isValid = false;
      newErrorList[index].expectedMargin = "Must be a valid number.";
    }

    if (!product.ProductSizes || product.ProductSizes.trim() === "") {
      isValid = false;
      newErrorList[index].ProductSizes = "Required.";
    }

    if (!product.StorageType || product.StorageType.trim() === "") {
      isValid = false;
      newErrorList[index].StorageType = "Storage Type is required.";
    }

    if (
      !product.ProductShelfLife ||
      isNaN(parseInt(product.ProductShelfLife, 10))
    ) {
      isValid = false;
      newErrorList[index].ProductShelfLife = "Must be a valid number.";
    }

    if (
      !product.SupplyCapacityPerMonth ||
      isNaN(parseInt(product.SupplyCapacityPerMonth, 10))
    ) {
      isValid = false;
      newErrorList[index].SupplyCapacityPerMonth = "Must be a valid number.";
    }

    setErrorList(newErrorList);
    return isValid;
  }
  const renderProductForm = () => {
    const product = productList[currentIndex];
    // console.log(product);
    return (
      <div className="product-card">
        {isLoading && <Loading />}
        <h2 className="card-title">Product {currentIndex + 1}</h2>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].Productname}
          </div>
          <label className="input-label">Product Name: </label>
          <input
            required
            type="text"
            value={product.name || ""}
            onChange={(e) => handleProductNameChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError"> {ErrorList[currentIndex].image}</div>
          <label className="input-label">Product Image:</label>
          <input
            accept="image/*"
            required
            type="file"
            onChange={(e) => {
              // setFile(e.target.files[0]);
              handleImageUpload(e, currentIndex);
            }}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError"> {ErrorList[currentIndex].Type}</div>
          <label className="input-label">Product Type:</label>
          <input
            required
            type="text"
            value={product.Type || ""}
            onChange={(e) => handleTypeChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].ProductionLead}
          </div>
          <label className="input-label">Production Lead Time in days:</label>
          <input
            required
            type="text"
            value={product.ProductionLead || ""}
            onChange={(e) => handleProductionLeadChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].minOrderQuantity}
          </div>
          <label className="input-label">Minimum Order Quantity 1:</label>
          <input
            required
            type="text"
            value={product.minOrderQuantity || ""}
            onChange={(e) => handleMinOrderQuantityChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError"> {ErrorList[currentIndex].price}</div>
          <label className="input-label">Price Per Piece (MOQ1):</label>
          <input
            required
            type="text"
            value={product.price || ""}
            onChange={(e) => handlePriceChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].minOrderQuantity2}
          </div>
          <label className="input-label">Minimum Order Quantity 2:</label>
          <input
            required
            type="text"
            value={product.minOrderQuantity2 || ""}
            onChange={(e) => handleMinOrderQuantity2Change(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError"> {ErrorList[currentIndex].price2}</div>
          <label className="input-label">Price Per Piece (MOQ2):</label>
          <input
            required
            type="text"
            value={product.price2 || ""}
            onChange={(e) => handlePrice2Change(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].minOrderQuantity3}
          </div>
          <label className="input-label">Minimum Order Quantity 3:</label>
          <input
            required
            type="text"
            value={product.minOrderQuantity3 || ""}
            onChange={(e) => handleMinOrderQuantity3Change(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError"> {ErrorList[currentIndex].price3}</div>
          <label className="input-label">Price Per Piece (MOQ3):</label>
          <input
            required
            type="text"
            value={product.price3 || ""}
            onChange={(e) => handlePrice3Change(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].expectedMargin}
          </div>
          <label className="input-label">Expected Margin:</label>
          <input
            required
            type="text"
            value={product.expectedMargin || ""}
            onChange={(e) => handleExpectedMarginChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].ProductSizes}
          </div>
          <label className="input-label"> Available Product Sizes:</label>
          <input
            required
            type="text"
            value={product.ProductSizes || ""}
            onChange={(e) => handleProductSizesChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].StorageType}
          </div>
          <label className="input-label"> Storage Type:</label>
          <input
            required
            type="text"
            value={product.StorageType || ""}
            onChange={(e) => handleStorageTypeChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].ProductShelfLife}
          </div>
          <label className="input-label"> Product Shelf Life:</label>
          <input
            required
            type="text"
            value={product.ProductShelfLife || ""}
            onChange={(e) => handleProductShelfLifeChange(e, currentIndex)}
            className="input-field"
          />
        </div>
        <div className="card-input">
          <div className="ProductError">
            {" "}
            {ErrorList[currentIndex].SupplyCapacityPerMonth}
          </div>
          <label className="input-label"> Supply Capacity Per Month:</label>
          <input
            required
            type="text"
            value={product.SupplyCapacityPerMonth || ""}
            onChange={(e) =>
              handleSupplyCapacityPerMonthChange(e, currentIndex)
            }
            className="input-field"
          />
        </div>

        <hr className="card-divider" />
      </div>
    );
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
      <h2 className="gv-logo" onClick={logoClick}>
        <span className="global">Global</span>{" "}
        <span className="vistar">Vistar</span>
      </h2>
      <div className="Productform-container">
        {currentIndex == 0 && (
          <>
            <label className="form-label">
              Number of Products to List (max 5):
            </label>
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
          </>
        )}

        {numProducts > 0 && renderProductForm()}

        {numProducts > 1 && (
          <div>
            <button
              onClick={() => {
                console.log(productList);
                handleBackClick();
              }}
              className="navigation-button"
            >
              Back
            </button>
            <button
              onClick={() => {
                console.log(productList);
                handleNextClick();
              }}
              className="navigation-button"
            >
              Next
            </button>
          </div>
        )}
        {numProducts == currentIndex + 1 && (
          <button
            onClick={() => {
              console.log(productList);
              handleUpload();
            }}
            className="submit-button"
          >
            Submit
          </button>
        )}
        {successfulUploads > 0 && <p>Products Uploaded: {successfulUploads}</p>}
      </div>
    </>
  );
};

export default ProductListingFormFinal;
