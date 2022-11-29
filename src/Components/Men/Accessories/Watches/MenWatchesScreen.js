import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenWatches from './MenWatches';
import MenWatchesData from './MenwatchesData';
export default function MenWatchesScreen() {
    return (
        <div>
            <div className="row center">
  {MenWatchesData.Watches.map((product)=>
   <MenWatches key = {product._id} product ={product}></MenWatches>
  )
  }
 </div>
        </div>
    )
}
