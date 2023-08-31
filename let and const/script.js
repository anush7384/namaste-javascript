console.log(b); // undefined
// console.log(a);  // cannot access before initializatio
let a = 10;
console.log(a);
var b = 100;

const d = 1000;
// const behaves the same way in hoisting as let
// but it is more strict than let
let x; // can be declared
// const y; // error const must assigned a value during declaration itself
//Syntax error   will be shown

const z = 19;

// z = 20; // this will give type Error
