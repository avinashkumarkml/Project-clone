
import React from 'react'
import { useState,useEffect } from 'react'
import {Prod} from "./ProdutOne"
import "./productOne.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Productdetails from '../Productdetails'
import axios from "axios";


export const Product = () => {
  let x ;
   const [all,setAll] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
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
   <h1>filter by price </h1>
      <select onChange={handle}>
        <option>------</option>
        <option value="low">Low to high </option>
        <option value="high">high to low </option>
      </select>
   </div>
      <Prod className="product">
      
        {all.map((e)=>{
            return <div key={Math.random()}>
            <img src={e.img} />
            <h3>{e.name}</h3>
           <h3> {e.price}</h3>
           <Link to={`/product/${e.id}`} className="btn btn-outline-primary">Buy Now</Link>
           </div>
        
        
        })}
    </Prod>
      
      
    </div>

  )
}
