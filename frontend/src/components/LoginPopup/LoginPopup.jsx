import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
const url=" https://food-delivery-backend-sydz.onrender.com";
import axios from 'axios'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';



function LoginPopup({setShowLogin}) {
    const [curstaus,setCurstatus]=useState("Sign Up")
    const{setToken}=useContext(StoreContext)
    const [data,setData]=useState({
      name:"",
      email:"",
      pasaword:"",
    })
     function onchangehandler(event){
      const name=event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))

     }

     async function onlogin(event) {
      event.preventDefault();
      let newurl=url;
      if(curstaus==="Login"){
        newurl+="/api/user/login"
      }
      else{
        newurl+="/api/user/register"
      }
      const responce=await axios.post(newurl,data);
      if (responce.data.sucess) {
        setToken(responce.data.token);
        localStorage.setItem("token",responce.data.token);
        setShowLogin(false);
      }
      else{
        alert(responce.data.message);
      }

      
     }



  return (
    <div className='LoginPopup'>
       <form onSubmit={onlogin} action="" className="login-form-cont">
        <div className="login-pop-title">
            <h2>{curstaus}</h2>
            <img  onClick={()=>setShowLogin(false)} src="https://imgs.search.brave.com/WPv8cz8g2R5GHtirpQqI6aHX_FmLBWtvylvp9xzL-lk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L21pbWUtaWNvbi9j/cm9zcy0xOS5wbmc" alt="" />
        </div>
        <div className="login-pop-input">
            {curstaus==="Login"?<></>: <input name='name' onChange={onchangehandler} value={data.name} type="text" placeholder='Full name' required />}
           
            <input name='email' onChange={onchangehandler} value={data.email}type="text" placeholder='Email' required />
            <input name='password' onChange={onchangehandler} value={data.password} type="password" placeholder='Password' required />   
        </div>
        <button type='submit' >{curstaus==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condi">
            <input type="checkbox" required />
            <p>By Continuting ,i agree to the terms of use & privacy policy.</p>
        </div>
        {curstaus==="Login"? <p>Create a new account <span onClick={()=>setCurstatus("Sign Up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurstatus("Login")}>Login here</span></p>}
       
        
       </form>
    </div>
  )
}

export default LoginPopup
