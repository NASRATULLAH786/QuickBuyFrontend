import React from 'react';
import '../../../Product/Product.css';
import GirlsJeans from './GirlsJeans';
import GirlsJeansData from './GirlsJeansData';

export default function GirlsJeansScreen() {
    return (
        <div>
            <div className="row center">
  {GirlsJeansData.kJeans.map((product)=>
   <GirlsJeans key = {product._id} product ={product}></GirlsJeans>
  )
  }
 </div>
        </div>
    )
}
