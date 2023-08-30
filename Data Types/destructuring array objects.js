let name = ["Anush", "Rawat"];
let [firstName, lastName] = name; // the array items have been destructured into variables
console.log(firstName); // Anush
console.log(lastName); // Rawat

let name1 = ["Jai", "Singh", "Rawat"];
let [first, , second] = name1; // ignored middle index

// the rest ... parameter

let names = ["Rahul", "rohan", "rajat", "robin", "rolph"];
let [a, b, ...restStudents] = names; // a = rahul b = rohan
console.log(restStudents); // [rajat,robin,rolph]


//OBJECT DESTRUCTURING
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;
console.log(title);
console.log(width);
console.log(height);
