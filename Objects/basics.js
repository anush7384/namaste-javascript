let object = new Object(); // constructor syntax
let user = {}; //object literal syntax
// values are added as key value pair

let newUser = {
  name: "John",
  age: 17,
};

console.log(newUser.name); // john
// adding a new value
newUser.isAdmin = true;
console.log(newUser); // new property has been added

// to remove a property
delete newUser.age;
console.log(newUser); // age property has been removed

let user2 = {
  name: "Ray",
  age: 19,
  "likes bird": true, // for multi word property must be quoted
};

// user2.likes bird = false   // this would give error
// instead use

user2["likes bird"] = false;
console.log(user2);
delete user2["likes bird"];
console.log(user2);

function userCreator(name, age) {
  return {
    name: name, // or we could have simpler written name,
    age: age,
  };
}

let user3 = userCreator("Kylie", 20);
console.log(user3);

// in operator in Objects to check if property exists or not

console.log("name" in user3); // true as name exists in user3
console.log("likes bird" in user3); // false as this property doesnot exist
let key = "age";
console.log(key in user3); // true as age is in user3

// for in loop for object

for (key in user3) {
  console.log(key + " : " + user3[key]);
}
