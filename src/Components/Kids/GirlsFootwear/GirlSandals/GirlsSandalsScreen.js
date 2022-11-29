import React from 'react';
import '../../../Product/Product.css';
import GirlsSandals from './GirlsSandals';
import GirlsSandalsData from './GirlsSandalsData';


export default function GirlsSandalsScreen() {
    return (
        <div>
            <div className="row center">
  {GirlsSandalsData.gSandals.map((product)=>
   <GirlsSandals key = {product._id} product ={product}></GirlsSandals>
  )
  }
 </div>
        </div>
    )
}
