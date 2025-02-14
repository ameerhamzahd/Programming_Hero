function repeatedCounter(arr) {
    let n = 5;
    let counter = 0;

    for(let item of arr) {
        if(item === n) {
            counter++;
        }
    }

    return counter;
}

let numbers = [5, 6, 11, 12, 98, 5];
let result = repeatedCounter(numbers);

console.log(result);