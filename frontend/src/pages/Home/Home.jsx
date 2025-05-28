import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Appdownlod from '../../components/Appdownlod/Appdownlod';

function Home() {
    const [category, setCategory] = useState("All");
    
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <Appdownlod/>
        </div>
    )
}

export default Home