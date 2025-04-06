const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if (storedCartString) {
        return JSON.parse(storedCartString);
    }

    return [];
}

const addCartToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(id);

    saveCartToLocalStorage(cart);
}

const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const removeCartFromLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    const remainingCart = cart.filter(bottleId => bottleId !== id);
    
    saveCartToLocalStorage(remainingCart);
}

export { getCartFromLocalStorage, addCartToLocalStorage, removeCartFromLocalStorage };
