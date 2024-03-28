// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// new promise () this is the syntax of create a promise... it takes a callback to complete async task

// const PromiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task One Completed");
//     resolve();
//   }, 1000);
// });

// PromiseOne.then(function () {
//   console.log("Promise One Consumed");
//   // this log wont be print if you dont called resolve in previous setTimeOut function
// });

//
//
//

// //second way to create a Promise
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Task Two Completed");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise Two Consumed");
// });

//
//
//
//

// //getting Value from Promise using then method by passing argument (user)
// const PromiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Task Three Completed");
//     resolve({ username: "Pradeep", Email: "Pradeep@mail.com" });
//     //this object will be print in then method using a argument (user) as a parameter in then method
//   }, 1000);
// });

// PromiseThree.then((user) => {
//   console.log(user);
// });

// // using reject parameter and getting value using catch
// const PromiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Pradeep", id: "777" });
//     } else {
//       reject("ERROR: Something Went Wrong");
//     }
//   }, 1000);
// });

// PromiseFour.then(function (user) {
//   console.log(user);
//   return user.username;
// })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("the promise is either resolved or rejected");
//   });

// const PromiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "PradeepSuthar", id: "123" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// async function ConsumePromiseFive() {
//   const response = await PromiseFive;
//   console.log(response);
// }

// ConsumePromiseFive();

// async function ConsumePromiseFive() {
//   try {
//     const response = await PromiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ConsumePromiseFive();

//
//
//
//

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Aksh", id: "123" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000);
// });

// myPromise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//     return name;
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise is either resolved or rejected");
//   });

//
//
//
//

// const mypromiseone = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Aksh", id: "456" });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// });

// mypromiseone
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("mypromiseone is either resolved or rejected");
//   });

//
//
//
//

// const mypromisetwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ game: "pubg", id: "789" });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// });

// async function ConsumeMyPromiseTwo() {
//   try {
//     const response = await mypromisetwo;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("mypromisetwo is either resolved or rejected");
//   }
// }

// ConsumeMyPromiseTwo();

//
//
//
//

// async function getApiData() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products/14");
//     // console.log(response);
//     // const data = response.json();
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("somethign went wrong");
//   }
// }

// getApiData();
//
//
//
//

fetch("https://fakestoreapi.com/products/14")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data.price;
  })
  .then((price) => {
    console.log(price);
  })
  .catch((error) => {
    console.log(error);
  });
