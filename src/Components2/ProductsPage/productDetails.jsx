// import "./productDetails.css";
import ProductDetailsComponent from "./productDetailsComponent";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState([]);
  console.log(productID);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://globalvistarbackend-production.up.railway.app/user//ProductDetails/" +
            productID,
          // "http://localhost:3001/user/ProductDetails/" + productID
        );
        const data = await response.json();
        console.log(data);
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductDetailsComponent
      title={product.title}
      productimg1={product.image1}
      moq1={product.minOrderQuantity}
      moq1cost={product.price}
      moq2={product.minOrderQuantity2}
      moq2cost={product.price2}
      moq3={product.minOrderQuantity3}
      moq3cost={product.price3}
      moq={product.minOrderQuantity}
      supplier={product.supplier}
      locations={product.locations}
      marketexp={[product.marketexp]}
      shipping={product.shipping}
      returns={product.returns}
      leadtime={product.ProductionLead}
      type={product.Type}
      packaging={product.packaging}
      storage={product.StorageType}
      shelflife={product.shelflife}
      manufacturingplace={product.manufacturingplace}
      supplyability={product.SupplyCapacityPerMonth}
      samples={product.samples}
      manufacturing={product.manufacturing}
    ></ProductDetailsComponent>
  );
}
