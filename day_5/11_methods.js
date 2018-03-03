// arrays
let packingList = ["passport", "ticket", "clothes"];
// push is a method
// it is a function that belongs to an object
// that adds an item to the end of our array
packingList.push("toothbrush");
// push, pop, slice, splice, sort, remove, shift, unshift

const me = {
    // properties
    name: "Jacob",
    age: 39,
    // methods = functions,
    // run: function() {},
    run() { console.log("I am running...") },
    jump() {},
    climb() {},
    teach() {}
};

const wife = {
    name: "Julia",
    age: 38,
    // methods = functions,
    // run: function() {},
    run() { console.log("I am running fast...") },
    jump() {},
    climb() {},
    teach() {}
}

me.name; // "Jacob"
me.run; // [Function] - reference to a function
me.run(); // executes the function at the run property