import React, { useState, useEffect } from "react";
import FeaturedProductCard from "./ProductCard"; // adjust the path based on your project structure
import "./productsPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductsPage = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       const fetchProducts = async () => {
         try {
           const response = await fetch(
             "http://localhost:3001/user/allProducts",
            //  "https://globalvistarbackend-production.up.railway.app/user/allProducts",
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

     
    //  console.log(products[0]._id)
  return (
    <>
      <Navbar />
      <h1 className="products-page-title">Explore All Products</h1>
      <div className="productsWrapper">
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
      <Footer />
    </>
  );
};

export default ProductsPage;
