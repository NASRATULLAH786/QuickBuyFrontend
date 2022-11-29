import React from 'react';
import '../../../Product/Product.css';
import BoysShoes from './BoysShoes';
import BoysShoesData from './BoysShoesData';
export default function BoysShoesScreen() {
    return (
        <div>
            <div className="row center">
  {BoysShoesData.bShoes.map((product)=>
   <BoysShoes key = {product._id} product ={product}></BoysShoes>
  )
  }
 </div>
        </div>
    )
}
