import React from 'react';
import '../../../Product/Product.css';
import BoyJeans from './BoysJeans';
import BoysJeansData from './BoysJeansData';


export default function BoyJeansScreen() {
    return (
        <div>
            <div className="row center">
  {BoysJeansData.bJeans.map((product)=>
   <BoyJeans key = {product._id} product ={product}></BoyJeans>
  )
  }
 </div>
        </div>
    )
}
