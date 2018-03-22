// good evening everyone!

// summarize the journey
// JS + HTML + CSS
// day 1, 3, 5, 7, 9

// strings
"Jacob";

'Jacob' + ' ' + ' Tran';
let age = 39;
`My age is ${ age }.`

$('a').html('Jacob Tran was here.');

// structures

// array
let names = ["Jacob", "Tran"];
names[0];
names[1];

for (let name of names) {
  console.log(name);
}

let todoList = ["walk the dog", "teach", "sleep"];
todoList.push("work out");
todoList.push("yoga");

// HTML
// <ul>
//   <li>walk the dog</li>
// </ul>
$('body').append('<ul></ul>');

for (let item of todoList) {
  $('ul').append(`<li>${item}</li>`);
}

// object
let player = {
  name: "Wayne Gretzky",
  age: 60,
  weight: 180,
  speed: 10,
  number: 99,
  image: "wayne.jpg",
  // property: ""
  // "Wayne Gretzky": ???
};

player.name; // "Wayne Gretzky"
player[ "name" ]; // "Wayne Gretzky"
let selectedProperty = "name";
// let selectedProperty = player.name; // would look for a property called "Wayne Gretzky"
player[ selectedProperty ]; // "Wayne Gretzky"

for (let property in player) {
  console.log( property ); // properties
  // console.log( values ); ???
  console.log( player[ property ] ); // values
}

// <div>
//   <h1>Name: Wayne Gretzky</h1>
//   <p>Age: 60</p>
// </div>

let player = {
  name: "Wayne Gretzky",
  age: 60,
  weight: 180,
  speed: 10,
  number: 99,
  image: "wayne.jpg",
  // property: ""
};

$('body').append('<div></div>');

for (let property in player) {
  //console.log( property ); // properties
  // console.log( values ); ???
  //console.log( player[ property ] ); // values
  $('div').append(`<p>${property}: ${player[property]}</p>`);
}

// class - group similar objects (classification)
// class - blueprint to create to objects, not the object itself
// classes describe objects
class Product {
  // constructor method, this is the first method that gets executed when we construct an object
  constructor(name, price, description, colour) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.colour = colour;
  }
} // this is the blueprint for a product
const phone1 = new Product("iPhone X", 1200, "Apple", "white"); // constructing an instance of a product
console.log(`The ${phone1.description} ${phone1.name} costs ${phone1.price}`); // "iPhone"
const phone2 = new Product("Pixel", 900, "Google", "black"); // constructing an instance of a product
const phone3 = new Product("Note", 1100, "Samsung", "gold"); // constructing an instance of a product

const phone1 = {
  name: "iPhone X",
  price: 1200,
  description: "Apple's latest iPhone.",
  colour: "white"
};

const phone2 = {
  name: "Pixel 2",
  price: 1200,
  description: "Google's latest phone.",
  colour: "white"
};

const phone3 = {
  name: "Samsung Note",
  price: 1200,
  description: "Samsung's latest phone.",
  colour: "white"
};

let phones = [ phone1, phone2, phone3 ];
let phones = [
  {
    name: "iPhone X",
    price: 1200,
    description: "Apple's latest iPhone.",
    colour: "white"
  },
  {
    name: "Pixel 2",
    price: 1200,
    description: "Google's latest phone.",
    colour: "white"
  },
  {
    name: "Samsung Note",
    price: 1200,
    description: "Samsung's latest phone.",
    colour: "white"
  }
];

for (let phone of phones) {
  for (let property in phone) {
    console.log( property );
    console.log( phone[property] );
  }
}

// use firebase to create child added

// what really do you need to know!?!
