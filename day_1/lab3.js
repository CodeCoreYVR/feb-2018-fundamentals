// Write a Javascript code that generates a random number for the user's score (0 - 100) in a variable score and then prints out their letter grade (F - A+).
//

const score = Math.round(Math.random() * 100)

if(score > 80) {
  console.log('A');
} else if (score > 70) {
  console.log('B');
} else if (score > 60) {
  console.log('C');
} else if (score > 49) {
  console.log('D');
} else {
  console.log('F');
}
