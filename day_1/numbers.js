// you define numbers by simply typing the numbers out like this:
5
7.8

// you can do all standard operations on numbers like:
5 * 5
8 - 2
8 / 2
1 + 4

// Note that we prefer to put spaces around operators like + - / *
// to make the code easier to read. This will work:
1+1

// but this is easier to read:
1 + 1

4 ** 4 // this will rase 4 to the power of 4

1 / 0      // Infinity
-1 / 0     // -Infinity
"asfd" / 5 // NaN

10 % 4 // this will give you the remainder of dividing 10 by 4 which is 2


// You can use the Math library to do more sophisticated opertions:

Math.random()   // 0.13672420774515048
Math.round(1.3) // 1
Math.round(1.5) // 2
Math.floor(1.7) // 1
Math.floor(1.1) // 1
Math.ceil(1.1)  // 2
Math.ceil(1.9)  // 2


4 + 4 * 2    // 12
(4 + 4) * 2  // 16

// Write a piece of code that generates a random number between 0 and 99
Math.round(Math.random() * 99)
Math.floor(Math.random() * 100)
Math.ceil(Math.random() * 99) - 1
