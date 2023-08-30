let single = "rahul";
let double = "rahul";
// both are same only

// backticks allow us to compute inside
let backtick = `5 + 2 = ${5 + 2}`;
console.log(backtick); // 5 + 2 = 7

// backticks allow a string to span multiple lines

let names = `Guest:
* John 
* Mary
* Silly
`;
console.log(names);

let name = "Alexander";
console.log(name.length); // 9  to compute length of string

// Accessing characters

let country = "India";
console.log(country[0]); // I
console.log(country.charAt(0)); //I

for (let letter of country) {
  console.log(letter); // line wise I N D I A
}

// Strings are immutable
//toUpperCase()
//toLowerCase()
// str.indexOf()
//  str.includes()
// str.startsWith()
// str.endsWith() 

// to get substring
// str.slice(1,4); 1 position included 4 not included
// it also accepts negative value which generally mean from end 

// str.substring(1,4)  same as slice
// only difference is if start position is greater than end then it swaps
// eg:- str.substring(6,1) will become str.substring(1,6)

// str.substr(2,4) // starting from position 2 get a substring of length 4 
// in this the start position can be negative to count from end