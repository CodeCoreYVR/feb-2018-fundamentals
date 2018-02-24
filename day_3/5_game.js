// game array

// _|_|_
// _|_|_
//  | |

// https://docs.google.com/spreadsheets/d/1Dk4XXBODB-3tKclUcqcIIyg-BxnHs97naDERJuD7cKo/edit?usp=sharing

let row1 = [null, null, null];
//           0     1     2
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [row1, row2, row3]

// multi-dimensional array
let tictactoe = [
    [null, null, null],  // 0
    // 0    1     2
    [null, null, null],  // 1
    [null, null, null]   // 2
];

// i want to place an "X" in the middle of my game board
row2[1] = "X";
// for each dimension in our multi-dimensional array we have to pass in the corresponding amounts of information
// 2 dimensional arrays requires 2 pieces of information
tictactoe[1][1];

tictactoe[1]; // [null, null, null] : row 2
tictactoe[row][col];