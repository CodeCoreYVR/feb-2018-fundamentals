let mom = {
    name: "Maria",
    age: 68,
    children: ["Jacob", "Anthony", "John", "Theresa"],
    car: {
        make: "Toyota",
        model: "Prius",
        capacity: 5,
        features: ["AC", "Moon Roof", "Alarm"]
    }
};

mom.car; // "Prius"

// what is my mom's 2nd oldest child?
mom.children[2];
// how many people fit in my mom's car?
mom.car.capacity;
// what is the first feature of that car?
mom.car.features[0];
