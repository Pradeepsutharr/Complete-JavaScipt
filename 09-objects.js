// //singleton
// //object.create

// //object literals

const mySymbole = Symbol("key1");

const user = {
  name: "Pradeep",
  "full Name": "Pradeep Suthar",
  age: 22,
  email: "pradeep@pysquad.com",
  isloggedIn: false,
  loginDays: ["monday", "friday"],
  // mySymbole: "myKey1", // string
  [mySymbole]: "myKey1",
};

// console.log(user.name);
// //output=> Pradeep

// // console.log(user."full Name");
// // //output=>

// console.log(user["full Name"]);
// //output=> Pradeep Suthar

// console.log(user.mySymbole);
// console.log(typeof user.mySymbole);
// //output=> myKey1 (but representing as a string)

// console.log(user[mySymbole]);
// console.log(typeof user[mySymbole]);
// //output=> same as previous but treating as a symbol

// // console.log(user);
// // /*output=> {
// //   name: 'Pradeep',
// //   'full Name': 'Pradeep Suthar',
// //   age: 22,
// //   email: 'pradeep@pysquad.com',
// //   isloggedIn: false,
// //   loginDays: [ 'monday', 'friday' ],
// //   key1: 'myKey1'
// // }*/

// console.log(user);
// user.email = "psuthar318@gmail.com";
// Object.freeze(user);
// // it will freeze the object values  cannot be changed after this line of code
// user.email = "pradeepsuthar@gmail.com";
// //this value will not applied
// console.log(user);

// user.greet = function () {
//   console.log("Hello User");
// };

// user.greetTwo = function () {
//   console.log(`Hello user,${this.name}`); // this.name = current context => user.name
//   console.log(`hello user,${this["full Name"]}`);
//   console.log(`hello user,${user.email}`);
// };

// console.log(user.greet());
// console.log(user.greetTwo());

/*
|
|
|
|
|
|
|
*/

// //creating object in second way

// const AppUser = {};
// AppUser.name = "Pradeep";
// AppUser.id = 777;

// // console.log(AppUser);

// const NewUser = {
//   email: "pradeep@gmail.com",
//   fullname: {
//     userfullname: {
//       fisrtname: "Pradeep",
//       lastname: "suthar",
//     },
//   },
// };

// console.log(NewUser.fullname);
// // output=> { userfullname: { fisrtname: 'Pradeep', lastname: 'suthar' } }

// console.log(NewUser.fullname.userfullname);
// // ountput=> { fisrtname: 'Pradeep', lastname: 'suthar' }

// console.log(NewUser.fullname.userfullname.fisrtname);
// //output=> Pradeep

// console.log(Object.keys(AppUser)); //output=> [ 'name', 'id' ]

// console.log(Object.values(AppUser)); //output=> [ 'Pradeep', 777 ]

// console.log(Object.entries(AppUser)); //[ [ 'name', 'Pradeep' ], [ 'id', 777 ] ]

// console.log(AppUser.hasOwnProperty("full name")); //output=> false

// console.log(AppUser.hasOwnProperty("name")); //output=> true

/*
|
|
|
|
|
|
|
|
|
|
|
|
*/

//merging Objects

// const obj1 = { 1: "A", 2: "B" };
// const obj2 = { 3: "C", 4: "D" };

// const mergeObj = Object.assign(obj1, obj2);
// // const mergeObj = Object.assign({}, obj1, obj2); //  this is also a way to do it

// console.log(mergeObj);
// //output=> { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// const mergeObjTwo = { ...obj1, ...obj2 };
// console.log(mergeObjTwo);

/*
|
|
|
|
|
|
|
|
|
*/

//object Adv.
//destructuring

const course = {
  courseName: "javaScript",
  coursePrice: 999,
  courseInstructor: "Pradeep",
};

const { courseName } = course; // we add one or more keys  from the object into variables
// console.log(courseName); //output=> JavaScript

const { courseInstructor: instructor } = course; //we can change the name (key) in this way
// console.log(instructor); //output=> Pradeep
