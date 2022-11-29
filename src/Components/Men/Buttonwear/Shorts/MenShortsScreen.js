import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenShorts from './MenShorts';
import MenShortsData from './MenShortsData';


export default function MenShortsScreen() {
    return (
        <div>
            <div className="row center">
  {MenShortsData.Shorts.map((product)=>
   <MenShorts key = {product._id} product ={product}></MenShorts>
  )
  }
 </div>
        </div>
    )
}
