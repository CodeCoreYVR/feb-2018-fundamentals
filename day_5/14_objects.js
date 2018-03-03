// class Car {
//     constructor() {
//         this.make;
//         this.model;
//         this.capacity;
//     }
// }

const tesla = {
    make: "Tesla",
    model: "Model 3",
    capacity: 5,
    speed: 60,
    // methods or behaviours
    // this refers to what object we are in
    drive() { console.log(`I am driving at ${ this.speed }km/h.`) },
    park() { console.log("I am parking") },
    stop() { console.log("I am stopping") }
};

tesla.drive();
// what is the car's speed?
tesla.speed; // 50




tesla.park();
tesla.stop();




const porsche = {
    make: "Porsche",
    model: "Cayanne",
    capacity: 5,
    speed: 10,
    // methods or behaviours
    // this refers to what object we are in
    drive() { console.log(`I am driving at ${ this.speed }km/h.`) },
    park() { console.log("I am parking") },
    stop() { console.log("I am stopping") }
};

porsche.drive();

const bmw = {
    make: "BMW",
    model: "Roadster",
    capacity: 2,
    speed: 100,
    // methods or behaviours
    // this refers to what object we are in
    drive() { console.log(`I am driving at ${ this.speed }km/h.`) },
    park() { console.log("I am parking") },
    stop() { console.log("I am stopping") }
};

bmw.drive();


const wife = {
    name: "Julia",
    baby: {
        name: "Junior",
        run() { console.log(`${this.name} is running...`) }
    },
    run() { console.log(`${this.name} is running...`) }
}

wife.run();
wife.baby.run();

class Human {
    constructor() {
        // instance variable, belongs to the object that will be created
        this.name = "";
        // name = "Jacob";
        // regular variable, it's scope is only within the constructor function
        name = "";
    }
}

const me = new Human();
me.name = "Jacob";