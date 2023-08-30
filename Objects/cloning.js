// objects differ from primitives as they are stored and copied by reference

let user = {
  // object is created in memory and user has refernce to it
  name: "Anush",
  age: 22,
};

let admin = user; // now admin also has refernce to that memory

admin.name = "John";
console.log(user.name); // john because it has been updated by admin.name

const user2 = {
  // const objects can be updated
  name: "Rajat",
  age: 22,
};

user2.name = "Sahil"; // updated

// user2 = user;
// this will give error as user2 is constant which means it will only point to that reference

// OBJECT CLONNING

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

console.log(clone); // clone now has all the property and value of user

// using Object.assign

let clone2 = {};
let obj1 = {
  name: "Raj",
};
let obj2 = {
  age: 55,
};
Object.assign(clone2, obj1, obj2);
console.log(clone2);

// for nested objects use structuredClone(object) instead of assign
let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

// let clone5 = structuredClone(user);
