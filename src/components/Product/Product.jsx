
import React from 'react'
import { useState,useEffect } from 'react'
// import {Prod} from "./ProdutOne"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Productdetails from '../Productdetails'
import axios from "axios";
import "./product.css"


export const Product = () => {
  let x ;
   const [all,setAll] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("https://project-clone1.herokuapp.com/products").then((res) => {
      setAll(res.data)
    })
  },[])
   const handle = (e)=>{
     if(e.target.value == "low"){
        x = all.sort((a,b)=>{
         return a.price-b.price
       })
       setAll([...x])
     }
     else if(e.target.value == "high"){
      x = all.sort((a,b)=>{
       return b.price-a.price
     })
     setAll([...x])
   }
   }

  return (
   <div className="main"> 
   <div style={{margin:"80px"}}>
   <h3>Sort by price </h3>
      <select onChange={handle}>
        <option></option>
        <option value="low">Ascending </option>
        <option value="high">descending </option>
      </select>
   </div>
      <div className="product">
      
        {all.map((e)=>{
            return (
              <div style={{border: '1px solid grey',height:"400px"}} key={Math.random()}>
              <img style={{width:"100%"}} src={e.img} height="60%"/>
              <p>{e.name}</p>
              <p> {e.price} Rs</p>
              <Link to={`/product/${e.id}`} className="btn btn-outline-primary">Buy Now</Link>
              </div>
            )  
        })}
    </div>
      
      
    </div>

  )
}
