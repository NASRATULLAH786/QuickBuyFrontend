import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenVests from './MenVests';
import MenVestsData from './MenVestsData';


export default function MenVestsScreen() {
    return (
        <div>
            <div className="row center">
  {MenVestsData.Vests.map((product)=>
   <MenVests key = {product._id} product ={product}></MenVests>
  )
  }
 </div>
        </div>
    )
}
