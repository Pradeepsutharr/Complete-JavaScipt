// -- Named Function --
function neeraj() {
  console.log("Javelin");
}
neeraj();

//
//
//
//
//

// -- Anonymous Function --
let athlete = function (person) {
  // console.log(`Run ${person}`);
  console.log("run", person);
};
athlete("Neeraj");

//
//
//
//
//

// --Arrow Functions--
let DiamondLeague = () => console.log("Eugene");
DiamondLeague();

//
//
//
//
//

// -- Immediately Invoked Function Expression --
(function () {
  let str = "Good Evening";
  console.log(str);
})();

//
//
//
//
//

// --Higher order function--
let ary = [4, 20, 22];
let newAry = ary.map((j) => j + 10);
console.log(newAry);

//
//
//
//
//

// --constructure Function--
function person(name, place) {
  this.name = name;
  this.place = place;
}

let user1 = new person("Pradeep", "India");

console.log(`Hello, this is ${user1.name},I am from ${user1.place}.`);

let calc = () => {
  const arr = [5, 4, 3, 2, 1].reduce((prev, cur) => prev + cur);
  // document.write(arr);
  console.log(arr);
};
calc();
