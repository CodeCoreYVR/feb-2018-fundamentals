// expressions
// values and data
5 + 5;
let result = 10 / 2;
let shoppingList = ["beer", "chips", "salsa"];
function () {}

// statements
// decision making - computer
if (true) {}
while (true) {}

// functions as expressions
// there are 2 ways to declare functions in javascript
// declaritive function

console.log( add(5, 6) ); // will this work?
// javascript is asynchronous

function add( number1, number2 ) {
    return number1 + number2;
}

//let result = add(5, 6);
console.log( add(5, 6) ); // this will work for sure

//add(5, 6) + add(3, 2); 
//11 + 5;

// add global scope

// expressive function
// anonymous functions - a function that has no name
let sayHi = function() {
    console.log("hi!");
    // put as many instructions as we want in our code block
};

let add = function(num1, num2) {
    return num1 + num2;
};

let name = "Jacob";
let age = 39;
let add = function(){};

// expressive functions are locally scoped
// not globally scoped like declaritive functions
// this throw an error
console.log(add(5,6));

let add = function(num1, num2) {
    return num1 + num2;
};

console.log(add(10,2));



