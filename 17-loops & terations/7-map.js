const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = nums.map((parameter) => parameter + 20);
console.log(newNums);
// output=> [21, 22, 23, 24, 25, 26, 27, 28, 29 ]
// parameter = value from array (ex. 1,2,3 etc)

/*
|
|
|
|
|
|
*/

//chaining
const numsTwo = nums
  .map((number) => number * 10) //multiplying each number with 10
  .map((number) => number + 1) // add 1 to the previous result
  .filter((number) => number >= 40); // filtering numbers greater than 40 from previous result

console.log(numsTwo);
//output => [ 41, 51, 61, 71, 81, 91 ]
