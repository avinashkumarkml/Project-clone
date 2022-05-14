import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

 const Addtocart = () => {
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://project-clone1.herokuapp.com/cart").then((res) => {
      setData(res.data);
    })
  },[])


  return (
    <div>
      {data.map((e)=>{
            return <div key={e.id} style={{border: 'solid',width:"80%",margin: 'auto',height:"250px", display:"flex", marginBottom:"20px", marginTop:"20px"}}>
            <img src={e.img} alt="image" width="30%" height = "100%" />
            <div style={{width:"400px"}}>
              <br /><br />
              <h3>{e.name}</h3>
              <h3>Prcie: {e.price}</h3>
            </div>
           </div>
      })}
      {data.length!==0 ? <button style={{border:"solid",marginLeft:"40%",width:"300px"}} onClick={() => navigate("/Checkout")} className='btn btn-outline-primary my-5'>Checkout</button> : <h1 style={{margin:"100px"}}>Your Cart is Empty</h1>}
    </div>
  )
}

export default Addtocart
