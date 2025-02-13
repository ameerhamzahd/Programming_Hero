function operation(n) {
    if (n % 2 === 0) {
        return n / 2;
    }
    else {
        return n * 2;
    }
}

let num = 231185;
let result = operation(num);

console.log('Result of the opertion: ', result);