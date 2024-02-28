const PromiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task One Completed");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("Promise One Consumed");
  // this log wont be print if you dont called resolve in previous setTimeOut function
});

//
//
//
//
//

//second way to create a Promise

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task Two Completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise Two Consumed");
});
