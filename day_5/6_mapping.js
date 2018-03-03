// higher order function + data structures
// before: [1,2,3,4,5]
// squares of the numbers
// what is square? it's a math function
// after: [1,4,9,16,25]
let numbers = [1,2,3,4,5];
let results = [];
for (let number of numbers) {
    console.log(number * number);
    results.push(number * number);
}

console.log( results );

// before [1,2,3,4,5]
// adding one, addOne()
// after [2,3,4,5,6]
let numbers = [1, 2, 3, 4, 5];
let results = [];
for (let number of numbers) {
    console.log( number + 1 );
    results.push(number + 1);
}
console.log( results );

function map(arr, operation) {
    let results = [];

    for (let element of arr) {
        console.log(element * element);
        results.push(operation(element));
    }

    return results;
}

map(numbers, square); // [1,4,9,16,25]
map([1,2], square);
map([23.324,536.4], square);
map([1,2,3,4,5,6,7,8,9,10], square);

map(numbers, addOne);

function square(number) {
    return  number * number;
}

function addOne(number) {
    return number + 1;
} 