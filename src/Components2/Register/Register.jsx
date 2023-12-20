import './register.css'
import Img1 from "./1.png"
import Img2 from "./2.png"
import Img3 from "./3.png"
import Img4 from "./4.png"
import Img5 from "./5.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from './Carousel'


export default function Register() {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

    const popupRedirect = () => {
        setPopupVisible(true);
        const timeout = setTimeout(() => {
          navigate("/login");
        }, 4000);
      };
    
      const handleProductListing = () => {
        if (localStorage.getItem("token") != null) {
          if (localStorage.getItem("token").length > 10) {
            fetch("https://globalvistarbackend-production.up.railway.app/user/me", {
              method: "GET",
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then((res) => {
              res.json().then((data) => {
                if (data.user) {
                  openInNewTab(
                    "https://docs.google.com/forms/d/e/1FAIpQLSciD5NwlybLK058JZyyC4TYjYhHt0-6-4AQarBsb0tt1CduDg/viewform?usp=sf_link"
                  );
                } else popupRedirect();
              });
            });
          } else popupRedirect();
        } else popupRedirect();
      };

  return (
    <>
    {isPopupVisible && (
        <div className="popUpWrapper">
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

    <div className='register'>
        <h1 className='register-title'>Why Register With Us?</h1>

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img className='carousel-img' src={Img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img className='carousel-img' src={Img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img className='carousel-img' src={Img3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img className='carousel-img' src={Img4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img className='carousel-img' src={Img5} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div style={{textAlign: 'center', marginBottom: '5rem'}}>
          <button className="list-your-product-btn" onClick={handleProductListing}>
              List your Product Now
          </button>
        </div>
        
    </div>
    </>
  )
}
