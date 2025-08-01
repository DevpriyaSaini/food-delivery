import React, { useContext } from 'react'
import'./Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom';
const url="https://food-delivery-backend-sydz.onrender.com";
function Cart() {
  const{cartItems,food_list,removeCart,gettotal}=useContext(StoreContext);
  if(!cartItems){
    return ;
  }
  return (
  <div className='cart'>
    <div className="cart-item">
      <div className="cart-item-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id} className="cart-item-title card-items-item">
              <img src={`${url}/Image/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.Price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.Price * cartItems[item._id]}</p>
              <p onClick={() => removeCart(item._id)} style={{ cursor: 'pointer' }}>x</p>
            </div>
          );
        }
        return null;
      })}
    </div>

    <div className="maindiv">
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-total-detail">
          <p>Subtotal</p>
          <p>${gettotal()}</p>
          <hr />
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${gettotal() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${gettotal() === 0 ? 0 : gettotal() + 2}</b>
          </div>
        </div>
        <Link to='/order'>
          <button>PROCEED TO CHECKOUT</button>
        </Link>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className="card-promocode-input">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Cart
