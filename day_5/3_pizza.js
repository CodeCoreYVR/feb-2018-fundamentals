// toppping
// crust
// order

function brickOven(topping, crust) {
    console.log("I am baking in brickOven");
    console.log(`A pizza with ${ topping } and ${ crust }.`);
}
function microwave(topping, crust) {
    console.log("I am baking in a microwave");
    console.log(`A pizza with ${ topping } and ${ crust }.`);
}
function pan(topping, crust) {
    console.log("I am baking in a pan");
    console.log(`A pizza with ${ topping } and ${ crust }.`);
}

function order(method, topping, crust) {
    method( topping, crust );
}

order(pan, "pepperoni", "thin crust");
order(microwave, "cheese", "thick crust");
order(brickOven, "anchovies", "regular crust");