import React from "react";
import "./style.css";
import pic1 from "./images/blog-1.png";
import pic2 from "./images/blog-2.jpg";
import pic3 from "./images/blog-3.jpg";
import "./Blogpage.css";
import author from "./images/author.jpg";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";


function BlogPage() {
  return (
    <section className="blog-page" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>

        <h2 className="h2 section-title">Business News</h2>

        <div className="blog-navbar">
          <ul className="navbar-list-blogs">
            <li className="list-item-navbar">Trending</li>
            <li className="list-item-navbar">Recently Added</li>
            <li className="list-item-navbar">Most Read</li>
          </ul>
        </div>

        <ul
          className="blog-list has-scrollbar"
          style={{
            width: "90rem",
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "-8rem",
          }}
        >
          <li className="col-sm">
            <div class="card">
              <div class="card__header">
                <img src={pic1} class="card__image" width="600" />
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Technology</span>
                <h4>What's new in 2022 Tech</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <div style={{ display: "flex" }}>
                    <img src={author} alt="user__image" class="user__image" />
                    <div class="user__info">
                      <h5 className="author-name">Jane Doe</h5>
                      <small>2h ago</small>
                    </div>
                  </div>

                  <OpenInFullIcon className="expand-icon" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="card">
              <div class="card__header">
                <img src={pic2} class="card__image" width="600" />
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Technology</span>
                <h4>What's new in 2022 Tech</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <div style={{ display: "flex" }}>
                    <img src={author} alt="user__image" class="user__image" />
                    <div class="user__info">
                      <h5 className="author-name">Jane Doe</h5>
                      <small>2h ago</small>
                    </div>
                  </div>

                  <OpenInFullIcon className="expand-icon" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="card">
              <div class="card__header">
                <img src={pic3} class="card__image" width="600" />
              </div>
              <div class="card__body">
                <span class="tag tag-red">Technology</span>
                <h4>What's new in 2022 Tech</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="user">
                  <div style={{ display: "flex" }}>
                    <img src={author} alt="user__image" class="user__image" />
                    <div class="user__info">
                      <h5 className="author-name">Jane Doe</h5>
                      <small>2h ago</small>
                    </div>
                  </div>

                  <OpenInFullIcon className="expand-icon" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BlogPage;
