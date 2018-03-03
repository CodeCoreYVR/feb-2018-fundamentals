
class Cookie {
	constructor(sugarArg, flourArg, gluttenArg) {
		//console.log("A cookie was constructed!");
		this.sugar = sugarArg;
		this.flour = flourArg;
		this.glutten = gluttenArg;
	}

	bake() {
		console.log("A cookie is baking...");
	}

	eat() {
		console.log(`A cookie is being eaten with ${ this.sugar }g of sugar and ${ this.flour }g of flour.`);
		
		// setInterval
		// setTimeout
		/*
		setTimeout(function() { console.log("munch") }, 3000);
		setTimeout(function() { console.log("munch") }, 6000);
		setTimeout(function() { console.log("munch") }, 9000);
		setTimeout(function() { console.log("munch") }, 12000);
		*/
		let counter = 0;
		let id = setInterval(function() { 
			console.log("munch...") 
			counter++;
			if (counter > 3) {
				clearInterval(id);
			}
		}, 3000);
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
//chocolateChip.eat();
//oatmeal.eat();
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