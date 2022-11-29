import React from 'react';
import Rating from './Rating';

function MenBracelets(props) {
    const { Products} = props;

    return(
        <div key= { Products.id} className = "pCard">
            <a href = {`/Products/${Products.id}`}>
                <img className = "medium" src = { Products.image} alt= { Products.name}></img>
            </a>
            <div className = "pCard-body">
                <a  href = {`/Products/${Products.id}`}>
                    <h2>{ Products.name}</h2>
                </a>
                <Rating rating = {Products.rating} numReviews = {Products.numReviews} />
                <div className = "price">₹{ Products.price}</div>
            </div>

        </div>



    );
}
export default MenBracelets;