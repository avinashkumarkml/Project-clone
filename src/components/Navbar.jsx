import React from "react";
import "./navbar.css"
import {Link}from "react-router-dom"
import {useSelector} from "react-redux"



function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar({log,setLog}) {
  const state = useSelector((state)=>state.addItems)
 
  return (
    <div style={{marginBottom: "55px"}}>
    
    <header className="main-header">
      
      <Link to="/" className="brand-logo">
        <div className="brand-logo-name">
          <img src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="" height="30%" width="30%"/>
          
        </div>
      </Link>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          
          <li>
          <Link to="/Product">Products</Link>
          </li>
          <li>
          <Link to="/Addtocart">
          <span className="fa fa-shopping-cart me-1.log(state"></span>
            Cart :({state.length})</Link>
          </li>
          <li>
          {log ? 
          <button style={{backgroundColor:"#28739b",border:"none"}} onClick={() => setLog(false)}>Logout</button> : 
          <Link  to="/Signup">
            <span className="fa fa-sign-in me-1"></span>SignUp</Link>}
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
