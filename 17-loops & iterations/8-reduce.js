// acc= defualt value is 1, we changed its initial value to 0
// acc = acc+crval (acc+crval= result will be assigned in the acc each time)
// reduce (left to right)
// const myNums = [1, 2, 3, 4];

// const reduceMethod = myNums.reduce(function (acc, crval) {
//   console.log(`acc: ${acc} , crval: ${crval} = ${acc + crval}`);

//   return acc + crval;
// }, 0);
// console.log(reduceMethod); //output=> 10

//
//
//
//
//
//

// // using arrow function
// const reduceMethod_arrow_fnc = myNums.reduce((acc, crval) => acc + crval, 1);
// console.log(reduceMethod_arrow_fnc); //output=> 11

//
//
//
//
//
//
//

// //calculate cart total

//reduce()

const itemsInCartOne = [
  { itemName: "pen", itemPrice: "10" },
  { itemName: "book", itemPrice: "50" },
  { itemName: "earbuds", itemPrice: "100" },
  { itemName: "charger", itemPrice: "80" },
];

const cartOneTotal = itemsInCartOne.reduce(
  (acc, item) => acc + Number(item.itemPrice),
  0
);
//Number(item.itemPrice) = converting price from string to number
// item = each Object in the array
console.log(cartOneTotal); //output=> 240

//
//
//
//
//

// Reduce Right method
const itemsInCartTwo = [
  { itemName: "pen", itemPrice: "10" },
  { itemName: "book", itemPrice: "50" },
  { itemName: "earbuds", itemPrice: "100" },
  { itemName: "charger", itemPrice: "80" },
];

const cartTwoTotal = itemsInCartTwo.reduceRight(function (acc, item) {
  console.log(
    `acc: ${acc}, crval: ${item.itemPrice} = ${acc + Number(item.itemPrice)}`
  );

  return acc + Number(item.itemPrice);
}, 0);

//Number(item.itemPrice) = converting price from string to number
// item = each Object from the array

console.log(cartTwoTotal); //output=> 240

//
//
//
//
//
//

//REDUCE ()

// const newNums = [2, 4, 6, 8, 10].reduce(function (
//   accumulator,
//   currentValue,
//   index,
//   array
// ) {
//   console.log(
//     `${index}: acc:${accumulator} crval:${currentValue} = ${
//       accumulator + currentValue
//     }`
//   );
//   return accumulator + currentValue;
// },
// 0);
// console.log(newNums); //output=> 30

//
//
//
//
//

// //REDUCE RIGHT ()

// const newNums = [2, 4, 6, 8, 10].reduceRight(function (
//   accumulator,
//   currentValue,
//   index
// ) {
//   console.log(
//     `${index}: acc:${accumulator} crval:${currentValue} = ${
//       accumulator + currentValue
//     }`
//   );
//   return accumulator + currentValue;
// },
// 0);
// console.log(newNums); //output=> 30
