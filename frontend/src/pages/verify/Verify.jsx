import React from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
const url=" https://food-delivery-backend-sydz.onrender.com";

    

function verify() {
    const[params,setParams]=useSearchParams();
    const success=params.get("success");
    const orderId=params.get("orderId");
    const navigate=useNavigate();

    async function verifypayment(req,res) {
        const responce=await axios.post(url+"/api/order/verify",{success,orderId});
        if(responce.data.success){
            navigate("/myorders")  
        }
        else{
            navigate("/");
        }
    }


    useEffect(()=>{
       verifypayment();
    },[])
    
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default verify;
