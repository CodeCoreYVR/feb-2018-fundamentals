// amazon
let shoppingCart = ["Apple Watch", "toothbrush", "DaVinci Code"];

const watch = {
    price: 400,
    description: "A rectangular wrist cover",
    image: "apple_watch.jpg" 
    // reviews:
};
const toothbrush = {
    price: 1.99,
    description: "Oral-B flexible and soft.",
    image: "toothbrush.png"
};
const book = {
    price: 19.95,
    description: "Dan Brown's best selling novel.",
    image: "dav.gif"
};

let shoppingCart = [watch, toothbrush, book];

// i'm the designer, i need to know all the images that are in this shopping cart
// i'm the copywriter, i need to know all the descriptions to see if they are grammatically correct
// i'm the accoutant, i need to know the total cost of this shopping cart
// the cost of an apple watch
let total = shoppingCart[0].price + shoppingCart[1].price + shoppingCart[2].price;

let total = 0;
let images = [];
let copy = "";

for (let item of shoppingCart) {
    total += item.price;
    images.push(item.image);
    copy += item.description + "\n";
}

console.log( total );

// JSON == JavaScript Object Notation