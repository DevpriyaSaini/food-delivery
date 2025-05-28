import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assests'

function ExploreMenu({ category, setCategory }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setActiveCategory(categoryName);
  };

  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore our menu</h1> 
      <p className='expmenu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. 
        Our mission is to satisfy your cravings and elevate your dining experience, 
        one delicious meal at a time
      </p>
      <div className="expmenu-list">
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            className={`expmenu-list-item ${activeCategory === item.menu_name ? 'active' : ''}`}
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu