// A
const a = isNaN('11');      // Result: false.
// The isNaN() function checks whether its argument is Not-a-Number (NaN).
// '11' is a string, but JavaScript tries to convert it into a number. The string '11' successfully converts into the number 11.
// Since 11 is a valid number, isNaN('11') will return false.


// B
const b = isNaN(2 - 10);    // Result: false.
// The expression 2 - 10 evaluates to -8. This is a valid number in JavaScript.
// The isNaN() function checks whether the result (-8) is NaN. Since -8 is a number, it will return false.