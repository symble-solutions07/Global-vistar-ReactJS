import {React,useState} from 'react'
import App from "./App";
import BlogPage from "./Components/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Components/AboutUsPage";
import ExpandBlog1 from "./Components/ExpandBlog1";
import ExpandBlog2 from "./Components/ExpandBlog2";
import ExpandBlog3 from "./Components/ExpandBlog3";
import OTPLogin from "./Components/OTPLogin";
import ProductListing from "./Components/productListing";
import ProductListing2 from "./Components/productListing2";
import Register from "./Components/Register";
import TermsAndCond from "./Components/TermsAndCond";
import AboutUs from './Components2/AboutUs/AboutUs';

function Routing() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newBlog1" element={<ExpandBlog1 />} />
        <Route path="/newBlog2" element={<ExpandBlog2 />} />
        <Route path="/newBlog3" element={<ExpandBlog3 />} />
        <Route path="/login" element={<OTPLogin />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/productListing/2" element={<ProductListing2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms&cond" element={<TermsAndCond />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing