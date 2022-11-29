import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenBriefs from './MenBriefs';
import MenBriefsData from './MenBriefsData';


export default function MenBriefsScreen() {
    return (
        <div>
            <div className="row center">
  {MenBriefsData.Briefs.map((product)=>
   <MenBriefs key = {product._id} product ={product}></MenBriefs>
  )
  }
 </div>
        </div>
    )
}
