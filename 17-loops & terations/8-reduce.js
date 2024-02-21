// acc= defualt value is 1, we changed its initial value to 0
// acc = acc+crval (acc+crval= result will be assigned in the acc each time)

const myNums = [1, 2, 3, 4];

const reduceMethod = myNums.reduce(function (acc, crval) {
  console.log(`acc:${acc},crval:${crval} = ${acc + crval}`);
  /* output =>
  acc:0, crval:1 = 1
  acc:1, crval:2 = 3
  acc:3, crval:3 = 6
  acc:6, crval:4 = 10
  */

  return acc + crval;
}, 0);
console.log(reduceMethod); //output=> 10

//
//
//
//
//
//

// using arrow function
const reduceMethod_arrow_fnc = myNums.reduce((acc, crval) => acc + crval, 1);
console.log(reduceMethod_arrow_fnc); //output=> 11

//
//
//
//
//
//
//

//calculate cart total

const itemsInCart = [
  { itemName: "pen", itemPrice: "10" },
  { itemName: "book", itemPrice: "50" },
  { itemName: "earbuds", itemPrice: "100" },
  { itemName: "charger", itemPrice: "80" },
];

const cartTotal = itemsInCart.reduce(
  (acc, item) => acc + Number(item.itemPrice),
  0
);
//Number(item.itemPrice) = converting price from string to number
// item = each Object in the array
console.log(cartTotal); //output=> 240
