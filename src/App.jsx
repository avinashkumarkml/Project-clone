import React from 'react'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import {SignUp} from './components/Signup'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import {Login} from './components/Login'
import Footer from './components/Footer'
import Addtocart from './components/Addtocart'
import Admin from './components/Admin'
import {Product} from "./components/Product/Product"
import {Payment} from "./components/Payment"
import Productdetails from './components/Productdetails'
import Checkout from './components/Checkout'
import {useState} from "react";
import "./App.css"



export const App = () => {
  const [log,setLog] = useState(false);
  const [count,setCount] = useState(false);
  if(count === false){
    var arr = [];
    localStorage.setItem("auth",JSON.stringify(arr));
  }
  return (
    <>
    <Navbar log={log} setLog={setLog} />
    
     <Routes>
       <Route path="/Signup" element={<SignUp setCount={setCount} />} ></Route>
       <Route path="/Login" element={<Login setLog= {setLog}/>} ></Route>
       <Route path="/" element={<Home />} ></Route>
       <Route path="/Admin" element={<Admin />} ></Route>
       <Route path="/Addtocart" element={<Addtocart />} ></Route>
       <Route path="/Footer" element={<Footer />} ></Route>
       <Route path="/product/:id" element={<Productdetails />} ></Route>
       <Route path="/Checkout" element={<Checkout />} ></Route>
       <Route path="/Product" element={<Product />} />
       <Route path="/payment" element={<Payment />} />
     </Routes>
     
     <Footer/>
   </>
 )
}

export default App