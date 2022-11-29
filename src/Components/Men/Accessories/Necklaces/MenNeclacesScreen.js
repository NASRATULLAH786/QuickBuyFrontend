import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenNecklaces from './MenNecklaces';
import MenNecklacesData from './MenNecklacesData';
export default function MenNecklacesScreen() {
    return (
        <div>
            <div className="row center">
  {MenNecklacesData.Necklaces.map((product)=>
   <MenNecklaces key = {product._id} product ={product}></MenNecklaces>
  )
  }
 </div>
        </div>
    )
}
