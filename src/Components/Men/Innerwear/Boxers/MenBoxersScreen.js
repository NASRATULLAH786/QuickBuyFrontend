import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenBoxers from './MenBoxers';
import MenBoxersData from './MenBoxersData';

export default function MenBoxersScreen() {
    return (
        <div>
            <div className="row center">
  {MenBoxersData.Boxers.map((product)=>
   <MenBoxers key = {product._id} product ={product}></MenBoxers>
  )
  }
 </div>
        </div>
    )
}
