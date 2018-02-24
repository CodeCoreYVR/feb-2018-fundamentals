// input start
let word = "tell";
let characters = word.split("");
const result = {};

for(let character of characters) {
  if (result[character] == undefined) {
    result[character] = 1;
  } else {
    result[character] += 1;
  }
}

let max = 0;
for (let entry in result) {
  if (result[entry] > max) {
    max = result[entry];
  }
}