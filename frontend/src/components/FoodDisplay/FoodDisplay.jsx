import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodIteam from '../Fooditem/FoodIteam'
function FoodDisplay(category) {
 const {food_list}=useContext(StoreContext)
// console.log(category);
  return (
    <div className='Food-Display' id="Food-Display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                console.log(item.category)
                console.log(category)
                if (category==="All"||category===item.category) {
                
                }
                 return <FoodIteam key={index} id={item._id}  name={item.name}description={item.description} Price={item.Price}
                image={item.image}rating={item.rating_starts}
                />   
            })}
        </div>
    </div>
  )
}

export default FoodDisplay