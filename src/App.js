import "./App.css";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Components2/Navbar/Navbar"
import HeroSection from "./Components2/Hero Section/HeroSection";
import Services from "./Components2/Servicess/Services"
import Categories from './Components2/Categories/Categories';
import FeaturedProduct from './Components2/Featured Products/FeaturedProduct';
import Register from './Components2/Register/Register';
import CTA from './Components2/CTA/CTA';
import Footer from './Components2/Footer/Footer';
import Blogsection from "./Components2/Blogs Section/Blogsection";
import Simplesteps from "./Components2/Simplesteps/Simplesteps";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Simplesteps />
      <Services />
      <Categories />
      <FeaturedProduct />
      <Register />
      <CTA />
      <Blogsection />
      <Footer />
    </div>
  );
}

export default App;
