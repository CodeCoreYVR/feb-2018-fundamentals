// Password Checker Edit Next Module
// Ask the user for a password in a variable called ‘password` then:
//
// If the password is longer than 12 characters, log to the console "Too long!".
// If the password is less than 8 characters, log to the console "Too short!".
// Otherwise, log to the console "Just right!".

const password = prompt('Enter a password');
const passwordLength = password.length;

if(passwordLength > 12) {
  console.log('Too long');
} else if(passwordLength < 8) {
  console.log('Too short');
} else {
  console.log('Just right!');
}
