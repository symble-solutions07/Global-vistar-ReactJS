import React from 'react'
import App from "./App";
import BlogPage from "./Components/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategories from './ProductCategories';
import AboutUsPage from "./Components/AboutUsPage";
import ExpandBlog1 from "./Components/ExpandBlog1";
import ExpandBlog2 from "./Components/ExpandBlog2";
import ExpandBlog3 from "./Components/ExpandBlog3";
import Enquiry from "./Components/Enquiry";
import AuthenticationForm from './Components/AuthenticationForm';
import RegisterDistributor from './RegisterDistributor';
import RegisterManufacturer from './RegisterManufacturer';
import Register from "./Components/Register";

function Routing() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/:id" element={<App/>} />
        <Route path="/BlogPage" element={<BlogPage/>} />
        <Route path="/ProductCategories" element={<ProductCategories/>} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/newBlog1" element={<ExpandBlog1/>} />
        <Route path="/newBlog2" element={<ExpandBlog2/>} />
        <Route path="/newBlog3" element={<ExpandBlog3/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/login" element={<AuthenticationForm/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registerDistributor" element={<RegisterDistributor/>} />
        <Route path="/registerManufacturer" element={<RegisterManufacturer/>} />
      </Routes>



    </BrowserRouter>
  )
}

export default Routing