import "./featured-products.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Enquiry from "../../Components/enquiry";
import FeaturedProductCard from "../ProductsPage/ProductCard";

export default function FeaturedProduct() {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/user/featuredProducts",
          // "https://globalvistarbackend-production.up.railway.app/user/featuredProducts",
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
    <>
      {isPopupVisible && (
        <div className="popWrapper">
          <div className="popup">
            <b>Login Required.</b>
            <div className="popupText">
              You need to login to access this page.
            </div>
            <hr />
            <div className="popButtons">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ backgroundColor: "rgb(74,36,136)" }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* <Enquiry /> */}
      {/* {isEnquiryPopupVisible && <Enquiry />} */}
      {/* <button onClick={handleOpen}>Open Form</button> */}
    
        <h1 className="featured-products-title ">Featured Products</h1>
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
    </>
  );
}
