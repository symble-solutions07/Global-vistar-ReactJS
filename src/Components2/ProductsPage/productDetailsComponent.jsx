
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./productdetails.css";

export default function ProductDetails(props) {
  return (
    <div className='productpage'>
      <Navbar />
      <div className="product-flex">
        <div className="productPage-card">
          <div className="left">
            <div id="carouselExampleIndicators" class="carousel slide">
              {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className='productimg' src={props.productimg1} alt="" />
                </div>
                <div className="carousel-item">
                  <img className='productimg' src={props.productimg2} alt="" />
                </div>
                <div className="carousel-item">
                  <img className='productimg' src={props.productimg3} alt="" />
                </div>
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>

          <div className="right">
            <h2 className='product-title'>{props.title} <br /> <span className='popular'>Popular</span> </h2>
            <p className="product-p margin">Margin: 20% - 30%</p>

            <div className="pieces">
              <div className="pieces-item">
                <p className="pieces-p">{props.moq1}</p>
                <p className="pieces-cost">{props.moq1cost}</p>
              </div>
              <div className="pieces-item">
                <p className="pieces-p">{props.moq2}</p>
                <p className="pieces-cost">{props.moq2cost}</p>
              </div>
              <div className="pieces-item">
                <p className="pieces-p">{props.moq3}</p>
                <p className="pieces-cost">{props.moq3cost}</p>
              </div>
            </div>

            <p className="product-p">MOQ: <span className="bold">{props.moq}</span></p>
            <p className="product-p">Looking for locations:  <span className='bold'>{props.locations}</span></p>
            <p className="product-p">Supplier: <span className='bold'>{props.supplier}</span></p>
            <p className="product-p">Years of market expirience: <span className='bold'>{props.marketexp}</span></p>

            <div className="purchase-details">
              <h2 className='purchase-details-title'>Purchase details</h2>
              <div className="purchase-details-flex">
                <p className="p1">Shipping:</p>
                <p className="p2">{props.shipping}</p>
              </div>
              <div className="purchase-details-flex">
                <p className="p1">Payments:</p>
                <p className="p2">Enjoy encrypted and secure payments.</p>
              </div>
              <div className="purchase-details-flex">
                <p className="p1">Returns & refunds:</p>
                <p className="p2">{props.returns}</p>
              </div>
            </div>
          </div>
          <div className="product-sidebar">
            <p className="sidebar-p1">The minimum order quantity is {props.moq}</p>
            <p className="sidebar-p2">{props.moq} from <span className="price">{props.moq1}</span></p>
            <p className="sidebar-p3">Lead time: <span className="price">{props.leadtime}</span></p>
            <p className="sidebar-p3">Shipping: <span className="price">{props.shipping}</span></p>
            <p className="contact-supplier-btn">Contact supplier</p>
          </div>
          
        </div>

        
      </div>

      <h2 className='product-details-title'>Product details</h2>
      <div className="product-details">
        <div className="description1">
          <h2 className="overview-title">Description</h2>
          <div className="description-flex">
            <p className="p1 description-p1">Product type:</p>
            <p className="p2 description-p2">{props.type}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Packaging material:</p>
            <p className="p2 description-p2">{props.packaging}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Storage type:</p>
            <p className="p2 description-p2">{props.storage}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Shelf life:</p>
            <p className="p2 description-p2">{props.shelflife}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Place of Manufacturing:</p>
            <p className="p2 description-p2">{props.manufacturingplace}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Supply Ability Per Month:</p>
            <p className="p2 description-p2">{props.supplyability}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Samples:</p>
            <p className="p2 description-p2">{props.samples}</p>
          </div>
          <div className="description-flex">
            <p className="p1 description-p1">Third party manufacturing / white labeling:</p>
            <p className="p2 description-p2">{props.manufacturing}</p>
          </div>
        </div>
      </div>

      <div className="company-details">
        <h2 className="company-details-title">Company details</h2>
        <h2 className="overview-title">Overview</h2>
        <p className="overview-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint asperiores distinctio alias. Reprehenderit, rem. Dolor quas eius doloremque sit repellat temporibus sint ducimus id ab! Hic minima sequi nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quia unde. Blanditiis libero quos ex sapiente odit! Eaque officiis laudantium odit quaerat accusantium voluptas facilis inventore rerum porro soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab at eum earum animi deleniti quod quisquam itaque quidem aspernatur quas mollitia odit fugit et architecto iusto illo, quia ullam!</p>
        <br />
        <h2 className="overview-title">Manufacturing facilities</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore obcaecati laboriosam nisi eius quam autem, totam velit ratione aut deleniti adipisci perspiciatis aspernatur quo eos sed odio in facilis. Temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi qui, odit corrupti repudiandae dolore est reprehenderit, exercitationem, voluptates voluptate accusantium consequuntur id temporibus facere nemo quod ea. Odio, veniam reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nihil sit eum ipsum tempore commodi tempora aperiam consectetur sequi dicta, necessitatibus ab molestiae qui quae ducimus dolorum nam quidem a.</p>
        <br />
        <h2 className="overview-title">Certifications</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit mollitia iste optio autem nemo reiciendis quos fuga vitae voluptatum sint. Nesciunt totam quisquam fugit alias excepturi voluptatem pariatur obcaecati facilis!</p>
        <br />
      </div>
      <Footer />
    </div>
  )
}


