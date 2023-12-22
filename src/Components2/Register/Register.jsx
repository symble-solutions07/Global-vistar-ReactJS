import './register.css'
import Img1 from "./1.webp"
import Img2 from "./2.webp"
import Img3 from "./3.webp"
import Img4 from "./4.webp"
import Img5 from "./5.webp"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


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

        <div className="carousel-flex">
          <div className="carousel-div">
            <Splide
              options={{
                autoplay: true,
                type: 'loop',
                interval: 2000,
                arrows: false,
                perPage: 1,
                pauseOnHover : false,
                resetProgress: false,
                rewind: true,
                pagination: false
              }}
              aria-label="My Favorite Images"
              className='splide-carousel'
            >
              <SplideSlide>
                <img className='carousel-banner' src={Img1} alt="Image 1"/>
              </SplideSlide>
              <SplideSlide>
                <img className='carousel-banner' src={Img2} alt="Image 2"/>
              </SplideSlide>
              <SplideSlide>
                <img className='carousel-banner' src={Img3} alt="Image 2"/>
              </SplideSlide>
              <SplideSlide>
                <img className='carousel-banner' src={Img4} alt="Image 2"/>
              </SplideSlide>
              <SplideSlide>
                <img className='carousel-banner' src={Img5} alt="Image 2"/>
              </SplideSlide>
            </Splide>
          </div>
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
