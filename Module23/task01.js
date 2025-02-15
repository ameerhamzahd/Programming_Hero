function findMinHeight(arr) {
    let minHeight = arr[0];

    for (let items of arr) {
        if (items < minHeight) {
            minHeight = items;
        }
    }

    return minHeight;
}

let heights2 = [167, 190, 120, 165, 137];
let result = findMinHeight(heights2);

console.log(result);