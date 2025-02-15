function findAveragePhonePrice(arr) {
    let sum = 0;
    let length = arr.length;

    for (let items of arr) {
        sum += items.price;
    }

    let averagePhonePrice = sum / length;
    return averagePhonePrice;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const result = findAveragePhonePrice(phones);
console.log(result .toFixed(2));
