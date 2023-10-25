import './herosection.css'
import CardImg1 from "./fmcg-bg.png"
import CardImg2 from "./fmcg-bg2.png"

function HeroSection() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

  return (
    <div className='hero-section'>
        <div className="hero-section-left">
            <h1 className="hero-title1">Connecting FMCG Sellers and Distributors.</h1>
            <p className='hero-p1'>We provide a cutting-edge platform that facilitates efficient connections between FMCG sellers and distributors. Our technology streamlines the entire supply chain process, enabling sellers to reach a wider market and distributors to source products seamlessly.</p>
            <p className='search-bar-p'>Search from a Wide Variety of Products</p>
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            <input type="text" placeholder='Search for a Product, Category or Service' className='search-bar' />
        </div>

        <div className="hero-section-right">
            <div className="hero-section-card">
                <h1 className='hero-section-card-title'>Looking to Expand your Product Market Reach?</h1>
                <button className='hero-section-card-btn' onClick={() => openInNewTab("https://docs.google.com/forms/d/e/1FAIpQLSciD5NwlybLK058JZyyC4TYjYhHt0-6-4AQarBsb0tt1CduDg/viewform?usp=sf_link")}>List your Product</button>
                <img src={CardImg1} alt="" className='card-img' />
            </div>

            <div className="hero-section-card">
                <h1 className='hero-section-card-title'>Looking for Products?</h1>
                <a href="#featured-products"><button className='hero-section-card-btn'>Explore Now</button></a>
                <img src={CardImg2} alt="" className='card-img' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
