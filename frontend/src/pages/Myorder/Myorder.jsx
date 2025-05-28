import React from 'react'
import './Myorder.css'
import axios from 'axios';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useState } from 'react';
import { useEffect } from 'react';
const url="https://food-delivery-backend-sydz.onrender.com";

function Myorder() {
    const {token}=useContext(StoreContext);
    const [data,setData]=useState([])

    async function fetchorder(req,res) {
        const responce=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(responce.data.data);
      
        
    }

  useEffect(()=>{
    if(token){
       fetchorder(); 
    }
  },[token])


  return (
    <div className='Myorder'>
        <h2>My Order</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-orders-order">
                      <img src="https://imgs.search.brave.com/1mNg33ED9cax0PBY9DEgsoKdbL8toYqUOrDDSgUDVA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbk52MlBF/SEw1Q1BHWHdteWM1/emZSUVB4ZExlVDR5/cDVnaXFpa25OcUNV/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011ZG1W/amRHVmxlbmt1L1ky/OXRMM041YzNSbGJT/OXkvWlhOdmRYSmpa/WE12ZEdoMS9iV0p1/WVdsc2N5OHdNalF2/L01qZzJMekEwT0M5/emJXRnMvYkM5allY/SmtZbTloY21RdC9j/R0ZqYTJsdVp5MXla/V0ZrL2VTMTBieTFr/Wld4cGRtVnkvTFhC/dVp5NXdibWM.jpeg" alt="" />
                      <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                          return item.name+" x"+item.quantity
                        }
                        else{
                          return item.name+"x"+item.quantity+" , "
                        }
                      })}</p>
                      <p>${order.amount}.00</p>
                      <p>Items:{order.items.length}</p>
                      <p><span>&#x25cf;</span><b>{order.status}</b></p>
                      <button onClick={fetchorder}>Track order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Myorder;
