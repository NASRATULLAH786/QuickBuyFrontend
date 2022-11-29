import React from 'react';
import '../../../Screens/HomeScreen.css'
import womenRingData from './womenRingData';
import WomenRings from './WomenRings';
export default function WomenRingsScreen() {
    return (
        <div>
            <div className="row center">
  {womenRingData.wRing.map((product)=>
   <WomenRings key = {product._id} product ={product}></WomenRings>
  )
  }
 </div>
        </div>
    )
}
