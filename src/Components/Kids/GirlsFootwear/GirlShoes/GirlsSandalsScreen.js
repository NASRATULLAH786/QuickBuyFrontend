import React from 'react';
import '../../../Product/Product.css';
import GirlsShoes from './GirlsShoes';
import GirlsShoesData from './GirlsShoesData';


export default function GirlsShoesScreen() {
    return (
        <div>
            <div className="row center">
  {GirlsShoesData.gShoes.map((product)=>
   <GirlsShoes key = {product._id} product ={product}></GirlsShoes>
  )
  }
 </div>
        </div>
    )
}
