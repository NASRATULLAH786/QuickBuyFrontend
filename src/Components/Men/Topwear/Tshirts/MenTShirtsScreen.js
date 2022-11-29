import React from 'react';
import '../../../Screens/HomeScreen.css'
import MenTshirts from './MenTshirts';
import MenTshirtsData from './MenTshirtsData';



export default function MenTShirtsScreen() {
    return (
        <div>
            <div className="row center">
  {MenTshirtsData.Tshirt.map((product)=>
   <MenTshirts key = {product._id} product ={product}></MenTshirts>
  )
  }
 </div>
        </div>
    )
}
