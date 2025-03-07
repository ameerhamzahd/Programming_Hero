// Get out VAR. Use let for changing variables and const for constant variables

// Template String -> it helps to write multiple line of string
console.log(`
    Name: Ameer Hamzah Daiyan
    ID: C231185
    Semester: 5th
    Section: 5EM 
    `);

// Difference between Normal Function and Arrow Function
// Normal Function
function sum(num1, num2) {
    return num1 + num2;
}

// Arrow Function -> single line
const sum = (num1, num2) => num1 + num2;
// Arrow Function -> multi line
const sum = (num1, num2) => {
    let result = num1 + num2;
    return result;
};

// Use Spread Operator before an array for getting the values of that array
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);  

// Object Destructuring
const person = {
    name: 'Ameer Hamzah Daiyan',
    age: 20,
};

const { name, age } = person;

console.log(name, age)

// Array Destructuing
const numbers2 = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4, num5] = numbers2;


const person2 = {
    name: 'Ameer Hamzah Daiyan',
    age: 20,
};

// Show object keys
console.log(Object.keys(person2));
// Show object values
console.log(Object.values(person2));
// Show object entries
console.log(Object.entries(person2));

// We cannot push any items in the specific object because of using the property
Object.seal(person2);
// We cannot change the values and push any items in the specific object  because of using the property
Object.freeze(person2); 