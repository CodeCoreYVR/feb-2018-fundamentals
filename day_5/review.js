// good morning everyone!
// javascript
// ECMAScript 6.0

// 1. data
// variable - store into memory
let fire = "smoke";

// data structure
let names = ["Jacob", "Tran"];

// 2. functionality
// reorganizing our code

function morning() {
    console.log("wake up");
    console.log("eat breakfast");
    console.log("catch the bus");
    console.log("listen to a podcast");
}

morning();
morning();
morning();
morning();
morning();

// 3. functions are values
// functions are data

// produces an output
// input -> output

// this function will take in a number
// and will return true if that number is even
function isEven( number ) {
    // % = modulo, it gives the remainder
    if (number % 2 == 0) {
        // return keyword
        return true;
    } else {
        return false;
    }
}

console.log( isEven(2) ); // true
console.log( isEven(3) )5; // false

let result = isEven(4);
let result = true;
// functions are values





