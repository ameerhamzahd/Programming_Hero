function convert(c) {
    let f = (c * 9 / 5) + 32;
    return f.toFixed(2);
}

let temperature = 20;
let fahrenheit = convert(temperature);
console.log(fahrenheit, '°F');