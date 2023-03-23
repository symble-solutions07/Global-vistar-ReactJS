
import './App.css';
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import ServiceSection from './ServiceSection';
import ProductSection from './ProductSection';
import Features from './Features';
import Blogs from './Blogs';
import CTA from './CTA';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <ServiceSection />
      <ProductSection />
      <Features />
      <Blogs />
      <CTA />
      <Footer/>

      
    </div>
  );
}

export default App;
