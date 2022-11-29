import React from 'react';
import '../../../Screens/HomeScreen.css'
import womenShirt from './WomenShirtData';
import WomenShirts from './WomenShirts';
export default function WomenShirtsScreen() {
    return (
        <div>
            <div className="row center">
  {womenShirt.shirt.map((product)=>
   <WomenShirts key = {product._id} product ={product}></WomenShirts>
  )
  }
 </div>
        </div>
    )
}
