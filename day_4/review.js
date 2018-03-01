// javascript
// programming language native to our web browser
// data
// string, numbers, booleans
// data values
"Jacob"; // data type: string
39;
true;

// variable - keep values in memory
let result = 4 * 2;

result * 5; // 40
console.log("The result is: " + result);

// loosely typed language
// duck-typing
let age = 39;
age = "thirty-nine";

const pi = 3.14159;
pi = 1234; // error

// functionality
// declaritive function
function multiply() {
  5 * 6;
}

function multiply() {
  // using a developer's tool to show what is happening inside our function
  console.log(5 * 6);
}

multiply() == 30;  // false

// "Jacob", 39, true, function is a value!!?!!??!?!
function multiply() {
  return 5 * 6;
}

multiply() == (5 * 6); // true
multiply() == 30; // true

function multiply(number1, number2) {
  return number1 * number2;
}

multiply(2, 3);
console.log(number1);
console.log(number2);

// structures
// arrays
// objects
let firstName = "Jacob";
let lasttName = "Tran";

let age = 39;
// 1:1

// array initializer -> []
//              0        1
// zero-based indexing
let names = ["Jacob", "Tran"];

// "hello, my name is Jacob Tran."
// address or index
names[0]; // "Jacob"
names[1]; // "Tran"

console.log(`hello, my name is ${ names[0] } ${ names[1]}.`);

names[2]; // undefined, array out of bounds exception

names[1] = "Tao";
// what's going to happen between 2 and 9.. undefined
names[10] = "Tagle";
// they are dynamically sized

// mixed data types allowed
let account = ["Jacob Tran", 39, 283947.38, true];

// functions + array = methods
// push, pop, reverse, shift, unshift, sort, splice, slice methods
// length property
let shoppingList = [];
shoppingList.push("beer");
shoppingList.push("milk");
shoppingList.push("eggs");
shoppingList.push("butter");
shoppingList.push("bread"); // adds an item to the end of the list

shoppingList.pop(); // removes an item from the end of the list
// highest priority: diapers!
shoppingList.unshift("diapers");

// checkout
shoppingList[0];
shoppingList[1];
shoppingList[2];
shoppingList[3];
shoppingList[4];

// iteration
for (let item of shoppingList) {
  console.log( item );
}

// for (init; condition; increment)
for (let i=0; i<shoppingList.length; i++) {
  console.log( shoppingList[i] );
}

// objects - object oriented programming
// "objects are the basis for anything meaningful in programming..."
// what is an object?
// an object is something we can sense or describe with our 5 senses
// people, tables, chairs, computers, cups

// object initializer
// i use const so that it stays an object
// me = 3.14169;
// me = "Jacob";
const me = {
  // property: value
  name: "Jacob",
  age: 39
};

names[0];
names[1];

// square bracket syntax
me["name"]; // "Jacob"
me["age"]; // 39

// dot operator
me.name; // "Jacob"
me.age; // 39

// using a variable
let property = "name";
me[ property ];

// iteration
// for ( of ) // iterate through an array
// for (let property in object) {}

const me = {
  // property: value
  name: "Jacob",
  age: 39
};

for (let property in me) {
  console.log( property );
  console.log( me[ property ] );
}

Object.keys( me ); // array of properties
Object.values( me ); // array of values

console.log(`Hello, my name is ${ me.name }`);

// car object
const car = {
  make: "Tesla",
  model: "Model S",
  capacity: 5
};

console.log(`I drive a ${ car.make } ${ car.model } and it can seat ${ car.capacity} people.`);

// complex object
const mom = {
  name: "Julia",
  children: ["Aubrey", "Leah", "Sienna"],
  dog: {
    name: "Summer",
    age: 2,
    breed: "Minature Golden Doodle",
    puppies: [{name: "Spot"}, {name: "Disco"}, {name: "Lassie"}],
    profilePic: "egg.jpg"
  }
};

mom.dog.puppies.push("Ginger");
mom.dog.profilePic = "puppy.png";

mom.name;
mom.children[0];
mom.children[2];
mom.dog.name; // "Summer"
mom.dog.puppies[2]; // "Lassie"

// JSON - JavaScript Object Notation
// Facebook JSON
// Twitter JSON
// YouTube JSON

// multi-dimension array
[
  [],
  [],
  []
];





//
