import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {addItem,delItem} from "../Redux/action/action"

const Productdetails = () => {
  const store = useSelector((store) => store.addItems)
  const {id} = useParams();
  const[cartBtn,setcartBtn]=useState("Add To Cart")
  const [data, setData]=useState([])
  useEffect(()=>{
    axios.get(`https://project-clone1.herokuapp.com/products/${id}`).then((res)=>{
      setData(res.data)
  }).catch((e)=>{
    console.log(e)
  })
  },[])


  const dispatch = useDispatch()
    const handleCart=(data)=>{
       if(cartBtn === 'Add To Cart'){
          dispatch(addItem(data))
          setcartBtn("Remove from cart")
          console.log(store)
       }
       else{
        dispatch(delItem(data))
          setcartBtn("Add To Cart")
       }
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
                         <button onClick={()=>handleCart(data)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                     </div>
            </div>
        </div>
  )
}

export default Productdetails