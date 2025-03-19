// Storing Data in Local Storage
// const age = 23;
// localStorage.setItem('age', age);

// console.log(localStorage.getItem('age'));

// By Function ()
// const handleData = () => {
//     const person = {
//         name: 'Ameer Hamzah Daiyan',
//         age: 23
//     };

//     localStorage.setItem('person', JSON.stringify(person));
// }

// const getData = localStorage.getItem('person');
// console.log(JSON.parse(getData));

// Product Details
const handleData = () => {
    const productName = document.getElementById('input-product-name').value;
    const productQuantity = document.getElementById('input-product-quantity').value;

    displayData(productName, productQuantity);
    setDataInLocalStorage(productName, productQuantity);

    productName.value = '';
    productQuantity.value = '';
}

const displayData = (name, quantity) => {
    const productList = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `${name} : ${quantity}`;
    productList.appendChild(li);
}

const getDataFromLocalStorage = () => {
    let cart = {};
    const data = localStorage.getItem('cart');

    if(data){
        cart = JSON.parse(data);
    }
    
    return cart;
}

const setDataInLocalStorage = (name, quantity) => {
     const cart = getDataFromLocalStorage();

     cart[name] = quantity;
     localStorage.setItem('cart', JSON.stringify(cart));
}

const displayDataFromLocalStorage = () => {
    const cart = getDataFromLocalStorage();

    for(const product in cart){
        displayData(product, cart[product]);
    }
}

displayDataFromLocalStorage();