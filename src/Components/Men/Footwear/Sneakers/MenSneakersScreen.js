import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenSneakers from './MenSneakers';
import MenSneakersData from './MenSneakersData';

export default function MenSneakersScreen() {
    return (
        <div>
            <div className="row center">
  {MenSneakersData.Sneakers.map((product)=>
   <MenSneakers key = {product._id} product ={product}></MenSneakers>
  )
  }
 </div>
        </div>
    )
}
