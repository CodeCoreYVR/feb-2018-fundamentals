function sayHi() {
    console.log("Hello!");
}

function greet( name ) {
    console.log(`Hi ${name}`);
}

function addOne( number ) {
    return number + 1;
}

function add( num1, num2 ) {
    return num1 + num2;
} 

function add( num1, num2, num3 ) {
    return num1 + num2 + num3;
}

// default arguments
function add (num1=0, num2=0, num3=0) {
    return num1 + num2 + num3;
}

add(); // 0
add(1); // 1
add(1, 2); // 3
add(1, 2, 3); // 6


// rest argument
// variable arguments
function add( ...numbers ) {
    // ...numbers becomes an array
    console.log( ...numbers );

    let total = 0;
    // iterate over the array
    for (let number of numbers) {
        total += number;
    }
    return total;
}

add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

function mathOperation(operation, num1, num2) {}

// mathOperation(subtract(3,5));
// mathOperation(subtract,3,5);