import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Enquiry from "../../Components/enquiry/enquiry";
import UserIcon from "./Images/user.svg";
import CalenderIcon from "./Images/calendar.svg";
import MapIcon from "./Images/map-pin.svg";
import ArrowIcon from "./Images/arrow-right.svg";

// import "./productDetails.css";

export default function ProductDetails(props) {
  console.log(props);
  window.scrollTo(0, 0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const popupRedirect = () => {
    setPopupVisible(true);
    console.log("log in bro", isPopupVisible);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const handleSendEnquiry = () => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("https://globalvistarbackend.onrender.com/user/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            if (data.user) {
              // console.log(data.user.name + " enquired");
              handleOpen();
            } else popupRedirect();
          });
        });
      } else popupRedirect();
    } else popupRedirect();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="productpage">
      <Enquiry open={open} handleClose={handleClose} />

      <Navbar />
      <div className="product-flex">
        <div className="productPage-card">
          <div className="leftmostscreen">
            <div className="leftandright">
              <div className="left">
                <div id="carouselExampleIndicators" class="carousel slide">
                  {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div> */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="productimg"
                        src={props.productimg1}
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img className="productimg" src={props.image2} alt="" />
                    </div>
                    <div className="carousel-item">
                      <img className="productimg" src={props.image3} alt="" />
                    </div>
                  </div>
                  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>

              <div className="right">
                <h2 className="product-title">
                  {props.title} <span className="popular">Popular</span>
                </h2>
                <p className="product-p margin">{props.expectedmargin}</p>

                <div className="pieces">
                  <div className="pieces-item">
                    <p className="pieces-p">{props.moq1}</p>
                    <p className="pieces-cost">{props.moq1cost}</p>
                  </div>
                  <div className="pieces-item">
                    <p className="pieces-p">{props.moq2}</p>
                    <p className="pieces-cost">{props.moq2cost}</p>
                  </div>
                  <div className="pieces-item">
                    <p className="pieces-p">{props.moq3}</p>
                    <p className="pieces-cost">{props.moq3cost}</p>
                  </div>
                </div>

                <p className="product-p">
                  MOQ: <span className="bold">{props.moq}</span>
                </p>
                <p className="product-p">
                  Looking for locations:{" "}
                  <span className="bold">{props.locations}</span>
                </p>
                <p className="product-p">
                  Supplier: <span className="bold">{props.supplier}</span>
                </p>
                <p className="product-p">
                  Years of market experience:{" "}
                  <span className="bold">{props.marketexp}</span>
                </p>

                <div className="purchase-details">
                  <h2 className="purchase-details-title">Purchase details</h2>
                  <div className="purchase-details-flex">
                    <p className="p1">Shipping:</p>
                    <p className="p2">{props.shipping}</p>
                  </div>
                  <div className="purchase-details-flex">
                    <p className="p1">Payments:</p>
                    <p className="p2">Enjoy encrypted and secure payments.</p>
                  </div>
                  <div className="purchase-details-flex">
                    <p className="p1">Returns & refunds:</p>
                    <p className="p2">{props.returns}</p>
                  </div>
                  <div className="purchase-details-flex">
                    <p className="p1">Product Sizes:</p>
                    <p className="p2">{props.ProductSizes}</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="product-details-title">Product details</h2>
            <div className="product-details">
              <div className="description1">
                <h2 className="overview-title">Description</h2>
                <div className="description-flex">
                  <p className="p1 description-p1">Product type:</p>
                  <p className="p2 description-p2">{props.type}</p>
                </div>
                {/* <div className="description-flex">
                  <p className="p1 description-p1">Packaging material:</p>
                  <p className="p2 description-p2">{props.packaging}</p>
                </div> */}
                <div className="description-flex">
                  <p className="p1 description-p1">Storage type:</p>
                  <p className="p2 description-p2">{props.storage}</p>
                </div>
                <div className="description-flex">
                  <p className="p1 description-p1">Shelf life:</p>
                  <p className="p2 description-p2">{props.shelflife}</p>
                </div>
                <div className="description-flex">
                  <p className="p1 description-p1">Place of Manufacturing:</p>
                  <p className="p2 description-p2">
                    {props.manufacturingplace}
                  </p>
                </div>
                <div className="description-flex">
                  <p className="p1 description-p1">Supply Ability Per Month:</p>
                  <p className="p2 description-p2">{props.supplyability}</p>
                </div>
                <div className="description-flex">
                  <p className="p1 description-p1">Samples:</p>
                  <p className="p2 description-p2">{props.samples}</p>
                </div>
                <div className="description-flex">
                  <p className="p1 description-p1">
                    Third party manufacturing / white labeling:
                  </p>
                  <p className="p2 description-p2">{props.TPMWhiteLabelling}</p>
                </div>
              </div>
            </div>

            <div className="company-details">
              <h2 className="company-details-title">Company details</h2>
              <h2 className="overview-title">Overview</h2>
              <p className="overview-p">{props.about}</p>
              <br />
              <h2 className="overview-title">Manufacturing facilities</h2>
              <p>{props.manufacturingplace}</p>
              <br />
              <h2 className="overview-title">Certifications</h2>
              {/* <p>
                <img src={props.fssaiImage} alt="" className="fssaiImage" />
              </p> */}

              <div>
                <img
                  src={props.fssaiImage}
                  alt="Enlarged"
                  onClick={handleImageClick}
                  style={{ cursor: "pointer" }}
                  className="fssaiImage"
                />
                {isOpen && (
                  <div className="enlargedDiv" onClick={handleCloseClick}>
                    <img
                      src={props.fssaiImage}
                      alt="Enlarged"
                      onClick={handleImageClick}
                      className="enlargedFssaiImage"
                    />
                  </div>
                )}
              </div>
              <br />
            </div>
          </div>

          {/* <div className="product-sidebar">
            <p className="sidebar-p1">
              The minimum order quantity is {props.moq}
            </p>
            <p className="sidebar-p2">
              {props.moq} from <span className="price">{props.moq1}</span>
            </p>
            <p className="sidebar-p3">
              Lead time: <span className="price">{props.leadtime}</span>
            </p>
            <p className="sidebar-p3">
              Shipping: <span className="price">{props.shipping}</span>
            </p>
            <p
              className="contact-supplier-btn"
              onClick={() => {
                handleSendEnquiry();
                localStorage.setItem("ProductToEnquire", props.title);
              }}
            >
              Send Enquiry
            </p>
          </div> */}
          <div className="product-sidebar-sticky">
            <div className="new-product-sidebar">
              <p className="seller-details-title">Seller Details</p>
              <p className="business-name">{props.supplier}</p>
              <p className="gst-title">GST: {props.GST}</p>
              <div className="info-flex">
                <img src={UserIcon} alt="" className="info-icons" />
                <p className="info-p">{props.UserName}</p>
              </div>
              <div className="info-flex">
                <img src={CalenderIcon} alt="" className="info-icons" />
                <p className="info-p">Market Experience: {props.marketexp}</p>
              </div>
              <div className="info-flex">
                <img src={MapIcon} alt="" className="info-icons" />
                <p className="info-p">{props.manufacturingplace}</p>
              </div>
              {/* <div className="flex "> */}
              <div
                className="contact-supplier-btn inline w-[70%]"
                onClick={() => {
                  handleSendEnquiry();
                  localStorage.setItem("ProductToEnquire", props.title);
                }}
              >
                Send Enquiry
                <img src={ArrowIcon} alt="" className="arrow-right" />
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=91${props.UserNumber}&text=Hello%2C%20${props.UserName}%0AI%20found%20you%20on%20Global%20Vistar.%0A%0AI%20want%20to%20enquire%20about%20${props.title}.`}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="wha-icon"
                  fill="#00ff2a"
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 308 308"
                  xmlSpace="preserve"
                  stroke="#00ff2a"
                >
                  <g stroke-width="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <g id="XMLID_468_">
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                      ></path>
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Product details */}
      </div>

      <Footer />
    </div>
  );
}
