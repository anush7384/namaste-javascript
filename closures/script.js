//function along with its lexical scope is called closure
// in other words closure gives us access to an outer function scope from inner function
// closures are created everytime a function is created

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  // y();
  return y;
}
// x();
var z = x();
console.log(z);
z();

// uses of closures
// Module Design pattern 
// Currying
// Functions like once 
// memoize 
// maintaining state in async 
// setTimeouts 
// ...
