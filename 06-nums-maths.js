// const score = 100;
// console.log(score);
// //output=> 100

// const newScore = new Number(200);
// console.log(newScore);
// //output=> [Number:200]  specially telling that its a number

// console.log(newScore.toString().length);
// //this mwthod convert the number in string and getting length of provided string

// console.log(newScore.toFixed(2));
// //this methods defining the length of value after decimal

// const num2 = 123.893;
// console.log(num2.toPrecision(4));
// //output=> 123.8

// console.log(num2.toPrecision(5));
// //output=> 123.89

// console.log(num2.toPrecision(3));
// //output=> 124  it will round of the value coming after decimal

// const newNumber = 1000000;
// console.log(newNumber.toLocaleString());
// // output=> 1,000,000 this method gives the value in US Standards

// console.log(newNumber.toLocaleString("en-IN"));
// //output=> 10,00,000 this method gives the value in indian  standards

// //--------maths------
// console.log(Math.abs(-4));
// // converting any value into positive  output=> 4

// console.log(Math.round(4.6));
// // giving round of value  output=> 5

// console.log(Math.ceil(4.2));
// // giving round of but top side value   output=> 5

// console.log(Math.floor(4.9));
// // giving round of but bottom side value  output=> 4

// console.log(Math.min(4, 6, 8, 3));
// // giving min value

// console.log(Math.max(4, 6, 8, 3));
// //giving max value

// console.log(Math.random());
// // everytime gives a random number

// console.log(Math.random() * 10);
// // gives  a  random number between 0 and 10

// console.log(Math.random() * 10 + 1);
// //gives a random number between 1 to 11

// const min = 10;
// const max = 20;

// console.log(Math.random() * (max - min + 1));
// // gives a number betweeen min and max

console.log(Math.random() * (max - min + 1) + min);
// gives a number between min and max including both ends (higher than min and lower than max)
