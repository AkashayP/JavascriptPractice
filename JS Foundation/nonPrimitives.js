const obj = {
    firstname: "Akashay",
    isLoggedIn: true
};
// console.log(obj);
// console.log(typeof obj);

let username = {
    firstname: "Akashay",
    isLoggedIn: true,
    'My Status': "Married"
};

username.firstname = "Mr. Akki" // Const object values can be changd because the object is const but inside values are not
username.lastname = "Singh" // This will initialize a new value pair into a Object

// console.log(username);
// console.log(typeof username);
// console.log(username.firstname);
// console.log(username['lastname']); // Another way to access values in a object
// console.log(username['My Status']);// We use this for these kind of naming conventions;

let today = new Date();
// console.log(today);
// console.log(today.getDate());

//Array 
let anotherUser = ["Akashay", true] 
// console.log(anotherUser[0]);

