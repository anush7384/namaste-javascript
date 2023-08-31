{
  // Copound Statement combines multiple js statements into group
  // block is defined by these curly braces This is a perfectly valid js code
  // var a = 10;
  // console.log(a);
}

// block space means what all variables and functions we can access inside this block
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10
// console.log(b);  Reference error b is not defined 

// let and const are inside block scope
//i.e. we cannot access let and const outside block

// var is hoisted inside global scope
// var can be accessed outside block