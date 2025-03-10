// Data-types
// Primitive: Number, String, Boolean, Null, Undefined
// Non-Primitive: Object, Array, Function, Date, RegExp 

// Hoisting

// Example:01-
// var output;

console.log(output);
var output = 'BD';

// Example:02-
// Hoisting stays in th function
function sum(num1, num2) {
    // var result;

    console.log(result);
    var result = num1 + num2;
}

// Closure: Relationship between Main Function and return Function
function sum(num1, num2) {
    let counter = 0;

    return () => {
        counter++;

        console.log(counter);
    }
}

const result1 = sum();
result1();
result1();
result1();

const result2 = sum();
result2();
result2();

// Call-Back
function result(fees, name) {
    fees(name);
}

const fees = (name) => {
    console.log(`
        Fees is paid by ${name}
        `);
}

result(fees, 'Ameer Hamzah Daiyan')

// Arguments
function calculation(num1, num2) {
    const newArray = [...arguments];
    console.log(newArray);
}

calculation(2, 3, 1, 1, 8, 5);

// Example:01- Works with value for Primitive
let a = 2;
let b = 5;

function multi(num1, num2) {
    num1 = 3;
}

sum(a, b);
console.log(a);

// Example:02- Works with address or reference for Non-Primitive 
let obj = {
    name: 'Ameer Hamzah Daiyan',
    age: 23
};

function person(Object) {
    obj.name = 'ameerhamzahd';
}

person(obj);
console.log(obj);

// Increment
// Suppose, age = 10

// Pre-Increment: console.log(++age) -> 11

// Post-Increment: console.log(age++) -> 10
//                            console.log(age) -> 11


// Interview Questions:
// 1. Tell the difference between Primitive and Non-Primitive Data Types in Javascript
// => Primitive data types (e.g., number, string, boolean) store values directly, while non-primitive data types (e.g., object, array, function) store references.

// 2. What are the truthy and Falsy values? Give me some examples
// => Truthy values evaluate to true (e.g., 1, "hello", []), while falsy values evaluate to false (e.g., 0, "", null, undefined, NaN).

// 3. What is the difference between null and undefined?
// => null is an intentional absence of value, while undefined means a variable is declared but not assigned a value.

// 4. What is the difference between == and === in Javascript?
// => == checks value equality with type coercion, while === checks both value and type without conversion.

// 5. what is scope in Javascript?
// => Scope determines the accessibility of variables (global, function, or block scope).

// 6. Define block scope and global scope.
// => Block scope restricts variables to a {} block (e.g., let and const), while global scope makes variables accessible anywhere in the script.

// 7. What is Hoisting in Javascript?
// => Hoisting moves variable and function declarations to the top of their scope before execution.

// 8. How to use the Javascript callback function?
// => A callback function is a function passed as an argument to another function and executed later, e.g., setTimeout(() => console.log("Hello"), 1000);.

// 9. Explain closure in Javascript
// => A closure is a function that remembers the variables from its outer scope even after the outer function has finished execution.

// 10. Explain passed by value and passed by ReferenceError.
// => Passed by value (for primitives) creates a copy, while passed by reference (for objects) passes a reference to the same memory location.