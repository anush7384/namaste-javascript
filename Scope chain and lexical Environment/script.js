// lexical means in hirerachy

// c function is lexically inside b function

// lexical environment is local memory along with the lexical environment of the parent 

// whenever the execution context is created along with the memory space we also get reference to 
// lexical environment of parent

// scope chain is nothing but chain of lexical environement 

function a() {
  var s = 15;
  console.log(b);
  function c() {
    console.log(b);   // b will be available here because it is lexically available to function c 
  }
  c();
}
var b = 10; // scope of the variable b is global
a();
// s is not lexically available at global level and parent 
// console.log(s); // undefined
