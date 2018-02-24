let word = "tell";

for (let character of word) {
    console.log(character);
    // t, e, l, l
}

// strings and arrays are closely related
word[0]; // "t"
word[1]; // "e"
word[2]; // "l"
word[3]; // "l"

word[1] = 'o'; // will fail silently

// word = "toll";
// you can access individual characters
// but array mutation or modification is not supported

// string and array methods that are linked
let characters = word.split("");
// ["t", "e", "l", "l"];
characters[1] = "o";
// ["t", "o", "l", "l"];

let newWord = characters.join(""); // "toll"