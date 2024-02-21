const coding = ["js", "python", "php", "c++"];

// coding.forEach(function (val) {
//   console.log(val);
// });

/*
|
|
|
|
|
*/

// coding.forEach((val) => {
//   console.log(val);
// });

/*
|
|
|
|
|
*/

// function printData(value) {
//   console.log(value);
// }
// coding.forEach(printData);

/*
|
|
|
|
|
*/

// coding.forEach((val, index, array) => {
//   console.log(val, index, array);
// });

/*
|
|
|
|
|
*/

const langauges = [
  {
    langName: "javaScript",
    fileName: "js",
  },
  {
    langName: "python",
    fileName: "py",
  },
  {
    langName: "java",
    fileName: "java",
  },
];

langauges.forEach((value) => {
  //   console.log(value.fileName);
  //   console.log(value.langName);
  console.log(`${value.fileName} for ${value.langName}`);
});
