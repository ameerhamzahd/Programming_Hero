function calculateElectronicsBudget (laptopQuantity, tabletQuantity, mobileQuantity) {
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const totalLaptopCost = laptopQuantity * perLaptop;
    const totalTabletCost = tabletQuantity * perTablet;
    const totalMobileCost = mobileQuantity * perMobile;

    const totalCost = totalLaptopCost + totalTabletCost + totalMobileCost;

    return totalCost;
}

let totalBudget = calculateElectronicsBudget(2, 3, 1);
console.log(totalBudget);

