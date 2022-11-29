import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenBra from './WomenBra';
import womenBraData from './womenBraData';
export default function WomenBraScreen() {
    return (
        <div>
            <div className="row center">
  {womenBraData.Bra.map((product)=>
   <WomenBra key = {product._id} product ={product}></WomenBra>
  )
  }
 </div>
        </div>
    )
}
