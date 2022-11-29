import React from 'react'
import Data from '../../Data.js'
import './HomeScreen.css';
import Product from '../Product/Product.js';

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
  {Data.Products.map((product)=>
   <Product key = {product._id} product ={product}></Product>
  )
  }
 </div>
        </div>
    )
}
