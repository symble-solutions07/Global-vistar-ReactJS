import './categories.css'
import BakeryProducts from "./Images/bakery-products.png"
import Beverages from "./Images/beverages.png"
import Chocolates from "./Images/chocolates.png"
import DairyProducts from "./Images/dairy-products.png"
import Grains from "./Images/grains.png"
import Hygiene from "./Images/hygiene.png"
import ReadyToCook from "./Images/ready-to-cook.png"
import Snacks from "./Images/snacks.png"
import Frozen from "./Images/Frozen Products .png"


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
