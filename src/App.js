import "./App.css";
import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./Components/About";
import ServiceSection from "./ServiceSection";
import ProductSection from "./ProductSection";
import Features from "./Features";
import Blogs from "./Components/Blogs.jsx";
import CTA from "./Components/CTA";
import Footer from "./Footer";
import AuthenticationForm from "./Components/AuthenticationForm";
import OurServices from "./OurServices";

function App() {
  // const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="App">
      <Header />
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
