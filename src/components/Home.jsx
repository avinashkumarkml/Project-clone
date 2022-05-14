import React from 'react'
import style from "./home.css"
import {Link}from "react-router-dom"

const Home = () => {
  return (
    <>
    <div  className="first-image">
      <Link to="/Product"><img className="firstimage1" src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/11/e-commerce-link-building-1520x800.png" alt="" /></Link>
      </div>
      <div className="kitchenware"><h2>KITCHEN WARE</h2></div>

      <div className="kitchen">
      <div  className="kitchenimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-768x602.jpg" alt="" /></Link>
      </div>

      <div  className="kitchenimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers-768x602.jpg" /></Link>
      </div>

      <div  className="kitchenimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-768x602.jpg" /></Link>
      </div>
      </div>

      <div className="kitchenware"><h2>FOOT WEAR</h2></div>
      <div  className="first-image">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg" alt="" /></Link>
      </div>

      <div className="footware">
      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-1-400x601.jpg" alt="" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-2-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-3-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="./Home"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-5-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-400x601.jpg" /></Link>
      </div>
      </div>

      <div className="kitchenware"><h2>SPICES</h2></div>

      <div className="footware">
      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-1-400x601.jpg" alt="" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-2-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-3-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-5-400x601.jpg" /></Link>
      </div>

      <div  className="footwareimage">
      <Link to="/Product"><img className="firstimage1" src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-4-400x601.jpg" /></Link>
      </div>
      </div>

    <div className="lastcontent">
      <h3>The Ultimate Domestic Online Shopping Experience Platform in India. Benefits of shopping on Uboric :
</h3>
    </div>
    
    <div  className="lastcontent3">
      <div>User-Friendly
</div>
      <div>Safe & Secure Shopping
</div>
      <div>Check Out Closely
</div>
      <div>Multiple Payment Options:
</div>
      <div>Order History:
</div>
    </div>




      
      
    </>
  )
}

export default Home