
import './App.css';
import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import ServiceSection from './ServiceSection';
import ProductSection from './ProductSection';
import Features from './Features';
import Blogs from './Blogs';
import CTA from './CTA';
import Footer from "./Footer";
import AuthenticationForm from "./AuthenticationForm";
import OurServices from "./OurServices";

function App() {

  // const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="App">
      
      <Header  />
      <HeroSection />
      {/* <AuthenticationForm/> */}
      <About />
      <ServiceSection />
      <ProductSection />
      {/* <Features /> */}
      <OurServices />
      <Blogs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
