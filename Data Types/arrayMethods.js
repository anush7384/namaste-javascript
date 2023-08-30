let fruits = ["apple", "banana", "orange", "kiwi", "papaya"];
fruits.splice(1, 1); // from index 1 remove 1 element
console.log(fruits); // banana will be removed

let fruits2 = ["apple", "banana", "orange", "kiwi", "papaya"];
fruits2.splice(1, 2, "lemon", "tomato"); // remove 2 elemts from 1st position and add lemon tomato instead
console.log(fruits2); // lemon and tomato added in place of banana

let fruits3 = ["apple", "banana", "orange", "kiwi", "papaya"];
let removedFruits = fruits3.splice(1, 2); // remove 2 fruits from 1st position and return it
console.log(removedFruits);
fruits3.splice(1, 0, ...removedFruits); // elements can also be inserted
console.log(fruits3);

// arr.slice
// it returns new array
let arr = [1, 2, 3, 4, 5];
let newarr = arr.slice(2, 4); //from 2 till 3 not including 4
console.log(newarr);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

let random = ["apple", "banana", "orange"];
let result = random.map((item) => item.length);
console.log(result); // [5,6,6]

// split converts string to array using delimiter
let names = "rahul,rajat,rohan";
let nameArr = names.split(","); // convert string into array using delimiter

console.log(nameArr); //["rahul","rajat","rohan"]

// join   it does opposite of split
// it joins array using delimeter and converts it to string

let ages = [10, 20, 30];
let str = ages.join(",");
console.log(str); // 10,20,30
