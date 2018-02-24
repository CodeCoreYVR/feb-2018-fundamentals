// greeting
// good morning
// how are you?
function greet() {
    console.log("Hi");
}

greet();
greet();
greet();
greet();
greet();
greet();
greet();
greet();

//function greetName( parameter ) {
function greetName( name ) {
    //console.log( name ); // can access name
    console.log("Hi " + name);
    // console.log(`Hi ${name}`);
}

//console.log(name); // error.. name not found
//greetName( argument );
greetName("Claire");
greetName("Youssef");