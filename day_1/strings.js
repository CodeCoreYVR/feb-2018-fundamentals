'this is a string'
"this is also a string"
`this yet another way to define a string`

// functionally speaking, single quotes and double quotes are the same
'he said "Hello World"'
"he said it's raining"

// you can escapse characters by putting \ before every the special character
"he said \"Hello World\""

// to put a line-break use \n
"he said \n \"Hello World\""

// combining string with +
'Hello' + ' ' + 'World' + '!'

// you can only do string interpolation with backticks as in:
`1 + 1 is ${1 + 1}`

'1 + 1 is ' + (1 + 1)
// String interpotaion with backticks is an ES6 feature which is supported in
// all modern browsers


"abc".length // 3
"".length    // 0

parseInt("1.3");   // 1
parseInt("1.9");   // 1
parseFloat("1.9"); // 1.9


// Create a string “Hello, [Your Name]!” by concatenating 3 strings
// Compute the length of that string
"Hello, " + "Jose" + "!"

"Hello, " + "Jose" + "!".length // "Hello, Jose1"
("Hello, " + "Jose" + "!").length // 12

// Find out how to remove beginning and trailing spaces from Javascript
// strings from MDN
'   Tam   '.trim();
