// FizzBuzz
// Write code that prompts the user for two numbers, then iterates through
// the numbers 1 - 100. The function will print "fizz" if the current number is
// divisible by the first number, "buzz" if the current number is divisible by
// the second number, "fizzbuzz" if it's divisible by both, else print the
// current number.

const number1 = parseInt(prompt('Give me number 1'));
const number2 = parseInt(prompt('Give me number 2'));

for(let i = 1; i <= 100; i++) {
  if(i % number1 === 0 && i % number2 === 0) {
    console.log('FIZZBUZZ');
  } else if(i % number1 === 0) {
    console.log('FIZZ');
  } else if(i % number2 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
}
