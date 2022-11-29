import React from 'react';
import '../../../Screens/HomeScreen.css';
import MenShoes from './MenShoes';
import MenShoesData from './MenShoesData';


export default function MenShoesScreen() {
    return (
        <div>
            <div className="row center">
  {MenShoesData.Shoes.map((product)=>
   <MenShoes key = {product._id} product ={product}></MenShoes>
  )
  }
 </div>
        </div>
    )
}
