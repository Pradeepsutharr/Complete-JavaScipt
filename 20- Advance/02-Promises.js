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

// //second way to create a Promise
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Task Two Completed");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise Two Consumed");
// });

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

// using reject parameter and getting value using catch
const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Pradeep", id: "777" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

PromiseFour.then(function (user) {
  console.log(user);
  return user.username;
})
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise either resolved or rejected");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "PradeepSuthar", id: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// async function ConsumePromiseFive() {
//   const response = await PromiseFive;
//   console.log(response);
// }

// ConsumePromiseFive();

async function ConsumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

ConsumePromiseFive();
