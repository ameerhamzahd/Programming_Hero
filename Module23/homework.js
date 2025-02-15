function findMin (arr) {
    let minValue = arr[0];

    for(let items of arr) {
        if(items < minValue) {
            minValue = items;
        }
    }

    return minValue;
}

let numbers = [2, 3, 1, 1, 8, 5];
let result = findMin(numbers);

console.log(result);