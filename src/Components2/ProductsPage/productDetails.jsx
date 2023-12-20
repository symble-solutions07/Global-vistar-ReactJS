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
          "http://localhost:3001/user/ProductDetails/" + productID
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
      productimg1={product.productimg1}
      moq1={product.moq1}
      moq1cost={product.moq1cost}
      moq2={product.moq2}
      moq2cost={product.moq2cost}
      moq3={product.moq3}
      moq3cost={product.moq3cost}
      moq={product.moq}
      supplier={product.supplier}
      locations={product.locations}
      marketexp={[product.marketexp]}
      shipping={product.shipping}
      returns={product.returns}
      leadtime={product.leadtime}
      type={product.type}
      packaging={product.packaging}
      storage={product.storage}
      shelflife={product.shelflife}
      manufacturingplace={product.manufacturingplace}
      supplyability={product.supplyability}
      samples={product.samples}
      manufacturing={product.manufacturing}
    ></ProductDetailsComponent>
  );
}
