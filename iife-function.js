// IIFE function    (immedietly invoked function expression)
// () first brackets for function and second () brackets are for call the function
// while using iife function we must have to write semicolon after calling previous function

(function secondFunction(num) {
  console.log(num);
  return num;
  console.log("called inside iife function");
  // console.log(a)
})(5);

// secondFunction(60)   // will not execute

/*
|
|
|
|
|
|
*/

(() => {
  console.log("called inside arrow iife fuction");
  // console.log(a)
})();

/*
|
|
|
*/

// //passing parameter and argument in iife function
// ((parameter) => {
//     console.log(`called inside with ${parameter}`)
// })("pradeep");
