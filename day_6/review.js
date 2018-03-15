// good evening!
// day 1: tam, basics of javascript
// variable
// logic gating, if..else
// loops: for, while

// day2: html
// hypertext markup language
// <html></html>
// <img src="puppy.jpg">
// <img src="puppy.jpg" />
// _blank will open page in a new tab
// <a href='http://www.disneyland.com' target='_blank'>Happiest Place</a>

// <form action="" method="">
//   <label>Username:</label>
//   <input type="text">
//
//   <label>Password:</label>
//   <input type="password">
//
//   // default action is to refresh the page
//   <input type="submit">
// </form>

// day 3 - data structures
let name = "Jacob";
// array - index list of information
const names = ["Jacob", "Tran"];
names[0]; // "Jacob"
names[1]; // "Tran"

for (let name of names) {
  console.log( name );
}

const account = ['Jacob', 132492.23, true];

// multi-dimensional array
const teachers = [
  ["Jacob", "Tran"],
  ["Tam", "Kbeili"],
  ["Steve", "Godin"]
];

// last teacher's first name?
teachers[row?][col?]; // arrays are zero-based
teachers[2][0]; // "Steve"

// object - properties and values
const teacher = {
  name: "Jacob",
  age: 39,
  profession: "Instructor",
  asian: true
};

teacher.name; // "Jacob"
teacher.age; // 39

const teacher = {
  name: "Jacob",
  // hobby: "rock climb",
  // hobby2: "snowboard",
  // hobby3: "bjj"
  hobbies: ["rock climbing", "snowboarding", "bjj"],
  kids: [{name: "Aubrey"}, {name: "Leah"}, {name: "Sienna"}],
  dog: {
    name: "Summer",
    age: 3
  }
}

// what is our teacher's first hobby?
teacher.hobbies[0]; // "rock climbing"

// day 4
// html & css: cascading style sheets
// css rule:
// <style>
//   h1 {
//     color: pink;
//     font-family: sans-serif;
//     font-size: 20px;
//   }
// </style>

// opacity in css: 3 way
// red, green, blue, alpha = transparency
// 1.
rgba(255, 255, 255); // white
rgba(0, 0, 0); // black
rgba(255, 255, 255, 0.5); // 50% transparent white
// 2.
opacity: 0.5; // this sets the entire selector to be transparent by 50%
// 3.   R G B A, 0 - 255, 00 - FF
color: #FFFFFFAA; //partially transparent white

// day 5
// functions
// input -> output
// set of instructions tied to name
function todo() {
  console.log("walk the dog");
  console.log("pay the bills");
  console.log("eat");
  console.log("commute");
  console.log("teach");
}

todo();
todo();
todo();
todo();
todo();

// function baby( food ) {
//   return waste;
// }
function add(a, b) {
  return a + b;
}

add(5, 6);

function subtract(a, b) {
  return a - b;
}

subtract(10, 2);

// return - will allow us to turn a function into a meaningful value
// functions are values!!!!

add(5, 6) + subtract(10, 2);
11 + 8;

// complexity + 1
add(1,2,3,4,5);

function add(...numbers) {
  // ...numbers is an array of numbers
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

add(1,2);

// complexity + 2
let add = function(a, b) {
  return a + b;
};
add();

// complexity + 3
function sayHi() {
  console.log("hello!");
}

sayHi(); // (); execute the function
sayHi; // if we don't have the (), we get a reference to the function

let yo = sayHi;
yo();

// javascript is asynchronous
// higher order functions - is a function that takes in a function as an argument
setTimeout(sayHi, 4000);

function runThreeTimes( fn ) {
  fn();
  fn();
  fn();
}

runThreeTimes( sayHi );

// objects
const me = {
  name: "Jacob",
  age: 39
}

// object-oriented programming
// evolution, blueprints, instancing....
// classification

// describes an object
class Person {}

// construct an instance of the class
const me = new Person();
const you = new Person();
const trump = new Person();

class House {
  // function -> method
  // a function that exists within a class or object is called a method
  // shoppingList.push();
  constructor( colourArg ) {
    // instance variable, field
    this.colour = colourArg;
    // this - which object is this?
  }
  // custom methods
  ac() {}
  heat() {}
  arm() { console.log("I am arming the house") }
  disarm() { console.log("I am disarming the house") }
  openWindows() {}
}

const bungalow = new House("beige");
bungalow.arm();
bungalow.disarm(); // disarm method
bungalow.colour; // colour property

const townhome = new House("red");
const rancher = new House("blue");

let shoppingList = ["beer", "cheese", "milk"];
shoppingList.push("butter"); // push method
shoppingList.length; // length property

// const bungalow = {
//   colour: "beige"
// };

//












//
