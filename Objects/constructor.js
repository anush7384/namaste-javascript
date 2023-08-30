//  regular {...} syntax allows us to create a single object
//  but somteimes we need to create multiple objects 
//  This can be done using constructor Function and the New operator 
// Constructor functions are just same just :-
// They start with Capital letter and executed only with new operator 

function User(name){
    // this={}   behind the scene
    this.name = name;
    this.isAdmin = false;
    // return this  behind the scene 
}

let user = new User("Rajat");
let user2 = new User("Rahul");  
// we were able to create multiple objects
// The main puprose of constructor - to implement reusable object creation code 

// only arrow functions dont have this therefore any function can act as constructor