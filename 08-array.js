// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// // output→ [1, 2, 3, 4, 5]

// //checking index
// console.log(numbers[3]);
// // output=> 4

// numbers.push(7);
// console.log(numbers);
// //output=> [ 1, 2, 3, 4, 5, 7 ] added 7 in the last

// numbers.pop();
// console.log(numbers);
// //pop() method removes the last index

// numbers.unshift(9);
// console.log(numbers);
// //adding 9 in start   output=>  [9,1, 2, 3, 4, 5]

// numbers.shift();
// console.log(numbers);
// //removes first index  output=>  [1, 2, 3, 4, 5]

// console.log(numbers.includes(9));
// //returns true if number is present in array otherwise false

// let newArr = numbers.join();
// console.log(newArr);
// //converts an array into a string and returns it

// const myArr = new Array(1, 2, 3, 4, 5);
// console.log("a", myArr);
// //output=> [ 1, 2, 3, 4, 5 ]

//
//
//
//
//
//
//
//

// //----------slice---------

// let arraySlice = myArr.slice(1, 3);
// console.log(arraySlice); //output=> [ 2, 3 ]
// console.log("b", myArr);
// // slice() extracts a part of a string and returns the extracted part in a new string. (start posi., end posi. (end not included))

//
//
//
//
//
//

// //----------splice---------

// let arraySplice = myArr.splice(1, 3);
// console.log("c", myArr); //output=>  [ 1, 5 ]
// console.log(arraySplice); //output=>  [ 2, 3, 4 ]

//
//
//
//
//
//
//
//
//

// ---------merging arrays------------

// const marvel = ["thor", "ironman", "captain marvel"];
// const dc = ["superman", "flash", "batman"];

// // marvel.push(dc);
// // console.log(marvel);
// //output=> [ 'thor','ironman','captain marvel',[ 'superman', 'flash', 'batman' ]]
// //this method is adding DC as a single element in Marvel which is not the right way

// const all_heroes = marvel.concat(dc);
// console.log(all_heroes);
// //output=> [ 'thor', 'ironman', 'captain marvel', 'superman', 'flash', 'batman' ]
// // merge two arrays  using concat() it gives a new array in return

// const all_heroes_2 = [...marvel, ...dc];
// console.log(all_heroes_2);
// // this is the right way to merge two arrays using spread operator
// //output=> [ 'thor', 'ironman', 'captain marvel', 'superman', 'flash', 'batman' ]

//
//
//
//
//
//
//

// -------Nested Array---------

// const nestedArr = [1, 2, [3, 4], 5, [5, 6, 7, [8, 9]]];
// const nested_to_single_Arr = nestedArr.flat(2);
// console.log(nested_to_single_Arr);
// //output=> [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9 ]
// // flat () method removes one level of nesting from an array.
// //If you pass a parameter it will remove  that many levels of nesting. In our case we passed (2) so it removed only two

//
//
//
//
//
//
//
// checking Array
let str = "Pradeep";
console.log(Array.isArray(str));
//output=> false coz str is a string not array

// converting from others to Array
let convert_into_arr = Array.from(str);
console.log(convert_into_arr);
//output=> ['P', 'r', 'a','d', 'e', 'e','p' ]

console.log(Array.from({ name: "Pradeep" }));
//output=> []  empty array coz we have not provided any iterable object like key pair

//
//
//
//
//
//
//

//creating array from multiple variables

let score1 = 100;
let score2 = 200;
let score3 = 300;

const merge_variables_into_arr = Array.of(score1, score2, score3);
console.log(merge_variables_into_arr);
//output=> [100,200,300]

const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);
// output => 2;
