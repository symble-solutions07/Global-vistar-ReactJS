import './categories.css'
import BakeryProducts from "./Images/bakery-products.webp"
import Beverages from "./Images/beverages.webp"
import Chocolates from "./Images/chocolates.webp"
import DairyProducts from "./Images/dairy-products.webp"
import Grains from "./Images/grains.webp"
import ReadyToCook from "./Images/ready-to-cook.webp"
import Snacks from "./Images/snacks.webp"
import Frozen from "./Images/Frozen Products .webp"


export default function Categories() {
  return (
    <div className='categories'>
      <h1 className='categories-title'>Trending Categories</h1>
      <div className="categories-flex">
        <div className="categories-card">
            <img src={BakeryProducts} alt="" className='categories-img bakery-product-img' />
            <p className="categories-card-p">Bakery Products</p>
        </div>
        <div className="categories-card">
            <img src={Beverages} alt="" className='categories-img beverages-img' />
            <p className="categories-card-p">Beverages</p>
        </div>
        <div className="categories-card">
            <img src={Chocolates} alt="" className='categories-img chocolates-img' />
            <p className="categories-card-p">Chocolates</p>
        </div>
        <div className="categories-card">
            <img src={DairyProducts} alt="" className='categories-img dairy-products' />
            <p className="categories-card-p">Dairy Products</p>
        </div>
        <div className="categories-card">
            <img src={Grains} alt="" className='categories-img grains-img' />
            <p className="categories-card-p">Whole Grains</p>
        </div>
        <div className="categories-card">
            <img src={ReadyToCook} alt="" className='categories-img ready-to-cook-img' />
            <p className="categories-card-p">Ready-To-Cook</p>
        </div>
        <div className="categories-card snacks-card">
            <img src={Snacks} alt="" className='categories-img snacks-img' />
            <p className="categories-card-p">Snacks</p>
        </div>
        <div className="categories-card snacks-card">
            <img src={Frozen} alt="" className='categories-img frozen-img' />
            <p className="categories-card-p">Frozen Products</p>
        </div>
      </div>
    </div>
  )
}
