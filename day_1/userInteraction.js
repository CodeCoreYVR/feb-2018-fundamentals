// Prompt the user for their name then print to the console: "Hello, Bob! In case you forgot, 3 x 4 is 12." Use variables for your name, a, b, and result. Also, try to do it with string interpolation

// Solution 1
const name = prompt('What is your name?');

console.log('Hello ' + name + '! In case you forgot, 3 X 4 is 12');

// Solution 2
const name = prompt('What is your name?');

const a = 3;
const b = 4;
const result = a * b;
console.log(`Hello, ${name}! In case you forgot, ${a} x ${b} is ${result}.`);
