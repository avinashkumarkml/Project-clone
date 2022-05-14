import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Productdetails = () => {
  const prod = useParams();
  const [data, setData]=useState([])
  useEffect(()=>{
    axios.get(`https://project-clone1.herokuapp.com/products/${prod.id}`).then((res)=>{
      setData(res.data)
      console.log(res.data)
     
  }).catch((e)=>{
    console.log(e)
  })
  },[])

  function handleCart(data){
    axios.post("https://project-clone1.herokuapp.com/cart",data).then((res) => {
      console.log(data);
    })
  }


  return (
        <div className="container my-5 py-1" >
            <div className="row">
                     <div className="col-md-6 d-flex justify-content-center mmx-auto product">
                         <img src={data.img} alt="" height="400px"  />
                     </div>   
                     <div className="col-md-6 d-flex flex-column justify-cuntent-center">
                         <h1 className='display-5 fw-bold' >{data.name}</h1>
                         <hr />
                         <h2 className='my-4' >Rs - {data.price}</h2>
                         <button onClick={()=>handleCart(data)} className='btn btn-outline-primary my-5'>Add To Cart</button>
                     </div>
            </div>
        </div>
  )
}

export default Productdetails