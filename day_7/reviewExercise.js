let isEven = function (x) { return x % 2 === 0; };

const filter  = function(arrayInput, func) {
  const result = [];
  for(let number of arrayInput) {
    if(func(number)) {
      result.push(number);
    }
  }
  return result;
}


filter([1, 2, 3, 4], isEven);
filter([1, 2, 3, 4], function(x) { return x > 2; });
