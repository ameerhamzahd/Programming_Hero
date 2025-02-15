function calculatePrice(shirtQuantity, pantsQuantity, shoesQuantity) {
    let totalShirtPrice = shirtQuantity * 500;
    let totalPantsPrice = pantsQuantity * 300;
    let totalShoesPrice = shoesQuantity * 900;
    let totalPrice = totalShirtPrice + totalPantsPrice + totalShoesPrice;

    return totalPrice;

}

let totalCost = calculatePrice(4, 4, 2);
console.log(totalCost);