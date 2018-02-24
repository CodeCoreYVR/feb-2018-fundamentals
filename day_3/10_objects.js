// objects - properties and values
// car is an object
// paintColour
// make
// model
// capacity
// seatMaterial
const car = {
    // property: value
    make: "Toyota",
    model: "Supra",
    capacity: 2
};

// if () {}
// while () {}
// function() {}

// dot operator
car.make; // returns to us the value of that property
car.model;
car.capacity; 

// communicate what the expected value might be
car[0]; // ???
car.make; // this will return the make of this car

const packingList = {
    0: "socks",
    1: "toothbrush",
    2: "ticket"
};

// packingList.0; // ???
packingList[0];

const car = {
    // property: value
    make: "Toyota",
    model: "Supra",
    capacity: 2
};

car.make; // dot operator
car["make"]; // square brackets with string

// item
// packingList[i]
let selectedProperty = "make";
car[ selectedProperty ]; // you can pass in a value, even a variale, into the square to access a property's value

// let selectedProperty = ["make"];
// car[ selectedProperty[0] ];

// let objectify ourselves
// give yourself 3 properties: name, age, hairColour, status, DOB

// let me = {
//     name = "Jacob Tran"
//     name => "Jacob Tran"
//     :name => "Jacob Tran"
//     name: "Jacob Tran"
// }

// name: is a symbol
// memory management
// 0;
// numbers
// symbols
// functions
// let name = "Jacob";
// // type string
// ["J", "a", "c", "o", "b"]

let me = {
    name: "Jacob Tran",
    age: 39,
    hairColour: "black",
    status: "Married",
    DOB: "December 20, 1978"
    // new Date();
};

// make a sentence that describes you
// e.g. "My name is Jacob Tran and I am 39 years old and I was born in 1978."
me.name;
me.age;
me.DOB;

me["name"];
me["age"];
me["DOB"];

let properties = ["name", "age", "DOB"];
me[ properties[0] ];
me[ properties[1] ];
me[ properties[2] ];

let property1 = "name";
let property2 = "age";
let property3 = "DOB";

me[ property1 ];
me[ property2 ];
me[ property3 ];

console.log(`My name is ${me.name} and I am ${me.age} years old.  I was born on ${me.DOB}.`);

