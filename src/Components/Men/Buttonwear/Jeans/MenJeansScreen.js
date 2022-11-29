import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenJeans from './MenJeans';
import MenJeansData from './MenJeansData';


export default function MenJeansScreen() {
    return (
        <div>
            <div className="row center">
  {MenJeansData.Jeans.map((product)=>
   <MenJeans key = {product._id} product ={product}></MenJeans>
  )
  }
 </div>
        </div>
    )
}
