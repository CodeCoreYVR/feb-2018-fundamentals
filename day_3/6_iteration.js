// iteration
let top10 = [
    "Blackbird", 
    "Because", 
    "Within You", 
    "Hard Days Night", 
    "Revolution",
    "Rocky Raccoon",
    "Billy Jean",
    "God Only Knows",
    "Voodoo Child",
    "Human"
];

// iteration or looping
// arrays and for loops
top10[0];
top10[1];
top10[2];
top10[3];
top10[4];
top10[5];
top10[6];
top10[7];
top10[8];
top10[9];

// loops
// length property will return a number that represents how many items you have in your list
top10.length; // 10

for (let i=0; i<top10.length; i++) {
    // i = 0
    // i = 1
    // i = 2.....
    console.log(top10[i]);
}

// for each
// for (let element of array) {}
for (let song of top10) {
    console.log( song );
}

// for (let name of names) {}

let tictactoe = [
    [null, null, null],  
    [null, null, null],  
    [null, null, null]   
];

// when we have a 2 dimensional array
// we need 2 pieces of information to get to the data

// we need 2 loops to iteration
// nested loop structure

// flattening removes all the dimensions 
// we just want the pure data
for (let row of tictactoe) {
    //console.log( row ); // array

    for (let column of row) {
        console.log( column );
    }
}

for (let row=0; row<tictactoe.length; row++) {
    for (let col=0; col<tictactoe[row].length; col++) {
        console.log( tictactoe[row][col] );
    }
}