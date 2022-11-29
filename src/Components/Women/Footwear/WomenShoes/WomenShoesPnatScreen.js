import React from 'react';
import '../../../Screens/HomeScreen.css'
import WomenShoes from './WomenShoes';
import womenShoesData from './womenShoesData';
export default function WomenShoesPantScreen() {
    return (
        <div>
            <div className="row center">
  {womenShoesData.wShoes.map((product)=>
   <WomenShoes key = {product._id} product ={product}></WomenShoes>
  )
  }
 </div>
        </div>
    )
}
