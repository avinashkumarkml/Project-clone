import React from 'react'
import style from "./home.css"
import {Link}from "react-router-dom"
import { useNavigate } from "react-router-dom";



const Home = () => {
      
      const navigate=useNavigate()

  return (
    <>
    <div  className="first-image">
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className='hover' onClick={()=>{navigate("/Product")}} src="https://kaboodle.r.worldssl.net/images/remote/https_kaboodle.r.worldssl.net/uploads/article_images/1-KBAU-Hero-Banner-Update-Resize-H3.jpg?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645658178919" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img className='hover' onClick={()=>{navigate("/Product")}} src="https://kaboodle.r.worldssl.net/images/remote/https_kaboodle.r.worldssl.net/uploads/article_images/1-KBAU-Hero-Banner-Update-Resize-H6.jpg?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645658178919" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img className='hover' onClick={()=>{navigate("/Product")}} src="https://dazedimg-dazedgroup.netdna-ssl.com/644/azure/dazed-prod/1040/1/1041748.jpg?resize=1024,512" class="d-block w-100" alt="iphone" height="630px" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>          
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