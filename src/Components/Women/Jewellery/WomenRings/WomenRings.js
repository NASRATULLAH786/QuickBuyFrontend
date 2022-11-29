import React from 'react'
import '../../../Product/Product.css';
import Rating from '../../../Rating/Rating';
export default function WomenRings(props) {
    const {product} = props;
    return (
       <div key= {product._id} className="pCard">
  <a href={`/wRings/${product._id}`}>
    <img className ="medium" src={product.image} alt={product.name}/>
    </a>
    <div className= "pCard-body">
      <a href={`/wRings/${product._id}`}><h2> {product.name}</h2></a>
      <Rating rating={product.rating} numReviews = {product.numReviews}></Rating>
      <div className="price">
      Rs. {product.price}
      </div>
    </div>
  </div>
    )
}