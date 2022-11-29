import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenJeans from './WomenJeans';
import womenJeansData from './womenJeansData';
export default function WomenJeansScreen() {
    return (
        <div>
            <div className="row center">
  {womenJeansData.WJeans.map((product)=>
   <WomenJeans key = {product._id} product ={product}></WomenJeans>
  )
  }
 </div>
        </div>
    )
}
