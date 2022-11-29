import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenJackets from './MenJackets';
import MenJacketsData from './MenJacketsData';


export default function MenJacketsScreen() {
    return (
        <div>
            <div className="row center">
  {MenJacketsData.Jackets.map((product)=>
   <MenJackets key = {product._id} product ={product}></MenJackets>
  )
  }
 </div>
        </div>
    )
}
