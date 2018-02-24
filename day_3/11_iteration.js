// iterating over objects
let me = {
    name: "Jacob Tran",
    age: 39,
    hairColour: "black",
    status: "Married",
    DOB: "December 20, 1978"
    // new Date();
};

//me.hairColour
//top10 = ["Blackbird", "...."];
// for (let property in object) {
//     // all the properties in our object
//     // all the things on the left hand side
//     console.log(property);
//     // all the values of our object
//     object[property]; // value
//     console.log(object[property]);
// }

me.hairColour;
me["hairColour"];
let property = "hairColour";
me[property];

let me = {
    name: "Jacob Tran",
    age: 39,
    hairColour: "black",
    status: "Married",
    DOB: "December 20, 1978"
    // new Date();
    //property: "????"
};

me.name;
me.age;
me.hairColour;
me.status;
me.DOB;
//me.property

for (let property in me) {
  console.log( property );
  console.log( me[ property ] );
  // doesn't work.. i get undefined.. why? it's looking for a property named property and it can't find it
  //console.log(me.property);
}



let me = {
    name: "Jacob Tran",
    age: 39,
    hairColour: "black",
    status: "Married",
    DOB: "December 20, 1978"
};

let propertyList = Object.keys( me ); // return array of properties

propertyList[0]; // "name"

let valueList = Object.values( me ); // return array of values
valueList[0]; // "Jacob Tran"