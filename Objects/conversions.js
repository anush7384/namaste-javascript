// Conversion rules
// no conversion to boolean as all objects are true
// there exist only string and numric conversion

// Numeric conversion happens when we subtract/add objects or apply mathematical functions
// eg: Date and time object  date 1 - date 2 will give time difference between dates

// string conversion happens if we output object as in console.log(object)


let user = {
    name:"John",
    salary:1000,

    toString(){
        return `{name: "${this.name}"}`
    },

    valueOf(){
        return this.salary;
    }
}

console.log(user);  // name:"john"  as it will by default convert object to string
console.log(user+100);  // 1500 as + will do numeric conversion so valueOf will be used

