import './blogsection.css'
import BlogImg1 from "./Images/Blog 1 (1).webp"
import BlogImg2 from "./Images/Blog 2 (1).webp"
import BlogImg3 from "./Images/Blog 3(1).webp"
import { Link } from "react-router-dom";

function Blogsection() {
  return (
    <div className='blog-section'>
      <div className="blog-title-section">
        <h1 className='blog-title'>Recent Blogs</h1>
        <Link to="/blogpage"><button className="blog-explore-btn">Explore All</button></Link>
      </div>
      
      <div className="blog-section-flex">
        <div className="blog-section-card">
            <img className='blog-section-img' src={BlogImg1} alt="" />
            <div className="blog-card-description">
                <p className="blog-category">Technology</p>
                <h1 className="blog-card-title">How To Create A Great Distribution Network For Your Product?</h1>
                <p className="blog-card-p">As a manufacturer, you know that having a great product is just the first step towards success.</p>
                <Link to="/newBlog1"><button className="blog-card-btn">Know More</button></Link>
            </div>
        </div>
        <div className="blog-section-card">
            <img className='blog-section-img' src={BlogImg2} alt="" />
            <div className="blog-card-description">
                <p className="blog-category">Technology</p>
                <h1 className="blog-card-title">10 Things Every Distributor Should Verify!</h1>
                <p className="blog-card-p">As a distributor, your success largely depends on the quality of the products you offer to your customers.</p>
                <Link to="/newBlog2"><button className="blog-card-btn">Know More</button></Link>
            </div>
        </div>
        <div className="blog-section-card">
            <img className='blog-section-img' src={BlogImg3} alt="" />
            <div className="blog-card-description">
                <p className="blog-category">Technology</p>
                <h1 className="blog-card-title">How Global Vistar Is Disrupting The Manufacturer-Distributor Landscape?</h1>
                <p className="blog-card-p">As a distributor, your success largely depends on the quality of the products you offer to your customers.</p>
                <Link to="/newBlog3"><button className="blog-card-btn">Know More</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogsection
