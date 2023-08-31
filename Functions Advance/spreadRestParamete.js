function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4)); // it is ok to call with multiple arguments but for result only starting 2 will be used

function sum2(...args) {   // rest parameter   and it should always be at the end
  let sum = 0;
  for (let num of args) {
    sum = sum + num;
  }
  return sum;
}
console.log(sum2(1, 2, 3)); // possible
console.log(sum2(3, 2, 7, 8, 9)); // possible for any no of arguments

let nums = [1,2,7,3,9,4];
console.log(Math.max(1,2,7,3,9,4));
console.log(Math.max(...nums));  // spread parameter it destructures the array

let arr1 = [3,9];
let arr2 = [8,6];

let resultingArr = [...arr1,0,...arr2];  // valid 
console.log(resultingArr);
