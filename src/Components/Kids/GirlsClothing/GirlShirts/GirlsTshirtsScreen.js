import React from 'react';
import '../../../Product/Product.css';
import GirlsTshirtData from './GirlsTshirtData';
import GirlTshirts from './GirlsTshirts';



export default function GirlsTshirtsScreen() {
    return (
        <div>
            <div className="row center">
  {GirlsTshirtData.kTShirt.map((product)=>
   <GirlTshirts key = {product._id} product ={product}></GirlTshirts>
  )
  }
 </div>
        </div>
    )
}
