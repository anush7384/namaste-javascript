let user = {
  name: "Anush",
  age: 21,
};

// a function that is property of an ibject is called method

user.sayHello = function () {
  console.log("Hello");
};

user.sayHello(); // function envoked;

// another method of delaring method
let user2 = {
  sayHi: function () {
    console.log("Hello User 2");
  },
};
user2.sayHi();

//better way to have a method than previous
let user3 = {
  sayHi() {
    console.log("Hello user 3");
  },
};
user3.sayHi();

let user4 = {
  name: "Anush",
  age: 21,
  sayHi() {
    // here this refers to current object
    console.log("hi from " + this.name); // hi from Anush
  },
};

user4.sayHi();

// the value of this is evaluated on run-time depending on the context
let user7 = { name: "John" };
let admin7 = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user7.f = sayHi;
admin7.f = sayHi;

user7.f(); // here this means user7
admin7.f(); // here this means admin7
