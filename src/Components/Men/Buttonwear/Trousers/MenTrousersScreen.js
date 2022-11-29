import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenTrousers from './MenTrousers';
import MenTrousersData from './MenTrousersData';

export default function MenTrousersScreen() {
    return (
        <div>
            <div className="row center">
  {MenTrousersData.Trousers.map((product)=>
   <MenTrousers key = {product._id} product ={product}></MenTrousers>
  )
  }
 </div>
        </div>
    )
}
