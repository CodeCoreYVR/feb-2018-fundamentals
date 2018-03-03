new Date(); // 2018-03-03T19:14:37.533Z
// greenich mean time

// asychronous
// 2 built in higher order functions that relate to time
// function setTimeout(fn, delay) {
//     // wait a certain amount of time based on the delay.
//     // when that time expires
//     // execute the function that was passed in
//     fn();
// }

function sayHi() {
    console.log("Hello!");
}

// delay is in milliseconds
// 1s == 1000 ms
setTimeout(sayHi, 3000);

// restaurant example
function steak() {
    console.log( "steak" );
}
function cheeseCake() {
    console.log( "cheese cake" );
}
function mussels() {
    console.log( "mussels" );
}

setTimeout(steak, 5000);
setTimeout(cheeseCake, 10000);
setTimeout(mussels, 2000);

// setInterval();
// continues calls the instruction
function sayHi() {
    console.log("Hello!");
}

setInterval(sayHi, 3000);

// function setInteral(fn, delay) {
//     while(true) 
//     {    
//         // wait a certain amount of time based on the delay.
//         // when that time expires
//         // execute the function that was passed in
//         fn();

//         // if (the user cancels the interval)
//         //   break;
//     }

//     return unique_id;
// }

let counter = 0;
let counter2 = 0;

function sayHi() {
    console.log("Hello!");
    counter++;
    if (counter > 10) {
    	clearInterval(id);
    }
}

function sayGoodbye() {
    console.log("Bye!");
    counter2++;
    if (counter2 > 10) {
    	clearInterval(id);
    }
}

let id1 = setInterval(sayHi, 1000);
let id2 = setInterval(sayGoodbye, 1000);

// behinds the scenes of javascript 
// there is a cook in the kitchen, sous chef
// gordon ramsey
// event oriented
