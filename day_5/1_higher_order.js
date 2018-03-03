// higher order functions
// functions rule javascript
// functions are first class citizens and they can go wherever they please
// javascript is functional programming languages

function add(num1, num2) {
    return num1 + num2;
}

// out to the console: [Function: add]
add; // function reference

let subtract = function(num1, num2) {
    return num1 - num2;
}

subtract; // function reference
// this does not execute the function, this is the anonymous function itself

let hiddenFn = subtract;
hiddenFn(6, 5); // 1

// what if you passed a function into a function as an argument

function sayHi() {
    console.log("Hello!");
}
function sayCiao() {
    console.log("Ciao!");
    console.log("Kiss on both sides of the cheek");
}
function sayOla() {
    console.log("Ola!");
    console.log("Kiss on left side of the cheek");
}

// higher order function
function greet( fn ) {
    console.log("shake hands");
    fn();
}

greet( sayHi );
greet( sayCiao );
greet( sayOla );