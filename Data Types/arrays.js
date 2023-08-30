let arr = new Array();
let arr2 = [];
// Both are same declaration

// Array can store element of any type
let arr3 = [
  100,
  "anush",
  { car: "Bmw", color: "white" },
  function () {
    console.log("hello");
  },
];
console.log(arr3[2].color); // white
 
//QUEUE
// push appends an element to the end
// shift gets an element from the begining and 2nd one becomes first and so on...
// unshift adds an element to the begining

//STACK
// push adds element to the end 
// pop takes an element from the end 