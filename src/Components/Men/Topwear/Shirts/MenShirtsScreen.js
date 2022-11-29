import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenShirts from './MenShirts';
import MenShirtsData from './MenShirtsData';


export default function MenShirtsScreen() {
    return (
        <div>
            <div className="row center">
  {MenShirtsData.Shirt.map((product)=>
   <MenShirts key = {product._id} product ={product}></MenShirts>
  )
  }
 </div>
        </div>
    )
}
