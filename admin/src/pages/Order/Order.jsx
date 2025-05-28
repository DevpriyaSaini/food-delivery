import React from 'react'
import './Order.css';
import { useState } from 'react';
import axios from 'axios';
import {toast}from 'react-toastify'
import { useEffect } from 'react';
const url="https://food-delivery-backend-sydz.onrender.com";

function Order() {
  const [orders,setOrders]=useState([]);
   
  async function getorder(req,res) {
    const responce=await axios.get(url+"/api/order/list");
    if(responce.data){
    setOrders(responce.data.data);
    
    }
    else{
    toast.error("Error");
    }
  }


  async function statuschange(event,orderId) {

    
  const responce= await axios.post(url+"/api/order/status",{
    orderId,
    status:event.target.value
  })
  if(responce.data.success){
    await getorder();
  }
     else{
       alert("Failed to update order status. Please try again.");
     }
}


  useEffect(()=>{
    getorder();
  },[]);



  
  return (
    <div className='order'>
      <h3>Oreder page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="orderitem">
            <img src="https://imgs.search.brave.com/1mNg33ED9cax0PBY9DEgsoKdbL8toYqUOrDDSgUDVA8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbk52MlBF/SEw1Q1BHWHdteWM1/emZSUVB4ZExlVDR5/cDVnaXFpa25OcUNV/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011ZG1W/amRHVmxlbmt1L1ky/OXRMM041YzNSbGJT/OXkvWlhOdmRYSmpa/WE12ZEdoMS9iV0p1/WVdsc2N5OHdNalF2/L01qZzJMekEwT0M5/emJXRnMvYkM5allY/SmtZbTloY21RdC9j/R0ZqYTJsdVp5MXla/V0ZrL2VTMTBieTFr/Wld4cGRtVnkvTFhC/dVp5NXdibWM.jpeg" alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item,index)=>{
                   if(index===order.items.length-1){
                    return item.name+" x"+item.quantity
                   }
                   else{
                      return item.name+" x"+item.quantity+" ,"
                   }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName+" "+order.address.lastName}
              </p>
              <p className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.street+", "+order.address.zipcode}</p>
              </p>
              <p className='phonenumber'>{order.address.phone}</p>
              
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select  onChange={(event)=>statuschange(event, order._id)} value={order.status}>
              <option value="">Food Processing</option>
              <option value="Out for delivery"> Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
