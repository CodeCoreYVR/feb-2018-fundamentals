// anonymous funcitons
let add = function() {};
add();

// setTimeout(fn, delay);

// declaritive function
function sayHi() {
    console.log("Hello!");
} 


// expressive function
let sayHi = function() {
    console.log("Hello!");
};

setTimeout( sayHi, 3000 );

let delay = 5000;
setTimeout( sayHi, delay ); // this allowed

setTimeout(function() {
    console.log("Hello!");
}, delay);

setTimeout(function() { console.log("Hello!") }, delay);

// map(numbers, square);
// map([1,2,3,4,5], function(number) { return number * number})

// make a timer that executes code after 3 seconds
// 1.
function jump() {
    console.log("Jump!");
}

setTimeout(jump, 3000);

// 2.
let jump = function() { console.log("Jump") };
let delay = 3000;
setTimeout(jump, delay);

// 3.
setTimeout(function() { console.log("Jump") }, 3000);
