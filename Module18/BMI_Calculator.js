let weight = 113
let height = 1.7526

let BMI = weight / (height * height)
console.log(BMI.toFixed(2));

// Conditional Operations
if (BMI < 18.5) {
    console.log("You are underweight.");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal.");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight.");
}
else {
    console.log("You are obese.");
}