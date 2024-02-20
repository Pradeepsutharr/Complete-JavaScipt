// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }
// // addNums(3, 6); //output=> 9
// // addNums(3, "4"); //output=>34
// // addNums(3, "a"); //output=> 3a
// // addNums(3, null); //output=>3

/*
|
|
|
|
*/

// function addNums(num1, num2) {
//   return num1 + num2; //if uh want hold the result value in a variable  use this method instead of using console log
// }

// const addedNums = addNums(4, 5);
// console.log(addedNums); //output=> 9

/*
|
|
|
|
|
*/

// function addNums(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// const result = addNums(4, 5);
// console.log(result); //output=> 9

/*
|
|
|
|
|
*/

// function isloggedIn(username) {
//   return `${username} just logged in`;
// }
// const message = isloggedIn("Pradeep");
// console.log(message); //output=> Pradeep just logged in

/*
|
|
|
|
|
*/

// function logginMsg(username) {
//   if (username != undefined) {
//     return `${username} just logged in`;
//   } else {
//     return "plz enter username";
//   }
// }
// console.log(logginMsg()); //output=> undefined just logged in
// // console.log(logginMsg("Pradeep")); //output=> Pradeep just logged in
// // console.log(logginMsg("pradeep"));

/*
|
|
|
|
|
|
*/
// function calculateManyNums(...num) {
//   //... is a rest operator which allows us to pass any count of numbers in function parameter
//   // console.log(num)           //this console will be visible only when function is called
//   return num;
// }
// // calculateManyNums(10, 20, 40, 80);
// console.log(calculateManyNums(10, 20, 40, 80, 60, 100, 500)); //it will gives all the items in An "ARRAY"

// function calculateNums(num1, num2, ...nums) {
//   console.log(num1); //it will gives only first value
//   console.log(num2); //it will gives you second value
//   console.log(nums); //it will gives rest values after num1 And num2  (first value will be consider for num1 and second will be for num2)
// }
// calculateNums(100, 500, 300, 800);

/*
|  
|
| 
|
|
*/

// // handling object through function
// const user = {                  //object 1
//     username: "pradeep",
//     id: 777
// }

// const person = {                 //object 2
//     username: "Ruhi",
//     id: 111
// }

// function objectHandle(anyObject) {    //here we are passing object word so we can handle any object through function we can use any words instead of object
//     console.log(`username is ${anyObject.username} and id is ${anyObject.id}`)
// }
// objectHandle(person)
// objectHandle(user)

/*
|
|
|
|
|
|
*/

//we can also pass a object directly in argument

// objectHandle({
//     username: "Kinjal",
//     id: 123
// })

/*
|
|
|
|
|
|
*/

// // handling Array

// const NewArray = [200, 400, 800, 1000]

// function handleArray(anyArray) {
//     console.log(anyArray[2])
//     // return anyArray[2]
// }

// handleArray(NewArray)
// // console.log(handleArray(NewArray))

// // handleArray([500, 700, 900, 1100])  // we cam also pass an Array directly like this
