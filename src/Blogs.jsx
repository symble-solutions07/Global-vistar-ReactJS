import React from 'react'
import "./style.css"
import pic1 from "./images/blog-1.png";
import pic2 from "./images/blog-2.jpg";
import pic3 from "./images/blog-3.jpg";
import { margin } from '@mui/system';

function Blogs() {
  return (
    <section className="blog" id="blog">
        <div className="container">

          <p className="section-subtitle">News & Blogs</p>

          <h2 className="h2 section-title">Leatest News Feeds</h2>

        <ul className="blog-list has-scrollbar" style={{ width: "90rem",display:"flex", justifyContent: "space-around", marginLeft:"-8rem"}}>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src={pic1} alt="The Most Inspiring Interior Design Of 2021" className="w-100"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-content-top">

                    <ul className="card-meta-list">

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>By Global Vistar</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li>

                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">The Most Inspiring Food Manufacturer Of 2021</a>
                    </h3>

                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <ion-icon name="calendar"></ion-icon>

                      <time datetime="2022-27-04">Apr 27, 2022</time>
                    </div>

                    <a href="#" className="read-more-btn">Read More</a>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src={pic2} alt="Recent Commercial Real Estate Transactions" className="w-100"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-content-top">

                    <ul className="card-meta-list">

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>by: Admin</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li>

                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">Recent Chips MauufacturerTransactions</a>
                    </h3>

                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <ion-icon name="calendar"></ion-icon>

                      <time datetime="2022-27-04">Apr 27, 2022</time>
                    </div>

                    <a href="#" className="read-more-btn">Read More</a>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner">
                  <img src={pic3} alt="Renovating a Living Room? Experts Share Their Secrets"
                    className="w-100"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-content-top">

                    <ul className="card-meta-list">

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>by: Admin</span>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li>

                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">Looking for Distributors? Experts Share Their Secrets</a>
                    </h3>

                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <ion-icon name="calendar"></ion-icon>

                      <time datetime="2022-27-04">Apr 27, 2022</time>
                    </div>

                    <a href="#" className="read-more-btn">Read More</a>
                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Blogs