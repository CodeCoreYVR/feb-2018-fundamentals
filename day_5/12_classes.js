// classes + methods
class Human {
    constructor(name) {
        console.log("A human was constructed.");
        // this is a keyword asking, where am i?
        // what object is this?
        this.name = name;
    }
    run() {
        console.log("A human is running fast.");
    }
}

const me = new Human("Jacob");
me.run();
const wife = new Human("Julia");
wife.run();