import React from 'react';
import '../../../Screens/HomeScreen.css';
import WomenHeels from './WomenHeels';
import womenHeelsData from './womenHeelsData';
export default function WomenHeelsScreen() {
    return (
        <div>
            <div className="row center">
  {womenHeelsData.Heels.map((product)=>
   <WomenHeels key = {product._id} product ={product}></WomenHeels>
  )
  }
 </div>
        </div>
    )
}
