const add = function(a, b) { return a + b }
const mult = function(a, b) { return a * b }

function mulOperations(a, b, func1, func2) { console.log(func1(a, b));
  console.log(func2(a, b));
}

// mulOperations(5, 6, add, mult);
// mulOperations(5, 6, mult, add);
// mulOperations(5, 6, add, add);
// mulOperations(5, 6, mult, mult);

mulOperations(5, 6, function(a, b) {
  return a - b;
}, mult);
