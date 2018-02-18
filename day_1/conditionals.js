const number = parseInt(prompt('Give me a number'));

if(number > 1000) {
  console.log('The number is large');
} else if(number > 500) {
  console.log('The number is medium');
} else if(number > 100) {
  console.log('The number is small');
} else {
  console.log('The number is extra small');
}

// Notes:
// 1. all starts with `if`, you should at least have that
// 2. you can optionally have one or more `else if` with conditions
// 3. you can optionally have one `else` that is the default in case none of the
//    conditions were met
