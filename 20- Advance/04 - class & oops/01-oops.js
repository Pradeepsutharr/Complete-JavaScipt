//  literals

// const user = {
//   username: "pradeep",
//   id: "7",
//   isLoggedIn: true,
//   getUserDetails: function () {
//     console.log("got user details");
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());

//
//
//
//
//

// constructor

function user(username, id, isLoggedIn) {
  this.username = username;
  this.id = id;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = user("pradeep", 7, true);
const userTwo = user("aksh", 8, false);

// console.log(userOne); //output=> 'aksh',8,false

const user1 = new user("pradeep", 7, true);
const user2 = new user("aksh", 8, false);

// the new keyword is known as instance,,, it always gives you a new instance of target object or function

console.log(user1); //output=>  user { username: 'pradeep', id: 7, isLoggedIn: true }
console.log(user2); // output=> user { username: 'aksh', id: 8, isLoggedIn: false }
