function isEven( number ) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function isOdd( number ) {
	if (number % 2 != 0) {
		return true;
	} else {
		return false;
	}
}

function isDivisibleByTen(number) {
	return number % 10 === 0;
}

function check(number, fn) {
	return fn(number);
}

check(6, isEven);
check(100, isDivisibleByTen);

// higher order function that filters out an array based on a function
function filter(arr, fn) {
    let results = [];

    // iterate over the array
    // apply the function to that specific element
    // add it to my results array if it's true
    // or leave it out if it's false
    for (let element of arr) {
        let result = fn(element);

        if (result == true) {
            results.push(element);
        }
    }

    return results;
}

filter([1,2,3,4,5], isEven); // [2, 4]
filter([1,2,3,4,5], isOdd); // [1, 3, 5]
filter([10,20,31,40], isDivisibleByTen); // [10, 20, 40]













