import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenTrackPant from './WomenTrackPant';
import womenTrackPantData from './womenTrackPantData';
export default function WomenTrackPantScreen() {
    return (
        <div>
            <div className="row center">
  {womenTrackPantData.WTrackPants.map((product)=>
   <WomenTrackPant key = {product._id} product ={product}></WomenTrackPant>
  )
  }
 </div>
        </div>
    )
}
