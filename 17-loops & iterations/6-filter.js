// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNums = nums.filter((num) => num > 5);
// console.log(newNums);
// //output=> [ 6, 7, 8, 9 ]

/*
|
|
|
|
*/

// const newNumsTwo = nums.filter((num) => {
//   return num > 4;
// });
// console.log(newNumsTwo);
// //output=> [ 5, 6, 7, 8, 9 ]
// // if we added curly brackets than we must have to write return

/*
|
|
|
|
*/

let books = [
  { title: "Book-1", Genre: "Science", Publish: 2003, Edition: 2014 },
  { title: "Book-2", Genre: "History", Publish: 2000, Edition: 2012 },
  { title: "Book-3", Genre: "Maths", Publish: 1998, Edition: 2018 },
  { title: "Book-4", Genre: "English", Publish: 1993, Edition: 2010 },
  { title: "Book-5", Genre: "Science", Publish: 2012, Edition: 2016 },
  { title: "Book-6", Genre: "History", Publish: 2004, Edition: 2013 },
  { title: "Book-7", Genre: "Hindi", Publish: 2000, Edition: 2015 },
  { title: "Book-8", Genre: "English", Publish: 2003, Edition: 2020 },
];

const NewBooks = books.filter((book) => book.Genre === "History");
console.log(NewBooks);
/* output=>
[ { title: 'Book-2', Genre: 'History', Publish: 2000, Edition: 2012 },
  { title: 'Book-6', Genre: 'History', Publish: 2004, Edition: 2013 } ]
*/

const oldBooks = books.filter((book) => book.Publish <= 2010);
// console.log(oldBooks);
/* output=>
[
  { title: 'Book-1', Genre: 'Science', Publish: 2003, Edition: 2014 },
  { title: 'Book-2', Genre: 'History', Publish: 2000, Edition: 2012 },
  { title: 'Book-3', Genre: 'Maths', Publish: 1998, Edition: 2018 },
  { title: 'Book-4', Genre: 'English', Publish: 1993, Edition: 2010 },
  { title: 'Book-6', Genre: 'History', Publish: 2004, Edition: 2013 },
  { title: 'Book-7', Genre: 'Hindi', Publish: 2000, Edition: 2015 },
  { title: 'Book-8', Genre: 'English', Publish: 2003, Edition: 2020 }
]
*/

const newEdition = books.filter((book) => book.Edition >= 2015);
// console.log(newEdition);
/* output=>
[
  { title: 'Book-3', Genre: 'Maths', Publish: 1998, Edition: 2018 },
  { title: 'Book-5', Genre: 'Science', Publish: 2012, Edition: 2016 },
  { title: 'Book-7', Genre: 'Hindi', Publish: 2000, Edition: 2015 },
  { title: 'Book-8', Genre: 'English', Publish: 2003, Edition: 2020 }
]
*/
