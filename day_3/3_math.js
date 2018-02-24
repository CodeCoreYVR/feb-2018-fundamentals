// math functions
// calculator
// binary: ones or zeros
// on or off
// open or closed

// add
4 + 2; // 6

function add() {
    4 + 2;
    //console.log(4 + 2);
    // the scope of the result variable is only within this function
    //let result =  4 + 2;
}

//console.log(result); // error

add();
// console.log() is a tool for you as a developer to see what is going on with your code

function addOne( number ) {
    console.log( number + 1 );
}

addOne(20); // 21
addOne(3); // 4

function addNumbers( number1, number2 ) {
    console.log( number1 + number2 );
}

addNumbers( 23, 89 );
addNumbers( 3.14159, 42 );

function addMoreNumbers( number1, number2, number3, number4, number5 ) {
    console.log( number1 + number2 + number3 + number4 + number5 );
}

addMoreNumbers(1, 2, 3, 4, 5);
addMoreNumbers(1, 4, 9, 16, 25);

add(1);
add(1,2);
add(1,2,3);
// ...numbers rest argument [arrays]

// what is a value?
"Jacob";
39;

// what is a statement
if (true) {}
while (true) {}

// a function is value !??!?!??
// return, allows us to turn a function into a meaningful value
function add(number1, number2) {
    // this function is for developers to print out to the console the result
    // perhaps for debugging purposes
    console.log(number1 + number2);
}

add(5, 6) * 2; // white 11
add(5, 6) == undefined;
undefined * 2; // NaN

function add(number1, number2) {
    // produces or turns into the result of this operation
    return number1 + number2;
}

add(5, 6) * 2; // green 11
add(5, 6) == 11;
11 * 2; // 22