import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenWatches from './WomenWatches';
import womenWatchesData from './womenWatchesData';
export default function WomenWatchesPantScreen() {
    return (
        <div>
            <div className="row center">
  {womenWatchesData.wWatches.map((product)=>
   <WomenWatches key = {product._id} product ={product}></WomenWatches>
  )
  }
 </div>
        </div>
    )
}
