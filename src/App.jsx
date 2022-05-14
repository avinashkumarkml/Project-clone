import React from 'react'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import {Login} from './components/Login'
import Footer from './components/Footer'
import Wishlist from './components/Wishlist'
import Addtocart from './components/Addtocart'
import Admin from './components/Admin'
import {Product} from "./components/Product/Product"
import Productdetails from './components/Productdetails'
import Checkout from './components/Checkout'
import "./App.css"



export const App = () => {
  return (
    <div>
    <Navbar />
    
     <Routes>
       <Route path="/Signup" element={<Signup />} ></Route>
       <Route path="/Login" element={<Login />} ></Route>
       <Route path="/" element={<Home />} ></Route>
       <Route path="/Home" element={<Home />} ></Route>
       <Route path="/Wishlist" element={<Home />} ></Route>
       <Route path="/Admin" element={<Admin />} ></Route>
       <Route path="/Addtocart" element={<Addtocart />} ></Route>
       <Route path="/Footer" element={<Footer />} ></Route>
       <Route path="/:id" element={<Productdetails />} ></Route>
       <Route path="/Checkout" element={<Checkout />} ></Route>
       <Route path="/Product" element={<Product />} />
     </Routes>
     <Footer/>
   </div>
 )
}

export default App