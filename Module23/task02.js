function findSmallestName(arr) {
    let smallestName = arr[0];

    for (let items of arr) {
        if (items.length < smallestName.length) {
            smallestName = items;
        }
    }

    return smallestName;
}

let names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let result = findSmallestName(names);

console.log(result);