import React, { useContext, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
const url="https://food-delivery-backend-sydz.onrender.com";

function PlaceOrder() {
  const Navigate= useNavigate();
  const{gettotal,token,food_list,cartItems}=useContext(StoreContext);
  const [data ,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })
  const onchangehandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

const placeorder= async(event)=>{
   event.preventDefault();
   
   try {
    let orderitem=[];
  food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo = { ...item, quantity: cartItems[item._id] };
      orderitem.push(itemInfo);
    }
  });
 let orderData={
  address:data,
  items:orderitem,
  amount:gettotal()+2,
 }
 const responce=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
 if(responce.data.success){
  const {session_url}=responce.data;
  window.location.replace(session_url);
 }
 else{
  alert("Error");
 }
    
   } catch (error) {
    res.json({msg:"error"});
    
   } 
}
 useEffect(() => {
    if (!token) {
      Navigate('/cart');
    } else if (gettotal?.() === 0) {
      Navigate('/cart');
    }
  }, [token]);


 
  return (
   <form onSubmit={placeorder} className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-feilds">
        <input required name='firstName' onChange={onchangehandler} value={data.firstName} type="text" placeholder='First name' />
        <input required name='lastName' onChange={onchangehandler} value={data.lastName} type="text" placeholder='Last name' />
      </div>
      <input required name='email' onChange={onchangehandler} value={data.email} type="email" placeholder='Email Adress' />
      <input required name='street' onChange={onchangehandler} value={data.street}type="street" placeholder='Street' />
      <div className="multi-feilds">
        <input required name='city' onChange={onchangehandler} value={data.city} type="text" placeholder='City' />
        <input required name='state' onChange={onchangehandler} value={data.state} type="text" placeholder='State' />
      </div>
      <div className="multi-feilds">
        <input required name='zipcode' onChange={onchangehandler} value={data.zipcode} type="text" placeholder='Pin code' />
        <input required name='country' onChange={onchangehandler} value={data.country} type="text" placeholder='country' />
      </div>
      <input required name='phone' onChange={onchangehandler} value={data.phone} type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right"></div>
       <div className="cart-bottoms">
        <div className="cart-total">
                  <h2>Cart Totals</h2>
                </div>
                <div className="cart-total-detail">
                  <p>Subtotal</p>
                  <p>{gettotal()}</p>
                  <hr />
                  <div className="cart-total-detail">
                    <p>Delivery Fee</p>
                    <p>${gettotal()===0?0:2}</p>
                  </div>
                  <hr/>
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${gettotal()===0?0:gettotal()+2}</b>
                  </div>
                </div>
                <button type="submit">Proceed to Payment</button>
      </div>
   </form>
  )
}

export default PlaceOrder
