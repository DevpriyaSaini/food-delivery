import React, { useEffect, useState } from 'react'
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios'

function List() {
  const url="http://localhost:4000";
  const [list,setlist]=useState([]);
  async function fatchlist() {
    const responce=await axios.get(`${url}/api/food/list`);
  
    
    if(responce.data.sucess){
      setlist(responce.data.data);

    }
    else{
      toast.error("Error")
    }
  } 

 async function remove(foodId){
   const responce=await axios.post(`${url}/api/food/remove`,{id:foodId});
   await fatchlist();
   if(responce.data.sucess){
      setlist(responce.data.data);

    }
    else{
      toast.error("Error")
    }
}
  useEffect(()=>{
    fatchlist();
  })
  return (
    <div className='List add flex-col'>
      <p>All foods List</p>
       <div className="list-table">
        <div className="list-table-format title">
         <b>Image</b>
         <b>Name</b>
         <b>category</b>
         <b>Price</b>
         <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
           <div key={index} className='list-table-format'>
            <img src={`${url}/Image/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.Price}</p>
            <p onClick={()=>remove(item._id)}>x</p>
           </div>
          )
        })}
       </div>
    </div>
  )
}

export default List