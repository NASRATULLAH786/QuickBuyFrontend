import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenSlippers from './MenSlippers';
import MenSlippersData from './MenSlippersData';

export default function MenSlippersScreen() {
    return (
        <div>
            <div className="row center">
  {MenSlippersData.Slippers.map((product)=>
   <MenSlippers key = {product._id} product ={product}></MenSlippers>
  )
  }
 </div>
        </div>
    )
}
