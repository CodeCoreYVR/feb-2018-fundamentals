// welcome to your first day at amazon
// make me an array of books
// order it in alphabetical order

let books = [];
books[0] = "The Secret";
books[1] = "Harry Potter";
books.push("The Lord of the Rings");
books.push("The Bible");

// https://www.w3schools.com/js/js_array_sort.asp
books.sort();

// give the array of book sales, determine the total sales for this quarter
// [ 'Art of War',
// 'Harry Potter',
// 'Sapien',
// 'The Bible',
// 'The Lord of the Rings',
// 'The Secret' ]
let sales = [5.99, 25.67, 19.89, 32.50, 100.00, 0.99];
let total = sales[0] + sales[1]+ sales[2]+ sales[3]+ sales[4]+ sales[5];

// loop, iterator, for...of
let total = 0;

for (let sale of sales) {
    console.log( sale );
    total += sale;
    // total = total + sale;
}

console.log("The total sales are: " + total);
console.log(`The total sales are:  ${ total } `);


