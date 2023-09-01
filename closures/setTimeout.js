// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Hello");  // this will be printed before set timeout
// }
// x();

//This is expected code for printing 1 after 1 second 2 after 2 seconds and so on till 5

// function x() {
//   for (var i = 1; i <= 5; ++i) {
//     setTimeout(function () {
//       console.log(i); // here due to closure this function has reference to i not value of i
//     }, i * 1000); // so when i is to be printed its value has already been incremented to 6
//   } // therefore output is 6 6 6 6 6
// }
// x();

// This is  one of the correct implementation
// also if we use let instead of var then also our goal is accomplished
// because let is a block scoped so each and every loop will have its own i

// function x() {
//   var count = 1;
//   for (var i = 1; i <= 5; ++i) {
//     setTimeout(function () {
//       console.log(count); // here count is only incremented after it has been printed
//       count++; // so the output is 1 2 3 4 5
//     }, i * 1000);
//   }
// }
// x();

function x() {
  for (var i = 1; i <= 5; ++i) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x(); // this will work fine because we are providing each time a new variable to the function using closure
