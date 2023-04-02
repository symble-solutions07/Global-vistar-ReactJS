import React from 'react'
import App from "./App";
import BlogPage from "./BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategories from './ProductCategories';
import AboutUsPage from "./AboutUsPage";

function Routing() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/BlogPage" element={<BlogPage/>} />
        <Route path="/ProductCategories" element={<ProductCategories/>} />
        <Route path="/AboutUsPage" element={<AboutUsPage/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default Routing