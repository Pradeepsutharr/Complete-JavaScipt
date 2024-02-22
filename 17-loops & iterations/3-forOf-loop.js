const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  console.log(num);
}

/*
|
|
|
|
|
|
*/

// const message = "good morning";
// for (const msg of message) {
//   console.log(`each char is ${msg}`);
// }

/*
|
|
|
|
|
|
*/

// //Map

// //get key
// const map = new Map();
// map.set("name", "pradeep");
// map.set("id", "777");
// map.set("age", "22");

// for (const key of map) {
//   console.log(key);
// }
// /*output=>
// [ 'name', 'pradeep' ]
// [ 'id', '777' ]
// [ 'age', '22' ]*/

/*
|
|
|
*/

// //get value and key
// const map = new Map();
// map.set("name", "pradeep");
// map.set("id", "777");
// map.set("age", "22");
// map.set("name", "pradeep"); //(duplicates not allowed in Map) this  will not add a new pair to the map, it will update the existing one

// for (const [key, value] of map) {
//   console.log(`key: ${key},value: ${value}`);
// }
// /* output=>
//  key: name,value: pradeep
// key: id,value: 777
// key: age,value: 22*/

/*
|
|
|
*/

// const myObj = {
//   name: "pradeep",
//   id: 777,
//   address: "ahmedabad",
//   age: 22,
// };

// for (const [key, value] of myObj) {
//   console.log(`key: ${key} value:${value}`); //output=> myObj is not iterable
// }

//for of loop doesnt work on abjects
