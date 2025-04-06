import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, stock, seller, shipping, ratings, img} = bottle;

    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Stock: <strong>{stock}</strong> remaining</p>
            <p>Seller: {seller}</p>
            <p>Shipping: ${shipping}</p>
            <p>Ratings: {ratings} stars</p>
            <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;