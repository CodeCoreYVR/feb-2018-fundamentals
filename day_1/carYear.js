const year = parseInt(prompt('Give me the year of your car'));

if(year > 2018) {
  console.log('The car is in the future');
} else if(year > 2010) {
  console.log('The car is new');
} else if(year > 2000) {
  console.log('The car is old');
} else {
  console.log('The car is very old');
}
