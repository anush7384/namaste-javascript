// window is a global object which is created along with the global execution context
// incase of browser this global object is windows

// console.log(window);

// console.log(this===window);// at global level this is true;

var a = 10;
function b() {
  var x = 10;
}
// console.log(window.a); //10
console.log(a);
// console.log(x); //not defined
// console.log(this.a); // 10 
