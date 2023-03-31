import React from 'react'
import App from "./App";
import BlogPage from "./BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategories from './ProductCategories';

function Routing() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/BlogPage" element={<BlogPage/>} />
        <Route path="/ProductCategories" element={<ProductCategories/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default Routing