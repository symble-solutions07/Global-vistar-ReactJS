import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Enquiry from "../../Components/enquiry";
// import "./productDetails.css";

export default function ProductDetails(props) {
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
        fetch("https://globalvistarbackend-production.up.railway.app/user/me", {
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

  return (
    <div className="productpage">
      <Enquiry open={open} handleClose={handleClose} />

      <Navbar />
      <div className="product-flex">
        <div className="productPage-card">
          <div className="left">
            <div id="carouselExampleIndicators" class="carousel slide">
              {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="productimg" src={props.productimg1} alt="" />
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
              {props.title} <br /> <span className="popular">Popular</span>{" "}
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
            </div>
          </div>
          <div className="product-sidebar">
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
            <p className="p2 description-p2">{props.manufacturingplace}</p>
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
        <p>
          <img src={props.fssaiImage} alt="" className="fssaiImage" />
        </p>
        <br />
      </div>
      <Footer />
    </div>
  );
}
