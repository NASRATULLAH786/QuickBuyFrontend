import React from 'react';
import '../../../Screens/HomeScreen.css'
import womenJacketData from './womenJacketData';
import WomenJackets from './WomenJackets';
export default function WomenJacketsScreen() {
    return (
        <div>
            <div className="row center">
  {womenJacketData.jacket.map((product)=>
   <WomenJackets key = {product._id} product ={product}></WomenJackets>
  )
  }
 </div>
        </div>
    )
}
