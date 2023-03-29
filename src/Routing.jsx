import React from 'react'
import App from "./App";
import BlogPage from "./BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/BlogPage" element={<BlogPage/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing