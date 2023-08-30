// Map is a collection of keyed data items just like an object
// the only difference is that map allows key of any type

let map = new Map(); // creates map
map.set("1", "str1");
map.set(1, "num");
map.set(true, "bol1");

console.log(map.get(1)); //num
console.log(map.get("1")); // str1

console.log(map.size); // 3

// objects can also be used as key

let john = { name: "John" };
let visitedMap = new Map();
visitedMap.set(john, 123);

console.log(visitedMap.get(john)); // 123

//ITERATION OVER MAPS
//  map.keys() returns an iterable of keys
//  map.values() returns an iterable of values
//  map.entries()  returns an iterable for entries [key,value] it is used by default in  for .. of

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // prints all the keys
}

for (let amount of recipeMap.values()) {
  console.log(amount); // prints all the values of keys in map
}

for (let entry of recipeMap) {
  console.log(entry); // prints key value pair
}

// SET
// set of values where each value may occur only once
// this is the only difference between map and set

let set = new Set();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(mary);

console.log(set.size); // 3 as only unique value are stored
