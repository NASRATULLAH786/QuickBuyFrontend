import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenRings from './MenRings';
import MenRingsData from './MenRingsData';
export default function MenRingsScreen() {
    return (
        <div>
            <div className="row center">
  {MenRingsData.Rings.map((product)=>
   <MenRings key = {product._id} product ={product}></MenRings>
  )
  }
 </div>
        </div>
    )
}
