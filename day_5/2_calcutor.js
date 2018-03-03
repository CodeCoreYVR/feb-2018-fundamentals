function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

// definition of a higher order function
// a function that takes in a function as an argument
function calculator(operation, num1, num2) {
    // additional instruction
    return operation(num1, num2);
    //return 11;
}

calculator(add, 5, 6); // 11
calculator(subtract, 3, 2); // 1

subtract( 3, 2 );

// errors because brackets get executed first
calculator(subtract(3, 2)); // 1
// subtract(3, 2) == 1
//calculator(1);