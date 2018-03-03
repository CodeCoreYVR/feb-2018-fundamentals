// bake some cookies!!!

// make me a cookie object, with 3 properties and values
// some example of properties: sugar, flour, glutten...
const sugarCookie = {
	sugar: 38,
	flour: 20,
	glutten: true,
	// make 3 cookie methods
	// some examples might be bake, eat, trash
	// console.log within your methods
	bake() { console.log("A cookie is being baked.") },
	eat() { console.log(`A cookie is being eaten that has ${ this.sugar }g of sugar and ${ this.flour }g of flour.`) },
	trash() { console.log("Yuck! Feed it to the dog :(") }
};

// test out your properties and methods
console.log( sugarCookie.sugar );
console.log( sugarCookie.flour );
console.log( sugarCookie.glutten );

sugarCookie.bake();
sugarCookie.eat();
sugarCookie.trash();

// modify your methods so that we can print out not only the action, but the sugar and flour amount as well.
// for example: "A cookie is being eaten that has 38g of sugar and 20g of flour."
// this keyword 

// const sugarCookie = new Object();

// make a cookie class
// create a constructor method inside that class
// place a console.log inside the constructor
// create an instance of the cookie class
class Cookie {
	constructor(sugarArg, flourArg, gluttenArg) {
		console.log("A cookie was constructed!");
		this.sugar = sugarArg;
		this.flour = flourArg;
		this.glutten = gluttenArg;
	}

	bake() {
		console.log("A cookie is baking...");
	}

	eat() {
		console.log(`A cookie is being eaten with ${ this.sugar }g of sugar and ${ this.flour }g of flour.`);
	}

	trash() {
		console.log("A cookie is being tossed...");
	}
}

// const sugarCookie = {
// 	// properties: values
// 	sugar: 10,
// 	flour: 20,
// 	glutten: false
// };

const oreo = new Cookie(30, 10, true);
const chocolateChip = new Cookie(25, 10, true);
const oatmeal = new Cookie(10, 5, false);
//oatmeal.bake();
oreo.eat();
chocolateChip.eat();
oatmeal.eat();
//oatmeal.trash();
// shoppingList.push();
// todoList.pop();

// give the class 3 properties
// e.g. sugar, flour and glutten
// set those properties using the constructor method's arguments
// remember, you will need to change the way your construct your cookies!

// make 3 methods inside your class
// e.g. eat, bake, trash
// test out those methods with one your instances,
// e.g. oatmeal.bake();

// in the eat method, let me know how much sugar and flour
// exist in the cookie.

// [STRETCH] every 3 seconds take a bite
// when your reach 4 bites stop eating!!!!