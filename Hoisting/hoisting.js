getName(); // Hello everyone
console.log(x); // undefined
getAddress(); // getAddress is not function
// as it behaves like a variable
getAge(); // getName is not a function
// as it is an arrow function it will not behave like function but act like variable
// so in memory creation phase it will be stored as undefined not as a function whole
// this is the difference in regular function declaration and arrow functions.

// console.log(a);  // not defined

console.log(getName); // function

var x = 10;

function getName() {
  console.log("Hello Everyone!");
}

getAddress = function () {
  console.log("India");
};

var getAge = () => {
  console.log("Age is 20");
};
