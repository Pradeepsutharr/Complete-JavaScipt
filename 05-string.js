// // strings in old javaScript
// const name = "Pradeep";
// const age = 23;

// console.log(name + age + "years old");

//--------modern javaScript--------
// Backtick Templates (introduced in ES6)

// const user = "kinjal";
// const id = 23;

// // console.log(`hello my name is ${user} and my id is ${id}`);
// // //using ${} to inject a variable inside the string

// // //---------------type checking-----------------
// // //in this method we can directly use methods on the variables
// console.log(`hello my name is ${typeof user} and my id is ${id}`);

//another way to write a string
const gameName = "pubg";
// console.log(gameName);

// some string methods
// console.log(gameName.length); //output=> 8
// console.log(gameName.toUpperCase()); //output=> PUBG
// console.log(gameName.toLowerCase()); //output=> pubg
// console.log(gameName[2]); //output=> b

// console.log(gameName.indexOf("b")); //output=> 2
// console.log(gameName.charAt(0)); //output=> p

// length property will give us length of string index vise
//length will count empty space too

let name2 = "himanshu";
// console.log(name2.length); //output=> 8

let harsh = "    harshdeep   ";
// console.log(harsh.length); //output=> 16

let himu = "himanshukateliya";
// console.log(himu[himu.length - 1]);
// last index -1 = it will give you the last character of string
// -1 = last character, -2 = secondLast character

console.log(himu.at(-2)); //output=> y  The at() method returns an indexed element from a string: also gives nagetive index
console.log(himu[2]); //output=>m same as at() method

let frnds = "himu, aksh, vishal";
// console.log(frnds.slice(6, 10));
// slice() extracts a part of a string and returns the extracted part in a new string. (start posi., end posi. (end not included))

console.log(frnds.slice(6));
// If you omit the second parameter, the method will slice out the rest of the string:

console.log(frnds.slice(-12));
// Extract a part of a string counting from the end:

// let frnd = frnds.substring(6, 10);
// same as slice() The difference is that start and end values less than 0 are treated as 0 in substring().

// console.log(frnd);
// console.log(typeof frnd);
// console.log(frnds.substr(6, 4)); //same as slice() but The difference is that the second parameter specifies the length of the extracted part.

const kanha = "himanshu.kanuda";
// console.log(kanha.replace(".", "-"));
//replacing "." into "-"
