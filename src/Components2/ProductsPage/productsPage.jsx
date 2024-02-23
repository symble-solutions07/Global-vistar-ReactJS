import React, { useState, useEffect } from "react";
import FeaturedProductCard from "./ProductCard"; // adjust the path based on your project structure
import "./productsPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Skeleton from "./Skeleton";
import Slider from '@mui/material/Slider';
import FilterIcon from './Images/filter.svg'
import CrossIcon from './Images/x.svg'

const ProductsPage = () => {
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const fetchProducts = async () => {
         try {
           const response = await fetch(
            //  "http://localhost:3001/user/allProducts",
             "https://globalvistarbackend-production.up.railway.app/user/allProducts",
             {
               method: "GET",
               headers: {
                 authorization: "Bearer " + localStorage.getItem("token"),
               },
             }
           ); // Replace with your backend endpoint
           const data = await response.json();
           console.log(data.products);
           setProducts(data.products);
           setLoading(false);
         } catch (error) {
           console.error("Error fetching products: ", error);
         }
       };

       fetchProducts();
     }, []);

     
    //  console.log(products[0]._id)

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleFilterPanel = () => {
      setIsOpen(!isOpen);
    };
    
  return (

    <>
      <Navbar />
      <h1 className="products-page-title">Explore All Products</h1>
      
      {/* Mobile Sidebar */}
      {/* <button className="filter-button" onClick={toggleFilterPanel}>
          Filter
          <img className="filter-icon" src={FilterIcon} alt="" />
      </button>

      <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
        
        <div className="panel-content">
          
          <p className="filter-title">Filters</p>
            
            <div className="filter-features">
              <p className="features-title">Seller Features</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">GV Verified Supplier</p>
              </div>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Popular</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Margin</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">0 - 20%</p>
              </div>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">20 - 40%</p>
              </div>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">40% & above</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Samples</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Available</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Third Party Manufacturing</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Available</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Price</p>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
            </div>

            <div className="filter-features">
              <p className="features-title">MOQ</p>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
            </div>

            <div className="filter-features">
              <p className="features-title">Shipping</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Available</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Shelf Life</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Less than 3 months</p>
              </div>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Greater than 3 months</p>
              </div>
            </div>

            <div className="filter-features">
              <p className="features-title">Certifications</p>
              <div className="filter-flex">
                <input type="checkbox" className="filter-input" />
                <p className="features-p">Available</p>
              </div>
            </div>

        </div>
        <button className="close-button" onClick={toggleFilterPanel}>
          <img className="close-icon" src={CrossIcon} alt="" />
        </button>
     </div> */}
      
      <div className="products-page-flex">
        {/* <div className="products-page-sidebar">
          <p className="filter-title">Filters</p>
          
          <div className="filter-features">
            <p className="features-title">Seller Features</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">GV Verified Supplier</p>
            </div>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Popular</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Margin</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">0 - 20%</p>
            </div>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">20 - 40%</p>
            </div>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">40% & above</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Samples</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Available</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Third Party Manufacturing</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Available</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Price</p>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                marks
                min={10}
                max={110}
              />
          </div>

          <div className="filter-features">
            <p className="features-title">MOQ</p>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                marks
                min={10}
                max={110}
              />
          </div>

          <div className="filter-features">
            <p className="features-title">Shipping</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Available</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Shelf Life</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Less than 3 months</p>
            </div>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Greater than 3 months</p>
            </div>
          </div>

          <div className="filter-features">
            <p className="features-title">Certifications</p>
            <div className="filter-flex">
              <input type="checkbox" className="filter-input" />
              <p className="features-p">Available</p>
            </div>
          </div>
        </div> */}

        <div className="productsWrapper">
          { loading ? (
            <div className="skeleton-flex">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            products.map((product, index) => (
              <FeaturedProductCard
                keyy={product._id}
                key={product._id}
                imageLink={product.image1}
                title={product.title}
                price={product.price2}
                moq={product.minOrderQuantity}
                margin={product.expectedMargin}
                owner={product.owner}
                // handleSendEnquiry={handleSendEnquiry}
              />
            ))
          )}
        </div>
      </div>

      <div className="productsWrapper mobileWrapper">
          { loading ? (
            <div className="skeleton-flex">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            products.map((product, index) => (
              <FeaturedProductCard
                keyy={product._id}
                key={product._id}
                imageLink={product.image1}
                title={product.title}
                price={product.price2}
                moq={product.minOrderQuantity}
                margin={product.expectedMargin}
                owner={product.owner}
                // handleSendEnquiry={handleSendEnquiry}
              />
            ))
          )}
        </div>
      
      <Footer />
    </>
  );
};

export default ProductsPage;
