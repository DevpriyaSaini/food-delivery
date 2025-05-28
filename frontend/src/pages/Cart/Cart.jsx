import React, { useContext } from 'react'
import'./Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom';
const url="https://food-delivery-backend-sydz.onrender.com";
function Cart() {
  const{cartItems,food_list,removeCart,gettotal}=useContext(StoreContext)
  return (

    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p> Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
         if(cartItems[item._id]>0) {
          return (
            <div className="cart-item-title card-items-item">
              <img src={url+"/Image/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.Price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.Price*cartItems[item._id]}</p>
              <p onClick={()=>removeCart(item._id)}>x</p>
            </div>
          )
         }
        })}
      </div>

      <div className="maindiv">
      <div className="cart-bottom">
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
        <Link to={'/order'}><button>Proceed to checkout</button></Link>
       </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code,Enter it here</p>
          <div className="card-promocode-input">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Cart
