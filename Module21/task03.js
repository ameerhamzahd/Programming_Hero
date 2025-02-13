function make_avg(id, length) {
    let sum = 0;

    for(let number of id) {
        sum += number;
    }

    return sum / length;
}

let id = [2, 3, 1, 1, 8, 5];
let length = id.length;
let result = make_avg(id, length);

console.log('The average of those values: ', result.toFixed(2));