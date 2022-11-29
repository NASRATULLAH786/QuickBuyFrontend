import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenPanty from './WomenPanty';
import womenPantyData from './womenPantyData';
export default function WomenPantyScreen() {
    return (
        <div>
            <div className="row center">
  {womenPantyData.wPanty.map((product)=>
   <WomenPanty key = {product._id} product ={product}></WomenPanty>
  )
  }
 </div>
        </div>
    )
}
