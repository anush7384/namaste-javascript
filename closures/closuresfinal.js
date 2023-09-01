// currying
// memoisation
// data hiding and encapsulation

// function counter() {
//   var count = 0;

//   return function incrementCounter() {
//     count++;
//   }
// }
// // console.log(count);  // hidden so not available error will come
// var counter1 = counter();
// counter1(); // will be used to increment the counter without even showing the count variable

// var counter2 = counter();  // this will be a fresh counter with new variable count

// constructor function

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();   // constructor function
counter1.incrementCounter();
counter1.decrementCounter();


//DISADVANTAGES OF CLOSURES
// over consumption of memory as those variables are not garbage collected till the program expires
// if not handled properly it can lead to memory leak



