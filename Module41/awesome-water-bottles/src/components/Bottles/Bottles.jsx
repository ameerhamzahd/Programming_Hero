import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addCartToLocalStorage, getCartFromLocalStorage, removeCartFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    const [addedBottles, setAddedBottles] = useState([]);

    const handleAddToCart = (bottle) => {
        const newAddedBottles = [...addedBottles, bottle];
        setAddedBottles(newAddedBottles);

        addCartToLocalStorage(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        const remainingBottles = addedBottles.filter(bottle => bottle.id !== id);
        
        setAddedBottles(remainingBottles);
        removeCartFromLocalStorage(id);
    }

    useEffect(() => {
        const storedCartIds = getCartFromLocalStorage();
        const storedCart = [];

        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        setAddedBottles(storedCart);
    }, [bottles])

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Add to Cart: {addedBottles.length}</p>
            <Cart addedBottles={addedBottles} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className='bottles'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;