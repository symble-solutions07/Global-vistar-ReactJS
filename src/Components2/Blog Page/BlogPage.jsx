import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './blog-page.css'
import BlogImg1 from "./Images/Blog 1 (1).png"
import BlogImg2 from "./Images/Blog 2 (1).png"
import BlogImg3 from "./Images/Blog 3(1).png"
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <div className='blog-page'>
        <Navbar />
        <div className="blog-page-content">
        <h1 className='blog-page-title'>Explore All Blogs</h1>
        <p className="blog-page-subtitle">Recent Blogs</p>
        <div className="blog-page-grid">
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
        <Footer />
    </div>
  )
}

export default BlogPage
