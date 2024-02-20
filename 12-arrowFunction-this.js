// const user = {
//   username: "himanshu",
//   price: 150,

//   msg: function () {
//     console.log(`${this.username}, welcome to program`); //this means current context(inside curly brackets)
//     console.log(this); //function should be called with the object context with "user"
//   },
// };
// user.msg(); //output=> { username: 'himanshu', price: 150, msg: [Function: msg] }

// user.username = "harshdeep"; // here we have changed the value of username

// user.msg(); //output=> { username: 'harshdeep', price: 150, msg: [Function: msg] }

// console.log(this); //output will be empty  but in the browser it will gives you window object coz window is the global object of browseer

/*
|
|
|
|
|
|
|
*/
// // first way to create Arrow function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(2, 8));

/*
|
|
|
|
|
|
|
*/

// // second way to create arrow function
// const addnums = (num3, num4) => num3 + num4; // in this way we dont have to write "Return" keyword  and curly brackets
// console.log(addnums(3, 5));

/*
|
|
|
|
|
|
|
*/

// // third way to create arrow function
// const fullName = (firstName, lastName) => firstName + " " + lastName;
// console.log(fullName("pradeep", "suthar"));

/*
|
|
|
|
|
|
|
*/

// // return object with arrow function
// const myName = (first, last) => ({ first: "pradeep", last: "suthar" });
// console.log(myName());

/*
|
|
|
|
|
|
|
*/

// // return array with arrow function
// const myArray = (x, y) => [100, 300];
// console.log(myArray());
