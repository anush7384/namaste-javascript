var a = 100;
let b = 100;
{
  var a = 10;
  let b = 10; // this b has a block scope
  console.log(a); //10 this variable shadows global variable
  console.log(b);   // 10 let shadows the outer variable and hence 1- is printed but it doesnt modifies outer varibale
}
console.log(a); // 10 as inner a shadows the outer a and hence updates it
console.log(b); // 100 

let x = 10;
{
    var a = 100; // illegal shadowing 
    // we cannot shadow a let using a var
}
