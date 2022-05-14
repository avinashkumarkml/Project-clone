import React from "react";
import style from "./navbar.css"
import {Link}from "react-router-dom"


function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (
    <>
    
    <header className="main-header">
      
      <a href="Home" className="brand-logo">
        <div className="brand-logo-name">
          <img src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="" height="30%" width="30%"/>
          
        </div>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          
          <li>
          <Link to="./Login">Sign In</Link>
          </li>
          <li>
          <Link to="/Product">Products</Link>
          </li>
          <li>
          <Link to="./Signup">Signup</Link>
          </li>
          <li>
          <Link to="./Home">Wishlist</Link>
          </li>
          <li>
          <Link to="./Home">Addtocart</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Navbar;
