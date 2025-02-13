function odd_even(n) {
    if (n % 2 === 0) {
        return "Even";
    } 
    else {
        return "Odd";
    }
}

let num = 231185;
let result = odd_even(num);

console.log('This value is', result);