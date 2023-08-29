var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// CALLBACK FUNCTION
function sample(value, yes, no) {
  if (value) yes();
  else no();
}

function agree() {
  console.log("yes function called");
}

function disagree() {
  console.log("No function called");
}

// THE ARGUMENTS AGREE AND DISAGREE ARE CALLED CALLBACK FUNCTIONS

sample(1, agree, disagree); // yes function called
sample(0, agree, disagree); // no function called

//ANONYMOUS FUNCTION

function sample2(value, yes, no) {
  if (value) yes();
  else no();
}
 // here they are anonymous functions as they have no name and they are not accessible
sample2(
  1,
  function () {
    console.log("Yes function called");
  },
  function () {
    console.log("No function called");
  }
);
