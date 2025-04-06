import React from 'react';
import './Cart.css';

const Cart = ({addedBottles, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
           {
            addedBottles.map(bottle => <div key={bottle.id}>
                <img src={bottle.img} alt="" />
                <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
            </div>)
           }
        </div>
    );
};

export default Cart;