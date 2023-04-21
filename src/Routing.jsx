import React from 'react'
import App from "./App";
import BlogPage from "./BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategories from './ProductCategories';
import AboutUsPage from "./AboutUsPage";
import ExpandBlog1 from "./ExpandBlog1";
import ExpandBlog2 from "./ExpandBlog2";
import ExpandBlog3 from "./ExpandBlog3";
import Enquiry from "./Enquiry";

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
      </Routes>


    </BrowserRouter>
  )
}

export default Routing