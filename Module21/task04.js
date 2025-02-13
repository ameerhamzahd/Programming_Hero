function count_zero(id, length) {
    let counter = 0;

    for (let number of id) {
        if (number === '0') {
            counter++;
        }
    }

    return counter;
}

let id = '111000011100010001';
let length = id.length;
let result = count_zero(id, length);

console.log(result, "times 0's are there in that string.")