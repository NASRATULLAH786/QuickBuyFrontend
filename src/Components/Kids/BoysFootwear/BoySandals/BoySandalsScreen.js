import React from 'react';
import '../../../Product/Product.css';
import BoysSandals from './BoysSandals';
import BoysSandalsData from './BoysSandalsData';
export default function BoySandalsScreen() {
    return (
        <div>
            <div className="row center">
  {BoysSandalsData.bSandals.map((product)=>
   <BoysSandals key = {product._id} product ={product}></BoysSandals>
  )
  }
 </div>
        </div>
    )
}
