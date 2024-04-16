import React, { useState, useEffect } from "react";
import FeaturedProductCard from "../ProductsPage/ProductCard";
import "./listings.css";

function Listings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          //  "http://localhost:3001/user/allProducts",
          "https://globalvistarbackend.onrender.com/user/allProducts",
          {
            method: "GET",
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        ); // Replace with your backend endpoint
        const data = await response.json();
        console.log(data.products[0].image1);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="listings">
      <div className="productsListingWrapper">
        {products.map((product, index) => (
          <FeaturedProductCard
            keyy={product._id}
            imageLink={product.image1}
            title={product.title}
            price={product.price2}
            moq={product.minOrderQuantity}
            margin={product.expectedMargin}
            // handleSendEnquiry={handleSendEnquiry}
          />
        ))}
      </div>
    </div>
  );
}
export default Listings;
