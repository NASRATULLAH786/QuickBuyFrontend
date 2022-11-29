import React from 'react';
import '../../../Product/Product.css';
import BoysTShirtData from './BoysTshirtData';
import BoyTShirts from './BoysTShirts';



export default function BoyTShirtsScreen() {
    return (
        <div>
            <div className="row center">
  {BoysTShirtData.bTshirts.map((product)=>
   <BoyTShirts key = {product._id} product ={product}></BoyTShirts>
  )
  }
 </div>
        </div>
    )
}
