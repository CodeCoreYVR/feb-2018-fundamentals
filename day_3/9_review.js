// for .. of
// is a way to step through your array
let packingList = [
    "socks",
    "ticket",
    "toothbrush"
];

packingList[0]; // "socks"
packingList[1]; // "ticket"
packingList[2]; // "toothbrush"

// iteration - computer will do the hard work for us
for (let item  of packingList) {
    console.log( item );
}

// for (init; condition; increment) {}
// packingList.length == size of the array
for (let i=0; i<packingList.length; i++) {
    console.log( packingList[i] );
}

// for (let i=3; 3<3; i++) {
//     console.log( packingList[2] );
// }