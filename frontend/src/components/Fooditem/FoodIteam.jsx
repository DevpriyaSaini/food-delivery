import React, { useContext, useState } from 'react'
import './FoodIteam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../Context/StoreContext';
const url=" http://localhost:4000";
function FoodIteam({id,name,Price,description,image ,rating}) {
    // const [counter, setCounter]=useState(0);
    const {cartItems,addToCart,removeCart}=useContext(StoreContext);
  return (
    <div className='Food-Iteam'>
        <div className="foot-item-con">
            <img src={url+"/Image/"+image} alt="" className="food-item-img" />
           {!cartItems[id]? (
  <FontAwesomeIcon 
    icon={faPlus} 
    onClick={() =>addToCart(id) }
    className="add"
  />
) : (
  <div className="counter-group">
    <FontAwesomeIcon 
      icon={faMinus}
      onClick={() =>removeCart(id)}
      className="counter-icon"
    />
    <span className="counter-value">{cartItems[id]}</span>
    <FontAwesomeIcon 
      icon={faPlus} 
      onClick={() => addToCart(id)}
      className="counter-icon"
    />
  </div>
)}
        </div>
        <div className="fooditem-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
            <img src="https://imgs.search.brave.com/dJP5QFL_gsI86WlSSbDka7CaFUSjZ_An94Hxz-CGduM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQwLzA2Lzky/LzM2MF9GXzU0MDA2/OTIxNl9BaXFtR1kw/bkV0OEloRmdqSW9D/RzExSVZRRzNJb29i/Sy5qcGc" alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${Price}</p>
        </div>
    </div>
  )
}

export default FoodIteam