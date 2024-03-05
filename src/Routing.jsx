import { React } from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Components/AboutUsPage";
import ExpandBlog1 from "./Components/ExpandBlog1";
import ExpandBlog2 from "./Components/ExpandBlog2";
import ExpandBlog3 from "./Components/ExpandBlog3";
import OTPLogin from "./Components/OTPLogin";
import Register from "./Components/Register";
import TermsAndCond from "./Components/TermsAndCond";
import AboutUs from "./Components2/AboutUs/AboutUs";
import Upload from "./Components2/ListingForm/upload";
// import Enquiry from "./Components/enquiry";
import ProductsPage from "./Components2/ProductsPage/productsPage";
import ProductDetails from "./Components2/ProductsPage/productDetails";
import ProductListingForm from "./Components2/ProductListingForm/addProducts";
import AboutManufacturer from "./Components2/ProductListingForm/AboutManufacturer";
import CompanyDetails from "./Components2/ProductListingForm/CompanyDetails";
import ProductSuccess from "./Components2/ProductListingForm/ProductSuccess";
import BlogPage from "./Components2/Blog Page/BlogPage";
// import Test from "./Components/test";
// import Loading from "./Components2/loadingScreen";
// import ProductDetails from './Components2/ProductsPage/productDetails';
import Blog4 from "./Components2/Blog Page/Blogs/Blog4";
import Dashboard from "./Components2/Dashboard/Dashboard";
import PrivacyPolicy from "./Components2/CompanyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components2/CompanyPolicy/TermsAndConditions";
import ContactUs from "./Components2/CompanyPolicy/ContactUs";
import Gvplisting from "./Components2/GVP Listing Form/Gvplisting";
import RetailerListing from "./Components2/Retailer Listing Form/RetailerListing";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newBlog1" element={<ExpandBlog1 />} />
        <Route path="/newBlog2" element={<ExpandBlog2 />} />
        <Route path="/newBlog3" element={<ExpandBlog3 />} />
        <Route path="/login" element={<OTPLogin />} />
        <Route path="/addProducts" element={<ProductListingForm />} />
        <Route path="/addManufacturer" element={<AboutManufacturer />} />
        <Route path="/CompanyDetails" element={<CompanyDetails />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Products/:productID" element={<ProductDetails />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/Enquiry" element={<Enquiry />} /> */}
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/ProductSuccess" element={<ProductSuccess />} />
        <Route path="/userdashboard" element={<Dashboard />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy /> } />
        <Route path="/termsandconditions" element={<TermsAndConditions /> } />
        <Route path="/contactus" element={<ContactUs /> } />
        <Route path="/gvplisting" element={<Gvplisting /> } />
        <Route path="/retailerlisting" element={<RetailerListing /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
