// import "./productDetails.css";
import ProductDetailsComponent from "./productDetailsComponent";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState({});
  // console.log(productID);
  useEffect(() => {
    console.log("reached here0");
    const fetchProducts = async () => {
      console.log("reached here1");
      try {
        console.log("reached here2");
        const response = await fetch(
          "https://globalvistarbackend-production.up.railway.app/user//ProductDetails/" +
            productID,
          // "http://localhost:3001/user/ProductDetails/" + productID
        );
        console.log("reached here3");
        const data = await response.json();
        console.log(data);
        const mergedObject = {
          ...data.combined.product,
          ...data.combined.companyDetails,
          ...data.combined.ManufacturerDetails,
        };
        setProduct(mergedObject);
        console.log(mergedObject);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);
  if (product == {}) {
    return <div>Loading...</div>;
  }

  if (product)
    return (
      <>
        <ProductDetailsComponent
          title={product.title}
          productimg1={product.image1}
          moq1={product.minOrderQuantity}
          moq1cost={product.price1}
          moq2={product.minOrderQuantity2}
          moq2cost={product.price2}
          moq3={product.minOrderQuantity3}
          moq3cost={product.price3}
          moq={product.minOrderQuantity}
          supplier={product.BusinessName}
          locations={product.DistributionLocations}
          marketexp={[product.YearPresence]}
          shipping={product.shipping}
          returns={product.RnR}
          leadtime={product.ProductionLead}
          type={product.Type}
          packaging={product.packaging}
          storage={product.StorageType}
          shelflife={product.ProductShelfLife}
          manufacturingplace={product.manufac}
          supplyability={product.SupplyCapacityPerMonth}
          samples={product.Sampling}
          manufacturing={product.manufacturing}
          about={product.AboutCompany}
          fssaiImage={product.fssaiImage}
        ></ProductDetailsComponent>
      </>
    );
}
