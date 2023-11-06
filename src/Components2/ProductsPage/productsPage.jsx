import React, { useState, useEffect } from "react";
import FeaturedProductCard from "./ProductCard"; // adjust the path based on your project structure
import "./productsPage.css";

const ProductsPage = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       const fetchProducts = async () => {
         try {
           const response = await fetch("http://example.com/api/products"); // Replace with your backend endpoint
           const data = await response.json();
           setProducts(data);
         } catch (error) {
           console.error("Error fetching products: ", error);
         }
       };

       fetchProducts();
     }, []);

  const handleSendEnquiry = () => {
    // handle send enquiry logic here
  };
  const productss = [
    {
      title: "Desi Rass",
      price: "---", // Replace this with the actual price
      moq: "10 boxes", // Replace this with the actual MOQ
    },
    {
      title: "eawrsedtrfgyjkuh",
      price: "---", // Replace this with the actual price
      moq: "1440 boxes", // Replace this with the actual MOQ
    },
    {
      title: "Desi jvhbkn",
      price: "---", // Replace this with the actual price
      moq: "140 boxes", // Replace this with the actual MOQ
    },
    {
      title: "Desi Rass",
      price: "---", // Replace this with the actual price
      moq: "140 boxes", // Replace this with the actual MOQ
    },
    // Add more products as needed
  ];
  return (
    <div className="productsWrapper">
      {productss.map((product, index) => (
        <FeaturedProductCard
          key={index}
          title={product.title}
          price={product.price}
          moq={product.moq}
          handleSendEnquiry={handleSendEnquiry}
        />
      ))}
      <FeaturedProductCard
        title="Desi Rass"
        price="---" // Replace this with the actual price
        moq="100 boxes" // Replace this with the actual MOQ
        handleSendEnquiry={handleSendEnquiry}
      />
    </div>
  );
};

export default ProductsPage;
